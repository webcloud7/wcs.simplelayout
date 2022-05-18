<template>
  <BaseModal ref="modal">
    <template #title>Upload</template>
    <template #body>
      <div class="upload" ref="upload" />
    </template>
  </BaseModal>
</template>
<script>
import BaseModal from "@/components/Modals/BaseModal.vue";
import { useSimplelayoutStore } from "@/store.js";
export default {
  name: "upload-modal",
  components: {
    BaseModal,
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  data() {
    return {
      editBlockModal: null,
    };
  },
  mounted() {
    this.uploadBlockModal = this.$refs["modal"].modal;
  },
  methods: {
    async openUploadModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };
      const options = {
        url: `${this.getBlockURL(position)}/@@fileUpload`,
      };
      new window.__patternslib_registry.patterns.upload(
        this.$refs["upload"],
        options
      );
      this.$refs["modal"].handleFormButtons();
      this.uploadBlockModal.show();
    },

    getBlockURL(position) {
      const uid =
        this.sl.layouts.items[position.rowIndex].items[position.columnIndex]
          .items[position.blockIndex];
      return this.sl.blocks[uid]["@id"];
    },
  },
};
</script>
