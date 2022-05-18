<template>
  <BlockCtructure :block="block">
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
  </BlockCtructure>
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";
import BlockCtructure from "@/components/standard/BlockStructure.vue";
export default {
  components: {
    BlockCtructure,
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
  background-color: var(--bs-gray-200);
  background-position: center;
  background-size: contain;
}
</style>
