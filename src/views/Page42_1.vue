<template>
    <div class="fullwidthbanner-container">
      <div class="tag-box">
        <div class="tag">
          <b>空間奇境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>公設規劃</span></b>
        </div>
      </div>
      <div class="content">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <!-- <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div> -->
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="/img/p42/001.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="/img/p42/002.png" class="d-block w-100" alt="...">
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
    overflow: hidden; /* 防止图片超出容器 */
    opacity: 0; /* 初始状态透明 */
    transition: opacity 2s ease-in-out; /* 淡入效果 */
    width: 90%;
    height: auto; /* 這裡你可以根據需要調整高度 */
    z-index: -1; /* 確保背景圖片在最下層 */
  }
  
  .bg {
    max-width: 100%; /* 图片最大宽度为容器宽度 */
    max-height: 100%; /* 图片最大高度为容器高度 */
    object-fit: contain; /* 保持图片的纵横比，确保图片完整呈现 */
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
  border-radius: 50%; /* 圆形背景 */
  padding: 10px; /* 内边距，让icon在背景中更居中 */
}

.carousel-control-prev,
.carousel-control-next {
  top: 50%; /* 垂直居中 */
  transform: translateY(-50%);
  width: 50px; /* 控制按钮大小 */
  height: 50px; /* 控制按钮大小 */
}



  </style>
  