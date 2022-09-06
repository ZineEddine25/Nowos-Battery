import { userService } from "../../services/user";
import { router } from "../../routes/router";

const user = JSON.parse(localStorage.getItem("user"));

const state = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };
const actions = {
    login({ dispatch, commit }, { email, password }) {
        commit("loginRequest", { email });
        return userService.login(email, password).then(
            (data) => {
                commit("loginSuccess", data);
                router.push("/").catch((error) => {
                    console.info(error.message);
                });
            },
            (error) => {
                if (error.response.status === 422) {
                    commit("loginFailure", error);
                    return Promise.reject(error);
                }
                commit("loginFailure", error);
                dispatch("alert/error", error, { root: true });
            }
        );
    },
    logout({ commit }) {
        userService.logout();
        commit("logout");
        router.push("/login").catch((error) => {
            console.info(error.message);
        });
    },
};

const mutations = {
    loginRequest(state, data) {
        state.status = { loggingIn: true };
        state.user = data.user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
};

export const account = {
    namespaced: true,
    state,
    actions,
    mutations,
};
