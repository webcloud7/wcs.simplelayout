<template>
  <BlockStructure :block="block" />
</template>
<script>
import BlockStructure from "@/components/standard/BlockStructure.vue";
export default {
  components: {
    BlockStructure,
  },
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
};
</script>
