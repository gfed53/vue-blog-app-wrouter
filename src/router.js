import Vue from "vue";
import Router from "vue-router";
import PostList from "./views/PostList.vue";
import PostDetail from "./views/PostDetail.vue";
import PostCreate from "./views/PostCreate.vue";
import PostEdit from "./views/PostEdit.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "post-list",
            component: PostList
        },
        {
            path: "/view-post/:id",
            name: "post-detail",
            component: PostDetail
        },
        {
            path: "/create-new",
            name: "post-create",
            component: PostCreate
        },
        {
            path: "/edit/:id",
            name: "post-edit",
            component: PostEdit
        }
        // {
        //     path: "/about",
        //     name: "about",
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import(/* webpackChunkName: "about" */ "./views/About.vue")
        // }
    ]
});
