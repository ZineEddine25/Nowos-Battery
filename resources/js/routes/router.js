import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: () => import("../components/TestsComponent"),
        },
        {
            path: "/login",
            component: () => import("../components/LoginComponent"),
        },
    ],
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/login"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("token");
    if (authRequired && !loggedIn) {
        return next("/login");
    }
    next();
});
