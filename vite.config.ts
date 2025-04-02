import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' 
  ? '/red-envelope-rain-vue/dist' // 这里是 GitHub 仓库的名称
  : '/', // 本地开发时使用根路径
})
