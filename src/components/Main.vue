<template lang="">
  <div class="main_wrapper grow">
    <n-split direction="horizontal" :max="0.75" :min="0.25">
      <template #1>
        <div class="p-4">
          <n-tabs
            v-model:value="aboutName"
            type="card"
            closable
            tab-style="min-width: 80px;"
            @close="handleClose"
          >
            <n-tab-pane
              v-for="(panel, index) in aboutPanels"
              :key="index"
              :tab="panel.name.toString()"
              :name="panel.name"
            >
              <component :is="panel.component" />
            </n-tab-pane>
          </n-tabs>
        </div>
      </template>
      <template #2>
        <div class="p-4">
          <n-tabs
            v-model:value="projectsName"
            type="card"
            closable
            tab-style="min-width: 80px;"
            @close="handleClose"
          >
            <n-tab-pane
              v-for="panel in projectPanels"
              :key="panel"
              :tab="panel.toString()"
              :name="panel"
            >
              {{ panel }}
            </n-tab-pane>
          </n-tabs>
        </div>
      </template>
    </n-split>
  </div>
</template>
<script lang="ts">
import { NSplit, NTabs, NTabPane } from "naive-ui";
import Readme from "./Readme.vue";
import Experience from "./Experience.vue";
import Skills from "./Skills.vue";
export default {
  components: {
    NSplit,
    NTabs,
    NTabPane,
  },
  data() {
    return {
      aboutName: "README.md",
      aboutPanels: [
        {
          name: "README.md",
          component: Readme,
        },

        {
          name: "Experience.vue",
          component: Experience,
        },
        {
          name: "Skills.tsx",
          component: Skills,
        },
      ],
      projectsName: "Project #1.vue",
      projectPanels: [
        "Project #1.vue",
        "Project #2.go",
        "Project #3.tsx",
        "Project #4.vue",
      ],
    };
  },
  methods: {
    handleClose(name: string) {
      const aboutIndex = this.aboutPanels.findIndex((v) => name === v.name);
      if (aboutIndex != -1) {
        this.aboutPanels.splice(aboutIndex, 1);
        this.aboutName = this.aboutPanels[0]?.name || "";
      }

      const projectIndex = this.projectPanels.findIndex((v) => name === v);
      if (projectIndex != -1) {
        this.projectPanels.splice(projectIndex, 1);
        this.projectsName = this.projectPanels[0];
      }
    },
  },
};
</script>
<style lang="scss">
.main_wrapper {
  background: var(--theme-search-bg);
}
</style>
