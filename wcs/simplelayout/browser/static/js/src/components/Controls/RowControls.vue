<template>
  <div class="sl-add-row-controls" :style="`z-index:${1000 - index * 2}`">
    <div class="btn-group btn-group-xs">
      <button type="button" class="btn btn-primary" @click="() => createRow(1)">
        +
      </button>
      <button
        class="btn btn-warning"
        @click="openEditRowModal"
        v-if="openEditRowModal && sl.canEditRowData"
        :data-row="index"
        title="Edit row settings"
      >
        <img v-bind="editIcon" />
      </button>
      <button
        class="btn btn-secondary dropdown-toggle"
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
        <template v-for="row in rows" :key="row.cols">
          <li>
            <a
              class="dropdown-item"
              @click.prevent="() => createRow(row.cols)"
              href="#"
              >{{ row.label }}</a
            >
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
import { row } from "@/template.js";
import { useSimplelayoutStore } from "@/store.js";
export default {
  props: {
    index: {
      type: Number,
      required: true,
    },
    openEditRowModal: {
      type: Function,
      required: false,
      default: null,
    },
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  data() {
    if (Object.keys(this.sl.defaultConfig).includes("row-menu")) {
      return {
        rows: this.sl.defaultConfig["row-menu"]
      };
    } else {
      return {
        rows: [
          { cols: 2, label: this.$i18n("2-column row (50%)") },
          { cols: 3, label: this.$i18n("3-column row (33%)") },
          { cols: 4, label: this.$i18n("4-column row (25%)") },
        ],
      };
    }
  },
  methods: {
    createRow(cols) {
      this.sl.addRowToLayout(row(cols), this.index);
    },
  },
  computed: {
    dropdownId() {
      return `dropdownMenu_${this.index}`;
    },
    editIcon() {
      return {
        src: `${this.sl.portalURL}/iconresolver/pencil`,
        alt: "Edit row",
        width: "15",
      };
    },
  },
};
</script>

<style lang="scss">
.sl-add-row-controls {
  position: relative;
  // visibility: hidden;
  > .btn-group {
    width: 120px;
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;
    top: -8px;

    button {
      padding: 0;
      line-height: 1rem;

      &:first-child {
        width: 50px;
      }
    }
  }
}
.sl-container:hover {
  .sl-add-row-controls {
    visibility: visible;
  }
}
</style>
