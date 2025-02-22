<template>
  <h1 class="text-red-500">Test</h1>
  <p class="text-blue-500">Hello Vite + Vue 3 + TypeScript + Tailwind CSS</p>
</template>

<script lang="ts">
export default {
  data() {
    return {
      // Your component data goes here
    };
  },
  props: {
    // Your component props go here
  },
  computed: {
    // Your computed properties go here
  },
  methods: {
    // Your component methods go here
  },
  created() {
    // Lifecycle hook - called when the component is created
  },
  mounted() {
    window.$message.success("naive ui added.");
    window.$message.error("error test");
  },
};
</script>

<style scoped></style>
