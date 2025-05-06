<template>
  <div class="fullwidthbanner-container">
    <!-- 頂部標題 -------------------------------------------------------->
    <div class="tag-box">
      <div class="tag">
        <b>空間奇境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>公設規劃</span></b>
      </div>
    </div>

    <!-- 初始畫面（pagetype === 0）--------------------------------------->
    <div v-if="pagetype === 0" class="content">
      <!-- 首圖 ------------------------------------------------------->
      <div>
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/img/p42/001.png" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <!-- 真境 / 善境 + 分類 ----------------------------------------->
      <div class="textlist">
        <div class="textlist-row">
          <span class="zone-label">真境</span>
          <span
            v-for="(label, idx) in zhenCategories"
            :key="idx"
            class="category-btn"
            @click="selectZhen(idx + 1)"
            :class="{ active: zoneType === 'zhen' && pagetype === idx + 1 }"
          >
            {{ label }}
          </span>
        </div>
        <div class="textlist-row">
          <span class="zone-label">善境</span>
          <span
            class="category-btn"
            @click="selectShan(1)"
            :class="{ active: zoneType === 'shan' && pagetype === 1 }"
          >
            大廳
          </span>
        </div>
      </div>
    </div>

    <!-- 分頁內容（pagetype 1-4）--------------------------------------->
    <div v-else class="content0">
      <!-- 左側選單 --------------------------------------------------->
      <div class="left-panel">
        <ul>
          <li
            v-if="zoneType === 'zhen'"
            :class="{ active: pagetype === 1 }"
            @click="pagetype = 1"
          >
            大廳
          </li>
          <li
            v-if="zoneType === 'zhen'"
            :class="{ active: pagetype === 2 }"
            @click="pagetype = 2"
          >
            景觀
          </li>
          <li
            v-if="zoneType === 'zhen'"
            :class="{ active: pagetype === 3 }"
            @click="pagetype = 3"
          >
            車道
          </li>
          <li
            v-if="zoneType === 'zhen'"
            :class="{ active: pagetype === 4 }"
            @click="pagetype = 4"
          >
            公設
          </li>
          <li
            v-if="zoneType === 'shan'"
            :class="{ active: pagetype === 1 }"
            @click="pagetype = 1"
          >
            大廳
          </li>
        </ul>
        <div class="back-btn" @click="pagetype = 0">返回</div>
      </div>

      <!-- 右側 Carousel --------------------------------------------->
      <div class="right-panel">
        <!-- :key 觸發重新掛載，保證切換正常 -->
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          :key="carouselKey"
        >
          <div class="carousel-inner">
            <div
              class="carousel-item"
              :class="{ active: idx === 0 }"
              v-for="(img, idx) in imageList"
              :key="img"
            >
              <img
                :src="computeImgPath(img)"
                class="d-block"
                :alt="`Slide ${idx + 1}`"
              />
            </div>
          </div>
          <!-- 左右箭頭 -->
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 以 Composition API 撰寫元件
 * - 重設 Carousel：觀察 pagetype / zoneType 改變後重新初始化
 * - interval:false 關閉自動輪播
 */
import { ref, computed, watch, nextTick, onMounted } from 'vue';
import { Carousel } from 'bootstrap';

export default {
  name: 'Banner',
  setup() {
    /* -------------------- 反應式變數 -------------------- */
    const pagetype = ref(0);          // 0: 首頁；1-4: 內容頁
    const zoneType = ref('zhen');     // 'zhen' | 'shan'
    const zhenCategories = ['大廳', '景觀', '車道', '公設'];

    /* -------------------- 分類點擊 -------------------- */
    const selectZhen = (n) => {
      zoneType.value = 'zhen';
      pagetype.value = n;
    };
    const selectShan = (n) => {
      zoneType.value = 'shan';
      pagetype.value = n;
    };

    /* -------------------- 圖片清單 -------------------- */
    const imageList = computed(() => {
      if (zoneType.value === 'zhen') {
        switch (pagetype.value) {
          case 1:
            return ['01.png', '02.png'];
          case 2:
            return ['01.png', '02.png', '03.png'];
          case 3:
            return ['01.png'];
          case 4:
            return [
              '01.png',
              '02.png',
              '03.png',
              '04.png',
              '05.png',
              '06.png',
              '07.png',
            ];
          default:
            return [];
        }
      }
      // 善境
      return ['101.png', '102.png', '103.png', '104.png', '105.png'];
    });

    /* -------------------- 動態產生圖片路徑 -------------------- */
    const computeImgPath = (img) =>
      zoneType.value === 'zhen'
        ? `/img/p42_t/${pagetype.value}${img}` // 例如 /img/p42_t/101.png
        : `/img/p42_t/san/${img}`;            // 例如 /img/p42_t/san/101.png

    /* -------------------- Carousel 重新掛載 -------------------- */
    const initCarousel = () => {
      ['#carouselExampleIndicators', '#carouselExampleCaptions'].forEach(
        (sel) => {
          const el = document.querySelector(sel);
          if (!el) return;
          const old = Carousel.getInstance(el);
          if (old) old.dispose();
          new Carousel(el, { interval: false, ride: false, wrap: true });
        },
      );
    };

    onMounted(initCarousel);

    // 任何一次切換分頁／區域都重新初始化 Carousel
    watch([pagetype, zoneType], () => {
      nextTick(initCarousel);
    });

    /* key 讓 Vue 強制重新渲染 Carousel 元素 */
    const carouselKey = computed(() => `${zoneType.value}-${pagetype.value}`);

    /* -------------------- 對外輸出 -------------------- */
    return {
      pagetype,
      zoneType,
      zhenCategories,
      selectZhen,
      selectShan,
      imageList,
      computeImgPath,
      carouselKey,
    };
  },
};
</script>

<style scoped>
/* ---- 全局 ---- */
html,
body {
  overflow-x: hidden;  /* 永遠隱藏水平捲動條，避免版面左右抖動 */
  overflow-y: scroll;  /* 垂直捲動條強制常駐，防止寬度變化 */
}

/* ---------- 初始畫面 ---------- */
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 文字選單 */
.textlist {
  position: absolute;
  top: 70%;
  left: 10%;
  font-size: 1.5rem;
}
.textlist-row {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

/* 區域標籤 */
.zone-label {
  background-color: #c8ab89;
  color: #fff;
  padding: 4px 12px;
  border-radius: 4px;
  margin-right: 24px;
  font-weight: bold;
}

/* 分類按鈕 */
.category-btn {
  margin-right: 40px;
  cursor: pointer;
  text-decoration: underline;
  color: #333;
  transition: color 0.2s;
}
.category-btn:hover,
.category-btn.active {
  color: #ff6f00;
  font-weight: bold;
}

/* ---------- 分頁內容 ---------- */
.content0 {
  /* 給右側內容預留 20vw 空間，與 left‑panel 寬度相同 */
  margin-left: 20vw;
  height: calc(100vh - 60px);
  display: flex;
}

/* 左側選單：固定在視窗左側，完全不受其他元素影響 */
.left-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 20vw;         /* 或改寫成固定 260px 也可 */
  max-width: 260px;
  height: 100vh;
  padding-left: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: transparent;
  z-index: 10;
  font-size: 1.5rem;
}
.left-panel ul {
  list-style: none;
  padding: 0;
}
.left-panel li {
  margin: 12px 0;
  cursor: pointer;
  transition: color 0.2s;
}
.left-panel li:hover,
.left-panel li.active {
  color: #ff6f00;
  font-weight: bold;
  text-decoration: underline;
}

/* 返回按鈕：寬度只包覆文字 */
.back-btn {
  align-self: flex-start;
  margin-top: 24px;
  color: #c8ab89;
  border: 1px solid #c8ab89;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: background 0.2s, transform 0.1s;
}
.back-btn:hover {
  background: #c8ab89;
  color: #fff;
}
.back-btn:active {
  transform: scale(0.95);
}

/* 右側輪播區 */
.right-panel {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  overflow: hidden; /* 防止圖片超出造成水平捲動 */
}

/* Carousel 圖片 */
.carousel-inner {
  width: 100%;
}
.carousel-item img {
  display: block;
  margin: 0 auto;
  max-width: 100%;  /* 關鍵：限制圖片不超出容器寬度 */
  max-height: 80vh;
  height: auto;
  object-fit: contain;
}
.carousel-item {
  transition: transform 0.6s ease;
}


.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(141, 141, 141, 0.5); /* 白色半透明背景 */
  border-radius: 5%; /* 圆形背景 */
  padding: 10px; /* 内边距，让icon在背景中更居中 */
}
</style>

