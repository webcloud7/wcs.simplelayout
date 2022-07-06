import { createApp } from "vue";
import App from "./App.vue";
import { axiosInstance, axiosNeutralInstance } from "./utils.js";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
import BlockViews from "./plugins/BlockViews.js";

const app = createApp(App);
app.use(VueAxios, {
  axios: axiosInstance(),
  axioshtml: axiosNeutralInstance(),
});
const pinia = createPinia();
pinia.use(({ store }) => {
  store.axios = axiosInstance();
});

app.use(pinia);
app.use(BlockViews);

window.addEventListener("load", () => {
  app.mount("#app");
});
