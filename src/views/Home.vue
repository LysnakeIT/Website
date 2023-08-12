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
	data() {
		return {
			activeLink: 'home' // Par défaut, le lien d'accueil est actif.
		}
	},
	methods: {
		setActive(link) {
			this.activeLink = link;
		}
	}
};
</script>

<template>
	<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
	<header id="header" class="d-flex flex-column justify-content-center">
		<nav id="navbar" class="navbar nav-menu">
			<ul>
				<li><a href="#home" @click="setActive('home')" :class="{ active: activeLink === 'home' }"><i class="bx bx-home"></i> <span>Home</span></a></li>
				<li><a href="#parcours" @click="setActive('parcours')" :class="{ active: activeLink === 'parcours' }"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
				<li><a href="#skills" @click="setActive('skills')" :class="{ active: activeLink === 'skills' }"><i class="bx bx-server"></i> <span>Services</span></a></li>
				<li><a href="#ProjectsGrid" @click="setActive('ProjectsGrid')" :class="{ active: activeLink === 'ProjectsGrid' }"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
			</ul>
		</nav>
	</header>

	<AppBanner />
		
	<Parcours />
	
	<div class="container mx-auto">
		<Skills />

		<ProjectsGrid />
	</div>
</template>

<style scoped>
#header {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 9997;
    transition: all 0.5s;
    padding: 15px;
    overflow-y: auto;
}

@media (max-width: 991px) {
  #header {
    width: 300px;
    background: #fff;
    border-right: 1px solid #e6e9ec;
    left: -300px;
  }
}

@media (min-width: 991px) {
  #main {
    margin-left: 100px;
  }
}

.d-flex {
    display: flex!important;
}

.flex-column {
    flex-direction: column!important;
}

.justify-content-center {
    justify-content: center!important;
}

.nav-menu * {
    margin: 0;
    padding: 0;
    list-style: none;
}

.nav-menu a, .nav-menu a:focus {
    display: flex;
    align-items: center;
    color: #45505b;
    padding: 10px 18px;
    margin-bottom: 8px;
    transition: 0.3s;
    font-size: 15px;
    border-radius: 50px;
    background: #f2f3f5;
    height: 56px;
    width: 100%;
    overflow: hidden;
}

.nav-menu a i, .nav-menu a:focus i {
    font-size: 20px;
}

.nav-menu a span, .nav-menu a:focus span {
    padding: 0 5px 0 7px;
    color: #45505b;
}

@media (min-width: 992px) {
    .nav-menu a, .nav-menu a:focus {
        width: 56px;
    }

    .nav-menu a span, .nav-menu a:focus span {
        display: none;
        color: #fff;
    }
}

.nav-menu a:hover, .nav-menu li:hover>a {
    color: #fff;
    background: hsl(336, 88%, 45%);
    width: 100%;
}

.nav-menu .active, .nav-menu .active:focus {
    color: #fff;
    background: hsl(336, 88%, 45%);
}

.nav-menu a:hover span, .nav-menu li:hover>a span {
    color: #fff;
    display: block;
}

.bx {
    font-family: boxicons!important;
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
    display: inline-block;
    text-transform: none;
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.bx-home:before {
    content: "\eb12";
}

.nav-menu {
    padding: 0;
    display: block;
}

.navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
}
</style>