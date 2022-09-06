import Vue from "vue";
import Vuex from "vuex";

import { account } from "./modules/account";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        alert,
        account,
    }, //for refresh page ;)
    plugins: [createPersistedState()],
    getters: {
        user(state) {
            // console.log("user state", state.account.user);
            return state.account.user;
        },
    },
});
