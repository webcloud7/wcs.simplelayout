<template>
  <BaseModal :storeAction="storeAction" ref="modal" />
</template>
<script>
import BaseModal from "@/components/Modals/BaseModal.vue";
import { useSimplelayoutStore } from "@/store.js";
export default {
  name: "edit-row-modal",
  components: {
    BaseModal,
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  data() {
    return {
      editRowModal: null,
    };
  },
  mounted() {
    this.editRowModal = this.$refs["modal"].modal;
  },
  methods: {
    async openEditRowModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
      };
      this.editRowModal.hide();

      const url = `${this.sl.baseURL}/edit-row/${position.rowIndex}`;
      this.$refs["modal"].openFormModal(url, position);
      this.editRowModal.show();
    },

    getBlockURL(position) {
      const uid =
        this.sl.layouts.items[position.rowIndex].items[position.columnIndex]
          .items[position.blockIndex];
      return this.sl.blocks[uid]["@id"];
    },
    storeAction(position, data) {
      this.sl.modifyLayouts(data, true)
    },
  },
};
</script>
