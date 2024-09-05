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
      <!-- <div class="centered-video" style="top:10%; left:16%; color:#930000;">
        <span>✦防水保固七年</span>
      </div> -->
      
      <!-- 左邊20%的巢狀清單 -->
      <div class="left-panel">
        <ul>
          <li>
            <span @click="toggleSubmenu" :class="{ active: isSubmenuActive || submenuItems.includes(selectedItem) }">隔音</span>
            <ul v-if="showSubmenu || submenuItems.includes(selectedItem)">
              <li @click="selectItem('濕式輕隔間')" :class="{ active: selectedItem === '濕式輕隔間' }">濕式輕隔間</li>
              <li @click="selectItem('YKK氣密窗')" :class="{ active: selectedItem === 'YKK氣密窗' }">YKK氣密窗</li>
              <li @click="selectItem('6+6膠合玻璃')" :class="{ active: selectedItem === '6+6膠合玻璃' }">6+6膠合玻璃</li>
            </ul>
          </li>
          <li>
            <span @click="toggleSubmenu" :class="{ active: isSubmenuActive || submenuItems.includes(selectedItem) }">管線</span>
            <ul v-if="showSubmenu || submenuItems.includes(selectedItem)">
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
          </li>
          <li>
            <span @click="toggleSubmenu" :class="{ active: isSubmenuActive || submenuItems.includes(selectedItem) }">隔音</span>
            <ul v-if="showSubmenu || submenuItems.includes(selectedItem)">
              <li @click="selectItem('濕式輕隔間')" :class="{ active: selectedItem === '濕式輕隔間' }">濕式輕隔間</li>
              <li @click="selectItem('YKK氣密窗')" :class="{ active: selectedItem === 'YKK氣密窗' }">YKK氣密窗</li>
              <li @click="selectItem('6+6膠合玻璃')" :class="{ active: selectedItem === '6+6膠合玻璃' }">6+6膠合玻璃</li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 右邊80%的動態顯示區 -->
      <div class="right-panel">
        <transition name="fade">
          <div v-if="selectedItem" >
            <img :src="getImageSrc(selectedItem)" alt="Selected Image" class="centered-image" :key="selectedItem">
            <div  v-if="selectedItem === '浴室防水'">
              <video src="/img/p52/浴室防水.mp4" class="centered-video" style="max-height: 40vh; top:20%; left:50%;" autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '陽台防水'">
              <video src="/img/p52/陽台防水.mp4" class="centered-video" style="max-height: 40vh; top:20%; left:50%;" autoplay loop></video>
            </div>
            <div  v-if="selectedItem === '屋頂防水'">
              <video src="/img/p52/屋頂防水.mp4" class="centered-video" style="max-height: 40vh; top:22%; left:30%;" autoplay loop></video>
            </div>
          </div>

        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const selectedItem = ref(''); // 保存當前選中的項目
    const showSubmenu = ref(false); // 子選單顯示/隱藏
    const submenuItems = ['L型', 'T型'];

    // 設置預設為第一個選項 '窗框防水'
    onMounted(() => {
      selectedItem.value = '窗框防水';
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
      return `/img/p52/${item}.png`; // 根據選項返回對應的圖片路徑
    };

    return {
      selectedItem,
      showSubmenu,
      submenuItems,
      selectItem,
      toggleSubmenu,
      getImageSrc,
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
}

li:hover, .active {
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
</style>
