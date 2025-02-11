<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>空間奇境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>庭園規劃</span></b>
      </div>
    </div>
    <div class="content">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/p41/001.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <!-- 將第二個輪播項目從圖片更換為影片 -->
            <video
              class="d-block w-100"
              src="/img/p41/vediov6.mp4"
              autoplay
              muted
              playsinline
            ></video>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick } from 'vue';
import { Carousel } from 'bootstrap';  // 導入 Carousel 模組

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

        // 停止輪播功能
        const carouselElement = document.querySelector('#carouselExampleIndicators');
        if (carouselElement) {
          const carouselInstance = new Carousel(carouselElement, {
            interval: false,  // 停止自動輪播
            ride: false       // 禁止手動操作後重新啟動輪播
          });
          carouselInstance.pause();  // 強制停止輪播
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
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  position: relative; /* 使內部元素可以使用絕對定位 */
  overflow: hidden; /* 防止圖片或影片超出容器 */
  opacity: 0; /* 初始狀態透明 */
  transition: opacity 2s ease-in-out; /* 淡入效果 */
  width: 90%;
  height: auto; /* 根據需要調整高度 */
  z-index: -1; /* 確保背景圖片在最下層 */
}

.bg {
  max-width: 100%; /* 圖片最大寬度為容器寬度 */
  max-height: 100%; /* 圖片最大高度為容器高度 */
  object-fit: contain; /* 保持圖片的縱橫比，確保圖片完整呈現 */
}

.carousel-indicators [data-bs-target] {
  background-color: rgba(128, 128, 128, 0.7); /* 設置灰色半透明背景 */
}

.carousel-indicators .active {
  background-color: #555; /* 設置激活狀態的指示器為深灰色 */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(141, 141, 141, 0.5); /* 白色半透明背景 */
  border-radius: 50%; /* 圓形背景 */
  padding: 10px; /* 內邊距，讓 icon 在背景中更居中 */
}

.carousel-control-prev,
.carousel-control-next {
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%);
  width: 50px; /* 控制按鈕大小 */
  height: 50px; /* 控制按鈕大小 */
}
</style>
