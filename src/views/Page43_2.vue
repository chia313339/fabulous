<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>空間奇境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>平面規劃</span></b>
      </div>
    </div>
    <div class="content">
      <div class="build-btn-container">
        <router-link to="/Page43_1" >
          <button
          class="build-btn"
        >
          真境
        </button>
        </router-link>
        <br><br>
          <button
          class="build-btn active"
        >
          善境
        </button>
      </div>
      <div class="image-container">
        <transition name="fade" mode="out-in">
          <div class="image-and-button" :key="currentImage">
            <img :src="currentImage" alt="" class="bg">
            <!-- 多個圓形按鈕 -->
            <div class="3f_18f"  v-if="isWithinSelectedFloors">
              <div class="circle-button" style="top: 17%; left: 54.5%;" @click="">A</div>
              <div class="circle-button" style="top: 17%; left: 47%;" @click="">B</div>
              <div class="circle-button" style="top: 17%; left: 40.5%;" @click="">C</div>
              <div class="circle-button" style="top: 31%; left: 42.5%;" @click="">D</div>
              <div class="circle-button" style="top: 45%; left: 43.5%;" @click="">E</div>
              <div class="circle-button" style="top: 60%; left: 46%;" @click="">F</div>
              <div class="circle-button" style="top: 60%; left: 53.5%;" @click="">G</div>
            </div>

            <div class="3f"  v-if="is13f">
              <div class="circle-button" style="top: 17%; left: 54.5%;" @click="showModal('/img/p43/san/a.png')">A</div>
              <div class="circle-button" style="top: 17%; left: 47%;" @click="">B</div>
              <div class="circle-button" style="top: 17%; left: 40.5%;" @click="showModal('/img/p43/san/13c.png')">C</div>
              <div class="circle-button" style="top: 31%; left: 42.5%;" @click="showModal('/img/p43/san/d.png')">D</div>
              <div class="circle-button" style="top: 45%; left: 43.5%;" @click="showModal('/img/p43/san/e.png')">E</div>
              <div class="circle-button" style="top: 60%; left: 46%;" @click="showModal('/img/p43/san/f.png')">F</div>
              <div class="circle-button" style="top: 60%; left: 53.5%;" @click="showModal('/img/p43/san/g.png')">G</div>
            </div>

            <div class="3f"  v-if="is654f">
              <div class="circle-button" style="top: 17%; left: 48%;" @click="">B</div>
              <div class="circle-button" style="top: 17%; left: 41.5%;" @click="">C</div>
              <div class="circle-button" style="top: 31%; left: 43.5%;" @click="">D</div>
              <div class="circle-button" style="top: 45%; left: 44.5%;" @click="">E</div>
              <div class="circle-button" style="top: 60%; left: 47%;" @click="">F</div>
              <div class="circle-button" style="top: 60%; left: 54.5%;" @click="">G</div>
            </div>

            <div class="3f"  v-if="is32f">
              <div class="circle-button" style="top: 19%; left: 48%;" @click="">B</div>
              <div class="circle-button" style="top: 19%; left: 41.5%;" @click="">C</div>
              <div class="circle-button" style="top: 33%; left: 44.5%;" @click="">D</div>
              <div class="circle-button" style="top: 47%; left: 45.5%;" @click="">E</div>
            </div>

          </div>
        </transition>
      </div>
      <div class="floor">
        <span :class="{ active: selectedFloor === 'B2' }" @click="selectFloor('B2')">B2</span>
        <span :class="{ active: selectedFloor === 'B1' }" @click="selectFloor('B1')">B1</span>
        <span :class="{ active: selectedFloor === '1F' }" @click="selectFloor('1F')">1F</span>
        <span :class="{ active: selectedFloor === '2F' }" @click="selectFloor('2F')">2F</span>
        <span :class="{ active: selectedFloor === '3F' }" @click="selectFloor('3F')">3F</span>
        <span :class="{ active: selectedFloor === '4F' }" @click="selectFloor('4F')">4F</span>
        <span :class="{ active: selectedFloor === '5F' }" @click="selectFloor('5F')">5F</span>
        <span :class="{ active: selectedFloor === '6F' }" @click="selectFloor('6F')">6F</span>
        <span :class="{ active: selectedFloor === '7F' }" @click="selectFloor('7F')">7F</span>
        <span :class="{ active: selectedFloor === '8F' }" @click="selectFloor('8F')">8F</span>
        <span :class="{ active: selectedFloor === '9F' }" @click="selectFloor('9F')">9F</span>
        <span :class="{ active: selectedFloor === '10F' }" @click="selectFloor('10F')">10F</span>
        <span :class="{ active: selectedFloor === '11F' }" @click="selectFloor('11F')">11F</span>
        <span :class="{ active: selectedFloor === '12F' }" @click="selectFloor('12F')">12F</span>
        <span :class="{ active: selectedFloor === '13F' }" @click="selectFloor('13F')">13F</span>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { onMounted, nextTick, ref, computed } from 'vue';

export default {
  setup() {
    const selectbuild = ref('真境');
    const selectedFloor = ref('13F');
    const currentImage = ref('/img/p43/san/13f.png');
    const floors = ['B2','B1','1F','2F','3F','4F','5F','6F','7F','8F','9F','10F','11F','12F', '13F'];

    const selectFloor = (floor) => {
      selectedFloor.value = floor;
      currentImage.value = `/img/p43/san/${floor.toLowerCase()}.png`;
    };
    // 使用正則表達式來提取樓層數字，並排除 B4 和 B3
    const getFloorNumber = (floor) => {
      if (floor.startsWith('B')) {
        // 排除 B4 和 B3 等以 'B' 開頭的樓層
        return null;
      }
      const match = floor.match(/\d+/);
      return match ? parseInt(match[0], 10) : null;
    };

    // 計算屬性，檢查當前樓層是否在3F至18F範圍內，排除 B 開頭的樓層
    const isWithinSelectedFloors = computed(() => {
      const floorNum = getFloorNumber(selectedFloor.value);
      const allowedFloors = [7, 8, 9, 10, 11, 12];
      return floorNum && allowedFloors.includes(floorNum);
    });

    // 計算屬性，檢查當前樓層是否在3F至18F範圍內，排除 B 開頭的樓層
    const is654f = computed(() => {
      const floorNum = getFloorNumber(selectedFloor.value);
      const allowedFloors = [6,5,4];
      return floorNum && allowedFloors.includes(floorNum);
    });

    // 計算屬性，檢查當前樓層是否在3F至18F範圍內，排除 B 開頭的樓層
    const is32f = computed(() => {
      const floorNum = getFloorNumber(selectedFloor.value);
      const allowedFloors = [3,2];
      return floorNum && allowedFloors.includes(floorNum);
    });

    // 計算屬性，檢查當前樓層是否在19F以上
    const is13f = computed(() => {
      const floorNum = getFloorNumber(selectedFloor.value);
      const allowedFloors = [13];
      return floorNum && allowedFloors.includes(floorNum);
    });

    const showModal = (imageUrl) => {
      Swal.fire({
        imageUrl,
        imageAlt: 'Image',
        showCloseButton: true,
        showConfirmButton: false,
        focusConfirm: false,
        width: '80vw',  // 设置 modal 宽度为视窗宽度的 90%
        customClass: {
          image: 'custom-image' // 自定义类名
        },
        didOpen: () => {
          const img = document.querySelector('.swal2-image');
          if (img) {
            img.style.maxHeight = '80vh';
            img.style.maxWidth = 'auto';  // 保持图片的宽度比例
            img.style.objectFit = 'contain'; // 保持图片宽高比
          }
        }
      });
    };


    const initContent = () => {
      nextTick(() => {
        const content = document.querySelector('.content');
        if (content) {
          content.style.opacity = 0;
          setTimeout(() => {
            content.style.opacity = 1;
          }, 100);
        }
      });
    };

    onMounted(initContent);

    return {
      floors,
      selectedFloor,
      currentImage,
      selectFloor,
      showModal,
      isWithinSelectedFloors,
      is654f,
      is13f,
      is32f,
      selectbuild
    };
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  width: 90%;
  height: auto;
  z-index: -1;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.image-and-button {
  position: relative;
}

.bg {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.circle-button {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: #ada191;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s, opacity 2s ease-in-out;
}

.circle-button:hover {
  background-color: #786752;
}

.floor {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  padding-bottom: 8%;
  background-color: rgba(255, 255, 255, 0.8);
  flex-wrap: wrap; /* 允許換行 */
}

.floor span {
  padding: 5px 10px;
  font-weight: bold;
  color: black;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.floor span.active {
  color: white;
  background-color: #5B4341;
}

.fade-enter-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.custom-image {
  max-height: 80vh;   /* 最大高度 90vh */
  max-width: 100%;    /* 保持图片宽度最大化 */
  object-fit: contain; /* 保持图片宽高比 */
}

.swal2-popup {
  max-width: 80vw !important; /* 强制设置弹出窗口的最大宽度 */
}

.build-btn-container {
  position: absolute;
  top: 5%;
  left: 0%;
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

</style>
