<template>
  <BaseModal ref="modal" />
</template>
<script>
import BaseModal from "@/components/Modals/BaseModal.vue";
import { useSimplelayoutStore } from "@/store.js";
export default {
  name: "add-modal",
  components: {
    BaseModal,
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
  mounted() {
    const options = {};
    const modal = this.$refs["modal"].$refs["sl-base-modal"];
    this.addableBlocksModal = new window.bootstrap.Modal(modal, options);
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
      const saveButton =
        this.addableBlocksModal._element.querySelector("#form-buttons-save");
      const cancelButton = this.addableBlocksModal._element.querySelector(
        "#form-buttons-cancel"
      );
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
