import { defineStore } from "pinia";

const productsURL = `${import.meta.env.VITE_FAKE_STORE_API}/products`;

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
interface Rating {
  rate: number;
  count: number;
}

interface ProductState {
  item: Record<string, Product>;
  idList: number[];
}

export const useProductStore = defineStore("product", {
  state: (): ProductState => ({
    item: {},
    idList: [],
  }),
  getters: {
    list(state): Product[] {
      return state.idList.map((i) => state.item[i]);
    },
    loaded(state): boolean {
      return state.idList.length > 0;
    },
  },
  actions: {
    async fetchAll() {
      try {
        const response = await fetch(productsURL);
        const data = await response.json();
        this.idList = data.map((i: Product) => i.id);
        console.log("호출확인");

        const newItem: Record<string, Product> = {};
        data.forEach((i: Product) => {
          newItem[i.id] = i;
        });
        this.item = newItem;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
