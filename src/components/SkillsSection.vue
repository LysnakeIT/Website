<script>
import {
  Skills_java,
  Skills_javascript,
  Skills_python,
  Skills_vue,
  Skills_sqlite,
  Skills_mongo,
  Skills_html5,
  Skills_css3,
  Skills_angular,
  Skills_pugjs,
  Skills_ajax,
  Skills_git,
  Skills_npm,
  Skills_docker,
  Skills_command,
  Skills_vscode,
  Skills_intellij,
  Skills_pycharm,
  Skills_webstorm,
  Skills_node,
} from "@/assets/skills/index.js";
export default {
  data: function () {
    return {
      skillsType: "",

      skillsItems: [
        {
          imgUrl: Skills_java,
        },
        {
          imgUrl: Skills_javascript,
        },
        {
          imgUrl: Skills_python,
        },
        {
          imgUrl: Skills_sqlite,
        },
        {
          imgUrl: Skills_mongo,
        },
        {
          imgUrl: Skills_vue,
        },
        {
          imgUrl: Skills_html5,
        },
        {
          imgUrl: Skills_css3,
        },
        {
          imgUrl: Skills_angular,
        },
        {
          imgUrl: Skills_pugjs,
        },
      ],
      toolsItems: [
        {
          imgUrl: Skills_ajax,
        },
        {
          imgUrl: Skills_git,
        },
        {
          imgUrl: Skills_npm,
        },
        {
          imgUrl: Skills_docker,
        },
        {
          imgUrl: Skills_command,
        },
        {
          imgUrl: Skills_vscode,
        },
        {
          imgUrl: Skills_intellij,
        },
        {
          imgUrl: Skills_pycharm,
        },
        {
          imgUrl: Skills_webstorm,
        },
        {
          imgUrl: Skills_node,
        },
      ],
    };
  },
  mounted() {
    this.initSkillsFirstType();
  },
  methods: {
    initSkillsFirstType() {
      const skillsSwitchBtn = this.$refs.skillsSwitchBtn;
      if (!skillsSwitchBtn) {
        return;
      }
      this.skillsType = skillsSwitchBtn.querySelector("input")?.value || "";
    },
  },
};
</script>

<template>
  <div id="skills" class="skills-section section" tabindex="-1">
    <div class="container">
      <div class="section-content row">
        <div class="skills-text col-lg-6">
          <div class="text-box-inline">
            <h2 class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">
              Mes compétences et
              <br />
              outils que j'utilise
            </h2>
            <p
              class="
                font-general-medium
                mt-2
                text-lg
                sm:text-xl
                xl:text-2xl
                text-center
                sm:text-left
                leading-none
                text-gray-400
              ">
              Je développe des mini-projets personnels qui me semblent
              pour apprendre en essayant de nouveaux langages pour acquérir 
              de nouvelles compétences.
            </p>
            <div ref="skillsSwitchBtn" class="toggle-switch-btn text-xl dark:text-ternary-light mb-2">
              <input
                id="skills-list"
                v-model="skillsType"
                type="radio"
                value="skills"
                checked/>
              <label for="skills-list" class="link-hover">Compétences</label>
              <input
                id="tools-list"
                v-model="skillsType"
                type="radio"
                value="tools"/>
              <label for="tools-list" class="link-hover">Outils</label>
              <span
                class="switcher-toggle"
                style="width: calc((100% - 8px) / 2)">
              </span>
            </div>
          </div>
        </div>

        <div class="skills-items col-lg-6">
          <ul v-show="skillsType === 'skills'">
            <li v-for="skill in skillsItems" :key="skill.imgUrl">
              <div class="skill-icon">
                <img :src="skill.imgUrl" />
              </div>
            </li>
          </ul>

          <ul v-show="skillsType === 'tools'">
            <li v-for="tool in toolsItems" :key="tool.imgUrl">
              <div class="skill-icon">
                <img :src="tool.imgUrl" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.section:not(.page) {
    padding-top: 80px;
    padding-bottom: 80px;
}

.section {
    outline: none;
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1*var(--bs-gutter-y));
    margin-right: calc(-.5*var(--bs-gutter-x));
    margin-left: calc(-.5*var(--bs-gutter-x));
}

.col-lg-6{flex:0 0 auto;width:50%}
.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-top:var(--bs-gutter-y)}

@media (min-width: 1400px) {
  .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    max-width: 1320px;
	}
}

.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 992px){
.col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
	}
}

.section .text-box-inline > *:not(.subtitle):not(:last-child) {
	margin-bottom: 30px;
}

.toggle-switch-btn {
	position: relative;
	display: flex;
	height: 46px;
	width: fit-content;
	padding: 4px;
	border: 1px solid;
	border-radius: 30px;
}

.toggle-switch-btn input {
	position: absolute;
	height: 0;
	width: 0;
	opacity: 0;
}

.toggle-switch-btn input:checked+label {
    color: hsl(0, 0%, 100%);
}

.toggle-switch-btn label {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-width: 0;
    height: 100%;
    font-weight: 700;
    white-space: nowrap;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 30px;
    cursor: pointer;
    transition: color .2s cubic-bezier(.4,0,.2,1);
}

.toggle-switch-btn .switcher-toggle {
	position: absolute;
	z-index: 0;
	top: 4px;
	height: calc(46px - (4px * 2) - 2px);
	border-radius: 30px;
	cursor: pointer;
	transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	background-color: hsl(336, 88%, 45%);
}

.toggle-switch-btn input:nth-of-type(2):checked ~ .switcher-toggle {
	transform: translateX(100%);
}

.skills-section .section-content {
	align-items: center;
	margin-bottom: -50px;
}
.skills-section .section-content > * {
	margin-bottom: 50px;
}
@media (max-width: 767px) {
	.skills-section .section-content .skills-text .toggle-switch-btn {
		margin: auto;
	}
}
.skills-section .section-content .skills-items ul {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0 -8px -16px;
}
.skills-section .section-content .skills-items li {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 80px;
	margin: 0 8px 16px;
	border-radius: 0.63rem;
	animation: 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
	background-color: hsl(0, 0%, 19%);
	box-shadow: 11px 10px 38px rgba(0, 0, 0, 0.38);
}
.skills-section .section-content .skills-items li .skill-icon img {
	display: block;
	width: 48px;
	margin: auto;
}
.skills-section .section-content .skills-items li:focus {
	outline: none;
}
.light_theme.enable-focus-style .skills-section .section-content .skills-items li:focus {
	box-shadow: 0 0 0 3px rgba(hsl(13, 96%, 47%), 0.7);
}
.dark_theme.enable-focus-style .skills-section .section-content .skills-items li:focus {
	box-shadow: 0 0 0 3px rgba(hsl(13, 96%, 47%), 0.7);
}
</style>
