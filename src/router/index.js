import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: '/place',
      name: 'place',
      component: () => import('@/views/AddPlace.vue'),
    },
    {
      path: '/dates',
      name: 'dates',
      component: () => import('@/views/AddDate.vue'),
    },

    {
      path: '/Day',
      name: 'Day',
      component: () => import('@/views/DayView.vue'),
    },
    {
      path: '/Itinerary',
      name: 'Itinerary',
      component: () => import('@/views/ItineraryView.vue'),
    },
    {
      path: '/Step',
      name: 'Step',
      component: () => import('@/views/NewStepView.vue'),
    },
    {
      path: '/ButtonAddPlace',
      name: 'ButtonAddPlace',
      component: () => import('@/components/ButtonAddPlace.vue'),
    },   
    {
      path: '/ButtonHome',
      name: 'ButtonHome',
      component: () => import('@/components/ButtonHome.vue'),
    },    
    {
      path: '/ContainerPlace',
      name: 'ContainerPlace',
      component: () => import('@/components/ContainerPlace.vue'),
    },    
    {
      path: '/ButtonAddStep',
      name: 'ButtonAddStep',
      component: () => import('@/components/ButtonAddStep.vue'),
    },
    
  ],
})

export default router
