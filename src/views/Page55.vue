<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>工學品境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>BIM</span></b>
      </div>
    </div>
    <div class="content">
      <!-- 輪播區域 -->
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/p55/001.png" class="d-block w-100" alt="BIM 圖片 1">
          </div>
          <div class="carousel-item">
            <img src="/img/p55/002.png" class="d-block w-100" alt="BIM 圖片 2">
          </div>
          <div class="carousel-item">
            <img src="/img/p55/003.png" class="d-block w-100" alt="BIM 圖片 3">
          </div>
          <div class="carousel-item">
            <video
              class="d-block w-100"
              src="/img/p55/004.mp4"
              autoplay
              muted
              playsinline
              loop
            ></video>
          </div>
          <div class="carousel-item">
            <video
              class="d-block w-100"
              src="/img/p55/005.mp4"
              autoplay
              muted
              playsinline
              loop
            ></video>
          </div>
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
</template>

<script>
import { onMounted, nextTick, onBeforeUnmount, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { Carousel } from 'bootstrap';

export default {
  setup() {
    const carouselRef = ref(null);

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

    const initCarousel = () => {
      nextTick(() => {
        const carouselElement = document.querySelector('#carouselExampleIndicators');
        if (carouselElement) {
          if (carouselRef.value) {
            carouselRef.value.dispose();
          }
          try {
            // 初始化 Carousel 並停止自動輪播
            carouselRef.value = new Carousel(carouselElement, {
              interval: false, // 停止自動輪播
              ride: false      // 禁止手動操作後重新啟動輪播
            });
            carouselRef.value.pause(); // 強制停止輪播
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
        initContent();
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
  display: flex;
  position: relative;
  width: 100%;
  height: 80vh;
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

.carousel {
  width: 100%;
  height: 100%;
}

.carousel-inner {
  height: 100%;
}

.carousel-item {
  height: 100%;
}

.carousel-item img,
.carousel-item video {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 保持比例，完整顯示內容 */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(128, 128, 128, 0.5);
  border-radius: 20%;
}

.carousel-control-prev-icon:after,
.carousel-control-next-icon:after {
  font-size: 20px;
}
</style>