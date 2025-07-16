import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Index.vue";
import Product from "@/pages/Product.vue";
import Error from "@/pages/Error.vue";
import Fashion from "@/pages/Fashion.vue";
import Accessory from "@/pages/Accessory.vue";
import Digital from "@/pages/Digital.vue";
import Cart from "@/pages/Cart.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/fashion", component: Fashion },
  { path: "/accessory", component: Accessory },
  { path: "/digital", component: Digital },
  { path: "/product/:id", component: Product },
  { path: "/cart", component: Cart },
  { path: "/404", component: Error },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
