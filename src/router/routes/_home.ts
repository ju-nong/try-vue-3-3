import { RouteRecordRaw } from "vue-router";

import { Home } from "../../pages";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "HOME",
        component: Home,
        meta: {
            name: "홈",
        },
    },
];

export default routes;
