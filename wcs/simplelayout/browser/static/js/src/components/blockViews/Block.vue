<template>
  <div class="card">
    <img
      v-if="block.image"
      :src="block.image.scales.great.download"
      class="card-img-top"
      :alt="block.image_alt_text">
    <div class="card-body">
      <h5 class="card-title">{{ block.title }}</h5>
      <div class="card-text" v-if="block.text" v-html="block.text.data" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
};
</script>
