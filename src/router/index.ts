import {createRouter, createWebHashHistory} from "vue-router";

// 配置router对象
const router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
    // history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: () => import("@/components/HelloWorld.vue"),
        },
    ],
});
export default router;
