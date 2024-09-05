<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>工學品境</b>
      </div>
    </div>
    <div class="content">
        <!-- 4張圖片，使用router-link進行導航 -->
        <router-link to="/page51">
            <img src="/img/p50/001.png" alt="Image 1" class="image-item">
        </router-link>
        <router-link to="/page52">
            <img src="/img/p50/002.png" alt="Image 2" class="image-item">
        </router-link>
        <router-link to="/page53">
            <img src="/img/p50/003.png" alt="Image 3" class="image-item">
        </router-link>
        <router-link to="/page54">
            <img src="/img/p50/004.png" alt="Image 4" class="image-item">
        </router-link>
    </div>

  </div>
</template>

<script>
import { onMounted, nextTick } from 'vue';

export default {
  setup() {
    const initContent = () => {
      nextTick(() => {
        const content = document.querySelector('.content');
        if (content) {
          content.style.opacity = 0;
          setTimeout(() => {
            content.style.opacity = 1;
          }, 100);
        }
      });
    };

    onMounted(initContent);

    return {};
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  gap: 1vw; /* 圖片之間的間距 */
  flex-wrap: wrap; /* 讓圖片自動換行，如果屏幕太小 */
  width: 100%; /* 讓內容寬度自適應 */
  height: auto;
  overflow: hidden;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  flex-wrap: nowrap; /* 禁止換行，強制所有圖片在同一列 */
}

.image-item {
  width: 100%;
  max-height: 50vh;
  object-fit: contain; /* 保持圖片比例 */
  transition: transform 0.3s ease;
}

.image-item:hover {
  transform: scale(1.05); /* 滑鼠懸停時稍微放大 */
}
</style>
