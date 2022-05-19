<template>
  <BlockStructure :block="block">
    <template #body>
      total {{ data.items_total }}
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Type</th>
              <th>Title</th>
              <th>Size</th>
              <th>Modified</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="file in data.items" :key="file.UID">
              <template v-if="file['@type'] === 'Image'">
                <td>{{ file.image["content-type"] }}</td>
                <td>
                  <a :href="file.image.download">{{ file.title }}</a>
                </td>
                <td>{{ file.image.size }}</td>
              </template>
              <template v-if="file['@type'] === 'File'">
                <td>{{ file.file["content-type"] }}</td>
                <td>
                  <a :href="file.file.download">{{ file.title }}</a>
                </td>
                <td>{{ file.file.size }}</td>
              </template>
              <td>{{ file.modified }}</td>
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
      const response = await this.axios.get(this.block.computed_query);
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
