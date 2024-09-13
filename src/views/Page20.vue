<template>
    <div class="fullwidthbanner-container">
    <div class="tag-box">
        <div class="tag">
        <b>品牌疆境</b>
        </div>
    </div>
    <div class="content">
        <div class="left-container">
        <img src="/img/p20/001.png" alt="左邊圖片" class="left-image">
        <router-link to="/page21" class="link" style="top:13%;">將捷建設</router-link>
        <router-link to="/page24" class="link" style="top:29.5%;left: 33.5%;">將捷文創</router-link>
        <router-link to="/page22" class="link" style="top:25.5%;left: 67%;">林長勲 <br> 聯合建築師<br> 事務所</router-link>
        <router-link to="#" class="link" style="top:43.5%;left: 16.5%;">慈暉 <br> 文教基金會</router-link>
        <router-link to="/page23" class="link" style="top:47.5%;left: 83.5%;">忠明營造</router-link>
        <router-link to="#" class="link" style="top:63%;left: 33.5%;">永捷資產管理</router-link>
        <router-link to="#" class="link" style="top:61%;left: 67%;">捷築 <br> 整合科技</router-link>
        <router-link to="#" class="link" style="top:79%;">結元 <br> 能源開發</router-link>
        </div>
        <div class="right-container">
        <img src="/img/p20/002.png" alt="右邊圖片" class="right-image">
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
    height: 100vh;
    width: 95vw;
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    gap: 15vw; /* 兩張圖片之間的間距 */
    overflow: hidden; /* 防止图片超出容器 */
    opacity: 0; /* 初始状态透明 */
    transition: opacity 2s ease-in-out; /* 淡入效果 */
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
}

.link:hover {
    /* background-color: rgba(255, 255, 255, 0.9); */
    font-size: 1.1rem;
}

</style>