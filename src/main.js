import Vue from 'vue'
import * as echarts from 'echarts'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

console.log(1111, echarts);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
