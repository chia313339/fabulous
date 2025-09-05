<template>
  <div class="fullwidthbanner-container">
    <!-- 返回按鈕 -->
    <router-link to="/page23" class="back-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" style="color: gray;">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"/>
      </svg>
    </router-link>

    <div class="content">
      <img src="/img/p231/bg.png" alt="" class="bg">
      
      <!-- 標題 -->
      <div class="title-container">
        <h1 class="main-title">|  忠明營造業績  |</h1>
      </div>
      
      <!-- 圓形按鈕區域 -->
      <div class="buttons-container">
        <button 
          v-for="(button, index) in buttons" 
          :key="index"
          class="circular-button"
          @click="openModal(index + 1)"
        >
          {{ button }}
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
        <img :src="`/img/p231/${String(currentImageIndex).padStart(3, '0')}.png`" alt="" class="modal-image">
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick, ref } from 'vue';

export default {
  setup() {
    // 按鈕數據
    const buttons = ref(['住宅', '商辦廠辦', '公共建設', '飯店設施', '捷運共構']);
    
    // Modal 狀態
    const showModal = ref(false);
    const currentImageIndex = ref(1);

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

    // 打開 Modal
    const openModal = (imageIndex) => {
      currentImageIndex.value = imageIndex;
      showModal.value = true;
      // 防止背景滾動
      document.body.style.overflow = 'hidden';
    };

    // 關閉 Modal
    const closeModal = () => {
      showModal.value = false;
      // 恢復背景滾動
      document.body.style.overflow = '';
    };

    onMounted(initContent);

    return {
      buttons,
      showModal,
      currentImageIndex,
      openModal,
      closeModal
    };
  }
};
</script>

<style scoped>
.content {
  position: relative; /* 使內部元素可以使用絕對定位 */
  overflow: hidden; /* 防止图片超出容器 */
  opacity: 0; /* 初始状态透明 */
  transition: opacity 1s ease-in-out; /* 淡入效果 */
  width: 100%;
  height: 100vh; /* 滿版高度 */
  z-index: 1; /* 調整 z-index */
}

.bg {
  width: 100%; /* 圖片寬度填滿容器 */
  height: 100%; /* 圖片高度填滿容器 */
  object-fit: cover; /* 保持圖片比例並填滿容器，可能會裁切部分內容 */
  object-position: center; /* 圖片居中顯示 */
}

/* 返回按鈕樣式 */
.back-arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  transition: transform 0.3s ease;
}

.back-arrow:hover {
  transform: scale(1.1);
}

/* 標題樣式 */
.title-container {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.main-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2E2221;
  text-align: center;
  margin: 0;
  font-family: "Noto Sans TC", sans-serif;
}

/* 按鈕容器 */
.buttons-container {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
  z-index: 10;
}

/* 圓形按鈕樣式 */
.circular-button {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(145deg, #f5f5f5, #e0e0e0);
  color: #2E2221;
  font-size: 2vw;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: "Noto Sans TC", sans-serif;
  text-align: center;
  line-height: 1.2;
  padding: 10px;
}

.circular-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  background: linear-gradient(145deg, #e8e8e8, #d0d0d0);
}

.circular-button:active {
  transform: translateY(-2px);
}

/* Modal 樣式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  animation: slideIn 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: background-color 0.3s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.7);
}

.modal-image {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  display: block;
}

/* 動畫效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
