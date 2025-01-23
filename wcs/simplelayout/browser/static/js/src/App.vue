<template>
  <ErrorToasts />
  <div :class="`sl-container ${draggingClass}`" ref="root">
    <div
      :class="`${loadingClass}`"
      v-for="(row, rowIndex) in sl.layouts.items"
      :key="`layout_${rowIndex}`"
    >
      <div class="sl-row">
        <RowControls
          :index="rowIndex"
          :openEditRowModal="openEditRowModal"
          v-if="sl.canModify && sl.canEditColumns"
        />

        <div class="row">
          <div
            v-for="(column, columnIndex) in row.items"
            :key="`column_${columnIndex}_${rowIndex}`"
            :class="`sl-col col col-${column.width}`"
          >
            <ColControls
              v-if="sl.canModify && sl.canEditColumns"
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
              v-if="
                row.items.length === columnIndex + 1 &&
                sl.canModify &&
                sl.canEditColumns
              "
              :rowIndex="rowIndex"
              :colIndex="columnIndex + 1"
              right
            />
          </div>
        </div>
        <RowControls
          v-if="
            sl.layouts.items.length === rowIndex + 1 &&
            sl.canModify &&
            sl.canEditColumns
          "
          :index="rowIndex + 1"
        />
      </div>
    </div>
    <div class="position-fixed top-50 start-50" v-if="sl.loading">
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>

  <AddBlockModal ref="add-modal" />
  <EditBlockModal ref="edit-modal" />
  <DeleteBlockModal ref="delete-modal" />
  <InfoBlockModal ref="info-modal" />
  <UploadModal ref="upload-modal" />
  <EditRowModal ref="edit-row-modal" />
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
import EditRowModal from "@/components/Modals/EditRowModal.vue";
import draggable from "vuedraggable";
import ErrorToasts from "@/components/ErrorToasts.vue";

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
    EditRowModal,
    draggable,
    ErrorToasts,
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
          enabled: () => {
            const addable = this.sl.addableTypes.filter((item) => item.addable);
            return this.sl.canAddBlocks && addable.length;
          },
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
          label: "Crop",
          action: this.gotoEndpoint("@@croppingeditor"),
          enabled: (rowIndex, columnIndex, blockIndex) => {
            const hasBlock =
              this.sl.layouts.items[rowIndex].items[columnIndex].items.length;
            if (!hasBlock) {
              return false;
            }

            const uid =
              this.sl.layouts.items[rowIndex].items[columnIndex].items[
                blockIndex
              ];

            const actionIds = this.sl.blocks[uid]["@components"]["actions"][
              "object"
            ].map((item) => item.id);
            const croppable = actionIds.indexOf("cropping") != -1;
            return croppable;
          },
        },
        {
          label: "Delete",
          action: this.openDeleteBlocksModal,
          enabled: (rowIndex, columnIndex, blockIndex) => {
            const hasBlock =
              this.sl.layouts.items[rowIndex].items[columnIndex].items.length;
            if (!hasBlock) {
              return false;
            }

            const uid =
              this.sl.layouts.items[rowIndex].items[columnIndex].items[
                blockIndex
              ];

            const actionIds = this.sl.blocks[uid]["@components"]["actions"][
              "object_buttons"
            ].map((item) => item.id);
            const deletable = actionIds.indexOf("delete") != -1;
            return deletable;
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
          label: "Contents (Listing)",
          action: this.gotoEndpoint("folder_contents"),
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
    this.sl.setCanEditColumns(
      this.$refs.root.parentElement.getAttribute("data-can-edit-columns")
    );
    this.sl.setCanEditRowData(
      this.$refs.root.parentElement.getAttribute("data-can-edit-row-data")
    );
    this.sl.setCanAddBlocks(
      this.$refs.root.parentElement.getAttribute("data-can-addblocks")
    );
    this.sl.setI18nMessages(
      this.$refs.root.parentElement.getAttribute("data-i18n")
    );
    this.sl.setCustomTemplates(
      this.$refs.root.parentElement.getAttribute("data-custom-templates")
    );
    this.sl.fetchContentTypeTitles();
    this.sl.fetchWorkflowTitles();
    this.sl.fetchBlocks();
  },
  computed: {
    draggingClass() {
      return this.dragging ? "sl-dragging" : "";
    },
    loadingClass() {
      return this.sl.loading ? "sl-loading" : "";
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
    openEditRowModal(event) {
      this.$refs["edit-row-modal"].openEditRowModal(event);
    },
    gotoEndpoint(endpoint) {
      return (event) => {
        const button = event.currentTarget;
        const rowIndex = parseInt(button.getAttribute("data-row"));
        const columnIndex = parseInt(button.getAttribute("data-col"));
        const blockIndex = parseInt(button.getAttribute("data-block"));
        const uid =
          this.sl.layouts.items[rowIndex].items[columnIndex].items[blockIndex];
        window.open(this.sl.blocks[uid]["@id"] + "/" + endpoint, "_self");
      }
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

.sl-loading {
  filter: blur(4px);
}
</style>
