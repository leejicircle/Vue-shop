<script setup lang="ts">
const props = defineProps<{ limit: number }>();
</script>

<template>
  <template v-if="props.limit > 0">
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="index in props.limit" :key="index" class="card bordered animate-pulse">
        <div class="h-80 rounded bg-gray-100"></div>
        <div class="card-body">
          <div class="space-y-4">
            <div class="h-6 bg-gray-100 rounded"></div>
            <div class="h-6 bg-gray-100 rounded w-5/6"></div>
            <div class="h-6 bg-gray-100 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div>제품이 없습니다.</div>
  </template>
</template>
