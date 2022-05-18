<template>
  <BlockStructure :block="block">
    <template #top>
      <div
        class="card-img-top sl-placeholder-video"
        aria-hidden="true"
        :style="`background-image: url(${this.sl.portalURL}/iconresolver/camera-video)`"
      />
    </template>
    <template #body>
      <a :href="block.video_url">{{ block.video_url }}</a>
    </template>
  </BlockStructure>
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";
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
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
};
</script>
<style lang="scss">
.sl-placeholder-video {
  height: 200px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>
