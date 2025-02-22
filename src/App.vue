<template>
  <div class="h-screen flex flex-col">
    <Header class="mb-auto" />
    <main>
      <div class="theme-selector">
        <button @click="setTheme('darkModern')">Dark Modern</button>
        <button @click="setTheme('tomorrowNightBlue')">
          Tomorrow Night Blue
        </button>
        <button @click="setTheme('red')">Red</button>
        <button @click="setTheme('huacatPink')">Huacat Pink</button>
      </div>
    </main>
    <Footer class="mt-auto" />
  </div>
</template>

<script lang="ts">
import { useThemeStore } from "./stores/themeStore";

import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  components: {
    Header,
    Footer,
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
