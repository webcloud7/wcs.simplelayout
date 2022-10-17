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
  props: {
    block: {
      type: Object,
      required: true,
    },
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
    async openEditImageModal(event) {
      const button = event.currentTarget;
      const imageURL = button.getAttribute("data-url");
      this.editImageModal.hide();

      const url = `${imageURL}/edit.json`;
      this.$refs["modal"].openFormModal(url, null);
      this.editImageModal.show();
    },

    getBlockURL(position) {
      const uid =
        this.sl.layouts.items[position.rowIndex].items[position.columnIndex]
          .items[position.blockIndex];
      return this.sl.blocks[uid]["@id"];
    },
    storeAction() {
      const newBlock = JSON.parse(JSON.stringify(this.block));
      // Set new modification date to trigger an update of the block
      newBlock.modified = new Date().toString();
      this.sl.modifyBlock(newBlock);
    },
  },
};
</script>
