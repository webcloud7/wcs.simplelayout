<template>
  <figure class="d-table m-0 text-center">
    <img
      :src="image.image.scales[defaultScale].download"
      v-if="
        image.image && image.image.scales && image.image.scales[defaultScale]
      "
    />
    <template v-else-if="image.file">
      <img
        :src="`${sl.baseURL}/@@iconresolver/mimetype-${image.file['content-type']}`"
      />
    </template>
    <template v-else>
      <img :src="`${sl.baseURL}/@@iconresolver/x-octagon`" />
    </template>
    <figcaption v-if="image.title" class="figure-caption mt-1">
      {{ image.title }}
    </figcaption>
  </figure>
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  computed: {
    defaultScale() {
      if (
        this.block.default_scale &&
        this.block.default_scale.token in this.image.image.scales
      ) {
        return this.block.default_scale.token;
      } else {
        return "preview";
      }
    },
  },
};
</script>
