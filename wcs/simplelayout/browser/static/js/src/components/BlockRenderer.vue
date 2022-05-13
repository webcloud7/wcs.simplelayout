<template>
  <div v-if="getBlockViewComponentByName !== undefined">
    <component :is="getBlockViewComponentByName" :block="block" />
  </div>
  <div v-else>
    <BlockFallbackView :block="block" />
  </div>
</template>
<script>
import BlockFallbackView from "@/components/blockViews/BlockFallbackView.vue";

export default {
  components: {
    BlockFallbackView,
  },
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
  methods: {
    hasBlockViewComponent() {
      return this.block["@type"] in this.$blockviews;
    },
  },
  computed: {
    getBlockViewComponentByName() {
      return this.$blockviews[this.block["@type"]];
    },
  },
};
</script>
