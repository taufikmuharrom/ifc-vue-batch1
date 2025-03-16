import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import AboutView from "@/pages/AboutView.vue";
import LocationView from "@/pages/LocationView.vue";
import ExampleView from "@/pages/ExampleView.vue";
import CarrerView from "@/pages/CarrerView.vue";

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
      path: "/career",
      name: "carrer",
      component: CarrerView,
    },
    {
      path: "/location",
      name: "location",
      component: LocationView,
    },
    {
      path: "/example",
      name: "example",
      component: ExampleView,
    },
  ],
});

export default router;
