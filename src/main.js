import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { firestorePlugin } from "vuefire";
import "./assets/main.css";

const app = createApp(App);

app.use(firestorePlugin);
app.use(router);

app.mount("#app");
