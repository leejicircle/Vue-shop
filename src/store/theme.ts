import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: localStorage.getItem("theme") || "light",
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      this.applyTheme();
    },
    applyTheme() {
      const html = document.documentElement;
      html.classList.toggle("dark", this.theme === "dark");
      html.setAttribute("data-theme", this.theme);
    },
  },
  persist: true,
});
