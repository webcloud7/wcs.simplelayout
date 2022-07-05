<template>
  <div
    class="modal fade sl-base-modal"
    tabindex="-1"
    aria-labelledby="modal-title"
    aria-hidden="true"
    ref="sl-base-modal"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="modal-title">
            <slot name="title" />
          </h4>
        </div>
        <div class="modal-body"><slot name="body" /></div>
        <div class="modal-footer">
          <button
            id="form-buttons-cancel"
            name="form.buttons.cancel"
            class="btn btn-secondary standalone"
            value="Cancel"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";
import registry from "@patternslib/patternslib/src/core/registry";
import $ from "jquery";

export default {
  name: "base-modal",
  props: {
    cleanUpBody: {
      type: Boolean,
      required: false,
      default: () => true,
    },
    storeAction: {
      type: Function,
      required: false,
      default: () => () => null,
    },
    modalOptions: {
      type: Object,
      required: false,
      default() {
        return {
          backdrop: "static",
          keyboard: false,
          focus: false,
        };
      },
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
    const modal = this.$refs["sl-base-modal"];
    this.modal = new $.fn.modal.Constructor(modal, this.modalOptions);
  },
  methods: {
    async openModal(url, position) {
      const response = await this.axioshtml.get(url);
      this.position = position;
      this.replaceModalContent(response);
      this.handleFormButtons();
      this.modal.show();
    },
    async openFormModal(url, position) {
      const response = await this.axioshtml.get(url);
      this.position = position;
      this.replaceModalContent(response);
      this.handleFormButtons();
      window.initReferenceWidget();
      this.modal.show();
    },
    async handleSubmit(event) {
      event.preventDefault();

      this.handleTinyMCE();
      const form = this.modal._element.querySelector("#form");
      const url = form.getAttribute("action");
      const button = event.currentTarget;

      let formData = new FormData(form);
      formData.append(button.getAttribute("name"), button.value);
      formData.append("expand", "types");
      const response = await this.axioshtml.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "text/html,application/json",
        },
      });
      const isJson = response.headers["content-type"] === "application/json";
      const is204 = response.status === 204;
      if (isJson || is204) {
        // successful request
        const data = response.data;
        this.storeAction(this.position, data);
        this.cleanBody();
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
      doc.querySelector("h1").remove();
      body.innerHTML = doc.getElementById("content").innerHTML;
      registry.scan(body);
    },
    handleFormButtons() {
      const form = this.modal._element.querySelector("#form");
      let cancelButton = null;
      let submitButton = null;
      if (form) {
        const saveButton = form.querySelector("#form-buttons-save");
        const deleteButton = form.querySelector("#form-buttons-Delete");
        cancelButton =
          form.querySelector("#form-buttons-cancel") ||
          form.querySelector("#form-buttons-Cancel");
        submitButton = saveButton || deleteButton;

        submitButton.addEventListener("click", this.handleSubmit);
        form.addEventListener("submit", this.handleSubmit);
      } else {
        cancelButton = this.modal._element.querySelector(
          "#form-buttons-cancel"
        );
      }

      cancelButton.addEventListener("click", this.handleCancel);

      const footer = this.modal._element.querySelector(".modal-footer");
      while (footer.firstChild) {
        footer.removeChild(footer.firstChild);
      }
      if (submitButton) {
        footer.appendChild(submitButton);
      }
      footer.appendChild(cancelButton);
    },
    handleCancel(event) {
      event.preventDefault();
      event.stopPropagation();
      this.cleanBody();
      this.modal.hide();
    },
    cleanBody() {
      if (!this.cleanUpBody) {
        return;
      }
      const body = this.modal._element.querySelector(".modal-body");
      while (body.firstChild) {
        body.removeChild(body.firstChild);
      }
    },
    handleTinyMCE() {
      [...this.modal._element.querySelectorAll("textarea")].forEach(
        (element) => {
          tinyMCE.get(element.id).save();
        }
      );
    },
  },
};
</script>
<style lang="scss">
.sl-base-modal {
  z-index: 1051 !important;
}
</style>
