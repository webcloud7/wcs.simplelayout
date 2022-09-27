<template>
  <BlockStructure v-bind="$props">
    <template #top>
      <div class="sl-contact-title">
        <h5>
          <a :href="block.contact['@id']">{{ block.contact.title }}</a>
        </h5>
      </div>
    </template>
    <template #body>
      <div class="d-flex flex-wrap flex-row-reverse gap-3">
        <div class="sl-card-image" v-if="block.image">
          <figure class="d-table m-0 text-center">
            <img
              class="figure-img m-0"
              :src="block.image.scales.great.download"
              :alt="block.image_alt_text"
            />
            <figcaption v-if="block.image_caption" class="figure-caption mt-1">
              {{ block.image_caption }}
            </figcaption>
          </figure>
        </div>
        <div class="sl-card-text">
          <p v-if="block.organization">
            {{ $i18n("Organization") }}: {{ block.organization }}
          </p>
          <p v-if="block.departement">
            {{ $i18n("Departement") }}: {{ block.departement }}
          </p>
          <p v-if="block.function">
            {{ $i18n("Function") }}: {{ block.function }}
          </p>
          <p v-if="block.email">{{ $i18n("E-Mail") }}: {{ block.email }}</p>
          <p v-if="block.phone_office">
            {{ $i18n("Office") }}: {{ block.phone_office }}
          </p>
          <p v-if="block.address || block.postal_code || block.city">
            <b>{{ $i18n("Address") }}:</b><br />
            <template v-if="block.address"> {{ block.address }}<br /></template>
            <template v-if="block.postal_code || block.city">
              {{ block.postal_code }} {{ block.city }}<br
            /></template>
            <template v-if="block.country">{{ block.country }}</template>
          </p>
        </div>
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
.sl-contact-title {
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x) 0
    var(--bs-card-spacer-x);
}
</style>
