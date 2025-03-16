import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import CarrerView from "@/pages/CarrerView.vue";
import AboutView from "@/pages/AboutView.vue";
import LocationView from "@/pages/LocationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/carrer",
      name: "carrer",
      component: CarrerView,
    },
    {
      path: "/location",
      name: "location",
      component: LocationView,
    },
  ],
});

export default router;
