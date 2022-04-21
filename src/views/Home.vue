<script>
import AppBanner from '@/components/AppBanner';
import Parcours from '@/components/ParcoursSection.vue';
import Skills from '@/components/SkillsSection.vue';
import ProjectsGrid from '../components/ProjectsGrid.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		Parcours,
		Skills,
		ProjectsGrid,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<AppBanner class="mb-5 sm:mb-8" />

		<Parcours />

		<Skills />

		<ProjectsGrid />
	</div>
</template>

<style scoped></style>
