<script setup lang="ts">
import { defineEmits } from "vue";
import type { CartItem } from "@/store/cart";
import { toCurrencyFormat } from "@/utils/utils";
import { RouterLink } from "vue-router";

const props = defineProps<{ data: CartItem }>();

const emit = defineEmits<{
  (e: "add", id: number): void;
  (e: "remove", id: number): void;
}>();
</script>

<template>
  <div class="lg:flex lg:items-center mt-4 px-2 lg:px-0">
    <RouterLink :to="`/product/${props.data.id}`">
      <figure class="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
        <img :src="props.data.image" :alt="props.data.title" class="object-contain w-full h-48" />
      </figure>
    </RouterLink>

    <div class="card-body px-1 lg:px-12">
      <h2 class="card-title">
        <RouterLink :to="`/product/${props.data.id}`" class="link link-hover">
          {{ props.data.title }}
        </RouterLink>
      </h2>
      <p class="mt-2 mb-4 text-3xl">
        {{ toCurrencyFormat(props.data.price * props.data.count) }}
        <span class="text-2xl"> ({{ toCurrencyFormat(props.data.price) }}) </span>
      </p>

      <div class="card-actions">
        <div class="btn-group">
          <button class="btn btn-primary" @click="emit('remove', data.id)">-</button>
          <button class="btn btn-ghost no-animation">{{ data.count }}</button>
          <button class="btn btn-primary" @click="emit('add', data.id)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>
