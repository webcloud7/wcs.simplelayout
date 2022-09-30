<template>
  <BlockStructure v-bind="$props">
    <template #body>
      <h5>{{ $i18n("Referenced content") }}</h5>
      <div class="list-group">
        <template v-for="item in filteredItems" :key="item['@id']">
          <a
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
            :href="item['@id']"
          >
            <div class="ms-2 me-auto">
              {{ item.title }}
              ({{ item["@id"] }})
              <span class="portal-type"
                >({{ sl.contentTypeTitles[item["@type"]] }})</span
              >
            </div>
            <span
              class="badge bg-primary rounded-pill"
              v-if="item['review_state']"
            >
              <span :class="`state-${item['review_state']}`"
                >{{ workflowTitleMapping[item["review_state"]] }}
              </span>
            </span>
          </a>
        </template>
        <a
          class="list-group-item list-group-item-action disabled"
          v-if="!filteredItems.length"
        >
          {{ $i18n("No referenced content found") }}
        </a>
      </div>
    </template>
  </BlockStructure>
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";
import BlockStructure from "@/components/standard/BlockStructure.vue";
export default {
  components: {
    BlockStructure,
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
  data() {
    return {
      workflowTitleMapping: [],
    };
  },
  created() {
    this.portalURL = document.body.getAttribute("data-portal-url");
  },
  mounted() {
    this.fetchWorkflowTitles();
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  computed: {
    filteredItems() {
      return this.block.relatedItems.filter((item) => Boolean(item));
    },
  },
  methods: {
    async fetchWorkflowTitles() {
      const response = await this.axios.get(
        this.portalURL + "/@vocabularies/plone.app.vocabularies.WorkflowStates"
      );
      response.data.items.forEach((item) => {
        this.workflowTitleMapping[item.token] = item.title
          .replace(/(\[.+?\])/g, "")
          .trim();
      });
    },
  },
};
</script>
<style lang="scss">
.sl-placeholder-video {
  height: 200px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
</style>
