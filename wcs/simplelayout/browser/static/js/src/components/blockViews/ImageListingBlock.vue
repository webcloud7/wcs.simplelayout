<template>
  <BlockStructure v-bind="$props">
    <template #body>
      <div :class="rowClasses">
        <template v-for="image in data.items" :key="image.UID">
          <div class="col sl-image-listing position-relative">
            <div class="sl-image-wrapper">
              <figure class="d-table m-0 text-center" :style="`height: ${getCachedHeight(image.image.scales.preview.height)}px`">
                <img
                  :src="image.image.scales.preview.download"
                  v-if="image.image.scales.preview"
                />
                <figcaption v-if="image.title" class="figure-caption mt-1">
                  {{ image.title }}
                </figcaption>
              </figure>
              <div class="actions position-absolute sl-img-actions me-4 mt-2">
                <button
                  class="btn btn-light"
                  @click="openImageEditModal"
                  :data-url="image['@id']"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
      total {{ data.items_total }}
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

      <EditImageModal :block="block" ref="edit-image-modal" />
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
import EditImageModal from "@/components/Modals/EditImageModal.vue";

export default {
  components: {
    BlockStructure,
    Pagination,
    EditImageModal,
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
      currentURL: "",
      cachedHeight: 0,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    "block.modified"() {
      this.fetchData(this.currentURL);
    },
  },
  methods: {
    async fetchData(url) {
      this.loading = true;
      try {
        let response;
        if (!url) {
          const params = { params: { fullobjects: true, b_size: 3 } };
          response = await this.axios.get(this.block["@id"], params);
        } else {
          response = await this.axios.get(url);
        }
        this.data = response.data;
        this.currentURL = response.request.responseURL;
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
    openImageEditModal() {
      this.$refs["edit-image-modal"].openEditImageModal(event);
    },
    getCachedHeight(height) {
      if (height > this.cachedHeight) {
        this.cachedHeight = height;
      }
      return this.cachedHeight;
    },
  },
  computed: {
    loadingClass() {
      return this.loading ? "sl-loading" : "";
    },
    rowClasses() {
      return `row row-cols-3 gy-4 fade ${!this.loading ? "show" : ""}`;
    },
  },
};
</script>
<style lang="scss">
.sl-image-listing {
  flex-basis: 200px;
  flex-grow: 1;
  > img {
    width: 100%;
  }
}

.sl-image-wrapper {
  background-color: var(--bs-gray-200);
  align-items: center;
  display: flex;
  justify-content: center;
}

.sl-img-actions {
  top: 0;
  right: 0;
}
</style>
