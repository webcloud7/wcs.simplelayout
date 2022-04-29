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

  data() {
    return {
      title: "Block title",
    };
  },
};
</script>
