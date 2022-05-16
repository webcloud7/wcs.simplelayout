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
          <h4 class="modal-title" id="modal-title"></h4>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer"></div>
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
    const options = {
      backdrop: "static",
      keyboard: false,
      focus: false,
    };
    const modal = this.$refs["sl-base-modal"];
    this.modal = new window.bootstrap.Modal(modal, options);
  },
  methods: {
    async openFormModal(url, position) {
      const response = await this.axioshtml.get(url);
      this.position = position;
      this.replaceModalContent(response);
      this.handleFormButtons();
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
      window.__patternslib_registry.scan(body);
    },
    handleFormButtons() {
      const form = this.modal._element.querySelector("#form");
      const saveButton = form.querySelector("#form-buttons-save");
      const deleteButton = form.querySelector("#form-buttons-Delete");
      const cancelButton =
        form.querySelector("#form-buttons-cancel") ||
        form.querySelector("#form-buttons-Cancel");
      const submitButton = saveButton || deleteButton;

      submitButton.addEventListener("click", this.handleSubmit);
      form.addEventListener("submit", this.handleSubmit);
      cancelButton.addEventListener("click", this.handleCancel);

      const footer = this.modal._element.querySelector(".modal-footer");
      while (footer.firstChild) {
        footer.removeChild(footer.firstChild);
      }
      footer.appendChild(submitButton);
      footer.appendChild(cancelButton);
    },
    handleCancel(event) {
      event.preventDefault();
      event.stopPropagation();
      this.cleanBody();
      this.modal.hide();
    },
    cleanBody() {
      const body = this.modal._element.querySelector(".modal-body");
      while (body.firstChild) {
        body.removeChild(body.firstChild);
      }
    },
    handleTinyMCE() {
      [...this.modal._element.querySelectorAll("textarea")].forEach((element) => {
        tinyMCE.get(element.id).save();
      });
    },
  },
};
</script>
<style lang="scss">
.sl-base-modal {
  z-index: 1051 !important;
}
</style>
