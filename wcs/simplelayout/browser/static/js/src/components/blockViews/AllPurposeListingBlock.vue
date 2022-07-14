<template>
  <BlockStructure v-bind="$props">
    <template #body>
      total {{ data.items_total }}
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th v-for="col in this.data.customViewFields" :key="col.token">{{ col.title }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data.items" :key="item.UID">
              <template v-for="col in this.data.customViewFields" :key="col.token">
                <td v-if="col.token == 'getObjSize'">
                  <template v-if="item['@type'] == 'File'">
                    {{ item.file.size}}
                  </template>
                  <template v-if="item['@type'] == 'Image'">
                    {{ item.image.size}}
                  </template>
                </td>
                <td v-else-if="col.token == 'mime_type'">
                  <template v-if="item['@type'] == 'File'">
                    {{ item.file["content-type"]}}
                  </template>
                  <template v-if="item['@type'] == 'Image'">
                    {{ item.image["content-type"]}}
                  </template>
                </td>
                <td v-else>{{ item[col.token] }}</td>
              </template>
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
      columns: [],
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
