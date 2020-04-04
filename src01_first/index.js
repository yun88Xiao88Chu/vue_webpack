import Vue from 'vue'
import App from './App'
import HelloWorld from './components/HolloWorld.vue';

Vue.config.productionTip = false;
//全局注册组件
Vue.component('HelloWorld2',HelloWorld)
new Vue({
  el:'#root',
  render:h=>h(App)
  // components:{
  //   App
  // },
  // template:'<App />'
})