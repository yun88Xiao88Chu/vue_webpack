<template>
    <div class="container">
      <Search />
      <Main />
  </div>
</template>

<script type="text/ecmascript-6">
import Main from './components/Main'
import Search from './components/Search'
import axios from 'axios'
    export default{
      // data() {
      //   return {
      //     searchName:''
      //   }
      // },
      components:{
        Main,
        Search
      }
    
  }
</script>

<style scoped>

</style>