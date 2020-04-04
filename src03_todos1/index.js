import Vue from 'vue'
import App from '@/App'
import Header from '@components/Header'
import List from '@components/List'
import Footer from '@components/Footer'

import '@/base.css'

Vue.config.productionTip = false;
Vue.component('Header',Header)
Vue.component('List',List)
Vue.component('Footer',Footer)
new Vue({
  render:h=>h(App)
}).$mount('#root')