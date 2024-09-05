<template>
  <div class="fullwidthbanner-container">
  <div class="tag-box">
      <div class="tag">
      <b>山水之居 &nbsp;&nbsp; | &nbsp;&nbsp; <span>空拍 / </span>&nbsp;<span>公園 / </span>&nbsp;<span>河景 / </span>&nbsp;<span>捷運 / </span></b>
      </div>
  </div>
  <div id="carouselExample" class="carousel slide content d-flex align-items-center justify-content-center" data-bs-ride="carousel">
      <div class="carousel-inner">
      <div class="carousel-item active">
          <img src="/img/p12/001.png" class="d-block w-100 carousel-img" alt="圖片1">
          <button v-if="showButton" class="centered-button" @click="openModal">空拍大景</button>
      </div>
      <div class="carousel-item">
          <img src="/img/p12/002.png" class="d-block w-100 carousel-img" alt="圖片2">
      </div>
      <div class="carousel-item">
          <img src="/img/p12/003.png" class="d-block w-100 carousel-img" alt="圖片3">
      </div>
      <div class="carousel-item">
          <img src="/img/p12/004.png" class="d-block w-100 carousel-img" alt="圖片4">
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
import { Modal, Carousel } from 'bootstrap';
import Swal from 'sweetalert2';

export default {
setup() {
  const carouselRef = ref(null);
  const showButton = ref(true);

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

          // 監聽輪播圖切換事件
          carouselElement.addEventListener('slide.bs.carousel', (event) => {
            showButton.value = event.to === 0; // 只在第一張圖片顯示按鈕
          });

        } catch (error) {
          console.error('Error initializing carousel:', error);
        }
      } else {
        console.warn('Carousel element not found');
      }
    });
  };

  const openModal = () => {
    Swal.fire({
      title: '空拍大景',
      html: '<div class="kuula-embed" id="kuula-embed"></div>',
      width: '90%',
      padding: '1rem',
      background: '#fff',
      showCloseButton: true,
      showConfirmButton: false,
      focusConfirm: false,
      didOpen: () => {
        if (!document.getElementById('kuula-iframe')) {
          const iframe = document.createElement('iframe');
          iframe.id = 'kuula-iframe';
          iframe.width = "100%";
          iframe.height = "640";
          iframe.frameBorder = "0";
          iframe.allow = "xr-spatial-tracking; gyroscope; accelerometer";
          iframe.allowFullscreen = true;
          iframe.scrolling = "no";
          iframe.src = "https://kuula.co/share/collection/7K2Bh?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1";
          const kuulaEmbed = document.getElementById('kuula-embed');
          if (kuulaEmbed) {
            kuulaEmbed.appendChild(iframe);
          }
        }
      },
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

  return {
    openModal,
    showButton
  };
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
  position: relative;
}

.centered-button {
  position: absolute;
  top: 75%;
  left: 20%;
  transform: translate(-50%, -50%);
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 50px; /* 圆角边框 */
  padding: 10px 20px;
  font-size: 1.2em;
  font-weight: bold; /* 粗体字 */
  cursor: pointer;
  z-index: 10; /* 确保按钮在图片上方 */
  animation: fadeInOut 1.5s ease-in-out infinite; /* 淡入淡出效果 */
}

@keyframes fadeInOut {
  0%, 100% {
  opacity: 1;
  }
  50% {
  opacity: 0.5;
  }
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
