<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>工學品境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>結構工法</span></b>
      </div>
    </div>
    <div class="content">
      <!-- 背景圖 -->
      <img src="/img/p51/bg.png" class="background-image" alt="Background Image" />
      <div class="centered-video" style="top:10%; left:16%; color:#930000;">
        <span>✦結構保固20年</span>&nbsp;&nbsp;<span v-if="!['結構透視', '筏式基礎', '結構樑補強', '雙層配筋', '複式牆', 'SA級鋼筋續接器', '鋼筋分隔器'].includes(selectedItem)" >✦將捷集團專利工法</span>
      </div>
      
      <!-- 左邊20%的巢狀清單 -->
      <div class="left-panel">
        <ul>
          <li @click="selectItem('柱筋一筆箍')" :class="{ active: selectedItem === '柱筋一筆箍' }">
            柱筋一筆箍
            <span class="patent-badge">專利工法</span>
          </li>
          <li>
            <span @click="toggleSubmenu" :class="{ active: showSubmenu || submenuItems.includes(selectedItem) }">
              牆定位筋結構
              <span class="patent-badge">專利工法</span>
            </span>

            <ul v-if="showSubmenu || submenuItems.includes(selectedItem)">
              <li @click="selectItem('L型')" :class="{ active: selectedItem === 'L型' }">L型</li>
              <li @click="selectItem('T型')" :class="{ active: selectedItem === 'T型' }">T型</li>
            </ul>
          </li>
          <li @click="selectItem('窗框補強')" :class="{ active: selectedItem === '窗框補強' }">
            窗框補強
            <span class="patent-badge">專利工法</span>
          </li>
          <li @click="selectItem('樓板開口補強')" :class="{ active: selectedItem === '樓板開口補強' }">
            樓板開口補強
            <span class="patent-badge">專利工法</span>
          </li>
          <li @click="selectItem('結構透視')" :class="{ active: selectedItem === '結構透視' }">結構透視</li>
          <li @click="selectItem('筏式基礎')" :class="{ active: selectedItem === '筏式基礎' }">筏式基礎</li>
          <li @click="selectItem('SA級鋼筋續接器')" :class="{ active: selectedItem === 'SA級鋼筋續接器' }">SA級鋼筋續接器</li>
          <li @click="selectItem('鋼筋分隔器')" :class="{ active: selectedItem === '鋼筋分隔器' }">鋼筋分隔器</li>
          <li @click="selectItem('結構樑補強')" :class="{ active: selectedItem === '結構樑補強' }">結構樑補強</li>
          <li @click="selectItem('雙層配筋')" :class="{ active: selectedItem === '雙層配筋' }">雙層配筋</li>
          <li @click="selectItem('複式牆')" :class="{ active: selectedItem === '複式牆' }">複式牆</li>
        </ul>
      </div>
      <!-- 右邊80%的動態顯示區 -->
      <div class="right-panel">
        <transition name="fade">
          <div v-if="selectedItem" >
            <img :src="getImageSrc(selectedItem)" alt="Selected Image" class="centered-image" :key="selectedItem">
            <div v-if="selectedItem === '結構透視'">
              <!-- 按鈕容器 -->
              <div class="build-btn-container">
                <button
                  class="build-btn"
                  :class="{ active: selectbuild === '真境' }"
                  @click="selectbuild = '真境'"
                >
                  真境
                </button>
                <br><br>
                <button
                  class="build-btn"
                  :class="{ active: selectbuild === '善境' }"
                  @click="selectbuild = '善境'"
                >
                  善境
                </button>
              </div>
              <!-- 根據選擇顯示對應的圖片 -->
              <div v-if="selectbuild === '真境'">
                <img src="/img/p51/真境.png" alt="Selected Image" style="max-height: 80vh; top:5%; left:25%; position:absolute;" >
              </div>
              <div v-if="selectbuild === '善境'">
                <img src="/img/p51/善境.png" alt="Selected Image" style="max-height: 80vh; top:5%; left:25%; position:absolute;" >
              </div>
            </div>

            <div  v-if="selectedItem === '筏式基礎'">
              <video src="/img/p51/筏式基礎.mp4" class="centered-video" style="max-height: 50vh; top:10%; left:35%;" autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '柱筋一筆箍'">
              <video src="/img/p51/柱筋一筆箍.mp4" class="centered-video" style="max-height: 50vh; top:10%; left:48%;" controls autoplay loop></video>
              <!-- 加強保護力介紹按鈕 -->
              <button class="protection-btn" @click="openProtectionModal">
                加強保護力介紹
              </button>
            </div>
            <div  v-if="selectedItem === 'SA級鋼筋續接器'">
              <video src="/img/p51/鋼筋錯層續接器.mp4" class="centered-video" style="max-height: 45vh; top:20%; left:35%;" controls autoplay loop></video>
            </div>
            <div  v-if="selectedItem === 'L型'">
              <video src="/img/p51/L型.mp4" class="centered-video" style="max-height: 45vh; top:20%; left:40%;" controls autoplay loop></video>
            </div>
            <div  v-if="selectedItem === 'T型'">
              <video src="/img/p51/T型.mp4" class="centered-video" style="max-height: 45vh; top:20%; left:40%;" controls autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '雙層配筋'">
              <video src="/img/p51/雙層配筋.mp4" class="centered-video" style="max-height: 45vh; top:20%; left:41%;" controls autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '窗框補強'">
              <video src="/img/p51/窗框補強.mp4" class="centered-video" style="max-height: 50vh; top:18%; left:45%;" controls autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '樓板開口補強'">
              <video src="/img/p51/樓板開口補強.webm" class="centered-video" style="max-height: 50vh; top:20%; left:35%;" controls autoplay loop></video>
            </div>
          </div>

        </transition>
      </div>
    </div>
    <div class="footer-text">
      工法示意圖 視覺非本案實際應用
    </div>

    <!-- 加強保護力介紹 Modal -->
    <div v-if="showProtectionModal" class="modal-overlay" @click="closeProtectionModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeProtectionModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
        <video 
          src="/img/p51/人居幸福學.mp4" 
          class="modal-video" 
          controls 
          autoplay
          :style="videoStyle"
        >
          您的瀏覽器不支援影片播放
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';

export default {
  setup() {
    const selectedItem = ref(''); // 保存當前選中的項目
    const showSubmenu = ref(false); // 子選單顯示/隱藏
    const submenuItems = ['L型', 'T型'];
    const selectbuild = ref('真境');
    const showProtectionModal = ref(false); // 加強保護力介紹 modal 狀態

    // 設置預設為第一個選項 '柱筋一筆箍'
    onMounted(() => {
      selectedItem.value = '柱筋一筆箍';
    });

    const selectItem = (item) => {
      selectedItem.value = item;
      if (!submenuItems.includes(item)) {
        showSubmenu.value = false; // 點擊其他主選項時隱藏子選單
      }
    };

    const toggleSubmenu = () => {
      showSubmenu.value = !showSubmenu.value;
    };

    const getImageSrc = (item) => {
      return `/img/p51/${item}.png`; // 根據選項返回對應的圖片路徑
    };

    // 打開加強保護力介紹 modal
    const openProtectionModal = () => {
      showProtectionModal.value = true;
      // 防止背景滾動
      document.body.style.overflow = 'hidden';
    };

    // 關閉加強保護力介紹 modal
    const closeProtectionModal = () => {
      showProtectionModal.value = false;
      // 恢復背景滾動
      document.body.style.overflow = '';
    };

    // 計算影片樣式，根據瀏覽器尺寸自動調整
    const videoStyle = computed(() => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // 影片原始比例 672 × 1164 (約 0.577)
      const videoAspectRatio = 672 / 1164;
      
      // 計算適合的尺寸，限制最大寬度
      const maxWidth = Math.min(windowWidth * 0.5, 400); // 限制最大寬度為 400px 或視窗的 50%
      const maxHeight = Math.min(windowHeight * 0.8, 1164);
      
      // 根據比例調整
      let width = maxWidth;
      let height = width / videoAspectRatio;
      
      if (height > maxHeight) {
        height = maxHeight;
        width = height * videoAspectRatio;
      }
      
      return {
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: '50vw',
        maxHeight: '80vh'
      };
    });

    return {
      selectedItem,
      showSubmenu,
      submenuItems,
      selectItem,
      toggleSubmenu,
      getImageSrc,
      selectbuild,
      showProtectionModal,
      openProtectionModal,
      closeProtectionModal,
      videoStyle
    };
  }
};
</script>

<style scoped>
.content {
  display: flex;
  position: relative; /* 相對定位，讓背景圖片能在該區域內 */
  width: 100%;
  height: 80vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: 100vh;
  object-fit: cover; /* 確保圖片填滿且保持比例 */
  z-index: -1; /* 設置背景圖在最下層 */
  margin-top: -8vh;
}

.left-panel {
  position: relative;
  width: 20%;
  padding: 20px;
  /* background-color: rgba(240, 240, 240, 0.151); 半透明背景 */
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
  /* background-color: rgba(224, 224, 224, 0.149); 半透明背景 */
  margin-right: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin: 10px 0;
  white-space: nowrap;
  display: flex;
  align-items: center;
}

/* 有子選單的項目特殊處理 */
li:has(ul) {
  display: block;
}

li:has(ul) > span {
  display: flex;
  align-items: center;
}

/* 子選單容器 */
ul li ul {
  margin-top: 5px;
  margin-left: 0;
  padding-left: 0;
}

/* 子選單項目恢復原本設計 */
ul li ul li {
  display: block;
  white-space: normal;
  margin: 5px 0;
  padding-left: 20px;
}

/* 主選單項目 hover 效果 */
li:hover, li.active {
  color: #ff6f00;
  font-weight: bold;
}

/* 子選單項目 hover 效果 */
ul li ul li:hover, ul li ul li.active {
  color: #ff6f00;
  font-weight: bold;
}

li {
  font-size: 1.2rem;
}

ul li ul li {
  font-size: 1rem; /* 子選項的字體大小為1rem */
}

ul li ul li:before {
  content: "→"; /* 子選單前的向右箭頭 */
  margin-right: 5px;
}

ul > li:not(:has(ul))::before {
  content: "●"; /* 主選項前的黑點符號 */
  margin-right: 10px;
}

ul > li:has(ul) > span::before {
  content: "●"; /* 將符號放在有子選單的主選項中 */
  margin-right: 10px;
}

.centered-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain; /* 保持圖片比例 */
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
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

.build-btn-container {
  position: absolute;
  top: 20%;
  left: 18%;
  z-index: 10;
}

.build-btn {
  background-color: #c8ab89;
  color: #ffffff;
  border: none;
  padding: 0.5em 1em;
  margin-right: 10px;
  font-size: 1.1vw;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.build-btn:hover {
  transform: scale(1.07);
}

.build-btn.active {
  background-color: #473d30; /* Active 狀態使用更深的顏色 */
}

/* 專利工法標記樣式 */
.patent-badge {
  display: inline;
  background: linear-gradient(45deg, #ff6f00, #ff8f00);
  color: white;
  font-size: 0.6rem;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 6px;
  box-shadow: 0 2px 4px rgba(255, 111, 0, 0.3);
  animation: glow 2s ease-in-out infinite alternate;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  vertical-align: middle;
}

/* 發光動畫效果 */
@keyframes glow {
  from {
    box-shadow: 0 2px 4px rgba(255, 111, 0, 0.3);
  }
  to {
    box-shadow: 0 2px 8px rgba(255, 111, 0, 0.6), 0 0 12px rgba(255, 111, 0, 0.4);
  }
}

/* 加強保護力介紹按鈕樣式 */
.protection-btn {
  position: absolute;
  top: 19%;
  right: 60%;
  background: linear-gradient(45deg, #2E2221, #473d30);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(46, 34, 33, 0.3);
  z-index: 10;
}

.protection-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(46, 34, 33, 0.4);
  background: linear-gradient(45deg, #473d30, #2E2221);
}

/* Modal 樣式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  animation: slideIn 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: background-color 0.3s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.7);
}

.modal-video {
  display: block;
  object-fit: contain;
}

/* 動畫效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
