import { defineStore } from "pinia";

export const useSimplelayoutStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: "simplelayoutStore",
  state: () => ({
    layouts: { items: [] },
    blocks: {},
    loading: false,
    baseURL: document.body.getAttribute("data-base-url"),
  }),
  getters: {},
  actions: {
    async fetchBlocks() {
      this.loading = true;
      try {
        const response = await this.axios.get(this.baseURL);
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
    async modifyLayouts(data) {
      this.loading = true;
      try {
        const response = await this.axios.patch(this.baseURL, data);
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
    async addBlockToColumn(rowIndex, colIndex, uuid) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts[rowIndex].items[colIndex].items.push(uuid);
      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async setNewWidthOnColumn(rowIndex, colIndex, newWidth) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts[rowIndex].items[colIndex].width = newWidth;

      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
  },
});
