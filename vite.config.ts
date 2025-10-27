import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";
import { componentTagger } from "lovable-tagger";


export default defineConfig(({ mode }) => {
  // Allow skipping Miniflare/Cloudflare plugin during local dev (useful on Windows)
  // Set SKIP_MINIFLARE=1 (or "true") to avoid starting native runtime
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const skipMiniflare = process.env.SKIP_MINIFLARE === "1" || process.env.SKIP_MINIFLARE === "true";
  const cfPlugin = skipMiniflare ? [] : [cloudflare()];

  return {
    plugins: [...mochaPlugins(process.env as any), react(), mode === 'development' && componentTagger(), ...cfPlugin].filter(Boolean),
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  };
});
