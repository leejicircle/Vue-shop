<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "@/store/cart";
import { toCurrencyFormat } from "@/utils/utils";
import BreadCrumb from "@/components/common/Breadcrumb.vue";
import CartList from "@/components/carts/CartList.vue";
import Confirm from "@components/common/Confirm.vue";
import ProductsDetailLoad from "../products/ProductsDetailLoad.vue";
import { useProductStore } from "@/store/products";

const cartStore = useCartStore();
const productStore = useProductStore();

const cartItems = computed(() => cartStore.itemList);

function handleAdd(id: number) {
  cartStore.addItem(id);
}

function handleRemove(id: number) {
  cartStore.removeItem(id);
}
function handleConfirm() {
  cartStore.clearCart();
  alert("구매가 완료되었습니다.");
}
</script>

<template>
  <BreadCrumb category="홈" crumb="장바구니" />

  <div class="mt-6 md:mt-14 px-2 lg:px-0">
    <ProductsDetailLoad v-if="!productStore.loaded" />

    <div v-else-if="cartItems.length === 0">
      <h1 class="text-2xl">장바구니에 물품이 없습니다.</h1>
      <router-link to="/" class="btn btn-primary mt-10">담으러 가기</router-link>
    </div>

    <div v-else class="lg:flex justify-between mb-20">
      <div>
        <CartList v-for="item in cartItems" :key="item.id" :data="item" @add="handleAdd" @remove="handleRemove" />
      </div>
      <div class="self-start shrink-0 flex items-center mt-10 mb-20">
        <span class="text-xl md:text-2xl">총 : {{ toCurrencyFormat(cartStore.total) }}</span>
        <label for="confirm-modal" class="modal-button btn btn-primary ml-5">구매하기</label>
      </div>
    </div>
  </div>

  <Confirm @confirm="handleConfirm" />
</template>
