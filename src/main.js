import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';

createApp(App).use(router).mount('#lysnakeit');

const themeUtilisateur = localStorage.getItem('theme');

if (themeUtilisateur === 'dark' && document.querySelector('body').classList.contains('theme-utilisateur')) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
