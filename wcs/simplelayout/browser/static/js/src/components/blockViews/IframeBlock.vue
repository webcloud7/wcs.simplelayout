<template>
  <BlockStructure v-bind="$props">
    <template #top>
      <div class="sl-contact-title">
        <h5>
          Iframe URL: <a :href="block.iframe_url">{{ block.iframe_url }}</a>
        </h5>
      </div>
    </template>
    <template #body>
      <div class="sl-iframe">
        <iframe :src="block.iframe_url" :height="block.iframe_height" />
      </div>
    </template>
  </BlockStructure>
</template>
<script>
import BlockStructure from "@/components/standard/BlockStructure.vue";
export default {
  components: {
    BlockStructure,
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
};
</script>
<style lang="scss">
.sl-iframe {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  iframe {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
