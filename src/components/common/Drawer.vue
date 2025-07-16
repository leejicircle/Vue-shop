<script setup lang="ts">
import { MENUS } from "@/constants/category";
import { RouterLink } from "vue-router";

const props = defineProps<{
  closeOverlay: () => void;
}>();

const { HOME, ...menuItems } = MENUS;
const menus = Object.entries(menuItems).map(([key, value]) => ({ key: key.toLowerCase(), value }));
</script>

<template>
  <div class="drawer-side">
    <label for="side-menu" class="drawer-overlay" />
    <ul class="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
      <li v-for="menu in menus" :key="menu.key">
        <RouterLink
          :to="`/${menu.key}`"
          @click="props.closeOverlay"
          class="!text-gray-700 active:!text-white dark:!text-white"
        >
          {{ menu.value }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
