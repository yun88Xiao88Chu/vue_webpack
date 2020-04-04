import Vue from 'vue'
import App from '@/App'
import PubSub from 'pubsub-js'
import Header from '@components/Header'
import List from '@components/List'
import Footer from '@components/Footer'

import '@/base.css'

Vue.config.productionTip = false;
Vue.component('Header',Header)
Vue.component('List',List)
Vue.component('Footer',Footer)

// 创建一个vm对象,作为全局事件总线对象保存到Vue的原型对象上
// Vue.prototype.$globalEventBus = new Vue();
new Vue({
  beforeCreate() {
    Vue.prototype.$globalEventBus = this;
    Vue.prototype.$PubSub = PubSub;
  },
  render:h=>h(App)
}).$mount('#root')