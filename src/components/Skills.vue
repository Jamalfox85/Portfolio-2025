<template>
  <div class="skills_wrapper">
    <div class="mb-8">
      <p class="muted">&lt;h1&gt;</p>
      <div class="flex flex-wrap items-center justify-between ml-6">
        <h1 class="main-header whitespace-nowrap">Skills</h1>
      </div>
      <p class="muted">&lt;/h1&gt;</p>
    </div>
    <div class="mb-4 flex flex-col" v-for="skillGroup in skills">
      <p class="muted">&lt;div&gt;</p>
      <h2 class="ml-6 text-xl mb-2">{{ skillGroup.name }}</h2>
      <div class="ml-6 flex flex-wrap">
        <div class="skill-block" v-for="skill in skillGroup.skills.primary">
          <img :src="getIconUrl(skill.icon)" />
          <small>{{ skill.name }}</small>
        </div>
      </div>
      <div class="m-1"></div>
      <div class="ml-6 flex flex-wrap">
        <div class="skill-block" v-for="skill in skillGroup.skills.secondary">
          <img :src="getIconUrl(skill.icon)" />
          <small>{{ skill.name }}</small>
        </div>
      </div>
      <p class="muted">&lt;/div&gt;</p>
    </div>
  </div>
</template>

<script lang="ts">
import { NButton } from "naive-ui";
export default {
  components: {
    NButton,
  },
  data() {
    return {
      skills: [
        {
          name: "Front-End Development",
          skills: {
            primary: [
              {
                name: "JavaScript",
                icon: "js",
                primary: true,
              },
              {
                name: "TypeScript",
                icon: "ts",
                primary: true,
              },
              {
                name: "Vue.js",
                icon: "vue",
                primary: true,
              },
              {
                name: "React",
                icon: "react",
                primary: true,
              },
              {
                name: "React Native",
                icon: "react",
                primary: true,
              },
              {
                name: "HTMx",
                icon: "htmx",
                primary: true,
              },
            ],
            secondary: [
              {
                name: "HTML",
                icon: "html",
                primary: false,
              },
              {
                name: "CSS",
                icon: "css",
                primary: false,
              },
              {
                name: "Sass",
                icon: "sass",
                primary: false,
              },
              {
                name: "Tailwind",
                icon: "tailwind",
                primary: false,
              },
              {
                name: "Bootstrap",
                icon: "bootstrap",
                primary: false,
              },
            ],
          },
        },
        {
          name: "Back-End Development",
          skills: {
            primary: [
              {
                name: "Go",
                icon: "go",
                primary: true,
              },
              {
                name: "PHP",
                icon: "php",
                primary: true,
              },
              {
                name: "Laravel",
                icon: "laravel",
                primary: true,
              },
            ],
            secondary: [
              {
                name: "MySQL",
                icon: "mysql",
                primary: false,
              },
              {
                name: "Redis",
                icon: "redis",
                primary: false,
              },
              {
                name: "Supabase",
                icon: "supabase",
                primary: false,
              },
            ],
          },
        },
        {
          name: "Version Control & Dev Tools",
          skills: {
            primary: [],
            secondary: [
              {
                name: "Git",
                icon: "git",
                primary: false,
              },
              {
                name: "GithHub",
                icon: "github",
                primary: false,
              },
              {
                name: "Docker",
                icon: "docker",
                primary: false,
              },
            ],
          },
        },
        {
          name: "Other",
          skills: {
            primary: [],
            secondary: [
              {
                name: "Figma",
                icon: "figma",
                primary: false,
              },
              {
                name: "Accessibility",
                icon: "accessibility",
                primary: false,
              },
            ],
          },
        },
      ],
    };
  },
  methods: {
    getIconUrl(skillName: string) {
      return new URL(`../assets/skill-icons/${skillName}.png`, import.meta.url)
        .href;
    },
  },
};
</script>

<style lang="scss">
.skills_wrapper {
  padding: 20px;
  color: var(--theme-text);
  line-height: 1.6;
  height: 85vh;
  overflow-y: auto;

  .main-header {
    font-size: 2.5rem;
  }

  .muted {
    opacity: 0.35;
    font-size: 0.9em;
  }

  .skill-block {
    border-radius: 8px;
    width: 5em;
    height: 5em;
    margin: 4px 4px 12px 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
