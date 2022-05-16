<template>
  <div class="btn-group btn-group-xs sl-add-block-controls">
    <button v-if="blockIndex > -1" class="btn btn-secondary btn-sm sl-handle">
      <img v-bind="moveIcon" />
    </button>
    <button
      class="btn btn-success btn-sm dropdown-toggle caret-only"
      type="button"
      :id="dropdownId"
      data-bs-toggle="dropdown"
      data-bs-auto-close="true"
      aria-expanded="false"
    >
      <span aria-haspopup="true" class="caret"></span>
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" :aria-labelledby="dropdownId">
      <li v-for="action in actions" :key="action.label">
        <a
          v-if="action.enabled(rowIndex, columnIndex)"
          class="dropdown-item"
          @click.prevent="action.action"
          :data-row="rowIndex"
          :data-col="columnIndex"
          :data-block="blockIndex"
          href="#"
          >{{ action.label }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";
export default {
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
  },
};
</script>
<style lang="scss">
.sl-add-block-controls {
  position: absolute;
  right: 0;
  top: 0;
  visibility: hidden;
  z-index: 1;
}

.dropdown-toggle {
  &.caret-only:after {
    margin-left: 0;
  }
}

.sl-block:hover {
  .sl-add-block-controls {
    visibility: visible;
  }
}
</style>
