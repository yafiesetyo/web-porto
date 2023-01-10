import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import ExpView from "../views/ExpView.vue";
import ProjView from "../views/ProjView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: IndexView,
      meta: { transition: "slide-left" },
    },
    {
      path: "/experience",
      name: "experience",
      component: ExpView,
      meta: { transition: "slide-left" },
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjView,
      meta: { transition: "slide-left" },
    },
  ],
});

export default router;
