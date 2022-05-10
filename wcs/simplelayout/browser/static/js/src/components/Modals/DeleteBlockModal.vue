<template>
  <BaseModal :storeAction="storeAction" ref="modal" />
</template>
<script>
import BaseModal from "@/components/Modals/BaseModal.vue";
import { useSimplelayoutStore } from "@/store.js";
export default {
  name: "delete-modal",
  components: {
    BaseModal,
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  data() {
    return {
      deleteBlockModal: null,
    };
  },
  mounted() {
    this.deleteBlockModal = this.$refs["modal"].modal;
  },
  methods: {
    async openDeleteBlockModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };
      this.deleteBlockModal.hide();

      const url = `${this.getBlockURL(position)}/delete_confirmation`;
      this.$refs["modal"].openFormModal(url, position);
      this.deleteBlockModal.show();
    },

    getBlockURL(position) {
      const uid =
        this.sl.layouts.items[position.rowIndex].items[position.columnIndex]
          .items[position.blockIndex];
      return this.sl.blocks[uid]["@id"];
    },
    storeAction(position) {
      this.sl.deleteBlock(position);
    },
  },
};
</script>
