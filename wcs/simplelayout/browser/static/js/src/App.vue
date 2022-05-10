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
            <template
              v-for="(blockUID, blockIndex) in column.items"
              :key="blockUID"
            >
              <div class="sl-block my-4" v-if="blockUID in sl.blocks">
                <BlockControls
                  :actions="actions"
                  :rowIndex="rowIndex"
                  :columnIndex="columnIndex"
                  :blockIndex="blockIndex"
                />
                <BlockRenderer :block="sl.blocks[blockUID]" />
              </div>
            </template>

            <div class="sl-block my-4" v-if="column.items.length === 0">
              <BlockControls
                :actions="actions"
                :rowIndex="rowIndex"
                :columnIndex="columnIndex"
                :blockIndex="-1"
              />
            </div>

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
  </div>
  <AddBlockModal ref="add-modal" />
  <EditBlockModal ref="edit-modal" />
</template>

<script>
import BlockRenderer from "@/components/BlockRenderer.vue";
import RowControls from "@/components/Controls/RowControls.vue";
import ColControls from "@/components/Controls/ColControls.vue";
import BlockControls from "@/components/Controls/BlockControls.vue";
import { useSimplelayoutStore } from "@/store.js";
import AddBlockModal from "@/components/Modals/AddBlockModal.vue";
import EditBlockModal from "@/components/Modals/EditBlockModal.vue";

export default {
  components: {
    BlockRenderer,
    RowControls,
    ColControls,
    AddBlockModal,
    BlockControls,
    EditBlockModal,
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
          enabled: () => true,
        },
        {
          label: "Edit",
          action: this.openEditBlocksModal,
          enabled: (rowIndex, columnIndex) => {
            return this.sl.layouts.items[rowIndex].items[columnIndex].items.length;
          },
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
    openEditBlocksModal(event) {
      this.$refs["edit-modal"].openEditBlockModal(event);
    },
  },
};
</script>
<style lang="scss">
#app {
  .sl-row {
    .row {
      border-top: 1px dashed #000000;
    }
    &:last-child .row {
      border-bottom: 1px dashed #000000;
    }
  }
  .sl-col {
    border-left: 1px dashed #000000;
    min-height: 100px;

    &:last-child {
      border-right: 1px dashed #000000;
    }
  }

  .sl-container {
    position: relative;
  }

  .sl-col {
    position: relative;
  }
  .sl-block {
    border: 1px dashed #000000;
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
