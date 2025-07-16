<script setup lang="ts">
import type { Product } from "@/store/products";

import { toCurrencyFormat } from "@/utils/utils";

const { products, limit } = defineProps<{ products: Product[]; limit: number }>();
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    <RouterLink
      v-for="product in products.slice(0, limit)"
      :key="product.id"
      :to="`/product/${product.id}`"
      class="card rounded-xl overflow-hidden card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
    >
      <figure class="flex h-80 bg-white overflow-hidden">
        <img :src="product.image" :alt="product.title" class="transition-transform duration-300" />
      </figure>
      <div class="card-body bg-gray-100 dark:bg-gray-700">
        <p class="card-title text-base">{{ product.title }}</p>
        <p class="text-base">{{ toCurrencyFormat(product.price) }}</p>
      </div>
    </RouterLink>
  </div>
</template>
