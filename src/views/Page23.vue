<template>
    <div class="fullwidthbanner-container">
      <div class="tag-box">
        <div class="tag">
          <b>將捷集團 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>忠明營造</span></b>
        </div>
      </div>
      <router-link to="/page20" class="back-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" style="color: gray;">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"/>
        </svg>
      </router-link>

      <div class="content">
        <img src="/img/p23/bg.png" alt="" class="bg">
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
  