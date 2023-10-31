import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";

import { Meta } from "./type";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

export type { Meta };
