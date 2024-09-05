// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// 引入您的頁面組件
import Home from '../views/Home.vue';
import Page11 from '../views/Page11.vue';
import Page12 from '../views/Page12.vue';
import Page13 from '../views/Page13.vue';
import Page14 from '../views/Page14.vue';
import Page20 from '../views/Page20.vue';
import Page21 from '../views/Page21.vue';
import Page22 from '../views/Page22.vue';
import Page23 from '../views/Page23.vue';
import Page24 from '../views/Page24.vue';
import Page31 from '../views/Page31.vue';
import Page32 from '../views/Page32.vue';
import Page33 from '../views/Page33.vue';
import Page34 from '../views/Page34.vue';
import Page35 from '../views/Page35.vue';
import Page36 from '../views/Page36.vue';
import Page41 from '../views/Page41.vue';
import Page42 from '../views/Page42.vue';
import Page43 from '../views/Page43.vue';
import Page44 from '../views/Page44.vue';
import Page50 from '../views/Page50.vue';
import Page51 from '../views/Page51.vue';
import Page52 from '../views/Page52.vue';
import Page53 from '../views/Page53.vue';
import Page54 from '../views/Page54.vue';
import Page61 from '../views/Page61.vue';
import Page62 from '../views/Page62.vue';
import Page63 from '../views/Page63.vue';

// 定義路由
const routes = [
  { path: '/', component: Home },
  { path: '/page11', component: Page11 },
  { path: '/page12', component: Page12 },
  { path: '/page13', component: Page13 },
  { path: '/page14', component: Page14 },
  { path: '/page20', component: Page20 },
  { path: '/page21', component: Page21 },
  { path: '/page22', component: Page22 },
  { path: '/page23', component: Page23 },
  { path: '/page24', component: Page24 },
  { path: '/page31', component: Page31 },
  { path: '/page32', component: Page32 },
  { path: '/page33', component: Page33 },
  { path: '/page34', component: Page34 },
  { path: '/page35', component: Page35 },
  { path: '/page36', component: Page36 },
  { path: '/page41', component: Page41 },
  { path: '/page42', component: Page42 },
  { path: '/page43', component: Page43 },
  { path: '/page44', component: Page44 },
  { path: '/page50', component: Page50 },
  { path: '/page51', component: Page51 },
  { path: '/page52', component: Page52 },
  { path: '/page53', component: Page53 },
  { path: '/page54', component: Page54 },
  { path: '/page61', component: Page61 },
  { path: '/page62', component: Page62 },
  { path: '/page63', component: Page63 },
  // 可以添加更多的路由條目
];

// 創建路由器實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
