<template>
    <div class="fullwidthbanner-container">
    <div class="tag-box">
        <div class="tag">
        <b>品牌疆境</b>
        </div>
    </div>
    
    <!-- 切換按鈕 -->
    <button class="toggle-button" @click="toggleContent">
      <i class="fas fa-exchange-alt"></i>
    </button>
    
    <!-- 原始內容 -->
    <div v-if="currentView === 'original'" class="content" :style="{ opacity: contentOpacity }">
        <div class="left-container">
        <img src="/img/p20/001.png" alt="左邊圖片" class="left-image">
        <router-link to="/page21" class="link" style="top:14%;">將捷集團</router-link>
        <router-link to="/page24" class="link" style="top:30.5%;left: 33.5%;">將捷文創</router-link>
        <router-link to="/page22" class="link" style="top:27.5%;left: 67%;">林長勲 <br> 聯合建築師<br> 事務所</router-link>
        <router-link to="#" class="link" style="top:44.5%;left: 16.5%;">慈暉 <br> 文教基金會</router-link>
        <router-link to="/page23" class="link" style="top:48.5%;left: 83.5%;">忠明營造</router-link>
        <router-link to="#" class="link" style="top:64%;left: 33.5%;">永捷資產管理</router-link>
        <router-link to="#" class="link" style="top:63%;left: 67%;">捷築 <br> 整合科技</router-link>
        <router-link to="#" class="link" style="top:80%;">結元 <br> 能源開發</router-link>
        </div>
        <div class="right-container">
        <img src="/img/p20/002.png" alt="右邊圖片" class="right-image">
        </div>
    </div>
    
    <!-- 圖片顯示模式 -->
    <div v-else class="content image-mode" :style="{ opacity: contentOpacity }">
        <img :src="getCurrentImageSrc()" alt="FAB圖片" class="fab-image">
    </div>
    </div>
</template>

<script>
import { onMounted, nextTick, ref } from 'vue';

export default {
    setup() {
    // 響應式數據：當前視圖狀態和圖片索引
    const currentView = ref('original'); // 'original' 或 'images'
    const currentImageIndex = ref(0); // 0, 1, 2 對應 001.png, 002.png, 003.png
    const contentOpacity = ref(0); // 控制內容透明度
    
    const initContent = () => {
        nextTick(() => {
            // 初始化時設置透明度
            setTimeout(() => {
                contentOpacity.value = 1;
            }, 100);
        });
    };

    // 切換內容的方法
    const toggleContent = () => {
        // 先淡出
        contentOpacity.value = 0;
        
        setTimeout(() => {
            if (currentView.value === 'original') {
                // 從原始內容切換到第一張圖片
                currentView.value = 'images';
                currentImageIndex.value = 0;
            } else {
                // 在圖片之間循環，或回到原始內容
                currentImageIndex.value++;
                if (currentImageIndex.value > 2) {
                    // 超過第三張圖片，回到原始內容
                    currentView.value = 'original';
                    currentImageIndex.value = 0;
                }
            }
            
            // 切換完成後淡入
            nextTick(() => {
                setTimeout(() => {
                    contentOpacity.value = 1;
                }, 50);
            });
        }, 300); // 等待淡出動畫完成
    };

    // 獲取當前圖片路徑的方法
    const getCurrentImageSrc = () => {
        const imageNumbers = ['001', '002', '003'];
        return `/img/p20/fab/${imageNumbers[currentImageIndex.value]}.png`;
    };

    onMounted(initContent);

    return {
        currentView,
        currentImageIndex,
        contentOpacity,
        toggleContent,
        getCurrentImageSrc
    };
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
    gap: 12vw; /* 兩張圖片之間的間距 - 從15vw減少到12vw */
    overflow: hidden; /* 防止图片超出容器 */
    transition: opacity 0.3s ease-in-out; /* 淡入效果 */
}

.left-container {
    position: relative;
    height: 80vh;
}

.left-image {
    height: 100%;
    object-fit: contain;
}

.right-image {
    max-height: 30vh;
    max-width: 100%;
    object-fit: contain;
}

.link {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    /* background-color: rgba(255, 255, 255, 0.7); */
    color: black;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;  /* 垂直置中 */
    justify-content: center;  /* 水平置中 */
    text-align: center;  /* 文字在多行時仍然居中 */
    font-size: 1vw;
}

.link:hover {
    /* background-color: rgba(255, 255, 255, 0.9); */
    font-size: 1.1vw;
}

/* 切換按鈕樣式 */
.toggle-button {
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    background-color: #c8ab89;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 1.2em;
    cursor: pointer;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.toggle-button:hover {
    background-color: #a68b6a;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* 圖片模式樣式 */
.image-mode {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 !important;
    gap: 0 !important;
}

.fab-image {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: opacity 0.5s ease-in-out;
}

</style>