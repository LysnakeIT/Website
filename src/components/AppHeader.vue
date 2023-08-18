<script>
import ThemeSwitcher from './ThemeSwitcher.vue';

export default {
	components: {
		ThemeSwitcher,
	},
	data() {
		return {
			theme: '',
		};
	},

	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		},
	},
};
</script>

<template>
	<nav id="nav" class="sm:container sm:mx-auto">
		<div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
			<div class="flex justify-between items-center px-4 sm:px-0">
				<div>
					<router-link to="/">
						<img
							v-if="theme === 'light'"
							src="@/assets/images/logo-light.webp"
							class="w-36"
							width="144"
							height="65"
							alt="Dark Logo"
							onclick="window.location='https://github.com/LysnakeIT'"/>
						<img
							v-else
							src="@/assets/images/logo-light.webp"
							class="w-36"
							width="144"
							height="65"
							alt="Light Logo"
							onclick="window.location='https://github.com/LysnakeIT'"/>
					</router-link>
				</div>

				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"/>
			</div>

			<div :class="isOpen ? 'block' : 'hidden'" class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
				<router-link to="/" class="font-general-medium block text-left text-3xl font-medium text-primary-dark hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 " aria-label="Portfolio">Portfolio</router-link>
			</div>
			
			<div class="hidden sm:flex justify-between items-center flex-col md:flex-row">

				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"/>
			</div>
		</div>
	</nav>
</template>

<style scoped></style>