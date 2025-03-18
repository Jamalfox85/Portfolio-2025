<template>
  <div class="footer_wrapper flex items-center">
    <div class="footer-left flex items-center mr-auto text-xs">
      <div class="flex items-center footer-group">
        <font-awesome-icon :icon="['fas', 'code-branch']" />
        <p class="mx-2">main*</p>
        <font-awesome-icon :icon="['fas', 'rotate']" />
      </div>
      <div class="flex items-center footer-group">
        <font-awesome-icon :icon="['fas', 'circle-xmark']" />
        <p class="mx-2">0</p>
        <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
        <p class="ml-2">0</p>
      </div>
      <div class="flex items-center footer-group">
        <font-awesome-icon :icon="['fas', 'tower-cell']" />
        <p class="ml-2">0</p>
      </div>
      <div class="flex items-center footer-group">
        <font-awesome-icon :icon="['fas', 'bolt']" />
      </div>
    </div>
    <div class="footer-right flex items-center ml-auto text-xs">
      <div class="flex items-center footer-group">
        <p class="">Ln 25, Col 29</p>
      </div>
      <div class="flex items-center footer-group">
        <p class="">Spaces: 2</p>
      </div>
      <div class="flex items-center footer-group">
        <p class="">UTF-8</p>
      </div>
      <div class="flex items-center footer-group">
        <p class="">LF</p>
      </div>
      <div class="flex items-center footer-group">
        <font-awesome-icon :icon="['fas', 'code']" />
        <p class="ml-2">Vue</p>
      </div>
      <div class="flex items-center footer-group">
        <p class="">IntelliSense</p>
      </div>
      <div class="flex items-center footer-group">
        <font-awesome-icon :icon="['fas', 'check']" />
        <p class="ml-2">Prettier</p>
      </div>
      <div class="flex items-center footer-group">
        <font-awesome-icon :icon="['fas', 'bell']" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss">
.footer_wrapper {
  background-color: var(--theme-editor-bg);
  color: var(--theme-text);
  padding: 0.1rem 8px;
  .footer-group {
    padding: 4px;
    margin-right: 12px;
    &:hover {
      cursor: pointer;
      background-color: var(--theme-search-bg);
      transition: 0.1s ease;
    }
  }
}
</style>
