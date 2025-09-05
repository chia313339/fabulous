<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>工學品境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>售後服務</span></b>
      </div>
    </div>
    <div class="content">
      
      <!-- 內容區域 -->
      <div class="content-area">
        <img src="/img/p56/bg.png" alt="售後服務背景圖" class="bg-image">
      </div>
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
  position: relative;
  width: 100%;
  height: 80vh;
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  margin-top: -8vh;
}

.content-area {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* 保持圖片比例，完整顯示 */
  width: auto;
  height: auto;
}

.main-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.description {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
