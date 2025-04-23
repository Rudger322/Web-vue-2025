import { createRouter, createWebHistory } from 'vue-router';
import DefaulLayout from '../layouts/default.vue';
import HomeView from '../views/home.vue'

const routes = [
    { path: '/', component: DefaulLayout,
        children: [
            { path: '', name: 'home', component: HomeView }
          ]
    }
  ]

  const router = createRouter({ history: createWebHistory(), routes })

export default router;


