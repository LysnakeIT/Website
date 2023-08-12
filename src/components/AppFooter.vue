<script>
export default {
	data() {
		return {
			copyrightDate: new Date().getFullYear(),
			projectName: 'LysnakeIT',
			author: 'Lysnake',
		};
	},
};
</script>

<template>
	<div class="container mx-auto ">
		<div class="pt-12 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">

			<div class="flex justify-center items-center text-center">
				<div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"> &copy;{{ copyrightDate }}
					<a
						href="https://github.com/LysnakeIT"
						target="__blank"
						class="font-general-medium hover:underline hover:text-purple-600 dark:hover:text-purple-300 duration-500">
						{{ projectName }}
					</a>
					- Fait avec ❤️ par
					<a
						href="https://lysnakeit.fr"
						target="__blank"
						class="font-general-medium text-secondary-dark dark:text-secondary-light hover:underline hover:text-purple-600 dark:hover:text-purple-300 duration-500"
						>{{ author }}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
