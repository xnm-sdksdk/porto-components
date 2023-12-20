import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "",
      // component: ,
      meta: {
        title: "",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView ,
      meta: {
        title: "About",
      },
    },
  ],
});

export default router;
