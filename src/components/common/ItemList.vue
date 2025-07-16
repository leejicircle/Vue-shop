<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useProductStore } from "@/store/products";
import ProductsList from "../products/ProductsList.vue";
import { MENUS } from "@/constants/category";
import ProductsLoad from "../products/ProductsLoad.vue";

const props = defineProps({
  title: { type: String, default: "" },
  limit: { type: Number, default: 4 },
  scroll: { type: Boolean, default: false },
});

const productStore = useProductStore();
const { loaded, list } = storeToRefs(productStore);

const filteredProducts = computed(() => {
  if (!loaded.value) return [];

  let products = list.value;

  switch (props.title) {
    case MENUS.FASHION:
      products = products.filter((p) => p.category === "men's clothing" || p.category === "women's clothing");
      break;
    case MENUS.ACCESSORY:
      products = products.filter((p) => p.category === "jewelery");
      break;
    case MENUS.DIGITAL:
      products = products.filter((p) => p.category === "electronics");
      break;
  }

  return products.slice(0, props.limit);
});
</script>

<template>
  <h2 class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{{ props.title }}</h2>
  <div :data-scroll="props.scroll" class="item_list">
    <template v-if="loaded">
      <ProductsList :products="filteredProducts" :limit="props.limit" :key="props.title" />
    </template>
    <template v-else>
      <ProductsLoad :limit="props.limit" />
    </template>
  </div>
</template>
