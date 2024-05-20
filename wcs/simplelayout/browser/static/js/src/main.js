import { createApp } from "vue";
import App from "./App.vue";
import { axiosInstance, axiosNeutralInstance } from "./utils.js";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
import BlockViews from "./plugins/BlockViews.js";
import i18n from "./plugins/i18n.js";
import moment from "moment";
import "moment/dist/locale/de";

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
app.use(i18n);

const element = document.querySelector(".simplelayout-app");
const language = element.getAttribute("data-lang");
moment.locale(language);

app.mount(element);
