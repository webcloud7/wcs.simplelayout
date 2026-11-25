<template>
  <BlockStructure v-bind="$props">
    <template #body>
      total {{ data.items_total }}
      <div :class="`table-responsive ${loadingClass}`">
        <table class="table table-hover allpuropseblock-listing">
          <thead>
            <tr>
              <th v-for="col in this.data.customViewFields" :key="col.token">
                {{ col.title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data.items" :key="item.UID">
              <td v-for="col in this.data.customViewFields" :key="col.token">
                <a
                  :href="item['@id']"
                  class="d-block text-reset text-decoration-none"
                >
                  <template v-if="col.token == 'getObjSize'">
                    <template v-if="item['@type'] == 'File'">
                      {{ item.file.size }}
                    </template>
                    <template v-if="item['@type'] == 'Image'">
                      {{ item.image.size }}
                    </template>
                  </template>
                  <template v-else-if="col.token == 'mime_type'">
                    <template v-if="item['@type'] == 'File'">
                      <img
                        :src="`${sl.baseURL}/@@iconresolver/mimetype-${item.file['content-type']}`"
                      />
                    </template>
                    <template v-if="item['@type'] == 'Image'">
                      <img
                        :src="`${sl.baseURL}/@@iconresolver/mimetype-${item.image['content-type']}`"
                      />
                    </template>
                  </template>
                  <template v-else>{{ item[col.token] }}</template>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <a
        v-if="data.items_total"
        :href="`${block['@id']}/@@csv-export`"
        class="btn btn-sm btn-outline-secondary"
        download
      >
        {{ $i18n("Export CSV") }}
      </a>
      <Pagination
        v-if="data.batching"
        @next="fetchNext"
        @previous="fetchPrevious"
        :batching="data.batching"
      />
      <div class="position-absolute top-50 start-50" v-if="loading">
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </template>
  </BlockStructure>
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";
import BlockStructure from "@/components/standard/BlockStructure.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  components: {
    BlockStructure,
    Pagination,
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
  data() {
    return {
      data: { items: [], batching: null },
      columns: [],
      loading: false,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    "block.modified"() {
      this.fetchData();
    },
  },
  methods: {
    async fetchData(url) {
      this.loading = true;
      try {
        let response;
        if (!url) {
          const params = { params: { fullobjects: true } };
          response = await this.axios.get(this.block["@id"], params);
        } else {
          response = await this.axios.get(url);
        }
        this.data = response.data;
      } catch (error) {
        this.sl.addErrorMessage(error);
      } finally {
        this.loading = false;
      }
    },
    fetchNext(url) {
      this.fetchData(url);
    },
    async fetchPrevious(url) {
      this.fetchData(url);
    },
  },
  computed: {
    loadingClass() {
      return this.loading ? "sl-loading" : "";
    },
  },
};
</script>
