import App from "./core/App";
require("./bootstrap");

window.Vue = require("vue").default;
import Vue from "vue";
import { router } from "./routes/router";
import store from "./store";

Vue.component("global-home", require("./components/GlobalHome.vue").default);
Vue.component(
    "tests-component",
    require("./components/TestsComponent.vue").default
);
Vue.component(
    "login-component",
    require("./components/LoginComponent.vue").default
);
const app = new Vue({
    el: "#app",
    router: router,
    store,
    render: (h) => h(App),
});
