<template>
  <h4 class="card-title">
    <div class="position-relative d-inline-block pe-2">
      {{ block.title }}
      <template v-if="!block.show_title">
        <span class="h6 text-black text-opacity-50">(hidden title)</span>
      </template>
    </div>
  </h4>
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
