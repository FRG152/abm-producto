import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    cors: true, // Habilita CORS para todas las peticiones
  },
  plugins: [
    react(),
    federation({
      name: "app_product_abm",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductController":
          "./src/interfaces/controllers/ProductController.tsx",
        "./Card": "./src/presentation/components/Card",
        "./EndPoints": "./src/infrastructure/api/endpoints/index.ts",
      },
      remotes: {
        design_system:
          "https://design-system-cyan-gamma.vercel.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "axios"],
    }),
  ],

  build: {
    target: "esnext",
  },
});
