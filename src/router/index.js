import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ServicesView from "@/views/ServicesView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        title: "About",
      },
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
      meta: {
        title: "Services",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: {
        title: "Contacts",
      },
    },
  ],
});

export default router;
