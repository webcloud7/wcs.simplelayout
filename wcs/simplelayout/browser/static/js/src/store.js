import { defineStore } from "pinia";
import { row } from "@/template.js";

export const useSimplelayoutStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: "simplelayoutStore",
  state: () => ({
    layouts: { items: [row(1)] },
    blocks: {},
    loading: false,
    baseURL: document.body.getAttribute("data-base-url"),
    baseApiURL: document.body.getAttribute("data-base-url") + "/++api++",
    portalURL: document.body.getAttribute("data-portal-url"),
    params: { expand: "types" },
    authToken: null,
    canModify: false,
  }),
  getters: {},
  actions: {
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
    async fetchBlocks() {
      this.loading = true;
      try {
        const response = await this.axios.get(this.baseApiURL, { params: this.params });
        this.blocks = response.data.slblocks;
        const layouts = response.data.slblocks_layout;
        if ("items" in layouts && layouts.items.length !== 0) {
          this.layouts = response.data.slblocks_layout;
        }
      } catch (error) {
        console.info(error);
      } finally {
        this.loading = false;
      }
    },
    async modifyLayouts(data) {
      this.loading = true;
      try {
        const response = await this.axios.patch(this.baseApiURL, data, { params: this.params });
        this.blocks = response.data.slblocks;
        const layouts = response.data.slblocks_layout;
        if ("items" in layouts) {
          this.layouts = response.data.slblocks_layout;
        }
      } catch (error) {
        console.info(error);
      } finally {
        this.loading = false;
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
