<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

export default {
	components: {
		AppHeader,
		AppFooter,
	},
	data: () => {
		return {
			themeUtilisateur: localStorage.getItem('theme'),
		};
	},
};
</script>

<template>
	<div :class="themeUtilisateur" class="pt-0.5">
		<AppHeader />

		<transition name="fade" mode="out-in">
			<router-view :theme="themeUtilisateur" />
		</transition>

		<AppFooter />
	</div>
</template>

<style>
#lysnakeit {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.fade-enter-active {
	animation: coming 0.4s;
	animation-delay: 0.2s;
	opacity: 0;
}

.fade-leave-active {
	animation: going 0.4s;
}

@keyframes going {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-10px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}

	to {
		transform: translateX(0px);
		opacity: 1;
	}
}

*::-webkit-scrollbar {
    width: 16px;
}

*::-webkit-scrollbar-track {
    border-radius: 8px;
}

*::-webkit-scrollbar-thumb {
    height: 56px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: #888;
}

*::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}
</style>
