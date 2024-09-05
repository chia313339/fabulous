<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>將捷集團 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; <span>結構工程設計</span></b>
      </div>
    </div>
    <div class="content">
      <img src="/img/p36/bg.png" alt="" class="bg">
      <div class="overlay">
        <div class="left">
          <!-- <img src="/img/p21/text.png" alt="" class="text_img"> -->
        </div>
        <div class="right">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/img/p36/001.png" class="d-block w-100" alt="...">
              <div class="carousel-caption">
                <!-- <p>將捷之琚</p> -->
              </div>
            </div>
            <div class="carousel-item">
              <img src="/img/p36/002.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <!-- <p>將捷國際商業大樓</p> -->
              </div>
            </div>
            <div class="carousel-item">
              <img src="/img/p36/003.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <!-- <p>將捷之森</p> -->
              </div>
            </div>
            <div class="carousel-item">
              <img src="/img/p36/004.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <!-- <p>將捷巴菲特</p> -->
              </div>
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
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick } from 'vue';

export default {
  setup() {
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

    return {};
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

.overlay {
  position: absolute;
  top: 20%; /* 位置在顶部的20% */
  height: 60%;
  width: 90%;
  left: 12.5%;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  z-index: 1; /* 使其位于背景图片之上 */
  background-color: rgba(255, 255, 255, 0);
}

.left, .right {
  flex: 1;
  color: white;
  text-align: center;
  padding: 10px;
}

.left {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
}

.text_img {
  max-width: 100%; /* 图片最大宽度为容器宽度 */
  max-height: 100%; /* 图片最大高度为容器高度 */
  object-fit: contain; /* 保持图片的纵横比，确保图片完整呈现 */
}

.carousel-caption {
  color: #fff; /* 白色文字 */
  border-radius: 5px; /* 圆角效果 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* 添加文字陰影 */
  position: absolute;
  left: 50%;
  bottom: -3%;
  transform: translateX(-50%); /* 使其水平居中 */
  font-size: 1.5rem;
  display: flex; /* 使用flexbox進行對齊 */
  align-items: center; /* 垂直置中 */
  justify-content: center; /* 水平置中 */
  width: 100%;
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


</style>
