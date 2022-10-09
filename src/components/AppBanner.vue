<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
		<div class="w-full md:w-1/3 text-left">
			<h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
				Salut ! Moi c'est Lilian a.k.a Lysnake  <img src="@/assets/images/hi.gif" width="30px" height="30px" style="display: initial; vertical-align: initial;" alt="Gif salut"/>
			</h1>
			<br>
			<p class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400">
				Je suis étudiant en troisième année d'ingénieur en apprentissage dans le domaine de la cybersécurité dont je suis un grand passionné, mais il m'arrive aussi de faire du développement informatique.
			</p>
			<div class="flex justify-center sm:block">
				<a
					download="developer.pdf"
					href="/files/developer.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-purple-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-purple-50 focus:ring-1 focus:ring-purple-900 hover:bg-purple-500 text-gray-500 hover:text-white duration-500"
					style="background-color: hsl(336, 88%, 45%); color: #FFF;"
					aria-label="Download CV">
                    <svg width="1em" xmlns="http://www.w3.org/2000/svg" class="button__icon ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100" fill="currentColor" data-name="Layer 1" viewBox="0 0 24 24">
						<path d="M8.29,13.29a1,1,0,0,0,0,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-1.29-1.3A1,1,0,0,0,8.29,13.29ZM18,9H16a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H8A1,1,0,0,0,8,9H6a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V12A3,3,0,0,0,18,9Z"/>
					</svg>
					<span class="text-sm sm:text-lg font-general-medium duration-100">Télécharger CV</span>
				</a>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/3 text-right float-right">
			<img
				style="display:block; margin-left: auto; margin-right: auto; border-radius: .5rem; justify-self: center; align-self: center; width: 400px"
				v-if="theme === 'light'"
				src="@/assets/images/developer.webp"
				alt="Developer"
				width="400px"
				height="400px"/>
			<img
				style="display:block; margin-left: auto; margin-right: auto; border-radius: .5rem; justify-self: center; align-self: center; width: 400px;"
				v-else
				src="@/assets/images/developer.webp"
				alt="Developer"/>
		</div>
	</section>
</template>

<style scoped></style>
