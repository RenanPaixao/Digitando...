import { createRouter, createWebHistory } from 'vue-router'
import Typing from '@/views/Typing.vue'

const routes = [
	{
		path: '/',
		component: Typing,
		name: 'Home'
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue')
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
