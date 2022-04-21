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
				Salut ! Moi c'est Lilian a.k.a Lysnake  <img src="https://github.com/SatYu26/SatYu26/raw/master/Assets/Hi.gif" width="30px" style="display: initial; vertical-align: initial;"/>
			</h1>
			<br>
			<p class="font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl text-center sm:text-left leading-none text-gray-400">
				Je suis étudiant en deuxième année en informatique où j'apprends le développement informatique, mais je suis avant tout un grand passionné de la cybersécurité.
			</p>
			<div class="flex justify-center sm:block">
				<a
					download="developer.pdf"
					href="/files/developer.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-purple-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-purple-50 focus:ring-1 focus:ring-purple-900 hover:bg-purple-500 text-gray-500 hover:text-white duration-500"
					style="background-color: hsl(336, 88%, 45%); color: #FFF;"
					aria-label="Download CV">
					<i class="uil uil-download-alt button__icon ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i>
					<span class="text-sm sm:text-lg font-general-medium duration-100">Télécharger CV</span>
				</a>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/3 text-right float-right">
			<img
				style="display:block; margin-left: auto; margin-right: auto; border-radius: .5rem; justify-self: center; align-self: center;"
				v-if="theme === 'light'"
				src="@/assets/images/developer.jpg"
				alt="Developer"/>
			<img
				style="display:block; margin-left: auto; margin-right: auto; border-radius: .5rem; justify-self: center; align-self: center;"
				v-else
				src="@/assets/images/developer.jpg"
				alt="Developer"/>
		</div>
	</section>
</template>

<style scoped></style>
