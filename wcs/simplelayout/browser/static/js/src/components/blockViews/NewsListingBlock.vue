<template>
  <BlockStructure v-bind="$props">
    <template #body>
      total {{ data.items_total }}
      <div class="table-responsive">
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
    </template>
  </BlockStructure>
</template>
<script>
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
  data() {
    return {
      data: { items: [], batching: null },
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
    async fetchData() {
      const params = { params: { fullobjects: true } };
      const response = await this.axios.get(this.block["@id"], params);
      this.data = response.data;
    },
    async fetchNext(url) {
      const response = await this.axios.get(url);
      this.data = response.data;
    },
    async fetchPrevious(url) {
      const response = await this.axios.get(url);
      this.data = response.data;
    },
  },
};
</script>
