import { RouteRecordRaw } from "vue-router";

import { Home, PropsDestructuring } from "../../pages";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "HOME",
        component: Home,
        meta: {
            name: "홈",
            next: "PROPS-DESTRUCTURING",
        },
    },
    {
        path: "/props-destructuring",
        name: "PROPS-DESTRUCTURING",
        component: PropsDestructuring,
        meta: {
            name: "더 나은 props 구조 분해 할당",
            next: "HOME",
        },
    },
];

export default routes;
