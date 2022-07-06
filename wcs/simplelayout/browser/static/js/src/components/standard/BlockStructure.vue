<template>
  <div class="card">
    <a :id="block['id']" />
    <BlockControls v-bind="$props" />
    <slot name="top">
      <div class="card-img-top sl-card-image" v-if="block.image">
        <img
          :src="block.image.scales.great.download"
          :alt="block.image_alt_text"
        />
      </div>
    </slot>
    <div class="card-body" v-if="Object.keys(block).length !== 0">
      <div class="card-text">
        <slot name="body">
          <div v-if="block.text" v-html="block.text.data" />
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import BlockControls from "@/components/Controls/BlockControls.vue";
export default {
  components: {
    BlockControls,
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
.sl-card-image {
  aspect-ratio: 16 / 10;
  background-color: var(--bs-gray-200);
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
