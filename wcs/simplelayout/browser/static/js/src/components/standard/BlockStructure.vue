<template>
  <div class="card">
    <a :id="block['id']" />
    <div class="card-header d-flex">
      <button
        v-if="block.collapsable"
        class="btn btn-secondary me-2 sl-collapsable-button"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#id_${block.UID}`"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        {{ collapsed ? "v" : ">" }}
      </button>
      <BlockControls v-bind="$props" />
    </div>
    <slot name="top"></slot>
    <div
      :class="block.collapsable ? 'collapse' : ''"
      :id="`id_${block.UID}`"
      ref="blockbody"
    >
      <div class="card-body" v-if="Object.keys(block).length !== 0">
        <div class="card-text">
          <template v-if="hasCustomTemplate && replaceCustomTemplate">
            <RenderCustomTemplate
              :customTemplate="sl.customTemplates[block['@type']].template"
              :block="block"
            />
          </template>
          <template v-else>
            <slot name="body">
              <div class="d-flex flex-wrap flex-row-reverse gap-3">
                <div class="sl-card-image" v-if="block.image">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    :data-bs-target="`#image-${block.UID}`"
                  >
                    <i class="fa fa-search-plus" />
                    <figure class="d-table m-0 text-center">
                      <img
                        v-if="block.image.scales.great"
                        class="figure-img m-0"
                        :src="block.image.scales.great.download"
                        :alt="block.image_alt_text"
                      />
                      <img
                        v-else
                        class="figure-img m-0"
                        :src="block.image.download"
                        :alt="block.image_alt_text"
                      />
                      <figcaption
                        v-if="block.image_caption"
                        class="figure-caption mt-1"
                      >
                        {{ block.image_caption }}
                      </figcaption>
                    </figure>
                  </a>
                  <div
                    class="modal fade"
                    :id="`image-${block.UID}`"
                    tabindex="-1"
                    :aria-labelledby="`#image-label-${block.UID}`"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-fullscreen modal-dialog-centered"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1
                            class="modal-title fs-5"
                            :id="`image-label-${block.UID}`"
                          >
                            {{ block.image.filename }}
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <img
                            class="figure-img m-0"
                            :src="block.image.download"
                            :alt="block.image_alt_text"
                          />
                          <p
                            v-if="block.image_caption"
                            class="figure-caption mt-1"
                          >
                            {{ block.image_caption }}
                            <span
                              class="image-alt-text"
                              v-if="block.image_alt_text"
                              >({{ block.image_alt_text }})</span
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="sl-card-text"
                  v-if="block.text"
                  v-html="block.text.data"
                />
              </div>
            </slot>
            <RenderCustomTemplate
              v-if="hasCustomTemplate && !replaceCustomTemplate"
              :customTemplate="sl.customTemplates[block['@type']].template"
              :block="block"
            />
          </template>
        </div>
      </div>
    </div>
    <slot name="footer" />
  </div>
</template>
<script>
import BlockControls from "@/components/Controls/BlockControls.vue";
import RenderCustomTemplate from "@/components/standard/RenderCustomTemplate.vue";
import { useSimplelayoutStore } from "@/store.js";

export default {
  components: {
    BlockControls,
    RenderCustomTemplate,
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
      collapsed: false,
    };
  },
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },
  mounted() {
    this.$refs.blockbody.addEventListener("show.bs.collapse", () => {
      this.collapsed = true;
    });
    this.$refs.blockbody.addEventListener("hidden.bs.collapse", () => {
      this.collapsed = false;
    });
  },
  computed: {
    hasCustomTemplate() {
      const type = this.block["@type"];
      return (
        type in this.sl.customTemplates &&
        this.sl.customTemplates[type].template
      );
    },
    replaceCustomTemplate() {
      return (
        this.hasCustomTemplate &&
        this.sl.customTemplates[this.block["@type"]].replace
      );
    },
    rowsLength() {
      return this.sl.layouts.items[this.rowIndex].items.length;
    },
  },
};
</script>
<style lang="scss">
.sl-card-image {
  min-width: 200px;
  flex-basis: 200px;
  flex-grow: 1;
  background-color: var(--bs-gray-200);
  align-items: center;
  display: flex;
  justify-content: center;
}
.sl-card-text {
  flex-basis: 300px;
  flex-grow: 999;
  max-width: 100%;
}
.sl-collapsable-button {
  margin-left: calc(var(--bs-card-spacer-x) * -1);
  margin-top: calc(var(--bs-card-title-spacer-y) * -1);
  margin-bottom: calc(var(--bs-card-title-spacer-y) * -1);
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
</style>
