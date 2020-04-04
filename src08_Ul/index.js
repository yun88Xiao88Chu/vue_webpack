import Vue from 'vue'
import App from '@/App'
// import ElementUI from 'element-ui' //引入element-ui定义的所有组件(element-ui/lib/element-ui.common.js)
// import 'element-ui/lib/theme-chalk/index.css'//引入总主题样式

//声明使用这个vue的ui插件
// Vue.use(ElementUI)  //所有的组件都会被注册好,并在Vue原型对象上添加一些方法,后面可以直接使用
import './elements'

Vue.config.productionTip = false;

new Vue({
  render:h=>h(App)
}).$mount('#root')