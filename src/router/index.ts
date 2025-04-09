import { createRouter, createWebHistory } from 'vue-router'
import FirstWireframe from '@/views/FirstWireframe.vue'
import SecondWireframe from '@/views/SecondWireframe.vue'
import ThirdWireframe from '@/views/ThirdWireframe.vue'
// Ajusta la ruta de import según la ubicación de tu componente

const routes = [
  { path: '/', name: 'Home', component: FirstWireframe },
  { path: '/first-wireframe', name: 'Firstwireframe', component: FirstWireframe },
  { path: '/second-wireframe', name: 'Secondwireframe', component: SecondWireframe },
  { path: '/third-wireframe', name: 'ThirdWireframe', component: ThirdWireframe },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
