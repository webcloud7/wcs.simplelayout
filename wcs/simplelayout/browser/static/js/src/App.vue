<template>
  <div class="sl-container">
    <template
      v-for="(row, rowIndex) in sl.layouts.items"
      :key="`layout_${rowIndex}`"
    >
      <div class="sl-row">
        <RowControls :index="rowIndex" />

        <div class="row">
          <div
            v-for="(column, columnIndex) in row.items"
            :key="`column_${columnIndex}_${rowIndex}`"
            :class="`sl-col col col-${column.width}`"
          >
            <ColControls
              :rowIndex="rowIndex"
              :colIndex="columnIndex"
              :currentWidth="parseInt(column.width)"
            />
            <template v-for="(blockUID, blockIndex) in column.items" :key="blockUID">
              <div class="sl-block" v-if="blockUID in sl.blocks">
                <BlockControls
                  :actions="actions"
                  :rowIndex="rowIndex"
                  :columnIndex="columnIndex"
                  :blockIndex="blockIndex + 1"
                />
                <BlockRenderer :block="sl.blocks[blockUID]" />
              </div>
            </template>

            <BlockControls
              v-if="column.items.length === 0"
              :actions="actions"
              :rowIndex="rowIndex"
              :columnIndex="columnIndex"
              :blockIndex="0"
            />

            <ColControls
              v-if="row.items.length === columnIndex + 1"
              :rowIndex="rowIndex"
              :colIndex="columnIndex + 1"
              right
            />
          </div>
        </div>
        <RowControls
          v-if="sl.layouts.items.length === rowIndex + 1"
          :index="rowIndex + 1"
        />
      </div>
    </template>
    <AddBlockModal ref="add-modal" />
  </div>
</template>

<script>
import BlockRenderer from "@/components/BlockRenderer.vue";
import RowControls from "@/components/Controls/RowControls.vue";
import ColControls from "@/components/Controls/ColControls.vue";
import BlockControls from "@/components/Controls/BlockControls.vue";
import { useSimplelayoutStore } from "@/store.js";
import AddBlockModal from "@/components/Modals/AddBlockModal.vue";

export default {
  components: {
    BlockRenderer,
    RowControls,
    ColControls,
    AddBlockModal,
    BlockControls,
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  data() {
    return {
      actions: [
        {
          label: "Add",
          action: this.openAddableBlocksModal,
        },
        {
          label: "Edit",
          action: "#",
        },
      ],
    };
  },
  created() {
    this.sl.fetchBlocks();
  },
  methods: {
    openAddableBlocksModal(event) {
      this.$refs["add-modal"].openAddableBlocksModal(event);
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
  }
  .sl-block {
    position: relative;
    min-height: 100px;
  }
}
.btn-xs {
  font-size: 12px;
  line-height: 1rem;
  padding: 0;
  height: 20px;
}
</style>
