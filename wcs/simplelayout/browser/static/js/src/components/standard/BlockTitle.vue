<template>
  <h4 class="card-title" v-if="!blockLink">
    <div class="position-relative d-inline-block pe-2">
      {{ block.title }}
      <template v-if="!block.show_title">
        <span class="h6 text-black text-opacity-50">(hidden title)</span>
      </template>
    </div>
  </h4>
  <a
    class="card-title"
    :href="blockLink"
    :title="$i18n('Links to a internal or external target')"
    v-else
  >
    <h4>
      <div class="position-relative d-inline-block pe-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="currentColor"
          class="bi bi-link-45deg"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
          />
          <path
            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
          />
        </svg>
        {{ block.title }}
        <template v-if="!block.show_title">
          <span class="h6 text-black text-opacity-50">(hidden title)</span>
        </template>
      </div>
    </h4>
  </a>
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";
export default {
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
  computed: {
    blockLink() {
      if (this.block.internal_link) {
        return this.block.internal_link["@id"];
      }

      if (this.block.external_link) {
        return this.block.external_link;
      }

      return null;
    },
  },
};
</script>
