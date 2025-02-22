<template>
  <!-- 當驗證通過後才顯示網站內容 -->
  <div v-if="authenticated">
    <!-- 當寬度小於或等於 1025px 時只顯示提示訊息 -->
    <div v-if="showWarning" class="warning-message">
      請切換大螢幕獲得更好體驗
    </div>
    <!-- 當寬度大於 1025px 時顯示導航列和內容 -->
    <div v-else>
      <Navbar v-if="showNavbar" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      authenticated: false, // 驗證狀態
      showWarning: false,
    };
  },
  computed: {
    showNavbar() {
      // 當前路徑不是首頁時顯示導航列
      return this.$route.path !== '/';
    },
  },
  methods: {
    authenticate() {
      const pwd = window.prompt("請輸入密碼：");
      // 若使用者按下取消或輸入錯誤則重新呼叫
      if (pwd === null || pwd !== 'fabtest') {
        alert("密碼錯誤！");
        this.authenticate();
      } else {
        this.authenticated = true;
        this.checkWindowSize();
        window.addEventListener('resize', this.checkWindowSize);
      }
    },
    checkWindowSize() {
      // 當寬度小於或等於 1025px 時顯示提示訊息並禁用滾動
      this.showWarning = window.innerWidth <= 1025;
      if (this.showWarning) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
  },
  mounted() {
    // 組件掛載後呼叫密碼驗證
    this.authenticate();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkWindowSize);
    document.body.style.overflow = '';
  },
};
</script>

<style>
.warning-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(0, 0, 0);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  z-index: 9999;
  width: 80%;
  max-width: 300px;
}
</style>
