<template>
  <BlockStructure v-bind="$props">
    <template #body>
      total {{ data.items_total }}
      <div :class="`table-responsive ${loadingClass}`">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Modified</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="news in data.items" :key="news.UID">
              <td>{{ news.news_date }}</td>
              <td><a :href="news['@id']">{{ news.title }}</a></td>
              <td>{{ news.modified }}</td>
            </tr>
          </tbody>
        </table>
      </div> 
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
