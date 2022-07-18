<template>
  <div
    v-if="currentWidth"
    class="sl-remove-col-controls"
    :style="`z-index:${1000 - 1 - rowIndex * 2}`"
  >
    <div class="btn-group btn-group-xs">
      <button
        v-if="!hasBlocks"
        class="btn btn-xs btn-danger"
        type="button"
        @click="removeCol"
      >
        {{ $i18n("Remove") }}
      </button>
      <button
        class="btn dropdown-toggle btn-primary btn-xs"
        type="button"
        :id="dropdownId"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
      >
        {{ $i18n("Width") }}: {{ widthsMapping[currentWidth] }}
      </button>
      <ul class="dropdown-menu" :aria-labelledby="dropdownId">
        <template v-for="width in widths" :key="width.cols">
          <li>
            <a
              class="dropdown-item"
              @click="() => newWidth(width.cols)"
              href="#"
              >{{ width.label }}</a
            >
          </li>
        </template>
      </ul>
    </div>
  </div>

  <div :class="cssClasses">
    <div class="btn-group btn-group-xs sl-row-controls">
      <button
        type="button"
        class="btn btn-secondary sl-col-add-button"
        @click="() => createCol()"
      >
        +
      </button>
    </div>
  </div>
</template>
<script>
import { column } from "@/template.js";
import { ColWidths } from "@/vocabs.js";
import { useSimplelayoutStore } from "@/store.js";
export default {
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  props: {
    rowIndex: {
      type: Number,
      required: true,
    },
    colIndex: {
      type: Number,
      required: true,
    },
    currentWidth: {
      type: Number,
      required: false,
    },
    right: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  methods: {
    createCol() {
      this.sl.addColumnToRow(column(1), this.rowIndex, this.colIndex);
    },
    removeCol() {
      this.sl.removeRowFromLayout(this.rowIndex, this.colIndex);
    },
    newWidth(newWidth) {
      this.sl.setNewWidthOnColumn(this.rowIndex, this.colIndex, newWidth);
    },
  },
  computed: {
    widths() {
      return ColWidths();
    },
    widthsMapping() {
      return ColWidths(true);
    },
    dropdownId() {
      return `dropdownMenu_${this.colIndex}_${this.rowIndex}`;
    },
    cssClasses() {
      let classes = "sl-col-controls";
      if (this.right) {
        classes = classes + " right";
      }
      return classes;
    },
    hasBlocks() {
      const blocks =
        this.sl.layouts.items[this.rowIndex].items[this.colIndex].items.length;
      return Boolean(blocks);
    },
  },
};
</script>

<style lang="scss">
.sl-col-controls {
  padding: 0.5em 0;
  position: absolute;
  height: 100%;
  left: 0;
  visibility: hidden;
  > .btn-group {
    height: 50%;
    top: 25%;
  }

  &.right {
    right: 0;
    top: 0;
    left: auto;
  }

  .sl-col-add-button {
    padding: 0;
  }
}

.sl-remove-col-controls {
  position: absolute;
  bottom: 0;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, 0);
  z-index: 1;
  visibility: hidden;
}

.sl-row:hover {
  .sl-col-controls,
  .sl-remove-col-controls {
    visibility: visible;
  }
}
</style>
