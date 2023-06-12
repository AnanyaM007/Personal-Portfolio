import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
	port: 3000,
	host: 'ananya.env'
  },
  resolve: {
	alias: {
		'@/': path.resolve(__dirname, './src'),
		'@/app': path.resolve(__dirname, './src/app'),
		'@/components': path.resolve(__dirname, './src/components'),
		'@/stores': path.resolve(__dirname, './src/stores'),
		'@/utils': path.resolve(__dirname, './src/utils')
	}
  }
})