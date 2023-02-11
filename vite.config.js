import { defineConfig } from "vite";
import { configMockPlugin } from "./mock";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [configMockPlugin(true, true)],
  server: {
    port: 9999,
  },
});
