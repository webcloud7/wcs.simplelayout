<template>
  <BaseModal :modalOptions="options" ref="modal" />
</template>
<script>
import BaseModal from "@/components/Modals/BaseModal.vue";
import { useSimplelayoutStore } from "@/store.js";
export default {
  name: "info-modal",
  components: {
    BaseModal,
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  data() {
    return {
      infoBlockModal: null,
      options: {
        backdrop: true,
        keyboard: false,
        focus: false,
      },
    };
  },
  mounted() {
    this.infoBlockModal = this.$refs["modal"].modal;
  },
  methods: {
    async openInfoBlockModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };
      this.infoBlockModal.hide();

      const url = `${this.getBlockURL(position)}`;
      this.$refs["modal"].openModal(url);
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
