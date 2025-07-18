<script setup lang="ts">
import { ref, computed, watch, nextTick } from "vue";
import { useProductStore } from "@/store/products";
import { useRouter } from "vue-router";

const search = ref("");
const isSearchOpen = ref(false);
const activeIndex = ref(-1);

const searchInputRef = ref<HTMLInputElement | null>(null);
const listItemRefs = ref<(HTMLButtonElement | null)[]>([]);

const router = useRouter();
const productStore = useProductStore();

const filteredItems = computed(() =>
  search.value
    ? Object.values(productStore.item).filter((p) => p.title.toLowerCase().includes(search.value.toLowerCase()))
    : [],
);

function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;
  if (!isSearchOpen.value) {
    search.value = "";
    activeIndex.value = -1;
  } else {
    nextTick(() => {
      searchInputRef.value?.focus();
    });
  }
}

function handleSelect(productId: number) {
  router.push(`/product/${productId}`);
  search.value = "";
  activeIndex.value = -1;
  isSearchOpen.value = false;
}

function handleKeyDown(e: KeyboardEvent) {
  const list = filteredItems.value;
  if (!list.length) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (activeIndex.value < list.length - 1) {
      activeIndex.value++;
    }
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (activeIndex.value > 0) {
      activeIndex.value--;
    }
  } else if (e.key === "Enter" && activeIndex.value >= 0) {
    handleSelect(list[activeIndex.value].id);
  }
}
watch(activeIndex, async (index) => {
  await nextTick();
  const target = listItemRefs.value[index];
  if (target) {
    target.focus();
    target.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});
</script>

<template>
  <div className="dropdown">
    <button
      type="button"
      @click="toggleSearch"
      class="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search"
    >
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>

    <input
      type="text"
      ref="searchInputRef"
      v-model="search"
      placeholder="검색"
      @keydown="handleKeyDown"
      :class="[
        'fixed left-0 top-16 w-full input input-ghost focus:outline-0 rounded-none sm:rounded',
        'bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white',
        'sm:static sm:flex transition-all duration-300 ease-in-out transform',
        isSearchOpen ? 'z-10 opacity-100 translate-y-0' : '-z-10 opacity-0 -translate-y-full',
        'sm:!z-10 sm:!opacity-100 sm:!translate-y-0',
      ]"
    />

    <ul
      v-if="search && filteredItems.length > 0"
      class="!fixed left-0 sm:!absolute sm:top-14 menu flex-nowrap dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-600"
    >
      <li v-for="(product, index) in filteredItems" :key="product.id">
        <button
          class="text-left js-searchedItem"
          :ref="(el) => (listItemRefs[index] = el as HTMLButtonElement)"
          @click="handleSelect(product.id)"
          @keydown="handleKeyDown"
        >
          <span class="text-gray-600 dark:text-white line-clamp-2">
            {{ product.title }}
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>
