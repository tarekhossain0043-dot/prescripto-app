import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
const deployApp = "prescripto-app";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${deployApp}`,
});
