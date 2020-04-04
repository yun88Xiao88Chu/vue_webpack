// Vuex最核心的管理对象store
import Vue from 'vue'
import Vuex from 'vuex'

// 声明使用
Vue.use(Vuex)

//相当于data对象 
const state = {
  count:1  //初始化状态数据
}
// 包含n个用于直接更新状态数据的方法的对象
//在mutations函数中不可以包含逻辑或异步代码
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}
// 包含n个用于间接更新状态数据的方法的对象(和组件交互有关)
//在actions函数中可以包含逻辑或异步代码
const actions = {  //参数对象有commit函数方法
  // increment({commit}){
  //   commit('INCREMENT')
  // },
  // decrement({commit}){
  //   commit('DECREMENT')
  // },
  incrementIfOdd(commit){
    if(state.count % 2 === 1){
        commit('INCREMENT')
    }
  },
  incrementAsync(commit){
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000);
  }
}
// 包含n个基于state数据状态getter计算属性的方法对象
const getters = {
  evenOrOdd(state){
    return state.count%2 === 1 ? '奇数':'偶数' 
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})