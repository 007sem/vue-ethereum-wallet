import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve:{
    alias: {
      '@': path.join(__dirname, './src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 你要代理的目标服务器的地址
        changeOrigin: true, // 设置为true时，允许跨域
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径，去掉'/api'
      },
      '/etherscan': {
        target: 'https://api-sepolia.etherscan.io', // 你要代理的目标服务器的地址
        changeOrigin: true, // 设置为true时，允许跨域
        rewrite: (path) => path.replace(/^\/etherscan/, ''), // 重写路径，去掉'/api'
      },
      
    },
  },
})