<template>
  <figure class="d-table m-0 text-center">
    <img
      :src="image.image.scales.preview.download"
      v-if="image.image && image.image.scales && image.image.scales.preview"
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
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
};
</script>
