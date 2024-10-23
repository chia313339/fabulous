<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>工學品境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>貼心工法</span></b>
      </div>
    </div>
    <div class="content">
      <!-- 背景圖 -->
      <img src="/img/p53/bg.png" class="background-image" alt="Background Image" />

      <!-- 左邊20%的巢狀清單 -->
      <div class="left-panel">
        <div class="leftitem">
          <!-- 顯示左邊的四個類別，點擊後顯示對應的選單 -->
          <span
            v-for="category in categories"
            :key="category"
            @click="selectCategory(category)"
            :class="{ active: selectedCategory === category }"
          >● {{ category }}</span>
        </div>

        <!-- leftitem 選擇 隔音 -->
        <ul v-if="selectedCategory === '隔音'"> 
          <li @click="selectItem('濕式輕隔間')" :class="{ active: selectedItem === '濕式輕隔間' }">濕式輕隔間</li>
          <li @click="selectItem('YKK氣密窗')" :class="{ active: selectedItem === 'YKK氣密窗' }">YKK氣密窗</li>
          <li @click="selectItem('66膠合玻璃')" :class="{ active: selectedItem === '66膠合玻璃' }">6+6膠合玻璃</li>
        </ul>

        <!-- leftitem 選擇 管線 -->
        <ul v-if="selectedCategory === '管線'">
          <li @click="selectItem('吸氣閥')" :class="{ active: selectedItem === '吸氣閥' }">吸氣閥</li>
          <li @click="selectItem('總存水彎')" :class="{ active: selectedItem === '總存水彎' }">總存水彎</li>
          <li @click="selectItem('排水分管')" :class="{ active: selectedItem === '排水分管' }">排水分管</li>
          <li @click="selectItem('三樓獨立水平橫主管')" :class="{ active: selectedItem === '三樓獨立水平橫主管' }">三樓獨立水平橫主管</li>
          <li @click="selectItem('後陽台排水分管')" :class="{ active: selectedItem === '後陽台排水分管' }">後陽台排水分管</li>
          <li @click="selectItem('當層排氣')" :class="{ active: selectedItem === '當層排氣' }">當層排氣</li>
          <li @click="selectItem('明暗管設計')" :class="{ active: selectedItem === '明暗管設計' }">明暗管設計</li>
          <li @click="selectItem('給水管採不鏽鋼接頭')" :class="{ active: selectedItem === '給水管採不鏽鋼接頭' }">給水管採不鏽鋼接頭</li>
          <li @click="selectItem('給水管批覆')" :class="{ active: selectedItem === '給水管批覆' }">給水管批覆</li>
          <li @click="selectItem('雙水箱系統')" :class="{ active: selectedItem === '雙水箱系統' }">雙水箱系統</li>
          <li @click="selectItem('地下室排風')" :class="{ active: selectedItem === '地下室排風' }">地下室排風</li>
        </ul>

        <!-- leftitem 選擇 科技 -->
        <ul v-if="selectedCategory === '科技'">
          <li @click="selectItem('建築資訊模型BIM')" :class="{ active: selectedItem === '建築資訊模型BIM' }">建築資訊模型B.I.M.</li>
          <li @click="selectItem('影音防盜系統架構')" :class="{ active: selectedItem === '影音防盜系統架構' }">影音防盜系統架構</li>
          <li @click="selectItem('ETAG車道進出')" :class="{ active: selectedItem === 'ETAG車道進出' }">E-TAG 車道進出</li>
          <li @click="selectItem('停車場預留電動車充電架')" :class="{ active: selectedItem === '停車場預留電動車充電架' }">停車場預留電動車充電架</li>
          <li @click="selectItem('FTTH光纖到府')" :class="{ active: selectedItem === 'FTTH光纖到府' }">FTTH 光纖到府</li>
          <li @click="selectItem('雨水回收系統')" :class="{ active: selectedItem === '雨水回收系統' }">雨水回收系統</li>
        </ul>

        <!-- leftitem 選擇 貼心 -->
        <ul v-if="selectedCategory === '貼心'">
          <li @click="selectItem('垃圾暫存區')" :class="{ active: selectedItem === '垃圾暫存區' }">垃圾暫存區</li>
          <li @click="selectItem('緊急供電')" :class="{ active: selectedItem === '緊急供電' }">緊急供電</li>
          <li @click="selectItem('行動訊號強波系統')" :class="{ active: selectedItem === '行動訊號強波系統' }">行動訊號強波系統</li>
        </ul>
      </div>

      <!-- 右邊80%的動態顯示區 -->
      <div class="right-panel">
        <transition name="fade">
          <div v-if="selectedItem">
            <img :src="getImageSrc(selectedItem)" alt="Selected Image" class="centered-image" :key="selectedItem" />
            <div  v-if="selectedItem === 'YKK氣密窗'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p53/YKK氣密窗001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p53/YKK氣密窗002.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p53/YKK氣密窗003.png" class="d-block w-100" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div  v-if="selectedItem === '吸氣閥'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p53/吸氣閥001.png" class="d-block w-100" alt="...">
                  </div>
                </div>
                </div>
            </div>
            <div  v-if="selectedItem === '總存水彎'">
              <video src="/img/p53/總存水彎.mp4" class="centered-video" style="max-height: 50vh; top:15%; left:40%;" autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '當層排氣'">
              <video src="/img/p53/當層排氣.mp4" class="centered-video" style="max-height: 50vh; top:15%; left:40%;" autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '給水管採不鏽鋼接頭'">
              <video src="/img/p53/給水管採不鏽鋼接頭.mp4" class="centered-video" style="max-height: 50vh; top:15%; left:44%;" autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '雙水箱系統'">
              <video src="/img/p53/雙水箱系統.mp4" class="centered-video" style="max-height: 50vh; top:15%; left:43%;" autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '地下室排風'">
              <video src="/img/p53/地下室排風.mp4" class="centered-video" style="max-height: 50vh; top:15%; left:38%;" autoplay loop></video>
            </div>
            <div  v-if="selectedItem === 'FTTH光纖到府'">
              <video src="/img/p53/光纖網路.mp4" class="centered-video" style="max-height: 50vh; top:15%; left:45%;" autoplay loop></video>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="footer-text">
      工法示意圖 視覺非本案實際應用
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick, watch } from 'vue';
import { Carousel } from 'bootstrap';  // 導入 Carousel 模組

export default {
  setup() {
    const selectedItem = ref(''); // 保存當前選中的項目
    const selectedCategory = ref('隔音'); // 預設選中的類別
    const categories = ['隔音', '管線', '科技', '貼心']; // 左邊四個類別

    const initCarousels = () => {
      nextTick(() => {
        // 停止所有輪播功能
        const carouselElements = document.querySelectorAll('.carousel');
        carouselElements.forEach((carouselElement) => {
          const carouselInstance = new Carousel(carouselElement, {
            interval: false,  // 停止自動輪播
            ride: false       // 禁止手動操作後重新啟動輪播
          });
          carouselInstance.pause();  // 強制停止輪播
        });
      });
    };

    onMounted(() => {
      selectedItem.value = '濕式輕隔間'; // 預設選中的項目
      initCarousels(); // 初始化並停止輪播
    });

    // 每次切換 selectedItem 時重新初始化輪播
    watch(selectedItem, () => {
      initCarousels(); // 確保選擇不同項目時也停止輪播
    });

    const selectCategory = (category) => {
      selectedCategory.value = category;
    };

    const selectItem = (item) => {
      selectedItem.value = item;
    };

    const getImageSrc = (item) => {
      return `/img/p53/${item}.png`; // 根據選項返回對應的圖片路徑
    };

    return {
      selectedItem,
      selectedCategory,
      categories,
      selectCategory,
      selectItem,
      getImageSrc,
    };
  }
};


</script>

<style scoped>
.content {
  display: flex;
  position: relative;
  width: 100%;
  height: 80vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  margin-top: -8vh;
}

.left-panel {
  position: relative;
  width: 20%;
  padding: 20px;
  font-size: 1.2rem;
  justify-content: top;
  top: 13vh;
  margin-left: 30px;
}

.right-panel {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-right: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin: 10px 0;
  font-size: 1.1rem;
}

li:hover, .active {
  color: #ff6f00;
  font-weight: bold;
}

.leftitem {
  white-space: nowrap;
  overflow: visible;
  width: auto; /* 根據內容自動調整寬度 */
}

.leftitem span {
  cursor: pointer;
  margin-right: 10px;
  color: black;
}

.leftitem .active {
  color: #ff6f00;
  font-weight: bold;
}

.centered-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

ul > li:not(:has(ul))::before {
  content: "→"; /* 主選項前的黑點符號 */
  margin-right: 10px;
}

ul > li:has(ul) > span::before {
  content: "→"; /* 將符號放在有子選單的主選項中 */
  margin-right: 10px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(128, 128, 128, 0.5); /* 灰色半透明背景 */
  border-radius: 20%; /* 圓形背景 */
}

.carousel-control-prev-icon:after,
.carousel-control-next-icon:after {
  font-size: 20px; /* 調整箭頭大小以適應圓形背景 */
}

.carousel{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: auto;
  top:25%;
}

.centered-video {
  /* transform: translateX(-50%); */
  max-width: 100%;
  object-fit: contain; /* 保持影片比例 */
  position: absolute;
}
.footer-text {
  position: absolute;
  right: 10px; /* 從右邊邊緣開始 */
  bottom: 10%; /* 從底部向上10% */
  color: grey; /* 灰色文字 */
  font-size: 0.7rem; /* 字體大小為0.7rem */
  z-index: 10; /* 確保文字在最上層 */
  /* 可選：調整文字的字型和其他樣式 */
  font-family: Arial, sans-serif;
}
</style>
