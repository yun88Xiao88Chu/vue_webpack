/* 
  对element-ui进行按需引入
*/
import Vue from 'vue'
import {
  Button, MessageBox, Message
} from 'element-ui'

// 注册组件
Vue.component(Button.name,Button); //<el-button>


//给Vue原型对象添加一个方法
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message