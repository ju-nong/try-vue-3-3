import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";

import router from "./router";

import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/lib/common";
import "highlight.js/styles/stackoverflow-dark.min.css";

createApp(App)
    .use(router)
    .use(hljsVuePlugin)
    .component("highlightjs", hljsVuePlugin.component)
    .mount("#app");
