import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/Ui/BaseCard.vue";

var app = createApp(App);

app.component("base-card", BaseCard);

app.mount("#app");
