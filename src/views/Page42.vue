<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>空間奇境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>公設規劃</span></b>
      </div>
    </div>

    <!-- Content for pagetype 0 -->
    <div v-if="pagetype === 0" class="content">
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/img/p42/001.png" class="d-block w-100" alt="...">
            </div>
          </div>
        </div>
        <div class="textlist">
          <span :class="{ active: pagetype === 1 }" @click="pagetype = 1">大廳</span> 
          <span :class="{ active: pagetype === 2 }" @click="pagetype = 2">景觀</span> 
          <span :class="{ active: pagetype === 3 }" @click="pagetype = 3">車道</span> 
          <span :class="{ active: pagetype === 4 }" @click="pagetype = 4">公設</span>
        </div>
      </div>
    </div>

    <!-- Content for pagetype 1-4 -->
    <div v-else class="content0">
      <div class="left-panel">
        <ul> 
          <li :class="{ active: pagetype === 1 }" @click="pagetype = 1">大廳</li>
          <li :class="{ active: pagetype === 2 }" @click="pagetype = 2">景觀</li>
          <li :class="{ active: pagetype === 3 }" @click="pagetype = 3">車道</li>
          <li :class="{ active: pagetype === 4 }" @click="pagetype = 4">公設</li>
        </ul>
      </div>

      <!-- 右邊80%的動態顯示區 -->
      <div class="right-panel">
        <transition name="fade">
          <div 
            id="carouselExampleCaptions" 
            class="carousel slide" 
            :key="pagetype" 
          >

            <!-- Carousel Items -->
            <div class="carousel-inner">
              <div 
                class="carousel-item" 
                :class="{ active: index === 0 }" 
                v-for="(img, index) in imageList" 
                :key="img"
              >
                <img :src="'/img/p42_t/' + pagetype + img" class="d-block w-100" :alt="'Slide ' + (index + 1)">
              </div>
            </div>

            <!-- Carousel Controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>



<script>
import { onMounted, nextTick, ref, computed, watch } from 'vue';
import { Carousel } from 'bootstrap';

export default {
  setup() {
    const pagetype = ref(0); // Track the current page type

    // Define image lists for each pagetype
    const imageList = computed(() => {
      switch (pagetype.value) {
        case 1:
          return ['01.png', '02.png', '03.png'];
        case 2:
          return ['01.png', '02.png', '03.png'];
        case 3:
          return ['01.png'];
        case 4:
          return ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png'];
        default:
          return [];
      }
    });

    // Function to initialize a carousel
    const initializeCarousel = (selector) => {
      const carouselElement = document.querySelector(selector);
      if (carouselElement) {
        // Dispose of any existing carousel instance to prevent duplication
        const existingInstance = Carousel.getInstance(carouselElement);
        if (existingInstance) {
          existingInstance.dispose();
        }

        // Initialize a new carousel instance
        const carouselInstance = new Carousel(carouselElement, {
          interval: false,  // Disable automatic cycling
          ride: false        // Prevent carousel from starting automatically
        });
        carouselInstance.pause();  // Ensure the carousel is paused
      }
    };

    // Initialize content on component mount
    const initContent = () => {
      nextTick(() => {
        const content = document.querySelector('.content');
        if (content) {
          content.style.opacity = 0;
          setTimeout(() => {
            content.style.opacity = 1;
          }, 100);
        }

        // Initialize both carousels
        initializeCarousel('#carouselExampleCaptions');
        initializeCarousel('#carouselExampleIndicators');
      });
    };

    onMounted(initContent);

    // Watch for changes in pagetype to reinitialize the carousel
    watch(pagetype, () => {
      nextTick(() => {
        initializeCarousel('#carouselExampleCaptions');
      });
    });

    return {
      pagetype,
      imageList
    };
  }
};
</script>


  
  <style scoped>
  .content {
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    position: relative; /* 使內部元素可以使用絕對定位 */
    overflow: hidden; /* 防止图片超出容器 */
    opacity: 0; /* 初始状态透明 */
    transition: opacity 2s ease-in-out; /* 淡入效果 */
    width: 90%;
    height: auto; /* 這裡你可以根據需要調整高度 */
    z-index: -1; /* 確保背景圖片在最下層 */
  }
  
  .bg {
    max-width: 100%; /* 图片最大宽度为容器宽度 */
    max-height: 100%; /* 图片最大高度为容器高度 */
    object-fit: contain; /* 保持图片的纵横比，确保图片完整呈现 */
  }
  .carousel-indicators [data-bs-target] {
  background-color: rgba(128, 128, 128, 0.7); /* 設置灰色半透明背景 */

}

.carousel-indicators .active {
  background-color: #555; /* 設置激活狀態的指示器為深灰色 */
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

.textlist {
  position: absolute;
  font-size: 1.5rem;
  top: 70%;
  left: 10%;
  white-space: nowrap; /* 確保文字在同一列顯示 */
}

.textlist span {
  /* font-weight: bold;  */
  text-decoration: underline; /* 底線 */
  margin-right: 80px; /* 每個 span 間隔 10px */
  display: inline-block; /* 確保 span 保持同一列 */
  transition: color 0.3s ease; /* 平滑過渡效果 */
}

.textlist span:hover {
  color: #ff6f00; /* 滑鼠移上時變色 */
}
.textlist2 span,
.textlist span {
  text-decoration: underline;
  margin-right: 80px;
  display: inline-block;
  transition: color 0.3s ease;
  cursor: pointer;
}

.textlist2 span.active,
.textlist span.active {
  color: #ff6f00;
  font-weight: bold;
  text-decoration: underline;
}

.textlist2 span:hover,
.textlist span:hover {
  color: #ff6f00;
}

.content0 {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 100%;
  height: 100%;
}

.left-panel {
  width: 20%;
  padding: 20px;
}

.right-panel {
  width: 70%;
  padding: 20px;
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  margin: 30px 0; /* 每個 li 元素之間的間距 30px */
  font-size: 1.5rem; /* 字體大小 1.5rem */
}

li.active {
  color: #ff6f00;
  font-weight: bold;
  text-decoration: underline; /* 加入底線 */
}


  </style>
  