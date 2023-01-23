<template>
  <BaseModal :storeAction="storeAction" ref="modal" />
</template>
<script>
import BaseModal from "@/components/Modals/BaseModal.vue";
import { useSimplelayoutStore } from "@/store.js";
export default {
  name: "edit-modal",
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
    this.editBlockModal = this.$refs["modal"].modal;
  },
  methods: {
    async openEditBlockModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };
      this.editBlockModal.hide();

      const url = `${this.getBlockURL(position)}/editblock`;
      this.$refs["modal"].openFormModal(url, position);
      this.editBlockModal.show();
    },

    getBlockURL(position) {
      const uid =
        this.sl.layouts.items[position.rowIndex].items[position.columnIndex]
          .items[position.blockIndex];
      return this.sl.blocks[uid]["@id"];
    },
    storeAction(position, data) {
      this.sl.modifyBlock(data);
    },
  },
};
</script>
