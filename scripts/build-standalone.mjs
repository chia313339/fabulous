#!/usr/bin/env node
/**
 * 產生「單機版」網站到 /project_html
 *
 * 產出的資料夾可以直接複製給業主，用瀏覽器點兩下 index.html 就能開啟，
 * 不需要 nginx / node / 任何伺服器。
 *
 * 用法：npm run build:html
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = path.join(ROOT, 'project_html');
const step = (msg) => console.log(`\n[36m▶ ${msg}[0m`);

// ---------------------------------------------------------------- 1. 清理
step('清理舊的輸出（保留 img/ 以加速重建）');
for (const name of ['assets', 'vendor', 'index.html', '使用說明.txt']) {
  fs.rmSync(path.join(OUT, name), { recursive: true, force: true });
}
fs.mkdirSync(OUT, { recursive: true });

// ---------------------------------------------------------------- 2. 打包
step('vite build（iife 單檔、套件外部化走 CDN）');
execFileSync(
  process.execPath,
  [path.join(ROOT, 'node_modules/vite/bin/vite.js'), 'build', '--config', 'vite.standalone.config.js'],
  { cwd: ROOT, stdio: 'inherit' }
);

// ------------------------------------------------- 3. 修正靜態資源絕對路徑
// 原始碼裡的圖片/影片都寫成 /img/xxx.png（依賴伺服器 root），
// file:// 下會被解析到硬碟根目錄，因此改成相對路徑。
step('把 /img/... 改成相對路徑');
const rewrite = (file, fn) => {
  const p = path.join(OUT, file);
  const before = fs.readFileSync(p, 'utf8');
  const after = fn(before);
  fs.writeFileSync(p, after);
  const n = (before.match(/\/img\//g) || []).length - (after.match(/(?<!\.)\/img\//g) || []).length;
  console.log(`   ${file}: 置換 ${n} 處`);
};
// JS：字串 / 樣板字串中的 "/img/ → "./img/
rewrite('assets/app.js', (s) => s.replace(/(["'`(=,:])\/img\//g, '$1./img/'));
// CSS：url(/img/ → url(../img/（CSS 位於 assets/ 之下，需往上一層）
rewrite('assets/app.css', (s) => s.replace(/url\((\s*["']?)\/img\//g, 'url($1../img/'));

// ---------------------------------------------------------------- 4. HTML
step('寫入 index.html 與使用說明');
fs.copyFileSync(path.join(ROOT, 'standalone/index.html'), path.join(OUT, 'index.html'));
fs.copyFileSync(path.join(ROOT, 'standalone/使用說明.txt'), path.join(OUT, '使用說明.txt'));

// ----------------------------------------------- 5. CDN 離線備援（vendor/）
step('複製 CDN 套件的本機備援檔（無網路時自動使用）');
const VENDOR = path.join(OUT, 'vendor');
fs.mkdirSync(path.join(VENDOR, 'fontawesome/css'), { recursive: true });
const vendorFiles = [
  ['vue/dist/vue.global.prod.js', 'vue.global.prod.js'],
  ['vue-router/dist/vue-router.global.prod.js', 'vue-router.global.prod.js'],
  ['bootstrap/dist/css/bootstrap.min.css', 'bootstrap.min.css'],
  ['bootstrap/dist/js/bootstrap.bundle.min.js', 'bootstrap.bundle.min.js'],
  ['sweetalert2/dist/sweetalert2.min.css', 'sweetalert2.min.css'],
  ['sweetalert2/dist/sweetalert2.min.js', 'sweetalert2.min.js'],
  ['@fortawesome/fontawesome-free/css/all.min.css', 'fontawesome/css/all.min.css'],
];
for (const [from, to] of vendorFiles) {
  fs.copyFileSync(path.join(ROOT, 'node_modules', from), path.join(VENDOR, to));
}
fs.cpSync(
  path.join(ROOT, 'node_modules/@fortawesome/fontawesome-free/webfonts'),
  path.join(VENDOR, 'fontawesome/webfonts'),
  { recursive: true }
);
console.log(`   vendor/ 共 ${vendorFiles.length + 1} 項`);

// ---------------------------------------------------------------- 6. 靜態檔
step('同步 public/img（圖片與影片，約 600MB，第一次較久）');
execFileSync('rsync', ['-a', '--delete', '--exclude', '.DS_Store', path.join(ROOT, 'public/img') + '/', path.join(OUT, 'img') + '/'], {
  stdio: 'inherit',
});

// ---------------------------------------------------------------- 完成
step('完成');
console.log(`   輸出位置：${OUT}`);
console.log('   直接用瀏覽器開啟 project_html/index.html 即可。');
