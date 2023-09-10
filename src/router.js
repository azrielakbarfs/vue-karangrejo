import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "default",
            component: () => import("./views/pages/HomePage.vue"),
        },
        {
            path: "/ekonomi",
            name: "ekonomi",
            component: () => import("./views/pages/EkonomiPage.vue"),
        },
        {
            path: "/info-pelatihan",
            name: "info-pelatihan",
            component: () => import("./views/pages/InfoPelatihanPage.vue"),
        },
        {
            path: "/limbah",
            name: "limbah",
            component: () => import("./views/pages/LimbahPage.vue"),
        },
        {
            path: "/rumah-belajar",
            name: "rumah-belajar",
            component: () => import("./views/pages/RumahBelajarPage.vue"),
        },
        {
            path: "/wisata",
            name: "wisata",
            component: () => import("./views/pages/WisataPage.vue"),
        },
    ],
});

export default router;
