<template>
  <div>
    <h2>{{title}}</h2>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        title:'HelloWorld组件标题'
      }
    },
  }
</script>

<style scoped>
  h2{
    color: red;
  }
 
</style>
