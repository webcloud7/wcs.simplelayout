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
    <div
      class="modal fade"
      id="addable-blocks-modal"
      tabindex="-1"
      aria-labelledby="modal-title"
      aria-hidden="true"
      ref="addable-blocks-modal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-title">Addable Blocks</h5>
          </div>
          <div class="modal-body">Body</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockRenderer from "@/components/BlockRenderer.vue";
import RowControls from "@/components/Controls/RowControls.vue";
import ColControls from "@/components/Controls/ColControls.vue";
import { useSimplelayoutStore } from "@/store.js";

export default {
  components: {
    BlockRenderer,
    RowControls,
    ColControls,
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  data() {
    return {
      addableBlocksModal: null,
      addRow: null,
      addCol: null,
    };
  },
  created() {
    this.sl.fetchBlocks();
  },
  mounted() {
    const options = {};
    this.addableBlocksModal = new window.bootstrap.Modal(
      this.$refs["addable-blocks-modal"],
      options
    );
  },
  methods: {
    async openAddableBlocksModal(event) {
      const button = event.currentTarget;
      this.addRow = parseInt(button.getAttribute("data-row"));
      this.addCol = parseInt(button.getAttribute("data-col"));
      this.addableBlocksModal.hide();

      const url = `${this.sl.baseURL}/@@sl-addable-blocks`;
      const response = await this.axioshtml.get(url);
      this.replaceModalContent(response);

      const body =
        this.addableBlocksModal._element.querySelector(".modal-body");
      [...body.querySelectorAll("a")].forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.openAddFormModal(link.getAttribute("href"));
        });
      });
      this.addableBlocksModal.show();
    },
    async openAddFormModal(url) {
      const response = await this.axioshtml.get(url);
      console.info(response);
      this.replaceModalContent(response);
      this.handleFormButtons();
    },
    async handleSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      const form = this.addableBlocksModal._element.querySelector("#form");
      const url = form.getAttribute("action");
      const button = event.currentTarget;

      let formData = new FormData(form);
      formData.append(button.getAttribute("name"), button.value);
      const response = await this.axioshtml.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "text/html,application/json",
        },
      });
      if (response.headers["content-type"] === "application/json") {
        // successful added block
        const data = response.data;
        console.info(data["@id"], data["UID"]);
        console.info(this.addRow, this.addCol);
        this.sl.addBlockToColumn(this.addRow, this.addCol, data["UID"]);
        this.addableBlocksModal.hide();
      } else {
        // Any form validation error means we got html back
        this.replaceModalContent(response);
        this.handleFormButtons();
      }
    },
    replaceModalContent(response) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, "text/html");

      const body =
        this.addableBlocksModal._element.querySelector(".modal-body");
      const title =
        this.addableBlocksModal._element.querySelector(".modal-title");
      title.innerHTML = doc.querySelector("h1").innerHTML;
      body.innerHTML = doc.getElementById("content").innerHTML;
    },
    handleFormButtons() {
      const saveButton = this.addableBlocksModal._element.querySelector("#form-buttons-save");
      const cancelButton = this.addableBlocksModal._element.querySelector("#form-buttons-cancel");
      const form = this.addableBlocksModal._element.querySelector("#form");
      saveButton.addEventListener("click", this.handleSubmit);
      form.addEventListener("submit", this.handleSubmit);
      cancelButton.addEventListener("click", this.handleCancel);
    },
    handleCancel(event) {
      event.preventDefault();
      event.stopPropagation();
      this.addableBlocksModal.hide();
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
