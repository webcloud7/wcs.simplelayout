<template>
  <div
    class="modal fade sl-base-modal"
    tabindex="-1"
    aria-labelledby="modal-title"
    aria-hidden="true"
    ref="sl-base-modal"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
      <div class="modal-content position-relative">
        <div class="modal-header">
          <h4 class="modal-title" id="modal-title">
            <slot name="title" />
          </h4>
          <div
            class="position-absolute top-50 start-50 modal-spinner"
            v-if="modalLoading"
          >
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div :class="`modal-body ${getLoadingClass}`"><slot name="body" /></div>
        <div class="modal-footer sl-base-modal-footer">
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
import { executeScriptElements, copyDataForSubmit } from "@/utils.js";

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
      bootstrap: null,
      modalLoading: false,
    };
  },
  mounted() {
    const modal = this.$refs["sl-base-modal"];
    this.modal = new window.bootstrap.Modal(modal, this.modalOptions);
  },
  methods: {
    async openModal(url, position) {
      this.modalLoading = true;
      try {
        const response = await this.axioshtml.get(url);
        this.position = position;
        this.replaceModalContent(response);
        this.handleFormButtons();
        this.modal.show();
      } catch (error) {
        this.sl.addErrorMessage(error);
      } finally {
        this.modalLoading = false;
      }
    },
    async openFormModal(url, position) {
      this.modalLoading = true;
      try {
        const response = await this.axioshtml.get(url);
        this.position = position;
        this.replaceModalContent(response);
        this.modal.show();
      } catch (error) {
        this.sl.addErrorMessage(error);
      } finally {
        this.modalLoading = false;
        this.handleFormButtons();
      }
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

      this.modalLoading = true;
      try {
        const response = await this.axioshtml.post(url, formData, {
          params: this.sl.params,
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
      } catch (error) {
        this.sl.addErrorMessage(error);
      } finally {
        this.modalLoading = false;
      }
    },
    replaceModalContent(response) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, "text/html");
      const body = this.modal._element.querySelector(".modal-body");
      const title = this.modal._element.querySelector(".modal-title");
      title.innerHTML = doc.querySelector("h1").innerHTML;
      doc.querySelector("h1").remove();

      while (parent.firstChild) {
        body.removeChild(parent.firstChild);
      }

      body.innerHTML = doc.getElementById("content").innerHTML;
      registry.scan(body);
      if (window.initReferenceWidget) {
        window.initReferenceWidget();
      }
      executeScriptElements(body);

      // hack for oderselect_input.js
      document
        .querySelectorAll(".ordered-selection-field")
        .forEach((element) => {
          const destination = element.querySelector("[id$='toDataContainer']");
          copyDataForSubmit(destination.id.replace("-toDataContainer", ""));
        });
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

      const footer = this.modal._element.querySelector(".sl-base-modal-footer");
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
    handleTinyMCE() {
      [
        ...this.modal._element.querySelectorAll(
          "textarea.pat-tinymce.richTextWidget"
        ),
      ].forEach((element) => {
        registry.tinymce.constructor.get(element.id).save();
      });
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
  },
  computed: {
    getLoadingClass() {
      return this.modalLoading ? "loading" : "";
    },
  },
};
</script>
<style lang="scss">
.sl-base-modal {
  z-index: 1051 !important;
}

.modal-spinner {
  z-index: 56;
}

.modal-body.loading {
  filter: blur(4px);
}
</style>
