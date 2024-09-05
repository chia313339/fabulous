<template>
    <div class="fullwidthbanner-container">
      <div class="tag-box">
        <div class="tag">
          <b>建築藝境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>建築外觀設計</span></b>
        </div>
      </div>
      <div class="content">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <!-- <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> -->
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="/img/p32/bg.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button> -->
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
  
  </style>
  