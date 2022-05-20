<template>
  <div v-if="getBlockViewComponentByName !== undefined">
    <component :is="getBlockViewComponentByName" v-bind="$props" />
  </div>
  <div v-else>
    <BlockFallbackView v-bind="$props" />
  </div>
</template>
<script>
import BlockFallbackView from "@/components/blockViews/BlockFallbackView.vue";

export default {
  components: {
    BlockFallbackView,
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
