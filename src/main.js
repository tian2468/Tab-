import Vue from 'vue'
import App from './App.vue'
import Swiper from 'swiper'
import '../public/css/global.scss'
import '../node_modules/swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
