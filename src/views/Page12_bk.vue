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
import { Carousel } from 'bootstrap';
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

            carouselElement.addEventListener('slide.bs.carousel', (event) => {
              showButton.value = event.to === 0;
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
        html: '<div id="kuula-embed" style="width:100%;height:640px;"></div>',
        width: '80%',
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
          container: 'swal-custom-container',
          popup: 'swal-custom-popup',
          closeButton: 'swal-custom-close-button'
        },
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
  top: 75%;
  left: 20%;
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
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
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

/* SweetAlert2 custom styles */
:global(.swal-custom-container) {
  z-index: 9999;
}

:global(.swal-custom-popup) {
  padding: 0;
  border-radius: 10px;
}

:global(.swal-custom-close-button) {
  position: absolute;
  color: gray;
  top: 10px;
  right: 10px;
  font-size: 24px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>