<template>
   <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment" />
      <!-- 通过强制数据绑定向组件内部传递动态的 -->
      <List :comments="comments" :deleteComment="deleteComment" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from './components/Add'
import List from './components/List'
  export default {
    data() {
      return {
        comments:[
          {id:1,username:'A',content:'Vue还不错'},
          {id:2,username:'B',content:'Vue挺好用'},
          {id:4,username:'C',content:'Vue好像有点难'},
          {id:6,username:'D',content:'哈哈哈'},
        ]
      }
    },
    methods: {
      /* 添加评论 */
      addComment(comment){
        this.comments.unshift(comment);
      },
      /* 删除评论 */
      deleteComment(index){
        this.comments.splice(index,1);
      }
    },
    components:{
      Add,
      List
    }
  }
</script>

<style scoped>

 
</style>
