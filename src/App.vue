<script setup lang="ts">
import "@/assets/css/tailwind.css";
import "@/assets/css/custom.css";
import { onMounted, ref } from "vue";
import Nav from "@components/layouts/Nav.vue";
import Footer from "@components/layouts/Footer.vue";
import Drawer from "./components/common/Drawer.vue";
import { useProductStore } from "./store/products";

const hamburger = ref<HTMLInputElement | null>(null);

const closeOverlay = () => {
  hamburger.value?.click();
};

const productStore = useProductStore();

onMounted(() => {
  if (!productStore.loaded) {
    productStore.fetchAll();
  }
});
</script>

<template>
  <input type="checkbox" id="side-menu" class="drawer-toggle" ref="hamburger" />
  <section class="drawer-content min-h-screen">
    <Nav />
    <section class="main pt-16">
      <RouterView />
    </section>
    <Footer />
  </section>
  <Drawer :closeOverlay="closeOverlay" />
</template>
