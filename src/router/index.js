import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import B24Analitics from '../views/B24Analitics.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/b24-analitics',
      name: 'b24-analitics',
      component: B24Analitics
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
   { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: NotFound 
    },
  ]
  
})

router.resolve({
   name: 'not-found',
   params: { pathMatch: ['not', 'found'] },
}).href

export default router
