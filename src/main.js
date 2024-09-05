import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 如果你使用 Vue Router

// 引入 Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'jquery'
import 'bootstrap'
// import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 如果使用 Font Awesome



// 引入全局 CSS
import './assets/main.css';

// // 引入全局 Mixin
// import globalMixin from './mixins/globalMixin';

const app = createApp(App);

// // 全局註冊 Mixin
// app.mixin(globalMixin);

// 使用 router 並掛載應用
app.use(router).mount('#app');
