<template>
  <div>
    {{ block.title }}
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
