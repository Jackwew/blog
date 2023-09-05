import { Swiper } from 'swiper/vue'
import 'swiper/css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Swiper, { transfer: true })
})
