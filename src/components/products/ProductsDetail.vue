<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/store/products";
import { storeToRefs } from "pinia";

import BreadCrumb from "../common/Breadcrumb.vue";
import Rating from "../common/Rating.vue";
import { toCurrencyFormat } from "@/utils/utils";
import { useCartStore } from "@/store/cart";
import ProductsDetailLoad from "./ProductsDetailLoad.vue";

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();

const { item, loaded } = storeToRefs(productStore);

const productId = computed(() => Number(route.params.id));
const product = computed(() => item.value[productId.value]);

const addToCart = () => {
  if (!product.value) return;
  cartStore.addItem(product.value.id);
};
</script>

<template>
  <div v-if="loaded && product">
    <BreadCrumb :category="product.category" :crumb="product.title" />
    <div class="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
      <figure class="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
        <img :src="product.image" :alt="product.title" class="object-contain w-full h-72" />
      </figure>
      <div class="card-body px-1 lg:px-12">
        <h2 class="card-title">
          {{ product.title }}
          <span class="badge badge-accent ml-2">NEW</span>
        </h2>
        <p>{{ product.description }}</p>
        <Rating :rate="product.rating?.rate" :count="product.rating?.count" />
        <p class="mt-2 mb-4 text-3xl">{{ toCurrencyFormat(product.price) }}</p>
        <div class="card-actions">
          <button class="btn btn-primary" @click="addToCart">장바구니에 담기</button>
          <RouterLink to="/cart" class="btn btn-outline ml-1">장바구니로 이동</RouterLink>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-10 text-gray-400"><ProductsDetailLoad /></div>
</template>
