<template>
  <div class="header_wrapper flex items-center justify-center">
    <div class="header-center flex items-center mx-auto">
      <div class="search-bar mx-2">
        <p class="text-xs">Jamal Fox • Full Stack Developer</p>
      </div>
      <font-awesome-icon
        :icon="['far', 'envelope']"
        class="header-icon text-sm"
      />
    </div>
    <div class="header-icons">
      <font-awesome-icon
        :icon="['fas', 'window-maximize']"
        class="header-icon text-sm rotate-90"
      />
      <font-awesome-icon
        :icon="['fas', 'window-maximize']"
        class="header-icon text-sm"
      />
      <font-awesome-icon
        :icon="['fas', 'window-maximize']"
        class="header-icon text-sm rotate-270"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss">
.header_wrapper {
  background-color: var(--theme-editor-bg);
  color: var(--theme-text);
  padding: 0.1rem 8px;
  .header-center {
    width: 30%;
    max-width: 400px;

    .search-bar {
      width: 100%;
      background-color: var(--theme-search-bg);
      text-align: center;
      border-radius: 8px;
      padding: 0.1rem;
      border: 1px solid #707070;
    }
  }
  .header-icon {
    padding: 6px;
    &:hover {
      cursor: pointer;
      background-color: var(--theme-search-bg);
      transition: 0.1s ease;
    }
  }
}
</style>
