import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const r = (p) => fileURLToPath(new URL(p, import.meta.url));

// 把 src/router/index.js 的 history 模式換成 hash 模式，
// 這樣 file:// 直接開啟 index.html 也能切換頁面（不需要 nginx 之類的伺服器）。
const hashRouterPlugin = {
  name: 'standalone-hash-router',
  enforce: 'pre',
  transform(code, id) {
    if (!id.split('?')[0].replace(/\\/g, '/').endsWith('src/router/index.js')) return null;
    return { code: code.replace(/createWebHistory/g, 'createWebHashHistory'), map: null };
  },
};

// 外部套件一律走 CDN（index.html 以 <script> 掛上全域變數）
const CDN_GLOBALS = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  bootstrap: 'bootstrap',
  sweetalert2: 'Sweetalert2',
};

export default defineConfig({
  plugins: [hashRouterPlugin, vue()],
  publicDir: r('./public'),
  build: {
    outDir: r('./project_html'),
    emptyOutDir: false,
    // img 等靜態檔改由 scripts/build-standalone.mjs 以 rsync 複製，避免每次建置重複搬 600MB
    copyPublicDir: false,
    assetsDir: 'assets',
    cssCodeSplit: false,
    rollupOptions: {
      input: r('./standalone/main.js'),
      external: Object.keys(CDN_GLOBALS),
      output: {
        // iife 單檔輸出：file:// 不支援 ES module 與程式碼分割
        format: 'iife',
        inlineDynamicImports: true,
        interop: 'default',
        globals: CDN_GLOBALS,
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/app[extname]',
      },
    },
  },
});
