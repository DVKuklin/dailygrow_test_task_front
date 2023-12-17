import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
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
