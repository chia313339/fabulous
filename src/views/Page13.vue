<template>
  <div class="fullwidthbanner-container">
    <!-- 導覽連結區 -->
    <div class="tag-box">
      <div class="tag">
        <b>
          人文之雅 &nbsp;&nbsp; | &nbsp;&nbsp;
          <!-- 根據 activeSlide 動態加入 .active 類別 -->
          <span @click="goToSlide(0)" :class="{ active: activeSlide === 0 }">生機圖 / </span>&nbsp;
          <span @click="goToSlide(1)" :class="{ active: activeSlide === 1 }">交通圖 / </span>&nbsp;
          <span @click="goToSlide(2)" :class="{ active: activeSlide === 2 }">商圈 / </span>&nbsp;
          <span @click="goToSlide(3)" :class="{ active: activeSlide === 3 }">學區 / </span>
        </b>
      </div>
    </div>

    <!-- 內容區：依據 activeSlide 顯示對應圖片 -->
    <div class="content d-flex align-items-center justify-content-center">
      <div v-if="activeSlide === 0" class="slide">
        <img src="/img/p13/001.png" class="d-block w-100 carousel-img" alt="圖片1" />
        <button class="centered-button" @click="openModal()">點擊放大</button>
      </div>
      <div v-else-if="activeSlide === 1" class="slide">
        <img src="/img/p13/002.png" class="d-block w-100 carousel-img" alt="圖片2" />
      </div>
      <div v-else-if="activeSlide === 2" class="slide">
        <img src="/img/p13/003.png" class="d-block w-100 carousel-img" alt="圖片3" />
      </div>
      <div v-else-if="activeSlide === 3" class="slide">
        <img src="/img/p13/004.png" class="d-block w-100 carousel-img" alt="圖片4" />
        <div class="overlay-images">
          <img src="/img/p13/b1.png" @click="openModal('11')" alt="B1" class="overlay-img" />
          <img src="/img/p13/b2.png" @click="openModal('12')" alt="B2" class="overlay-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Swal from 'sweetalert2';

export default {
  setup() {
    // 使用 activeSlide 來記錄目前顯示的圖片 (0～3)
    const activeSlide = ref(0);
    const modalImageSrc = ref('/img/p13/bigmap.webp');

    // 點擊連結後更新 activeSlide
    const goToSlide = (index) => {
      activeSlide.value = index;
    };

    // 開啟 Swal 模態框顯示大圖
    const openModal = (imageType) => {
      if (imageType === '11') {
        modalImageSrc.value = '/img/p13/11.png';
      } else if (imageType === '12') {
        modalImageSrc.value = '/img/p13/12.png';
      } else {
        modalImageSrc.value = '/img/p13/bigmap1.png';
      }

      Swal.fire({
        imageUrl: modalImageSrc.value,
        imageAlt: '大圖',
        width: 'auto',
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

    return {
      activeSlide,
      goToSlide,
      openModal
    };
  }
};
</script>

<style scoped>
/* 導覽連結預設樣式 */
.tag-box span {
  color: #666666;
  cursor: pointer;
}

/* 當滑鼠移入或連結處於 active 狀態時的樣式 */
.tag-box span:hover,
.tag-box .active {
  color: #ffffff;
  font-weight: bold;
}

/* 其他原有樣式 */
.fullwidthbanner-container {
  position: relative;
}

.content {
  height: 100vh;
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: opacity 2s ease-in-out;
}

.carousel-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  margin: 0 auto;
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
  width: auto;
  height: auto;
  max-width: 90vw;
  max-height: 90vh;
  padding: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.custom-modal-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}
</style>
