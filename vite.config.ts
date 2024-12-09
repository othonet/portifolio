import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from 'lovable-tagger';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::", // Permite acesso em todas as interfaces de rede
    port: 8080, // Porta do servidor de desenvolvimento
  },
  plugins: [
    react(), // Plugin para React
    componentTagger(), // Plugin para gerenciamento de componentes
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias para o diretório src
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: '[name].[hash].[ext]',
        chunkFileNames: '[name].[hash].js',
        entryFileNames: '[name].[hash].js',
      },
    },
  },
});
