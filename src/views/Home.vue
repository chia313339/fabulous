<template>
  <div class="inbody">
    <div v-if="isVideoPlaying" class="fullscreen-video-container">
      <video ref="introVideo" class="fullscreen-video" autoplay muted @ended="videoEnded">
        <source src="/img/theme.mp4" type="video/mp4">
        您的瀏覽器不支援影片播放
      </video>
    </div>
    <div v-else>
      <div v-if="isSmallScreen" class="overlay">
        <p>請更換尺寸更大畫面以獲得最佳體驗</p>
      </div>
      <div v-else class="fullwidthbanner-container">
        <Navbar />
        <div class="keyhole-container" >
          <div class="line left"></div>
          <a href="javascript:void(0)"><div id="keyhole" @click="enlargeKeyhole"></div></a>
          <div class="line right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {
      isSmallScreen: false,
      isVideoPlaying: true,
    };
  },
  components: {
    Navbar,
  },
  mounted() {
    this.isSmallScreen = window.innerWidth < 768;
    window.addEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 768;
    },
    videoEnded() {
      this.isVideoPlaying = false;
    },
    enlargeKeyhole() {
      const keyhole = document.querySelector('#keyhole');
      keyhole.style.transform = 'scale(100)';
      keyhole.style.transition = 'transform 1s ease-in-out';
      setTimeout(() => {
        this.$router.push('/page11'); // 跳转到下一个页面
      }, 1000); // 等待动画完成后跳转
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
};
</script>

<style scoped>
.inbody {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url('/img/home/back.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.fullscreen-video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: black;
}

.fullscreen-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.keyhole-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -4%;
  top:-1%;
}

.line {
  width: 23vw;
  height: 2px;
  background-color: white;
  margin-top: -2%;
}

.left {
  margin-right: 30px;
}

.right {
  margin-left: 30px;
}

#keyhole {
  position: relative;
  width: 1.5rem;
  height: 70px;
  transition: transform 1s ease-in-out;
}

#keyhole::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  background-color: white;
  border-radius: 50%;
}

#keyhole::after {
  content: '';
  position: absolute;
  bottom: 0;
  top: 0.8rem;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  width: 0;
  height: 0;
  border-left: 0.8rem solid transparent;
  border-right: 0.8rem solid transparent;
  border-top: 2rem solid white;
}
</style>
