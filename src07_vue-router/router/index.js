/* 定义路由器对象 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetail from '../pages/MessageDetail.vue'

// VueRouter是Vue插件,必然要声明使用Vue插件
Vue.use(VueRouter)

// 向外暴露路由器对象 
export default new VueRouter({
  // mode:'hash', //默认 路径前带#
  mode:'history', //路径前不带#
  // 应用中所有路由
  routes: [
    {
      path:'/about',
      component: About
    },
    {
      path:'/home',
      component: Home,
      children:[
        {
          path:'/home/news',  //path左边的 / 代表项目根路径
          component: News 
        },
        {
          path:'message',   //相当于/home/message
          component: Message,
          children:[
            {
              name:'detail',
              path:'/home/message/detail/:mid', //:mid 可以接收params参数的变量
              component: MessageDetail,
              // props:true        //  将params参数映射成props传递给路由组件
              props: (route)=>({mid: route.params.mid,title: route.query.title})//可以映射params和query参数
            }
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]
})
