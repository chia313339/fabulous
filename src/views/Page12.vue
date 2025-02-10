<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>山水之居 &nbsp;&nbsp; | &nbsp;&nbsp;
          <a><span @click="selectItem('001')" :class="{ active: selectedItem === '001' }"> 空拍 / </span></a>&nbsp;
          <a><span @click="selectItem('002')" :class="{ active: selectedItem === '002' }"> 公園 / </span> </a>&nbsp;
          <a><span @click="selectItem('003')" :class="{ active: selectedItem === '003' }"> 河景 / </span></a>&nbsp;
          <a><span @click="selectItem('004')" :class="{ active: selectedItem === '004' }"> 捷運 / </span></a>
        </b>
      </div>
    </div>
    <div class="content">
      <div>
        <img :src="getImageSrc(selectedItem)" alt="Selected Image" class="d-block w-100 carousel-img" :key="selectedItem">
        <button v-if="selectedItem === '001'" class="centered-button" @click="openModal">空拍大景</button>
      </div>
      <div v-show="selectedItem === '001'"  class="cloud-image">
        <img src="/img/p12/cloud.png" alt="Cloud Image" class="animated-cloud">
      </div>
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
    const selectedItem = ref(''); // 保存當前選中的項目

    // 設置預設為第一個選項 '空拍'
    onMounted(() => {
      selectedItem.value = '001';
      const cloudImage = document.querySelector('.cloud-image img');
      if (cloudImage) {
        cloudImage.style.opacity = 0;
        cloudImage.style.transform = 'translateX(-100%)';
        setTimeout(() => {
          cloudImage.style.opacity = 1;
          cloudImage.style.transform = 'translateX(0)';
        }, 300);
      }
    });

    const selectItem = (item) => {
      selectedItem.value = item;
    };

    const getImageSrc = (item) => {
      return `/img/p12/${item}.png`; // 根據選項返回對應的圖片路徑
    };

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
  const panoramaA = "https://kuula.co/share/collection/7K2KN?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1";
  const panoramaB = "https://kuula.co/share/collection/7K2Bh?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1";
  let currentPanorama = panoramaA;

  Swal.fire({
    title: '', // 清空標題
    html: `
      <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
        <button id="a-button" class="swal2-styled selected">A棟</button>
        <button id="b-button" class="swal2-styled">B棟</button>
      </div>
      <div class="kuula-embed" id="kuula-embed"></div>
    `,
    width: '90%',
    padding: '1rem',
    background: '#fff',
    showCloseButton: true,
    showConfirmButton: false,
    focusConfirm: false,
    didOpen: () => {
      const kuulaEmbed = document.getElementById('kuula-embed');
      const iframe = document.createElement('iframe');
      iframe.id = 'kuula-iframe';
      iframe.width = "100%";
      iframe.height = "640";
      iframe.frameBorder = "0";
      iframe.allow = "xr-spatial-tracking; gyroscope; accelerometer";
      iframe.allowFullscreen = true;
      iframe.scrolling = "no";
      iframe.src = currentPanorama; // 預設 A棟的全景圖
      if (kuulaEmbed) {
        kuulaEmbed.appendChild(iframe);
      }

      // A棟按鈕
      document.getElementById('a-button').addEventListener('click', () => {
        currentPanorama = panoramaA;
        iframe.src = currentPanorama;
        document.getElementById('a-button').classList.add('selected');
        document.getElementById('b-button').classList.remove('selected');
      });

      // B棟按鈕
      document.getElementById('b-button').addEventListener('click', () => {
        currentPanorama = panoramaB;
        iframe.src = currentPanorama;
        document.getElementById('b-button').classList.add('selected');
        document.getElementById('a-button').classList.remove('selected');
      });
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
      showButton,
      selectedItem,
      selectItem,
      getImageSrc
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

span {
  color: #666666;
  cursor: pointer;
}

span:hover, .active {
  color: #ffffff;
  font-weight: bold;
}

.swal2-styled {
  background: none; /* 移除背景顏色 */
  border: none;
  font-size: 1.2em;
  color: black; /* 預設按鈕文字為黑色 */
  padding: 5px 15px;
  cursor: pointer;
  transition: color 0.3s ease-in-out; /* 動畫過渡效果 */
}

.swal2-styled:hover {
  color: #FFB77F; /* hover 時顏色變化 */
}

.swal2-styled.selected {
  color: #ff6f00; /* 被選擇按鈕的顏色 */
}

.swal2-styled:not(.selected) {
  color: black; /* 未被選擇的按鈕文字為黑色 */
}

.tag-box{
  position: absolute;
  z-index: 99;
}

.cloud-image {
  position: absolute;
  top: -15%;
  left: 25%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
.animated-cloud {
  width: 70vh; 
  opacity: 0;
  transition: opacity 2s ease, transform 3s ease;
}

</style>
