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
            <div>
              <button
                @click.stop.prevent="openAddableBlocksModal"
                :data-row="rowIndex"
                :data-col="columnIndex"
              >
                Overlay
              </button>
            </div>
            <template v-for="blockUID in column.items" :key="blockUID">
              <BlockRenderer
                v-if="blockUID in sl.blocks"
                :block="sl.blocks[blockUID]"
              />
            </template>

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
import { useSimplelayoutStore } from "@/store.js";
import AddBlockModal from "@/components/Modals/AddBlockModal.vue";

export default {
  components: {
    BlockRenderer,
    RowControls,
    ColControls,
    AddBlockModal,
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
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
    text-align: center;
  }
}
</style>
