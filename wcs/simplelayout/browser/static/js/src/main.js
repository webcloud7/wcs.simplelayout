import { createApp } from "vue";
import App from "./App.vue";
import { axiosInstance } from "./utils.js";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(VueAxios, { axios: axiosInstance() });
app.mount("#app");
