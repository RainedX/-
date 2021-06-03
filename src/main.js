import Vue from 'vue'
import * as echarts from 'echarts'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vcharts'
import VueEcharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.component('v-chart', VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
