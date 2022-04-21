<script>
import ProjectSingle from './ProjectSingle.vue';
import projects from '../data/projects';

export default {
	components: { ProjectSingle},
	data: () => {
		return {
			projects,
			projectsHeading: 'Projets Portfolio',
		};
	},
	computed: {
		filteredProjects() {
			return this.projects;
		},
	},
};
</script>

<template>
	<section class="pt-10 sm:pt-14">
		<div class="text-center">
			<p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
				{{ projectsHeading }}
			</p>
		</div>

		<div class="mt-10 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"/>
		</div>
	</section>
</template>

<style scoped></style>
