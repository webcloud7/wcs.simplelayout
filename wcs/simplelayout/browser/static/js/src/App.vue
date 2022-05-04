<template>
  <div class="sl-container">
    <template
      v-for="(row, rowIndex) in layouts.items"
      :key="`layout_${rowIndex}`"
    >
      <div class="sl-row">
        <RowControls @addrow="addRowToLayout" :index="rowIndex" />

        <div class="row">
          <div
            v-for="(column, columnIndex) in row.items"
            :key="`column_${columnIndex}_${rowIndex}`"
            :class="`sl-col col col-${column.width}`"
          >
            <ColControls
              @addcol="addColumnToRow"
              @removecol="removeRowFromLayout"
              @newwidth="setNewWidthOnColumn"
              :rowIndex="rowIndex"
              :colIndex="columnIndex"
              :currentWidth="parseInt(column.width)"
            />
            <template v-for="blockUID in column.items" :key="blockUID">
              <BlockRenderer
                v-if="blockUID in slblocks"
                :block="slblocks[blockUID]"
              />
            </template>
            {{ columnIndex }}<br>
            <ColControls
              v-if="row.items.length === columnIndex + 1"
              @addcol="addColumnToRow"
              :rowIndex="rowIndex"
              :colIndex="columnIndex + 1"
              right
            />
          </div>
        </div>
        <RowControls
          v-if="layouts.items.length === rowIndex + 1"
          @addrow="addRowToLayout"
          :index="rowIndex + 1"
        />
      </div>
    </template>
  </div>
</template>

<script>
import BlockRenderer from "@/components/BlockRenderer.vue";
import RowControls from "@/components/Controls/RowControls.vue";
import ColControls from "@/components/Controls/ColControls.vue";
export default {
  components: {
    BlockRenderer,
    RowControls,
    ColControls,
  },
  data() {
    return {
      baseURL: "",
      slblocks: {},
      layouts: {},
    };
  },
  created() {
    this.baseURL = document.body.getAttribute("data-base-url");
    this.fetchBlocks();
  },
  methods: {
    addRowToLayout(row, index) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts.splice(index, 0, row);
      // this.layouts = Object.assign({}, { items: newLayouts });
      this.layouts.items = newLayouts;
    },
    removeRowFromLayout(rowIndex, colIndex) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      const row = newLayouts[rowIndex].items;
      if (row.length === 1) {
        newLayouts.splice(rowIndex, 1);
      } else {
        const colWidth = 12 / (row.length - 1);
        row.splice(colIndex, 1);
        row.map((col) => (col.width = colWidth));
      }
      this.layouts.items = newLayouts;
    },
    addColumnToRow(col, rowIndex, colIndex) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      let row = newLayouts[rowIndex].items;
      const colWidth = 12 / (row.length + 1);
      row.map((col) => (col.width = colWidth));
      col.width = colWidth;
      newLayouts[rowIndex].items.splice(colIndex, 0, col);
      this.layouts.items = newLayouts;
    },
    setNewWidthOnColumn(rowIndex, colIndex, newWidth) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts[rowIndex].items[colIndex].width = newWidth;
      this.layouts.items = newLayouts;
    },
    async fetchBlocks() {
      const response = await this.axios.get(this.baseURL);
      console.info(response);
      this.slblocks = response.data.slblocks;

      const layouts = response.data.slblocks_layout;
      if ("items" in layouts) {
        this.layouts = response.data.slblocks_layout;
      }
    },
  },
};
</script>
<style lang="scss">
#app {
  .col {
    border: 1px dotted #000000;
    min-height: 100px;
  }

  .sl-container {
    position: relative;
  }

  .sl-col {
    position: relative;
    text-align: center;
  }
}
</style>
