<template>
  <div
    class="d-flex justify-content-end align-items-start sl-header-wrapper flex-wrap flex-grow-1"
  >
    <div class="sl-title-wrapper me-auto">
      <slot name="title">
        <BlockTitle :block="block" v-if="block.title" />
      </slot>
    </div>
    <div
      class="btn-group btn-group-xs sl-add-block-controls"
      v-if="sl.canModify"
    >
      <button
        v-if="blockIndex > -1 && sl.canAddBlocks"
        class="btn btn-secondary btn-sm sl-handle sl-move-button"
      >
        <img v-bind="moveIcon" />
        <span class="sr-only">Move</span>
      </button>

      <template v-if="block['@id']">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          type="button"
          :id="dropdownId"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          <span>{{ $i18n("Actions") }}</span>
        </button>
        <ul
          class="dropdown-menu dropdown-menu-end"
          :aria-labelledby="dropdownId"
        >
          <li v-for="action in actions" :key="action.label">
            <a
              v-if="action.enabled(rowIndex, columnIndex, blockIndex)"
              class="dropdown-item"
              @click.prevent.stop="action.action"
              :data-row="rowIndex"
              :data-col="columnIndex"
              :data-block="blockIndex"
              href="#"
              >{{ $i18n(action.label) }}</a
            >
          </li>
        </ul>
      </template>
      <template v-else>
        <!-- Only show add action -->
        <button
          class="btn btn-success btn-sm"
          v-if="actions[0].enabled(rowIndex, columnIndex, blockIndex)"
          @click.prevent.stop="actions[0].action"
          :data-row="rowIndex"
          :data-col="columnIndex"
          :data-block="blockIndex"
          href="#"
        >
          {{ $i18n(actions[0].label) }}
        </button>
      </template>
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
.sl-move-button {
  width: 40px;
}
.sl-add-block-controls {
  visibility: hidden;
  z-index: 1;
}

.sl-block:hover .sl-add-block-controls {
  visibility: visible;
}
</style>
