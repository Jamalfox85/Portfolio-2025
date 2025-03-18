<template>
  <div class="h-screen flex flex-col">
    <Header class="mb-auto" />
    <div class="grow flex">
      <Sidepanel />
      <main class="grow flex">
        <MainComponent />
      </main>
    </div>

    <Footer class="mt-auto" />
  </div>
</template>

<script lang="ts">
import { useThemeStore } from "./stores/themeStore";

import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import Sidepanel from "./components/layout/Sidepanel.vue";
import MainComponent from "./components/Main.vue";

export default {
  components: {
    Header,
    Footer,
    Sidepanel,
    MainComponent,
  },
  data() {
    return {
      themeStore: useThemeStore(),
    };
  },
  methods: {
    setTheme(theme) {
      this.themeStore.setTheme(theme);
    },
  },
  mounted() {
    this.themeStore.loadInitialTheme();
  },
};
</script>

<style scoped></style>
