<script setup lang="ts">
import Breadcrumb from "@/components/common/Breadcrumb.vue";
import ItemList from "@/components/common/ItemList.vue";
import { MENUS } from "@/constants/category";
</script>

<template>
  <section class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
    <Breadcrumb :category="MENUS.HOME" :crumb="MENUS.ACCESSORY" />
    <article class="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
      <ItemList :title="MENUS.ACCESSORY" :limit="4" />
    </article>
  </section>
</template>
