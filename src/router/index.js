import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'LysnakeIT',
		},
	},
];

const monRouter = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('lysnakeit').scrollIntoView();
	},
});

export default monRouter;

monRouter.beforeEach((to, from, next) => {

	document.title = to.meta.title
	next();
});
