<template>
  <div>
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
      showWarning: false,
    };
  },
  computed: {
    showNavbar() {
      // 如果當前路徑不是首頁，顯示導航列
      return this.$route.path !== '/';
    },
  },
  methods: {
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
    // 初次加載時檢查視窗大小
    this.checkWindowSize();
    // 添加視窗大小變化的監聽器
    window.addEventListener('resize', this.checkWindowSize);
  },
  beforeDestroy() {
    // 在組件銷毀時移除監聽器並重置滾動
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
