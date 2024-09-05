<template>
    <div class="fullwidthbanner-container">
      <div class="tag-box">
        <div class="tag">
          <b>人文之雅 &nbsp;&nbsp; | &nbsp;&nbsp; <span>生機圖 / </span>&nbsp;<span>交通圖 / </span>&nbsp;<span>商圈 / </span>&nbsp;<span>學區 / </span></b>
        </div>
      </div>
      <div id="carouselExample" class="carousel slide content d-flex align-items-center justify-content-center" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/p13/001.png" class="d-block w-100 carousel-img" alt="圖片1">
            <button v-if="showButton" class="centered-button" @click="openModal()">點擊放大</button>
          </div>
          <div class="carousel-item">
            <img src="/img/p13/002.png" class="d-block w-100 carousel-img" alt="圖片2">
          </div>
          <div class="carousel-item">
            <img src="/img/p13/003.png" class="d-block w-100 carousel-img" alt="圖片3">
          </div>
          <div class="carousel-item">
            <img src="/img/p13/004.png" class="d-block w-100 carousel-img" alt="圖片4">
            <div v-if="showOverlayImages" class="overlay-images">
              <img src="/img/p13/b1.png" @click="openModal('11')" alt="B1" class="overlay-img">
              <img src="/img/p13/b2.png" @click="openModal('12')" alt="B2" class="overlay-img">
            </div>
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
import Swal from 'sweetalert2';

export default {
  setup() {
    const carouselRef = ref(null);
    const showButton = ref(true);
    const showOverlayImages = ref(false);
    const modalImageSrc = ref('/img/p13/bigmap.webp');

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
              showOverlayImages.value = event.to === 3; // 只在第四張圖片顯示覆蓋圖片
            });

          } catch (error) {
            console.error('Error initializing carousel:', error);
          }
        } else {
          console.warn('Carousel element not found');
        }
      });
    };

    const openModal = (imageType) => {
      if (imageType === '11') {
        modalImageSrc.value = '/img/p13/11.png';
      } else if (imageType === '12') {
        modalImageSrc.value = '/img/p13/12.png';
      } else {
        modalImageSrc.value = '/img/p13/bigmap.webp';
      }

      Swal.fire({
        imageUrl: modalImageSrc.value,
        imageAlt: '大圖',
        width: '90%',
        padding: 0,
        background: '#fff',
        showCloseButton: true,
        showConfirmButton: false,
        focusConfirm: false,
        customClass: {
      popup: 'custom-modal-popup',
      image: 'custom-modal-image'
    },
        backdrop: `rgba(0,0,0,0.8)`
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
      showButton,
      showOverlayImages,
      modalImageSrc
    };
  }
};

  </script>
  
  <style scoped>
  .content {
    height: 100vh; 
    width: 95vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }
  
  .carousel-item img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    margin: 0 auto;
    position: relative;
  }
  
  .centered-button {
    position: absolute;
    top: 70%;
    right: 20%;
    transform: translate(-50%, -50%);
    background-color: white;
    color: black;
    border: 3px solid black;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    z-index: 10;
    animation: fadeInOut 1.5s ease-in-out infinite;
  }
  
  @keyframes fadeInOut {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: rgba(141, 141, 141, 0.5);
    border-radius: 50%;
    padding: 10px;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
  }
  
  .overlay-images {
    position: absolute;
    bottom: 20%;
    right: 30%;
    display: flex;
    gap: 4vw;
  }
  
  .overlay-img {
    width: 15vw;
    height: auto;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .overlay-img:hover {
    transform: scale(1.1);
  }

  .custom-modal-popup {
  width: 100%; /* 覆蓋默認寬度 */
  height: 100%; /* 設定高度為 90vh */
  padding: 0; /* 移除內邊距 */
  background-color: transparent; /* 背景設置為透明 */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* 確保圖片超出邊界時不顯示滾動條 */
}

.custom-modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 確保圖片覆蓋整個模態框，可能會裁剪 */
}
  
  </style>