import { createApp } from "vue";
import App from "@/App.vue";
import router from "@router/router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { useThemeStore } from "./store/theme";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
const themeStore = useThemeStore();
themeStore.applyTheme();
app.mount("#app");
