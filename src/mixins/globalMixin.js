// src/mixins/globalMixin.js
export default {
    data() {
      return {
        isSmallScreen: false,
      };
    },
    mounted() {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isSmallScreen = window.innerWidth < 1025;
      },
    },
  };
  