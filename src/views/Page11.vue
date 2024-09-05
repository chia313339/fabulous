<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>慢活之城 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 台北南方安逸之城</b>
      </div>
    </div>
    <div id="carouselExample" class="carousel slide content d-flex align-items-center justify-content-center" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/p11/001.png" class="d-block w-100 carousel-img" alt="圖片1">
        </div>
        <div class="carousel-item">
          <img src="/img/p11/002.png" class="d-block w-100 carousel-img" alt="圖片2">
        </div>
        <div class="carousel-item">
          <img src="/img/p11/003.png" class="d-block w-100 carousel-img" alt="圖片3">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick, onBeforeUnmount, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { Carousel } from 'bootstrap';

export default {
  setup() {
    const carouselRef = ref(null);

    const initCarousel = () => {
      nextTick(() => {
        const content = document.querySelector('.content');
        if (content) {
          content.style.opacity = 0;
          setTimeout(() => {
            content.style.opacity = 1;
          }, 100);
        }

        const carouselElement = document.getElementById('carouselExample');
        if (carouselElement) {
          if (carouselRef.value) {
            carouselRef.value.dispose();
          }
          try {
            carouselRef.value = new Carousel(carouselElement, {
              interval: 5000,
              wrap: true
            });
            carouselRef.value.to(0);
          } catch (error) {
            console.error('Error initializing carousel:', error);
          }
        } else {
          console.warn('Carousel element not found');
        }
      });
    };

    onMounted(() => {
      nextTick(() => {
        initCarousel();
      });
    });

    onBeforeRouteUpdate((to, from, next) => {
      nextTick(() => {
        initCarousel();
      });
      next();
    });

    onBeforeUnmount(() => {
      if (carouselRef.value) {
        carouselRef.value.dispose();
      }
    });

    return {};
  }
};
</script>

<style scoped>
.content {
  height: 100vh; 
  width: 95vw;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  overflow: hidden; /* 防止图片超出容器 */
  opacity: 0; /* 初始状态透明 */
  transition: opacity 2s ease-in-out; /* 淡入效果 */
}

.carousel-item img {
  max-width: 100%; /* 确保图片宽度不超过容器 */
  max-height: 100%; /* 确保图片高度不超过容器 */
  object-fit: contain; /* 让图片在容器内保持比例缩放 */
  margin: 0 auto; /* 图片居中显示 */
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
