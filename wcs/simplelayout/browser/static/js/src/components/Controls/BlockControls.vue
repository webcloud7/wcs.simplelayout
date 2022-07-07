<template>
  <div class="container d-flex justify-content-between sl-header-wrapper my-2">
    <div class="sl-title-wrapper">
      <slot name="title">
        <BlockTitle :block="block" v-if="block.title" />
      </slot>
    </div>
    <div class="btn-group btn-group-xs sl-add-block-controls">
      <button
        v-if="blockIndex > -1"
        class="btn btn-secondary btn-sm sl-handle sl-move-button"
      >
        <img v-bind="moveIcon" />
        <span class="sr-only">Move</span>
      </button>
      <button
        class="btn btn-success btn-sm dropdown-toggle"
        type="button"
        :id="dropdownId"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
      >
        <span>Actions</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end" :aria-labelledby="dropdownId">
        <li v-for="action in actions" :key="action.label">
          <a
            v-if="action.enabled(rowIndex, columnIndex, blockIndex)"
            class="dropdown-item"
            @click.prevent.stop="action.action"
            :data-row="rowIndex"
            :data-col="columnIndex"
            :data-block="blockIndex"
            href="#"
            >{{ action.label }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";
import BlockTitle from "@/components/standard/BlockTitle.vue";
export default {
  components: {
    BlockTitle,
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
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
    moveIcon() {
      return {
        src: `${this.sl.portalURL}/iconresolver/arrows-move`,
        alt: "Move block",
        width: "20",
        style: "filter: invert(1)",
      };
    },
    dropdownId() {
      return `blockDropdownMenu_${this.columnIndex}_${this.rowIndex}`;
    },
    dropdownIdMobile() {
      return `${this.dropdownId}_mobile_menu`;
    },
  },
};
</script>
<style lang="scss">
.sl-add-block-controls {
  visibility: hidden;
  z-index: 1;
}

.sl-block:hover .sl-add-block-controls {
  visibility: visible;
}

</style>
