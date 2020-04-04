// 包含n个用于间接更新状态数据的方法的对象(和组件交互有关)

import {
  REQUESTING,
  REQ_ERROR,
  REQ_SUCCESS
} from './mutations-types'

export default{
  [REQUESTING](state){
    state.firstView = false; //是否显示第一个界面
    state.loading = true;//是否显示loading中的界面
  },
  [REQ_ERROR](state,{msg}){
    state.loading = false;
    state.errorMsg = msg
  },
  [REQ_SUCCESS](state,{users}){
    state.loading = false;
    state.users = users;
  }
}

