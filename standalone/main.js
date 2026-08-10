// 單機版（file://）入口
// 與 src/main.js 的差異：
//   1. bootstrap / sweetalert2 / font-awesome 的 CSS 與 JS 改由 index.html 以 CDN 載入
//   2. router 於建置時自動改用 hash 模式（見 vite.standalone.config.js）
import { createApp } from 'vue';
import App from '../src/App.vue';
import router from '../src/router/index.js';

// 全局 CSS（CDN 樣式在 index.html 中先載入，確保這份可以覆寫）
import '../src/assets/main.css';

createApp(App).use(router).mount('#app');
