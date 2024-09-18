<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>區域情勢 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>區域市場</span></b>
      </div>
    </div>
    <div class="content">
      <!-- 背景圖 -->
      <img src="/img/p62/bg.png" class="background-image" alt="Background Image" />
      
      <!-- 左邊20%的巢狀清單 -->
      <div class="left-panel">
        <ul>
          <li @click="selectItem('文山區情勢')" :class="{ active: selectedItem === '文山區情勢' }">文山區情勢</li>
          <li @click="selectItem('敘文山')" :class="{ active: selectedItem === '敘文山' }">敘文山</li>
          <li @click="selectItem('元利四季莊園')" :class="{ active: selectedItem === '元利四季莊園' }">元利四季莊園</li>
          <li @click="selectItem('漢皇蒔序')" :class="{ active: selectedItem === '漢皇蒔序' }">漢皇蒔序</li>
          <li @click="selectItem('安家湛')" :class="{ active: selectedItem === '安家湛' }">安家湛</li>
          <li @click="selectItem('信義富境')" :class="{ active: selectedItem === '信義富境' }">信義富境</li>
          <li @click="selectItem('國泰忠順街案')" :class="{ active: selectedItem === '國泰忠順街案' }">國泰忠順街案</li>
          <li @click="selectItem('南港東明社宅')" :class="{ active: selectedItem === '南港東明社宅' }">南港東明社宅</li>
          <li @click="selectItem('松山健康社宅')" :class="{ active: selectedItem === '松山健康社宅' }">松山健康社宅</li>
          <li @click="selectItem('內湖行善社會住宅')" :class="{ active: selectedItem === '內湖行善社會住宅' }">內湖行善社會住宅</li>
          <li @click="selectItem('國有財產署標售社區')" :class="{ active: selectedItem === '國有財產署標售社區' }">國有財產署標售社區</li>
          <li @click="selectItem('北市財政局標租社區')" :class="{ active: selectedItem === '北市財政局標租社區' }">北市財政局標租社區</li>
          <li @click="selectItem('北市公辦都更指標個案')" :class="{ active: selectedItem === '北市公辦都更指標個案' }">北市公辦都更指標個案</li>
        </ul>
      </div>
      <!-- 右邊80%的動態顯示區 -->
      <div class="right-panel">
        <transition name="fade">
          <div v-if="selectedItem" >
            <img :src="getImageSrc(selectedItem)" alt="Selected Image" class="centered-image" :key="selectedItem">
            <div  v-if="selectedItem === '文山區情勢'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/文山區情勢001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/文山區情勢002.png" class="d-block w-100" alt="...">
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
            <div  v-if="selectedItem === '敘文山'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/敘文山001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/敘文山002.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/敘文山003.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/敘文山004.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/敘文山005.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/敘文山006.png" class="d-block w-100" alt="...">
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
            <div  v-if="selectedItem === '元利四季莊園'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/元利四季莊園001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/元利四季莊園002.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/元利四季莊園003.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/元利四季莊園004.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/元利四季莊園005.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/元利四季莊園006.png" class="d-block w-100" alt="...">
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
            <div  v-if="selectedItem === '漢皇蒔序'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/漢皇蒔序001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/漢皇蒔序002.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/漢皇蒔序003.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/漢皇蒔序004.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/漢皇蒔序005.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/漢皇蒔序006.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/漢皇蒔序007.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/漢皇蒔序008.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/漢皇蒔序009.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/漢皇蒔序010.png" class="d-block w-100" alt="...">
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
            <div  v-if="selectedItem === '安家湛'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/安家湛001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛002.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛003.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛004.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛005.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛006.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛007.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛008.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛009.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛010.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛011.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/安家湛012.png" class="d-block w-100" alt="...">
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
            <div  v-if="selectedItem === '信義富境'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/信義富境001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/信義富境002.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/信義富境003.png" class="d-block w-100" alt="...">
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
            <div  v-if="selectedItem === '國泰忠順街案'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/國泰忠順街案001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/國泰忠順街案002.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/國泰忠順街案003.png" class="d-block w-100" alt="...">
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
            <div  v-if="selectedItem === '南港東明社宅'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/南港東明社宅001.png" class="d-block w-100" alt="...">
                  </div>
                </div>
                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button> -->
                </div>
            </div>
            <div  v-if="selectedItem === '松山健康社宅'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/松山健康社宅001.png" class="d-block w-100" alt="...">
                  </div>
                </div>
                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button> -->
                </div>
            </div>
            <div  v-if="selectedItem === '內湖行善社會住宅'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/內湖行善社會住宅001.png" class="d-block w-100" alt="...">
                  </div>
                </div>
                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button> -->
                </div>
            </div>
            <div  v-if="selectedItem === '國有財產署標售社區'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/國有財產署標售社區001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/國有財產署標售社區002.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/國有財產署標售社區003.png" class="d-block w-100" alt="...">
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
            <div  v-if="selectedItem === '北市財政局標租社區'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/北市財政局標租社區001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/北市財政局標租社區002.png" class="d-block w-100" alt="...">
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
            <div  v-if="selectedItem === '北市公辦都更指標個案'">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="/img/p62/北市公辦都更指標個案001.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="/img/p62/北市公辦都更指標個案002.png" class="d-block w-100" alt="...">
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
          </div>

        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import { Carousel } from 'bootstrap';

export default {
  setup() {
    const selectedItem = ref(''); // 保存當前選中的項目
    const showSubmenu = ref(false); // 子選單顯示/隱藏
    const submenuItems = ['L型', 'T型'];
    const carouselRef = ref(null);

    // 設置預設為第一個選項 '文山區情勢'
    onMounted(() => {
      selectedItem.value = '文山區情勢';
      nextTick(() => {
        const carouselElement = document.querySelectorAll('.carousel');
        carouselElement.forEach((element) => {
          const carouselInstance = new Carousel(element, {
            interval: false, // 停止自動輪播
            ride: false // 禁止手動操作後重新啟動輪播
          });
          carouselInstance.pause(); // 強制停止輪播
        });
      });
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
      return `/img/p62/itembk.png`; // 根據選項返回對應的圖片路徑
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
  font-size: 1rem;
  justify-content: top;
  top: 7vh;
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
</style>
