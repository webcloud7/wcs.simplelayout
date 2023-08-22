import { defineStore } from "pinia";
import { row } from "@/template.js";

const portalURL = document.body.getAttribute("data-portal-url");
const baseURL = document.body.getAttribute("data-base-url");
const baseApiURL = baseURL.replace(portalURL, portalURL + "/++api++");

export const useSimplelayoutStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: "simplelayoutStore",
  state: () => ({
    layouts: { items: [row(1)] },
    blocks: {},
    addableTypes: [],
    loading: false,
    baseURL: baseURL,
    baseApiURL: baseApiURL,
    portalURL: portalURL,
    params: { expand: ["types", "actions"] },
    authToken: null,
    canModify: false,
    canEditColumns: false,
    canAddBlocks: false,
    contentTypeTitles: {},
    customTemplates: {},
    i18n: {},
    errors: [],
  }),
  getters: {},
  actions: {
    addErrorMessage(error) {
      console.info(error);
      this.errors.push({
        type: "error",
        title: "Error",
        text: "A error happend, please try again",
      });
    },
    deleteErrorMessage(index) {
      this.errors.splice(index, 1);
    },
    setI18nMessages(messages) {
      this.i18n = JSON.parse(messages);
    },
    setCustomTemplates(data) {
      this.customTemplates = JSON.parse(data);
    },
    getTranslation(message) {
      if (message in this.i18n) {
        return this.i18n[message];
      }
      return message;
    },

    setAuthenticatorToken(token) {
      this.authToken = token;
    },
    setCanModify(value) {
      if (value == "True") {
        this.canModify = true;
      } else {
        this.canModify = false;
        this.params = {};
      }
    },
    setCanEditColumns(value) {
      if (value == "True") {
        this.canEditColumns = true;
      } else {
        this.canEditColumns = false;
      }
    },
    setCanAddBlocks(value) {
      if (value == "True") {
        this.canAddBlocks = true;
      } else {
        this.canAddBlocks = false;
      }
    },

    async fetchContentTypeTitles() {
      const response = await this.axios.get(
        this.portalURL + "/++api++/@vocabularies/plone.app.vocabularies.PortalTypes?b_size=100"
      );
      response.data.items.forEach((item) => {
        this.contentTypeTitles[item.token] = item.title
          .replace(/(\[.+?\])/g, "")
          .trim();
      });
    },

    async fetchBlocks() {
      this.loading = true;
      try {
        const response = await this.axios.get(this.baseApiURL, {
          params: this.params,
        });
        this.blocks = response.data.slblocks;
        const layouts = response.data.slblocks_layout;
        if ("items" in layouts && layouts.items.length !== 0) {
          this.layouts = response.data.slblocks_layout;
        }
        this.addableTypes = response.data["@components"]["types"];
      } catch (error) {
        this.sl.addErrorMessage(error);
      } finally {
        this.loading = false;
      }
    },
    async modifyLayouts(data) {
      this.loading = true;
      try {
        // Zope 5.8.1 (Plone => 6.0.3) does not support PATCH + querystring anymore. Thus we send a additional request.
        // headers: {Prefer: "return=representation"} only solves half the problem
        await this.axios.patch(this.baseApiURL, data);
        const response = await this.axios.get(this.baseApiURL, {
          params: this.params,
        });
        this.blocks = response.data.slblocks;
        const layouts = response.data.slblocks_layout;
        if ("items" in layouts) {
          this.layouts = response.data.slblocks_layout;
        }
      } catch (error) {
        this.sl.addErrorMessage(error);
      } finally {
        this.loading = false;
        const SimplelayoutUpdateEvent = new Event("simplelayout-update");
        document.body
          .querySelector("#app.simplelayout-app")
          .dispatchEvent(SimplelayoutUpdateEvent);
      }
    },
    async addRowToLayout(row, index) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts.splice(index, 0, row);
      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async removeRowFromLayout(rowIndex, colIndex) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      const row = newLayouts[rowIndex].items;
      if (row.length === 1) {
        newLayouts.splice(rowIndex, 1);
      } else {
        const colWidth = 12 / (row.length - 1);
        row.splice(colIndex, 1);
        row.map((col) => (col.width = colWidth));
      }
      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async addColumnToRow(col, rowIndex, colIndex) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      let row = newLayouts[rowIndex].items;
      const colWidth = 12 / (row.length + 1);
      row.map((col) => (col.width = colWidth));
      col.width = colWidth;
      newLayouts[rowIndex].items.splice(colIndex, 0, col);

      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async addBlockToColumn(rowIndex, colIndex, blockIndex, uuid) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts[rowIndex].items[colIndex].items.splice(blockIndex, 0, uuid);
      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async setNewWidthOnColumn(rowIndex, colIndex, newWidth) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts[rowIndex].items[colIndex].width = newWidth;

      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async modifyBlock(data) {
      this.blocks[data.UID] = data;
      const SimplelayoutBlockUpdateEvent = new Event("simplelayout-block-update");
      document.body
        .querySelector("#app.simplelayout-app")
        .dispatchEvent(SimplelayoutBlockUpdateEvent);
    },
    async deleteBlock(position) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts[position.rowIndex].items[position.columnIndex].items.splice(
        position.blockIndex,
        1
      );
      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
  },
});
