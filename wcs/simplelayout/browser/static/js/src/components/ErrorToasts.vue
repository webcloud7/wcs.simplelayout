<template>
  <div
    class="toast-container position-fixed top-0 start-50 p-3 mt-8"
    ref="toasts"
  >
    <div
      v-for="(message, index) in sl.errors"
      :class="`toast fade show ${getTypeClass(message)}`"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-delay="7000"
      :data-has-event="false"
      :key="index"
    >
      <div class="toast-header">
        <strong class="me-auto">{{ message.title }}</strong>
        <small class="text-muted">just now</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">{{ message.text }}</div>
    </div>
  </div>
</template>
<script>
import { useSimplelayoutStore } from "@/store.js";

export default {
  setup() {
    const sl = useSimplelayoutStore();
    return { sl };
  },

  updated() {
    this.$refs.toasts.children.forEach((toast, index) => {
      const hasEvent = toast.getAttribute("data-has-event");
      if (!hasEvent) {
        toast.addEventListener("hidden.bs.toast", this.onHideToast(index));
      }
    });
  },
  methods: {
    onHideToast(index) {
      this.sl.deleteErrorMessage(index);
    },
    getTypeClass(message) {
      if (message.type == "error") {
        return "text-bg-danger";
      }
    },
  },
};
</script>
