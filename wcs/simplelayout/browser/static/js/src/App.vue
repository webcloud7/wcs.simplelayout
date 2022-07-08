<template>
  <div :class="`sl-container ${draggingClass}`" ref="root">
    <template
      v-for="(row, rowIndex) in sl.layouts.items"
      :key="`layout_${rowIndex}`"
    >
      <div class="sl-row">
        <RowControls :index="rowIndex" v-if="sl.canModify" />

        <div class="row">
          <div
            v-for="(column, columnIndex) in row.items"
            :key="`column_${columnIndex}_${rowIndex}`"
            :class="`sl-col col col-${column.width}`"
          >
            <ColControls
              v-if="sl.canModify"
              :rowIndex="rowIndex"
              :colIndex="columnIndex"
              :currentWidth="parseInt(column.width)"
            />

            <draggable
              v-bind="dragOptions"
              :list="column.items"
              :itemKey="(item) => element"
              @end="saveLayout"
              @start="startDraggingBlock"
            >
              <template #item="{ element, index }">
                <div class="sl-block" v-if="element in sl.blocks">
                  <BlockRenderer
                    :actions="actions"
                    :block="sl.blocks[element]"
                    :rowIndex="rowIndex"
                    :columnIndex="columnIndex"
                    :blockIndex="index"
                  />
                </div>
              </template>

              <template #footer>
                <div
                  class="sl-block sl-block-placeholder"
                  v-if="column.items.length === 0"
                >
                  <BlockRenderer
                    :actions="actions"
                    :block="{}"
                    :rowIndex="rowIndex"
                    :columnIndex="columnIndex"
                    :blockIndex="-1"
                  />
                </div>
              </template>
            </draggable>

            <ColControls
              v-if="row.items.length === columnIndex + 1 && sl.canModify"
              :rowIndex="rowIndex"
              :colIndex="columnIndex + 1"
              right
            />
          </div>
        </div>
        <RowControls
          v-if="sl.layouts.items.length === rowIndex + 1 && sl.canModify"
          :index="rowIndex + 1"
        />
      </div>
    </template>
  </div>
  <AddBlockModal ref="add-modal" />
  <EditBlockModal ref="edit-modal" />
  <DeleteBlockModal ref="delete-modal" />
  <InfoBlockModal ref="info-modal" />
  <UploadModal ref="upload-modal" />
</template>

<script>
import BlockRenderer from "@/components/BlockRenderer.vue";
import RowControls from "@/components/Controls/RowControls.vue";
import ColControls from "@/components/Controls/ColControls.vue";
import { useSimplelayoutStore } from "@/store.js";
import AddBlockModal from "@/components/Modals/AddBlockModal.vue";
import EditBlockModal from "@/components/Modals/EditBlockModal.vue";
import DeleteBlockModal from "@/components/Modals/DeleteBlockModal.vue";
import InfoBlockModal from "@/components/Modals/InfoBlockModal.vue";
import UploadModal from "@/components/Modals/UploadModal.vue";
import draggable from "vuedraggable";

export default {
  components: {
    BlockRenderer,
    RowControls,
    ColControls,
    AddBlockModal,
    EditBlockModal,
    DeleteBlockModal,
    InfoBlockModal,
    UploadModal,
    draggable,
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  data() {
    return {
      dragging: false,
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
            return this.sl.layouts.items[rowIndex].items[columnIndex].items
              .length;
          },
        },
        {
          label: "Delete",
          action: this.openDeleteBlocksModal,
          enabled: (rowIndex, columnIndex) => {
            return this.sl.layouts.items[rowIndex].items[columnIndex].items
              .length;
          },
        },
        {
          label: "Upload",
          action: this.openUploadModal,
          enabled: (rowIndex, columnIndex, blockIndex) => {
            const uid =
              this.sl.layouts.items[rowIndex].items[columnIndex].items[
                blockIndex
              ];

            if (!uid) {
              return false;
            }

            const addable = this.sl.blocks[uid]["@components"]["types"].filter(
              (item) => item.addable
            );
            return addable.length;
          },
        },
        {
          label: "Information",
          action: this.openInfoBlockModal,
          enabled: (rowIndex, columnIndex) => {
            return this.sl.layouts.items[rowIndex].items[columnIndex].items
              .length;
          },
        },
        {
          label: "Contens (Listing)",
          action: this.gotoFolderContents,
          enabled: (rowIndex, columnIndex, blockIndex) => {
            const uid =
              this.sl.layouts.items[rowIndex].items[columnIndex].items[
                blockIndex
              ];

            if (!uid) {
              return false;
            }

            const addable = this.sl.blocks[uid]["@components"]["types"].filter(
              (item) => item.addable
            );
            return addable.length;
          },
        },
      ],
    };
  },
  mounted() {
    this.sl.setAuthenticatorToken(
      this.$refs.root.parentElement.getAttribute("data-token")
    );
    this.sl.setCanModify(
      this.$refs.root.parentElement.getAttribute("data-can-modify")
    );
    this.sl.fetchBlocks();
  },
  computed: {
    draggingClass() {
      return this.dragging ? "sl-dragging" : "";
    },
    dragOptions() {
      return {
        animation: 200,
        disabled: false,
        class: "sl-draggable-container",
        group: "blocks",
        handle: ".sl-handle",
        ghostClass: "ghost-sl-block",
        // forceFallback: true,
        // fallbackClass: "sl-block-dragging",
      };
    },
  },
  methods: {
    openAddableBlocksModal(event) {
      this.$refs["add-modal"].openAddableBlocksModal(event);
    },
    openEditBlocksModal(event) {
      this.$refs["edit-modal"].openEditBlockModal(event);
    },
    openDeleteBlocksModal(event) {
      this.$refs["delete-modal"].openDeleteBlockModal(event);
    },
    openInfoBlockModal(event) {
      this.$refs["info-modal"].openInfoBlockModal(event);
    },
    openUploadModal(event) {
      this.$refs["upload-modal"].openUploadModal(event);
    },
    gotoFolderContents(event) {
      const button = event.currentTarget;
      const rowIndex = parseInt(button.getAttribute("data-row"));
      const columnIndex = parseInt(button.getAttribute("data-col"));
      const blockIndex = parseInt(button.getAttribute("data-block"));
      const uid =
        this.sl.layouts.items[rowIndex].items[columnIndex].items[blockIndex];
      window.open(this.sl.blocks[uid]["@id"] + "/folder_contents", "_self");
    },
    saveLayout: function () {
      this.sl.modifyLayouts({
        slblocks_layout: { items: this.sl.layouts.items },
      });
      this.dragging = false;
    },
    startDraggingBlock() {
      this.dragging = true;
    },
  },
};
</script>
<style lang="scss">
#app {
  .sl-row {
  }
  .sl-col {
    border: 1px dashed #000000;
    min-height: 100px;
  }

  .sl-container {
    position: relative;
  }

  .sl-col {
    position: relative;
  }
  .sl-block {
    margin: 20px 0;
    position: relative;
    min-height: 100px;
    &:hover {
      box-shadow: 0 0 2px 1px #000000;
    }
  }
}
.btn-xs {
  font-size: 12px;
  line-height: 1rem;
  padding: 0;
  height: 20px;
}

.ghost-sl-block {
  opacity: 0.5;
  height: 100px;
}

.sl-draggable-container {
  height: 100%;
}

.sl-block-dragging {
  width: 100px !important;
  height: 100px !important;
  background-color: grey;
  display: block;
  border: 1px solid black;
  > * {
    display: none;
  }
}

#app .sl-container.sl-dragging {
  .sl-block {
    box-shadow: 0 0 2px 1px #000000;
    &.sl-block-placeholder {
      display: none;
    }
  }
  .sl-col {
    min-height: 140px;
  }
}
</style>
