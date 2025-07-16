<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  rate: {
    type: Number,
    default: 0,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const stars = computed(() => Array.from({ length: 10 }));
</script>

<template>
  <div class="flex items-center mt-3">
    <div class="rating rating-half">
      <template v-for="(_, index) in stars" :key="`rating-${index}`">
        <input
          type="radio"
          name="rating-10"
          :class="['bg-yellow-400 cursor-default mask mask-star-2', index % 2 === 0 ? 'mask-half-1' : 'mask-half-2']"
          disabled
          :checked="index + 1 <= props.rate * 2"
        />
      </template>
    </div>
    <div class="ml-2">{{ props.rate }} / {{ props.count }} 참여</div>
  </div>
</template>
