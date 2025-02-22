<template>
  <h1>Test</h1>
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
