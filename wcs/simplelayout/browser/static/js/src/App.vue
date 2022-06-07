<template>
  <div>
      <button type="button" @click="showModal">
        Click me
      </button>
  <div
    class="modal fade sl-base-modal"
    tabindex="-1"
    aria-labelledby="modal-title"
    aria-hidden="true"
    ref="sl-base-modal"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="modal-title">
            <slot name="title" />
          </h4>
        </div>
        <div class="modal-body"><slot name="body" /></div>
        <div class="modal-footer">
          <button
            id="form-buttons-cancel"
            name="form.buttons.cancel"
            class="btn btn-secondary standalone"
            value="Cancel"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>

import { Modal } from "bootstrap";

export default {
  data() {
    return {
      title: 'HANSI',
      modal: null,
    }
  },
  mounted() {
    const modal = this.$refs["sl-base-modal"];
    this.modal = new Modal(modal, this.modalOptions);
  },
  methods: {
    showModal() {
      this.modal.show();
    }
  }
}
</script>
