<template>
  <div class="readme_wrapper">
    <div class="mb-8">
      <p class="muted">&lt;h1&gt;</p>
      <div class="flex items-center justify-between">
        <h1 class="main-header">Hi, I'm Jamal &#128075;</h1>
        <a
          href="/Jamal_Fox_Resume_Feb_2025.pdf"
          download="Jamal_Fox_Resume.pdf"
        >
          <n-button type="primary"> Download Resume </n-button>
        </a>
      </div>
      <p class="muted">&lt;/h1&gt;</p>
    </div>
    <div class="mb-4">
      <p class="muted">&lt;p&gt;</p>
      <p class="main-text">
        Welcome to my portfolio! I'm a full-stack developer who thrives on
        building scalable and intuitive applications. Whether it's crafting
        sleek UI's in Vue/React, optimizing backend performance with Go and
        Laravel, or building automated workflows, I love turning ideas into
        functional, high-performing solutions.
      </p>
      <p class="muted">&lt;/p&gt;</p>
    </div>
    <div class="mb-4">
      <p class="muted">&lt;p&gt;</p>
      <p class="main-text">
        I believe in clean code, sclaable architecture, and user-first design.
        My projects range from Clean UI development with respect to usability
        and accessibility to performant and scalable backend APIs.
      </p>
      <p class="muted">&lt;/p&gt;</p>
    </div>
    <div class="mb-4">
      <p class="muted">&lt;p&gt;</p>
      <p class="main-text">
        Feel free to explore my work and reach out if you'd like to collaborate!
        &#128640;
      </p>
      <p class="muted">&lt;/p&gt;</p>
    </div>
    <div class="mb-4">
      <p class="muted">&lt;p&gt;</p>
      <p class="main-text">
        📧 <strong>Contact me: </strong>
        <a
          href="mailto:Fox.Jamal@outlook.com"
          class="email underline hover:text-blue-500 transition"
          >Fox.Jamal@outlook.com</a
        >
      </p>
      <p class="muted">&lt;/p&gt;</p>
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
    return {};
  },
  methods: {
    downloadResume() {},
  },
};
</script>

<style lang="scss">
.readme_wrapper {
  padding: 20px;
  color: var(--theme-text);
  max-width: 700px;
  line-height: 1.6;

  .main-header {
    font-size: 2.5rem;
    // line-height: 2.4rem;
    margin-left: 16px;
  }

  .muted {
    opacity: 0.35;
    font-size: 0.9em;
  }

  .main-text {
    font-size: 1.1rem;
    // line-height: 1.1rem;
    margin-left: 16px;
  }
}
</style>

<!-- Future Additions:
    2. Add resume explainer video
-->
