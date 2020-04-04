<template>
    <ul>
       <!-- <li>ID:{{$route.params.mid}}</li> -->
       <li>ID:{{mid}}</li>
       <li>Title:{{$route.query.title}}</li>
       <li>Content:{{detail.content}}</li>
    </ul>
</template>

<script type="text/ecmascript-6">
  const allDetails = [
          {id:1,title:'message001',content:'message content001'},
          {id:2,title:'message002',content:'message content002'},
          {id:3,title:'message003',content:'message content003'},
          {id:4,title:'message004',content:'message content004'},
  ]
  export default {
    props:['mid'],
    data() {
      return {
        detail:{}
      }
    },
    //在路由参数发生改变时,不会重新创建,因为路由组件对象没有销毁重新创建
    mounted() {
      // 模拟请求获取对应的详情数据,(数据代理)this.$route拿到当前路由对象,
      //相当于在message.vue里向注册的路由对象每次传递一个不同params参数路径访问同一个路由组件对象,拿到不同的数据
      this.show(this.$route)
    },
    //params参数不同访问同一个路由组件对象时,每次会把请求到的数据重新赋值给这个对象,所以对象数据本身发生改变只需要一般监视就可以了
    //监视路由变化(本质是参数数据变化 => 内部对$route进行了重新赋值)
    watch: {
      '$route'(to,from){ //to就是将要跳转被重新赋值的$route对象
         this.show(to)
      }   
    },
    methods: {
      show(route){
        setTimeout(() => { //find返回的是找到数组内元素,让回调函数处理结果为true的第一个元素(后面元素不再遍历),并以对象形式返回
        const detail = allDetails.find(detail=>route.params.mid == detail.id)  //不能用filter返回值形式是数组模板解析不了
        this.detail = detail
      }, 1000);
      }
    },
  }
  //路由组件对象生命周期(在当前同一个路由组件对象内,params参数不同请求显示数据不同,但是此时没有显示出更新的数据)
  //路由组件对象在访问对应的路由路径时才会创建对象
  //从A组件跳转到B组件对象: 销毁A组件对象,创建B组件对象
  //从B组件对象再跳转回到A: 销毁B组件对象,创建A组件对象
  //从A组件跳转到A组件(只是改变来了参数没有改路径): A组件对象不会销毁重新创建
</script>

<style scoped>

 
</style>
