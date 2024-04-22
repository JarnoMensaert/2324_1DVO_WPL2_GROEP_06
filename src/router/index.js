import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MeubelsView from '../views/MeubelsView.vue'
import WoonaccesoiresView from "@/views/WoonaccesoiresView.vue";
import StoriesView from "@/views/StoriesView.vue";
import KlantenserviceView from "@/views/KlantenserviceView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/meubels',
      name: 'meubels',
      component: MeubelsView
    },
    {
      path: '/woonaccesoires',
      name: 'woonaccesoires',
      component: WoonaccesoiresView
    },
    {
      path: '/stories',
      name: 'stories',
      component: StoriesView
    },
    {
      path: '/klantenservice',
      name: 'klantenservice',
      component: KlantenserviceView
    }
  ]
})

export default router
