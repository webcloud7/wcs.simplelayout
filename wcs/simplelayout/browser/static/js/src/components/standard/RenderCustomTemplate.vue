<script>
import { h } from "vue";
import { useSimplelayoutStore } from "@/store.js";

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
      template: this.customTemplate,
      data() {
        return { block: blockData, items: [] };
      },
      methods: {
        getContents() {
          if (this.items.length == 0) {
            this.fetchData();
          }
          return this.items;
        },
        async fetchData(url) {
          this.loading = true;
          try {
            let response;
            if (!url) {
              const params = {
                params: { fullobjects: true, include_items: true },
              };
              response = await this.axios.get(this.block["@id"], params);
            } else {
              response = await this.axios.get(url);
            }
            if (response.data["items"]) {
              this.items = response.data["items"];
            }
          } catch (error) {
            this.sl.addErrorMessage(error);
          } finally {
            this.loading = false;
          }
        },
      },
    };
    return h(component);
  },
};
</script>
