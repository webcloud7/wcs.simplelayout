<template>
  <nav class="navbar navbar-expand-lg bg-light sl-add-block-controls">
    <div class="container">
      <span>
        <slot name="title">
          <BlockTitle :block="block" v-if="block.title" />
        </slot>
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${dropdownIdMobile}`"
        :aria-controls="dropdownIdMobile"
        aria-expanded="false"
        aria-label="Toggle edit menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end flex-shrink-0"
        :id="dropdownIdMobile"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="btn-group btn-group-xs">
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
                    >{{ action.label }}</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
  .navbar-nav {
    visibility: hidden;
  }
  .container {
    align-items: flex-start;
  }
  .sl-move-button {
    flex: 1 0 auto;
  }
  z-index: 1;
}

.sl-block:hover .sl-add-block-controls {
  .navbar-nav {
    visibility: visible;
  }
}
</style>
