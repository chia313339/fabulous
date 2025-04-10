<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>空間奇境 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>平面規劃</span></b>
      </div>
    </div>
    <div class="content">
      <div class="build-btn-container">
        <router-link to="Page43_1">
          <button class="build-btn">真境</button>
        </router-link>
        <router-link to="Page43_2">
          <button class="build-btn">善境</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const selectbuild = ref('真境');

    onMounted(() => {
      // 透過 mounted 鉤子觸發淡入效果
      const contentEl = document.querySelector('.content');
      if(contentEl) {
        contentEl.style.opacity = 1;  // 淡入顯示
        contentEl.style.zIndex = 1;     // 調整 z-index
      }
    });

    return {
      selectbuild
    };
  }
};
</script>

<style scoped>
.fullwidthbanner-container {
  position: relative;
  /* 這裡可根據需要增加更多容器相關樣式 */
}

.tag-box {
  /* 自訂 tag-box 的樣式 */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 90%;
  height: auto;
  opacity: 0; /* 初始不透明度設定為 0 */
  transition: opacity 2s ease-in-out;
  z-index: 1;   /* 預設即使設定，掛載時也會更改成 1 */
}

.build-btn-container {

  z-index: 10;
}

.build-btn {
  background-color: #c8ab89;
  color: #ffffff;
  border: none;
  padding: 0.5em 1em;
  margin: 2em;
  font-size: 3vw;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.build-btn:hover {
  transform: scale(1.1);
}

.build-btn.active {
  background-color: #473d30;
}
</style>
