import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 讓伺服器綁定到所有可用的網卡，包括本地和局域網IP
  },
  optimizeDeps: {
    include: ['bootstrap']
  }
})
