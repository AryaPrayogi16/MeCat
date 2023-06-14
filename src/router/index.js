// Composables

import { createRouter, createWebHistory } from 'vue-router';



const routes = [
  {
    path: '/',
    component: () => import('/src/layouts/Guest.vue'),
    children: [
      {
        path: '/',
        name: 'login',
        component: () => import('/src/views/Login.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('/src/views/Register.vue'),
      },
    ],
  },

  {
    path:'/auth/home',
    component: () => import('/src/views/Home.vue'),
    name:'home'
  },
  {
    path: '/auth/msg',
    component: () => import('/src/views/Message.vue'),
    name:'msg.room'
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
