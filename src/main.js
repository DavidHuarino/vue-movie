import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./index.css";
import router from "./router/index";
const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
