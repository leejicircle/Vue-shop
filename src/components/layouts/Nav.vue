<script setup lang="ts">
import { MENUS } from "@/constants/category";
import { useCartStore } from "@/store/cart";
import Search from "../common/Search.vue";
import { useThemeStore } from "@/store/theme";

const { HOME, ...menuItems } = MENUS;
const menus = Object.entries(menuItems).map(([key, value]) => ({ key: key.toLowerCase(), value }));
const cartStore = useCartStore();
const themeStore = useThemeStore();
</script>

<template>
  <div class="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
    <div class="flex w-full xl:container xl:m-auto">
      <label htmlFor="side-menu" class="flex-none lg:hidden btn btn-square btn-ghost w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-6 h-6 stroke-gray-700 dark:stroke-current"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>

      <h1 class="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
        <router-link to="/" class="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap">
          Vue Shop
        </router-link>
      </h1>

      <ul class="flex-none hidden md:flex md:flex-1 ml-2 list-none p-0 m-0">
        <li v-for="menu in menus" :key="menu.key">
          <router-link :to="`/${menu.key}`" custom v-slot="{ href, navigate, isActive }">
            <a
              :href="href"
              @click="navigate"
              :class="[
                'btn btn-ghost btn-sm rounded-btn',
                isActive ? 'text-blue-600 font-bold' : 'text-gray-700 dark:text-white',
              ]"
            >
              {{ menu.value }}
            </a>
          </router-link>
        </li>
      </ul>

      <div class="flex items-center px-2">
        <label class="swap swap-rotate mr-2 sm:mr-4">
          <input type="checkbox" :checked="themeStore.theme === 'light'" @change="themeStore.toggleTheme" />
          <svg
            class="swap-off fill-white w-7 h-7 dark:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>
          <svg
            class="swap-on fill-black w-7 h-7 light:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
        </label>

        <Search />

        <router-link to="/cart" class="btn btn-ghost w-10 sm:w-12 ml-1">
          <span class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 stroke-gray-700 dark:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span
              class="absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2"
            >
              {{ cartStore.count }}
            </span>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
