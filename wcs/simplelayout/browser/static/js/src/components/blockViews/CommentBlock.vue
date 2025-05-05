<template>
  <div class="comment-block">
    <BlockStructure v-bind="$props" />
  </div>
</template>
<script>
import BlockStructure from "@/components/standard/BlockStructure.vue";
export default {
  components: {
    BlockStructure,
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.comment-block {
  .card {
    background-color: var(--bs-warning);
  }
}
</style>
