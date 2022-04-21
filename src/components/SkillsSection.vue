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
  Skills_phpstorm,
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
          imgUrl: Skills_phpstorm,
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

<style scoped>
</style>