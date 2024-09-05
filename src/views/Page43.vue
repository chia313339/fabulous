<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>空間奇境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>平面規劃</span></b>
      </div>
    </div>
    <div class="content">
      <div class="image-container">
        <transition name="fade" mode="out-in">
          <div class="image-and-button" :key="currentImage">
            <img :src="currentImage" alt="" class="bg">
            <!-- 多個圓形按鈕 -->
            <div class="3f_18f"  v-if="isWithinSelectedFloors">
              <div class="circle-button" style="top: 18%; left: 18%;" @click="">B1</div>
              <div class="circle-button" style="top: 20%; left: 27%;" @click="">B2</div>
              <div class="circle-button" style="top: 18%; left: 34.5%;" @click="">B3</div>
              <div class="circle-button" style="top: 48%; left: 13%;" @click="">B7</div>
              <div class="circle-button" style="top: 54%; left: 23%;" @click="">B6</div>
              <div class="circle-button" style="top: 54%; left: 29%;" @click="">B5</div>
              <div class="circle-button" style="top: 48%; left: 40%;" @click="">BB</div>

              <div class="circle-button" style="top: 18%; left: 64%;" @click="showModal('/img/p43/a3.png')">A3</div>
              <div class="circle-button" style="top: 20%; left: 71%;" @click="showModal('/img/p43/a2.png')">A2</div>
              <div class="circle-button" style="top: 18%; left: 80%;" @click="">A1</div>
              <div class="circle-button" style="top: 48%; left: 59%;" @click="showModal('/img/p43/aa.png')">AA</div>
              <div class="circle-button" style="top: 54%; left: 69.5%;" @click="showModal('/img/p43/a5.png')">A5</div>
              <div class="circle-button" style="top: 54%; left: 75.5%;" @click="">A6</div>
              <div class="circle-button" style="top: 48%; left: 85%;" @click="">A7</div>
            </div>
            <div class="19fup"  v-if="is19fup">
              <div class="circle-button" style="top: 18%; left: 25.5%;" @click="">B1</div>
              <div class="circle-button" style="top: 18%; left: 33%;" @click="">B2</div>
              <div class="circle-button" style="top: 49%; left: 16%;" @click="">B6</div>
              <div class="circle-button" style="top: 54%; left: 26.5%;" @click="">B5</div>
              <div class="circle-button" style="top: 54%; left: 31.5%;" @click="">BB</div>
              <div class="circle-button" style="top: 49%; left: 42%;" @click="">B3</div>

              <div class="circle-button" style="top: 18%; left: 70%;" @click="">A2</div>
              <div class="circle-button" style="top: 18%; left: 76%;" @click="showModal('/img/p43/a1u.png')">A1</div>
              <div class="circle-button" style="top: 49%; left: 60.5%;" @click="">A3</div>
              <div class="circle-button" style="top: 54%; left: 70%;" @click="">AA</div>
              <div class="circle-button" style="top: 54%; left: 75.5%;" @click="">A5</div>
              <div class="circle-button" style="top: 49%; left: 86%;" @click="">A6</div>
            </div>
          </div>
        </transition>
      </div>
      <div class="floor">
        <span 
          v-for="floor in floors" 
          :key="floor" 
          :class="{ active: selectedFloor === floor }" 
          @click="selectFloor(floor)"
        >
          {{ floor }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { onMounted, nextTick, ref, computed } from 'vue';

export default {
  setup() {
    const selectedFloor = ref('10F');
    const currentImage = ref('/img/p43/10f.png');
    const floors = [,'B4','B3','B2','B1_1F','1F_2F','3F','4F','5F','6F','7F','8F','9F','10F','11F','12F','13F','14F','15F','16F','17F','18F','19F','20F','21F','22F'];

    const selectFloor = (floor) => {
      selectedFloor.value = floor;
      currentImage.value = `/img/p43/${floor.toLowerCase()}.png`;
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
      return floorNum && floorNum >= 3 && floorNum <= 18;
    });


    // 計算屬性，檢查當前樓層是否在19F以上
    const is19fup = computed(() => {
      const floorNum = getFloorNumber(selectedFloor.value);
      return floorNum && floorNum >= 19;
    });

    const showModal = (imageUrl) => {
      Swal.fire({
        imageUrl,
        imageAlt: 'Image',
        showCloseButton: true,
        showConfirmButton: false,
        focusConfirm: false,
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
      is19fup,
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
  padding-bottom: 10%;
  background-color: rgba(255, 255, 255, 0.8);
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
