<template>
  <BlockStructure v-bind="$props">
    <template #body>
      total {{ data.items_total }}
      <div :class="`table-responsive ${loadingClass}`">
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
                <td>
                  <img
                    :src="`${sl.baseURL}/@@iconresolver/mimetype-${file.image['content-type']}`"
                  />
                </td>
                <td>
                  <a :href="file.image.download">{{ file.title }}</a>
                </td>
                <td>{{ file.image.size }}</td>
              </template>
              <template v-if="file['@type'] === 'File'">
                <td>
                  <img
                    :src="`${sl.baseURL}/@@iconresolver/mimetype-${file.file['content-type']}`"
                  />
                </td>
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
      <div class="position-absolute top-50 start-50" v-if="loading">
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="card-footer">
        <div class="mediafolder-link" v-if="sl.canModify">
          <form
            v-if="!block.mediafolder"
            method="POST"
            :action="`${block['@id']}/@@add-and-link-mediafolder`"
          >
            <input type="hidden" name="_authenticator" :value="sl.authToken" />
            <button type="submit" class="btn btn-success btn-sm">
              Click here to create a new Media Folder
            </button>
          </form>
          <a
            v-else
            :href="block.mediafolder['@id']"
            class="btn btn-success btn-sm"
            >Go the the referenced Media Folder</a
          >
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
