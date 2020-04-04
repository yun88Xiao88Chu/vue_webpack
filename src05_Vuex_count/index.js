import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false
new Vue({
  render:h=>h(App),
  store, //配置vuex核心对象store,和组件进行交互 ==>以后所有组件都可以通过$store来访问store对象
}).$mount('#root')