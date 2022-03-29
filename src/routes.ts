import { createRouter, createWebHistory } from 'vue-router';
import store from './store';
import Http from './services/Api';

const routes = [
	{
		path: '/',
		name: 'Home'
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue')
	}
];

export default createRouter({
	history: createWebHistory(),
	routes
});
