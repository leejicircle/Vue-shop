<script setup lang="ts">
import ItemList from "@/components/common/ItemList.vue";
import Slider from "@/components/common/Slider.vue";
import { MENUS } from "@/constants/category";
</script>

<template>
  <Slider />
  <section class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
    <ItemList :title="MENUS.FASHION" :scroll="true" />
  </section>
  <section class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
    <ItemList :title="MENUS.ACCESSORY" :scroll="true" />
  </section>
  <section class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
    <ItemList :title="MENUS.DIGITAL" :scroll="true" />
  </section>
</template>
