<template>
  <BaseModal :storeAction="storeAction" ref="modal" />
</template>
<script>
import BaseModal from "@/components/Modals/BaseModal.vue";
import { useSimplelayoutStore } from "@/store.js";

export default {
  name: "edit-image-modal",
  components: {
    BaseModal,
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  data() {
    return {
      editImageModal: null,
    };
  },
  mounted() {
    this.editImageModal = this.$refs["modal"].modal;
  },
  methods: {
    async openEditImageModal(event, endpoint) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };

      const imageURL = button.getAttribute("data-url");
      const url = `${imageURL}/${endpoint}`;
      await this.$refs["modal"].openFormModal(url, position);
    },

    storeAction(position, data) {
      const uid =
        this.sl.layouts.items[position.rowIndex].items[position.columnIndex]
          .items[position.blockIndex];
      const block = this.sl.blocks[uid];
      block.modified = new Date().toString();
      this.sl.modifyBlock(data);
    },
  },
};
</script>
