<template>
  <div class="fullwidthbanner-container">
    <div class="tag-box">
      <div class="tag">
        <b>區域情勢 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 時事新聞</b>
      </div>
    </div>
    <div id="carouselExample" class="carousel slide content d-flex align-items-center justify-content-center" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/p63/001.png" class="d-block w-70 carousel-img" alt="圖片1">
          <div class="carousel-caption" >
            <a href="https://www.ctee.com.tw/news/20240606700193-439901" target="_blank">● 每坪211萬 捷運共構宅現新天價。</a><br>
            <a href="https://tw.news.yahoo.com/%E6%88%BF%E5%83%B9%E9%A3%86%E6%96%B0%E9%AB%98-%E5%85%AC%E9%A4%A818%E5%B9%B4%E6%8D%B7%E9%81%8B%E5%AE%85%E5%96%AE%E5%9D%AA%E7%AB%99%E4%B8%8A144%E8%90%AC-054013900.html" target="_blank">● 房價飆新高！公館18年捷運宅單坪站上144萬。</a><br>
            <a href="https://money.udn.com/money/story/5621/8104298" target="_blank">● 捷運三鶯線2026年通車 鶯歌站房價飛漲速度驚人。</a><br>
            <a href="https://www.taiwanhot.net/news/1068665/5%E5%B9%B4%E6%BC%B24%E6%88%90%EF%BC%81%E6%8D%B7%E9%81%8B%E5%85%B1%E6%A7%8B%E5%AE%85%E3%80%8C%E9%80%99%E7%AB%99%E6%9C%80%E5%85%87%E3%80%8D%E9%9B%99%E5%8C%9710%E5%A4%A7%E6%8E%92%E8%A1%8C%E5%87%BA%E7%88%90" target="_blank">● 5年漲4成！捷運共構宅「這站最兇」雙北10大排行出爐。</a><br>
          </div>
          
        </div>
        <div class="carousel-item">
          <img src="/img/p63/002.png" class="d-block w-100 carousel-img" alt="圖片1">
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, nextTick, onBeforeUnmount, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { Carousel } from 'bootstrap';

export default {
  setup() {
    const carouselRef = ref(null);

    const initCarousel = () => {
      nextTick(() => {
        const content = document.querySelector('.content');
        if (content) {
          content.style.opacity = 0;
          setTimeout(() => {
            content.style.opacity = 1;
          }, 100);
        }

        const carouselElement = document.getElementById('carouselExample');
        if (carouselElement) {
          if (carouselRef.value) {
            carouselRef.value.dispose();
          }
          try {
            carouselRef.value = new Carousel(carouselElement, {
              interval: 5000000,
              wrap: true
            });
            carouselRef.value.to(0);
          } catch (error) {
            console.error('Error initializing carousel:', error);
          }
        } else {
          console.warn('Carousel element not found');
        }
      });
    };

    onMounted(() => {
      nextTick(() => {
        initCarousel();
      });
    });

    onBeforeRouteUpdate((to, from, next) => {
      nextTick(() => {
        initCarousel();
      });
      next();
    });

    onBeforeUnmount(() => {
      if (carouselRef.value) {
        carouselRef.value.dispose();
      }
    });

    return {};
  }
};
</script>

<style scoped>
.content {
  height: 100vh; 
  width: 95vw;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  overflow: hidden; /* 防止图片超出容器 */
  opacity: 0; /* 初始状态透明 */
  transition: opacity 2s ease-in-out; /* 淡入效果 */
}

.carousel-item img {
  max-width: 100%; /* 确保图片宽度不超过容器 */
  max-height: 100%; /* 确保图片高度不超过容器 */
  object-fit: contain; /* 让图片在容器内保持比例缩放 */
  margin: 0 auto; /* 图片居中显示 */
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

.carousel-caption {
  position: absolute;
  top: 50%; /* 垂直居中 */
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 使用 transform 让元素真正居中 */
  color: rgb(0, 0, 0); /* 文字颜色设置为黑色 */
  font-size: 1.3rem; /* 调整文字大小 */
  z-index: 10; /* 保证文字在图片上方 */
  width: 50%; /* 设置 caption 宽度，您可以根据需要调整 */
  display: flex;
  flex-direction: column; /* 垂直排列链接 */
  align-items: flex-start; /* 链接靠左对齐 */
  justify-content: center; /* 垂直居中对齐 */
}

.carousel-caption a {
  color: black; /* 设置链接文字为黑色 */
  text-decoration: none; /* 移除链接底线 */
  padding: 5px 0; /* 添加一些间距 */
}

.carousel-caption a:hover {
  color: gray; /* 当鼠标悬停时，改变链接颜色 */
}

</style>
