<script>
import { h } from "vue";
import { useSimplelayoutStore } from "@/store.js";
import Pagination from "@/components/Pagination.vue";

export default {
  props: {
    customTemplate: {
      type: String,
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
  render() {
    const blockData = this.block;
    const component = {
      components: {
        Pagination,
      },
      template: this.customTemplate,
      data() {
        return {
          block: blockData,
          items: [],
          batching: null,
          items_total: null,
          loaded: false,
          loading: false,
          allData: {},
        };
      },
      methods: {
        getContents(additionalParams) {
          if (this.items.length == 0 && !this.loaded) {
            this.fetchData(null, additionalParams);
          }
          return this.items;
        },
        async fetchAllData() {
          let response = await this.axios.get(this.block["@id"], {
            params: { fullobjects: true, include_items: true },
          });
          if (Object.keys(this.allData).length == 0) {
            this.allData = Object.assign({}, response.data);
          }
        },
        async fetchData(url, additionalParams) {
          this.loading = true;
          try {
            let response;
            if (!url) {
              let params = {
                params: { fullobjects: true, include_items: true },
              };
              if (additionalParams) {
                params.params = { ...params.params, ...additionalParams };
              }
              response = await this.axios.get(this.block["@id"], params);
            } else {
              response = await this.axios.get(url);
            }
            if (response.data["items"]) {
              this.items = response.data["items"];
            }
            if (response.data["batching"]) {
              this.batching = response.data["batching"];
            }
            if (response.data["items_total"]) {
              this.items_total = response.data["items_total"];
            }
          } catch (error) {
            this.sl.addErrorMessage(error);
          } finally {
            this.loading = false;
            this.loaded = true;
          }
        },
        fetchNext(url) {
          this.fetchData(url);
        },
        fetchPrevious(url) {
          this.fetchData(url);
        },
      },
    };
    return h(component);
  },
};
</script>
