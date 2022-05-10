<template>
  <div
    class="modal fade"
    id="sl-base-modal"
    tabindex="-1"
    aria-labelledby="modal-title"
    aria-hidden="true"
    ref="sl-base-modal"
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
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";
export default {
  name: "base-modal",
  props: {
    storeAction: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  data() {
    return {
      modal: null,
      position: {},
    };
  },
  mounted() {
    const options = {};
    const modal = this.$refs["sl-base-modal"];
    this.modal = new window.bootstrap.Modal(modal, options);
  },
  methods: {
    async openFormModal(url, position) {
      const response = await this.axioshtml.get(url);
      this.position = position;
      console.info(response);
      this.replaceModalContent(response);
      this.handleFormButtons();
    },
    async handleSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      const form = this.modal._element.querySelector("#form");
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
        // successful request
        const data = response.data;
        console.info(data["@id"], data["UID"]);
        console.info(this.rowIndex, this.columnIndex);
        this.storeAction(this.position, data);
        this.modal.hide();
      } else {
        // Any form validation error means we got html back
        this.replaceModalContent(response);
        this.handleFormButtons();
      }
    },
    replaceModalContent(response) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, "text/html");

      const body = this.modal._element.querySelector(".modal-body");
      const title = this.modal._element.querySelector(".modal-title");
      title.innerHTML = doc.querySelector("h1").innerHTML;
      body.innerHTML = doc.getElementById("content").innerHTML;
    },
    handleFormButtons() {
      const saveButton =
        this.modal._element.querySelector("#form-buttons-save");
      const cancelButton = this.modal._element.querySelector(
        "#form-buttons-cancel"
      );
      const form = this.modal._element.querySelector("#form");
      saveButton.addEventListener("click", this.handleSubmit);
      form.addEventListener("submit", this.handleSubmit);
      cancelButton.addEventListener("click", this.handleCancel);
    },
    handleCancel(event) {
      event.preventDefault();
      event.stopPropagation();
      this.modal.hide();
    },
  },
};
</script>
