import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/newRPS/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        en: "./en.html",
      },
    },
  },
})
