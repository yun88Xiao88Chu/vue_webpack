// 包含n个用于间接更新状态数据的方法的对象
import {
  REQUESTING,
  REQ_ERROR,
  REQ_SUCCESS
} from './mutations-types'
import axios from 'axios'
export default{
  // 搜索的异步 actions:包含异步ajax请求的代码
 async search({commit,searchName}){
    // 更新状态数据(请求中)
    commit(REQUESTING)
    // 发异步ajax请求,获取users数据
    try {
      const url = 'https://api.github.com/search/users?q=aa';
      const response=await axios({
     url,
     params: {
       q: searchName
     }
   })
   const items = response.data.items
     const users = [];
     items.forEach(item => {
       users.push({
         username: item.login,
         avatar_url: item.avatar_url,
         url: item.html_url
       })
     })

     // const users = items.map(item=>({
     //     username: item.login,
     //     avatar_url: item.avatar_url,
     //     url: item.html_url
     // }))
     // 请求成功了,更新状态数据(成功)
    //  commit(REQ_SUCCESS,users) //直接指定数据
     commit(REQ_SUCCESS,{users})  //指定包含数据的对象
   }catch(error){   // 请求失败了,更新状态数据(失败)
    //  commit(REQ_ERROR,'请求出错: ' + error.message)
    commit(REQ_ERROR,{msg:'请求出错: ' + error.message})
   }
    

    
  }
  
}