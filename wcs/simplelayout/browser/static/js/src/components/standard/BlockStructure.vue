<template>
  <div class="card">
    <slot name="top">
      <img
        v-if="block.image"
        :src="block.image.scales.great.download"
        class="card-img-top"
        :alt="block.image_alt_text" />
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
