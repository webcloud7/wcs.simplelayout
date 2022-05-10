<template>
  <BaseModal :storeAction="storeAction" ref="modal" />
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
    };
  },
  mounted() {
    this.addableBlocksModal = this.$refs["modal"].modal;
  },
  methods: {
    async openAddableBlocksModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };
      this.addableBlocksModal.hide();

      const url = `${this.sl.baseURL}/@@sl-addable-blocks`;
      const response = await this.axioshtml.get(url);
      this.$refs["modal"].replaceModalContent(response);

      const body =
        this.addableBlocksModal._element.querySelector(".modal-body");
      [...body.querySelectorAll("a")].forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.$refs["modal"].openFormModal(link.getAttribute("href"), position);
        });
      });
      this.addableBlocksModal.show();
    },
    storeAction(position, data){
      this.sl.addBlockToColumn(
        position.rowIndex,
        position.columnIndex,
        position.blockIndex + 1, // Always add block after the current block
        data["UID"]
      );
    },
  },
};
</script>
