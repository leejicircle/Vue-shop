import { defineStore } from "pinia";
import { useProductStore } from "./products";

export interface CartInfo {
  id: number;
  count: number;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  count: number;
  image: string;
}
export interface CartState {
  items: Record<string | number, CartInfo>;
}
export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    items: {},
  }),
  getters: {
    count(state): number {
      return Object.values(state.items).reduce((acc, item) => acc + item.count, 0);
    },
    total(state): number {
      const products = useProductStore();
      return Object.keys(state.items).reduce((acc, id) => {
        return acc + products.item[id].price * state.items[id].count;
      }, 0);
    },
    itemList(state): CartItem[] {
      const productStore = useProductStore();
      const products = productStore.item;

      return Object.keys(state.items).flatMap((key) => {
        const cartInfo = state.items[key];
        const product = products[key];
        if (!product) return [];

        return [
          {
            id: product.id,
            title: product.title,
            price: product.price,
            count: cartInfo.count,
            image: product.image,
          },
        ];
      });
    },
  },
  actions: {
    addItem(id: number) {
      const key = id.toString();
      if (this.items[key]) {
        this.items[key].count++;
      } else {
        this.items[key] = { id, count: 1 };
      }
    },

    removeItem(id: number) {
      const key = id.toString();
      if (!this.items[key]) return;

      if (this.items[key].count > 1) {
        this.items[key].count--;
      } else {
        delete this.items[key];
      }
    },

    clearCart() {
      this.items = {};
    },
  },
  persist: true,
});
