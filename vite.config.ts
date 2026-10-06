import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Les composants Trilogy sont construits au-dessus de React Native :
// on redirige react-native vers react-native-web pour un rendu navigateur.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/services'),
      '@types': path.resolve(__dirname, './src/types'),
    },
    extensions: ['.web.js', '.web.ts', '.web.tsx', '.js', '.ts', '.tsx', '.json'],
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: ['.web.js', '.js', '.ts', '.tsx', '.json'],
      loader: { '.js': 'jsx' },
    },
  },
  server: {
    port: 3000,
  },
})
