import { useSimplelayoutStore } from "@/store.js";
export default {
  install: (app) => {
    // inject a globally available $translate() method
    const sl = useSimplelayoutStore();
    app.config.globalProperties.$i18n = (message) => {
      return sl.getTranslation(message);
    };
  },
};
