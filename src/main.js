// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//开启debug模式
Vue.config.debug = true;

//数据交互axios
import axios from './plugins/axios/axios'
Vue.prototype.$http = axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

//导入字体文件
import './assets/css/fonts.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:(h)=>h(App)
})

