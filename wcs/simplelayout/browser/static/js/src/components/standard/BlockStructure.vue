<template>
  <div class="card">
    <slot name="top">
      <div class="card-img-top sl-card-image" v-if="block.image">
        <img
          :src="block.image.scales.great.download"
          :alt="block.image_alt_text"
        />
      </div>
    </slot>
    <div class="card-body">
      <slot name="title">
        <BlockTitle :block="block" />
      </slot>

      <div class="card-text">
        <slot name="body">
          <div v-if="block.text" v-html="block.text.data" />
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import BlockTitle from "@/components/standard/BlockTitle.vue";
export default {
  components: {
    BlockTitle,
  },
  props: {
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
