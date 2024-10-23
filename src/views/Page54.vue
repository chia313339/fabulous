<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>工學品境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>精選建材</span></b>
      </div>
    </div>
    <div class="content">
      <!-- 背景圖 -->
      <img src="/img/p54/bg.png" class="background-image" alt="Background Image" />

      <!-- 左邊20%的巢狀清單 -->
      <div class="left-panel">
        <div class="leftitem">
          <span 
            style="font-size: 1.2rem;" 
            :class="{ active: selectedCategory === '衛浴' }"
          >● 衛浴</span>
        </div>
        <!-- leftitem 選擇 衛浴 -->
        <ul> 
          <li @click="selectItem('主浴', '衛浴')" :class="{ active: selectedItem === '主浴' }">主浴</li>
          <li @click="selectItem('客浴', '衛浴')" :class="{ active: selectedItem === '客浴' }">客浴</li>
        </ul>
        
        <div class="leftitem">
          <span 
            style="font-size: 1.2rem;" 
            :class="{ active: selectedCategory === '廚具' }"
          >● 廚具</span>
        </div>
        <!-- leftitem 選擇 廚具 -->
        <ul>
          <li @click="selectItem('隱藏式排油煙機', '廚具')" :class="{ active: selectedItem === '隱藏式排油煙機' }">隱藏式排油煙機</li>
          <li @click="selectItem('檯面爐', '廚具')" :class="{ active: selectedItem === '檯面爐' }">檯面爐</li>
          <li @click="selectItem('感應爐', '廚具')" :class="{ active: selectedItem === '感應爐' }">感應爐</li>
          <li @click="selectItem('烘碗機', '廚具')" :class="{ active: selectedItem === '烘碗機' }">烘碗機</li>
          <li @click="selectItem('水龍頭水槽', '廚具')" :class="{ active: selectedItem === '水龍頭水槽' }">水龍頭、水槽</li>
          <li @click="selectItem('淨水器', '廚具')" :class="{ active: selectedItem === '淨水器' }">淨水器</li>
          <li @click="selectItem('櫃體', '廚具')" :class="{ active: selectedItem === '櫃體' }">櫃體</li>
        </ul>

      </div>

      <!-- 右邊80%的動態顯示區 -->
      <div class="right-panel">
        <transition name="fade">
          <div v-if="selectedItem">
            <img :src="getImageSrc(selectedItem)" alt="Selected Image" class="centered-image" :key="selectedItem" />
            <div  v-if="selectedItem === '櫃體'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p54/櫃體001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p54/櫃體002.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p54/櫃體003.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p54/櫃體004.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p54/櫃體005.png" class="d-block w-100" alt="...">
                  </div>
                  <!-- <div class="carousel-item">
                    <img src="/img/p54/櫃體006.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p54/櫃體007.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p54/櫃體008.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p54/櫃體009.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p54/櫃體010.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p54/櫃體011.png" class="d-block w-100" alt="...">
                  </div> -->
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
          </div>
          
        </transition>
      </div>
    </div>

  </div>
</template>


<script>
import { ref, onMounted, nextTick } from 'vue';
import { Carousel } from 'bootstrap';  // 導入 Carousel 模組

export default {
  setup() {
    const selectedItem = ref(''); // 保存當前選中的項目
    const selectedCategory = ref('衛浴'); // 預設選中的類別

    onMounted(() => {
      selectedItem.value = '主浴'; // 預設選中的項目

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
    });

    const selectItem = (item, category) => {
      selectedItem.value = item;
      selectedCategory.value = category; // 更新選中的類別
    };

    const getImageSrc = (item) => {
      return `/img/p54/${item}.png`; // 根據選項返回對應的圖片路徑
    };

    return {
      selectedItem,
      selectedCategory,
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
  font-size: 1rem;
}

ul > li:not(:has(ul))::before {
  content: "→"; /* 主選項前的黑點符號 */
  margin-right: 10px;
}

ul > li:has(ul) > span::before {
  content: "→"; /* 將符號放在有子選單的主選項中 */
  margin-right: 10px;
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
