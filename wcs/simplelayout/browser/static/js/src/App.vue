<template>
  <div class="container">
    <div
      v-for="(row, rowIndex) in layouts"
      class="row"
      :key="`layout_${rowIndex}`"
    >
      <div
        v-for="(column, Columnindex) in row.items"
        :key="`column_${Columnindex}_${rowIndex}`"
        :class="`col col-${column.width}`"
      >
        <template v-for="blockUID in column.items" :key="blockUID">
          <BlockRenderer
            v-if="blockUID in slblocks"
            :block="slblocks[blockUID]"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import BlockRenderer from "@/components/BlockRenderer.vue";
export default {
  components: {
    BlockRenderer,
  },
  data() {
    return {
      baseURL: "",
      slblocks: {},
      layouts: [],
    };
  },
  created() {
    this.baseURL = document.body.getAttribute("data-base-url");
    this.fetchBlocks();
  },
  methods: {
    async fetchBlocks() {
      const response = await this.axios.get(this.baseURL);
      console.info(response);
      this.slblocks = response.data.slblocks;

      const layouts = response.data.slblocks_layout;
      if ("items" in layouts) {
        this.layouts = response.data.slblocks_layout["items"];
      }
    },
  },
};
</script>

<style></style>
