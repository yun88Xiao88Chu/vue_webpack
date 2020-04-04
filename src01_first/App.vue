<template>
<div>
   <h2>{{title}}</h2>
   <img class="logo" src="./assets/imgs/logo.png" alt="logo">
   <hr>
   <HelloWorld />
   <hello-world />
   <HelloWorld2 />
</div>
</template>
<script>
  import  HelloWorld from './components/HolloWorld.vue'
  export default{
      data() {
        return {
          title:'App组件标题'
        }
      },
      components:{
         HelloWorld
      }
  }
</script>
<style>
  .logo{
    width: 300px;
    height: 300px;
  }
</style>