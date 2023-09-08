import { createRouter, createWebHistory } from 'vue-router'
import indexContent from '../views/indexContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: indexContent,
      children: [
        {
          path: '',
          name: 'homeBody',
          component:  () => import( '../views/homeContent.vue'),
          children:[
            {
              path:'/action',
              name: 'Action',
              component:  () => import( '../pages/actionView.vue'),
            }
        ]
        },
        {
          path: '/about',
          name: 'About',
          component:  () => import( '../views/AboutView.vue')
        },
        {
          path: '/skill',
          name: 'Skill',
          component:  () => import( '../views/myArticle.vue')
        },
        {
          path: '/me',
          name: 'Me',
          component:  () => import( '../views/personView.vue')
        }
      ]
    }
   
  ]
})

export default router
