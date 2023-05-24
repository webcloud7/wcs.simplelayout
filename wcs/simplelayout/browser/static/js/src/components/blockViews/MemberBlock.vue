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
        <div class="sl-card-text row">
          <div class="col-12 col-xl-8 mt-3 memberblock-info">
            <div class="row">
              <div class="col-5" v-if="block.organization">
                {{ $i18n("Organization") }}
              </div>
              <div class="col-7">{{ block.organization }}</div>
            </div>
            <div class="row">
              <div class="col-5" v-if="block.departement">
                {{ $i18n("Departement") }}
              </div>
              <div class="col-7">{{ block.departement }}</div>
            </div>
            <div class="row">
              <div class="col-5" v-if="block.function">
                {{ $i18n("Function") }}
              </div>
              <div class="col-7">{{ block.function }}</div>
            </div>
            <div class="row">
              <div class="col-5" v-if="block.email">
                {{ $i18n("E-Mail") }}
              </div>
              <div class="col-7">
                <div class="text-truncate">
                  <a :href="`mailto:${block.email}`">{{ block.email }}</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-5" v-if="block.www">
                {{ $i18n("Website") }}
              </div>
              <div class="col-7">
                <div class="text-truncate">
                  <a :href="`${block.www}`" target="_blank">{{ block.www }}</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-5" v-if="block.phone_office">
                {{ $i18n("Office") }}
              </div>
              <div class="col-7">{{ block.phone_office }}</div>
            </div>
            <div class="row">
              <div class="col-5" v-if="block.address">
                {{ $i18n("Address") }}
              </div>
              <div class="col-7">
                <template v-if="block.address">
                  {{ block.address }}<br
                /></template>
                <template v-if="block.postal_code || block.city">
                  {{ block.postal_code }} {{ block.city }}<br
                /></template>
                <template v-if="block.country">{{ block.country }}</template>
              </div>
            </div>
          </div>
          <div v-if="getOpeningHours" class="col-12 col-xl-4 mt-3 memberblock-openinghours">
            {{ $i18n("Opening hours") }}:
            <ul class="list-group list-group-flush">
              <li
                v-for="(entry, index) in getOpeningHours"
                :key="index"
                class="list-group-item"
              >
                <span v-if="entry.dayOfWeek">
                  {{
                    entry.dayOfWeek
                      .map((day) => getReadableWeekdays(day))
                      .join(", ")
                  }}:
                </span>
                <span v-if="entry.opens == '00:00' && entry.closes == '00:00'">
                  {{ $i18n("Closed") }}
                </span>
                <span v-if="entry.opens != '00:00' || entry.closes != '00:00'">
                  <span class="opens">{{ entry.opens }}</span> -
                  <span class="closes">{{ entry.closes }}</span> </span
                ><span v-if="entry.validFrom || entry.validThrough">
                  ( {{ $i18n("Validity") }}
                  <span class="validFrom">{{ entry.validFrom }}</span> -
                  <span class="validThrough">{{ entry.validThrough }}</span> )
                </span>
              </li>
            </ul>
          </div>
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
  computed: {
    getOpeningHours() {
      if (
        this.block.show_opening_hours &&
        this.block.structured_opening_hours.openingHoursSpecification
      ) {
        return this.block.structured_opening_hours.openingHoursSpecification;
      }
      return false;
    },
  },
  methods: {
    getReadableWeekdays(day) {
      const weekdays = {
        Monday: this.$i18n("Mo"),
        Tuesday: this.$i18n("Tu"),
        Wednesday: this.$i18n("We"),
        Thursday: this.$i18n("Th"),
        Friday: this.$i18n("Fr"),
        Saturday: this.$i18n("Sa"),
        Sunday: this.$i18n("Su"),
      };
      return weekdays[day];
    },
  },
};
</script>
<style lang="scss">
.sl-contact-title {
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x) 0
    var(--bs-card-spacer-x);
}

.memberblock-info,
.memberblock-openinghours {
  flex-basis: 300px;
  flex-grow: 1;
}

</style>
