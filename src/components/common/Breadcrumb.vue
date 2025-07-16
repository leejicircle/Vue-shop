<script setup lang="ts">
import { Category } from "@/constants/category";
import { computed } from "vue";

const props = defineProps({
  category: { type: String, default: "" },
  crumb: { type: String, default: "" },
});

const resolveCategory = computed(() => {
  return Category[props.category] || props.category;
});
</script>
<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li>{{ resolveCategory }}</li>
      <li>{{ crumb }}</li>
    </ul>
  </div>
</template>
