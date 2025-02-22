import { ref } from "vue";
import { defineStore } from "pinia";

interface ThemeVariables {
  [key: string]: {
    "--theme-editor-bg": string;
    "--theme-file-bg": string;
    "--theme-sidebar-bg": string;
    "--theme-search-bg": string;

    "--theme-bg-lighter": string;
    "--theme-text": string;
    "--theme-primary": string;
    "--theme-secondary": string;
    "--theme-accent": string;
  };
}

export const useThemeStore = defineStore("themeStore", () => {
  const currentTheme = ref<string>(
    localStorage.getItem("theme") || "darkModern"
  );
  const themeVariables: ThemeVariables = {
    darkModern: {
      "--theme-editor-bg": "#1f1f1f",
      "--theme-file-bg": "#1f1f1f",
      "--theme-sidebar-bg": "#181818",
      "--theme-search-bg": "#2a2a2a",

      "--theme-bg-lighter": "#2a2a2a",
      "--theme-text": "#ffffff",
      "--theme-primary": "##3376cd",
      "--theme-secondary": "#ffaa00",
      "--theme-accent": "#ff00ff",
    },
    tomorrowNightBlue: {
      "--theme-editor-bg": "#101925",
      "--theme-file-bg": "#ffffff",
      "--theme-sidebar-bg": "#051631",
      "--theme-search-bg": "#1c2530",

      "--theme-bg-lighter": "#f0f0f0",
      "--theme-text": "#ffffff",
      "--theme-primary": "#ff5733",
      "--theme-secondary": "#33c3ff",
      "--theme-accent": "#e8ff33",
    },
    red: {
      "--theme-editor-bg": "#6e2725",
      "--theme-file-bg": "#330402",
      "--theme-sidebar-bg": "#500b05",
      "--theme-search-bg": "#753330",

      "--theme-bg-lighter": "#f0f0f0",
      "--theme-text": "#ffffff",
      "--theme-primary": "#ff5733",
      "--theme-secondary": "#33c3ff",
      "--theme-accent": "#e8ff33",
    },
    huacatPink: {
      "--theme-editor-bg": "#38193b",
      "--theme-file-bg": "#38193b",
      "--theme-sidebar-bg": "#38193b",
      "--theme-search-bg": "#421e45",

      "--theme-bg-lighter": "#f0f0f0",
      "--theme-text": "#ffffff",
      "--theme-primary": "#ff5733",
      "--theme-secondary": "#33c3ff",
      "--theme-accent": "#e8ff33",
    },
  };

  function setTheme(theme: keyof ThemeVariables & string) {
    currentTheme.value = theme;
    localStorage.setItem("theme", theme);

    const themeSettings = themeVariables[theme];
    for (const [key, value] of Object.entries(themeSettings)) {
      document.documentElement.style.setProperty(key, value);
    }
  }

  function loadInitialTheme() {
    setTheme(currentTheme.value);
  }

  return { currentTheme, setTheme, loadInitialTheme };
});
