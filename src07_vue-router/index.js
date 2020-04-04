import Vue from 'vue'
import App from '@/App'
import router from './router/'



Vue.config.productionTip = false;

new Vue({ //配置对象
  render:h=>h(App),
  router  //注册路由器  所有组件都有了一个$route=>代表当前路由对象(注意不是路由器$router),而$route是data里面的属性,通过(数据代理)this.$route拿到当前路由对象
}).$mount('#root')