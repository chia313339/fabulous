<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-bottom custom-navbar">
        <a class="navbar-brand" href="/" style="margin-left: 2rem;">
            <img src="/img/nav/logo_left.png" alt="" class="nav-logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li 
                    class="nav-item dropup" 
                    v-for="item in navItems" 
                    :key="item.label" 
                    :class="{ active: isActive(item) }"
                >
                <router-link 
                    class="nav-link" 
                    :to="item.link || (item.subItems.length ? item.subItems[0].link : '')" 
                    role="button"
                >
                    <span>{{ item.label }}</span>&nbsp;&nbsp;&nbsp;<span style="font-size:1.5vw;">{{ item.subLabel }}</span>
                </router-link>
                    <div class="dropdown-menu" v-if="item.subItems.length">
                        <router-link 
                            class="dropdown-item" 
                            v-for="subItem in item.subItems" 
                            :to="subItem.link" 
                            :key="subItem.label"
                            :class="{ active: isActive(subItem) }"
                        >
                            {{ subItem.label }}
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
        <div style="margin-right: 2rem;">
            <img src="/img/nav/logo_right.png" alt="" class="nav-logo">
        </div>
    </nav>
</template>


<script>
export default {
    data() {
        return {
            navItems: [
                {
                    label: '文山畫境',
                    subLabel: '/',
                    link: '', // 不用於無 subItems 的情況
                    subItems: [
                        { label: '慢活之城', link: '/page11' },
                        { label: '山水之居', link: '/page12' },
                        { label: '人文之雅', link: '/page13' },
                        { label: '行旅之趣', link: '/page14' },
                    ],
                },
                {
                    label: '品牌疆境',
                    subLabel: '/',
                    link: '/page20', // 不用於無 subItems 的情況
                    subItems: [
                        { label: '將捷建設', link: '/page21' },
                        { label: '林長勲聯合建築師事務所', link: '/page22' },
                        { label: '忠明營造', link: '/page23' },
                        { label: '滬尾藝文園區', link: '/page24' },
                    ],
                },
                {
                    label: '建築藝境',
                    subLabel: '/',
                    link: '', // 不用於無 subItems 的情況
                    subItems: [
                        { label: '建築團隊', link: '/page31' },
                        { label: '建築外觀設計', link: '/page32' },
                        { label: '建築細部美學', link: '/page33' },
                        { label: '建築燈光設計', link: '/page34' },
                        { label: '建築景觀美學', link: '/page35' },
                        { label: '結構工程設計', link: '/page36' },
                    ],
                },
                {
                    label: '空間奇境',
                    subLabel: '/',
                    link: '', // 直接鏈接
                    subItems: [
                        { label: '庭園規劃', link: '/page41' },
                        { label: '公設規劃', link: '/page42' },
                        { label: '平面規劃', link: '/page43' },
                        { label: '空間特色', link: '/page44' },
                    ],
                },
                {
                    label: '工學品境',
                    subLabel: '/',
                    link: '/page50', // 直接鏈接
                    subItems: [
                        { label: '結構工法', link: '/page51' },
                        { label: '防水工程', link: '/page52' },
                        { label: '貼心工法', link: '/page53' },
                        { label: '精選建材', link: '/page54' },
                    ],
                },
                {
                    label: '區域情勢',
                    subLabel: '/',
                    link: '/page61', // 直接鏈接
                    subItems: [
                        { label: '軌道經濟', link: '/page61' },
                        { label: '區域市場', link: '/page62' },
                        { label: '時事新聞', link: '/page63' },
                    ],
                },
            ],
        };
    },
    methods: {
    isActive(item) {
        // 使用 Vue Router 的 $route.path 獲取當前路徑
        const currentPath = this.$route.path;
        if (item.link && item.link === currentPath) {
            return true;
        }
        if (item.subItems) {
            return item.subItems.some(subItem => subItem.link === currentPath);
        }
        return false;
    },
}

};
</script>

<style scoped>
.custom-navbar {
    font-family: "Noto Sans TC", sans-serif;
    background-color: #2E2221; /* 設置為不透明背景色 */
}

.navbar-nav {
    margin-left: auto;
    margin-right: auto;
}

.dropdown-menu {
    text-align: center;
    display: none; /* 預設不顯示 */
    justify-content: center; /* 讓子項目在水平方向居中 */
    align-items: center; /* 讓子項目在垂直方向居中 */
    background-color: #f0f0f0; /* 設定背景色 */
    border-radius: 0; /* 移除圓角 */
    padding: 0.5rem 1rem; /* 內距調整 */
    white-space: nowrap; /* 防止換行 */
    border: none; /* 移除邊框 */
}

.navbar-nav .nav-item {
    margin: 0 1vw; /* 設定導航項目之間的間距，可以調整此值 */
    font-size: 1.4vw ;
}

.navbar-nav .nav-link {
    transition: color 0.3s, font-weight 0.3s, font-size 0.3s;
    font-size: 1.4vw;
    color: #786752; /* 平時顏色 */
}

.navbar-nav .nav-link:hover {
    color: #FFFFFF; /* 滑鼠移動到上面的顏色 */
}

.navbar-nav .nav-item.active .nav-link,
.navbar-nav .nav-item .nav-link.active {
    color: #FFFFFF !important; /* activate狀態顏色 */
}

.dropup .dropdown-menu {
    top: auto;
    bottom: 100%;
}

.nav-item:hover .dropdown-menu {
    display: flex; /* 讓子項目在滑鼠移上去時顯示並水平排列 */
}

.dropdown-menu .dropdown-item {
    display: inline-block;
    font-size: 1.25vw; /* 調整下拉選單文字大小 */
    color: #786752; /* 平時顏色 */
    padding: 0 1rem; /* 每個subitem的內距 */
    position: relative;
}

.dropdown-menu .dropdown-item:after {
    content: '|';
    position: absolute;
    right: 0rem;
    color: #786752; /* 分隔符顏色 */
}

.dropdown-menu .dropdown-item:last-child:after {
    content: ''; /* 移除最後一個分隔符 */
}

.dropdown-menu .dropdown-item:hover {
    color: #291D1D; /* 滑鼠移動到上面的顏色 */
    background-color: rgba(255, 255, 255, 0.0) !important; /* 設置白色半透明背景 */
}

.dropdown-menu .dropdown-item.active {
    color: #291D1D; /* activate狀態顏色 */
}

.nav-logo {
    max-height: 100%;
    height: auto;
    width: auto;
}

.dropdown-item.active,
.dropdown-item:active {
    background-color: rgba(255, 255, 255, 0.0) !important; /* 設置白色半透明背景 */
    color: #030303 !important;
    font-size: calc(1.25vw + 1px);
}


</style>

