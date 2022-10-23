import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'

const routes = [
    {
        path: '/',
        name: 'principal',
        component: PrincipalView
    },
    {
        path: '/:id',
        name: 'acercade',
        component: () => import('../views/PeliView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
