<template>
  <BlockStructure v-bind="$props">
    <template #body>
      <h5>{{ $i18n("Teaser content") }}</h5>
      <div class="list-group">
        <template v-for="item in getItems" :key="item.title">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-2">
                <img
                  v-if="item.image"
                  :src="item.image.scales.preview.download"
                  class="img-fluid rounded-start"
                />
              </div>
              <div class="col-10">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p
                    class="card-text d-flex justify-content-between align-items-start"
                    v-if="item.link"
                  >
                    <a
                      class="btn btn-success"
                      :href="item.link['@id']"
                      :title="item.link.title"
                    >
                      {{ $i18n("Go to content") }}
                      <span class="portal-type"
                        >({{ sl.contentTypeTitles[item.link["@type"]] }})</span
                      >
                    </a>
                    <span
                      class="badge bg-primary rounded-pill"
                      v-if="item.link.review_state"
                    >
                      <span :class="`state-${item.link.review_state}`"
                        >{{ workflowTitleMapping[item.link.review_state] }}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </template>
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
    getItems() {
      // Iterate over all keys and get infos from teaser_title_1, teaser_image_1, teaser_linke_2, etc.
      const items = [];
      Object.keys(this.block).forEach((key) => {
        const match = key.match(/^teaser_title[_](\d+)$/m);
        if (match && this.block[match[0]]) {
          const number = match[1];
          const item = {
            title: this.block[key],
            image: this.block["teaser_image_" + number],
            link: this.block["teaser_link_" + number],
          };
          items.push(item);
        }
      });
      return items;
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
