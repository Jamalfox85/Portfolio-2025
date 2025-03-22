<template lang="">
  <div class="sidepanel_wrapper p-4">
    <n-collapse default-expanded-names="1">
      <n-collapse-item title="Jamal Fox • Full Stack Portfolio" name="1">
        <n-collapse>
          <n-collapse-item title="Info" name="1">
            <div class="px-4">
              <p class="cursor-pointer hover:text-blue-500 transition">
                README.md
              </p>
              <p class="cursor-pointer hover:text-blue-500 transition">
                Experience.vue
              </p>
              <p class="cursor-pointer hover:text-blue-500 transition">
                Skills.tsx
              </p>
            </div>
          </n-collapse-item>
          <n-collapse-item title="Projects" name="2">
            <div class="px-4">
              <p class="cursor-pointer hover:text-blue-500 transition">
                Project #1.vue
              </p>
              <p class="cursor-pointer hover:text-blue-500 transition">
                Project #2.go
              </p>
              <p class="cursor-pointer hover:text-blue-500 transition">
                Project #3.tsx
              </p>
              <p class="cursor-pointer hover:text-blue-500 transition">
                Project #4.vue
              </p>
            </div>
          </n-collapse-item>
        </n-collapse>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>
<script>
import { NCollapse, NCollapseItem } from "naive-ui";
export default {
  components: {
    NCollapse,
    NCollapseItem,
  },
};
</script>
<style lang="scss">
.sidepanel_wrapper {
  width: 300px;
  background-color: var(--theme-editor-bg);
  color: var(--theme-text);
  border: solid 2px var(--theme-bg-lighter);
}
.n-collapse {
  .n-collapse-item,
  .n-collapse-item__header-main,
  .n-collapse-item-arrow {
    color: var(--theme-text) !important;
    font-size: 12px;
    .n-base-icon,
    .n-base-icon svg {
      width: 14px;
      height: 14px;
    }
  }

  .n-collapse-item:not(:first-child) {
    border-top: 2px solid var(--theme-bg-lighter);
  }
}

.n-collapse
  .n-collapse-item
  .n-collapse-item__content-wrapper
  .n-collapse-item__content-inner {
  padding-top: 4px;
}
</style>
