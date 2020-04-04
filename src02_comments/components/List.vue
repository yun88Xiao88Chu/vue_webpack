<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show='comments.length === 0'>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">                                      
        <Item v-for="(comment,index) in comments" :key="comment.id" 
        :comment="comment" :deleteComment="deleteComment" :index="index" />
    </ul>                                         <!-- 给一个属性名,属性值是数组遍历的某一项,
                                                  标签拿到属性等于向组件对象在传递属性 -->
  </div>
</template>

<script type="text/ecmascript-6">
  import Item from './Item.vue'
  export default {
    //组件内部要想得到传递的标签属性,必须声明接收
    //接收的所有标签都会自动成为组件对象的属性
    props:{
      comments:Array, //指定接收属性的属性名和属性值类型
      deleteComment:Function
    },
    components:{
      Item
    }
  }
</script>

<style scoped>
  .reply {
    margin-top: 0px;
  }
</style>