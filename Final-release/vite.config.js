import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
})
// const colors=["red","yellow","blue"];
// const res=colors.map(color=>`<li></li>`);
// console.log(res);

 

