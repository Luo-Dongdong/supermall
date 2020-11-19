import Vue from 'vue'
import App from './App.vue'

// 导入css文件
import './assets/css/base.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
