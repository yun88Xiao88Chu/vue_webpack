<template>
  <div>
      <p>正在请求...</p>
      <p>
        most star repo is
        <a  href="repourl">{{repoName}}</a>
      </p>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
    export default{
      data() {
        return {
          repoName:'',
          repoUrl:''
        }
      },
      mounted() {
        // 使用vue-resource发送异步ajax请求
        const url = "https://api.github.com/search/repositories?q=v&sort=stars"
        // this.$http.get(url)
        //   .then(response=>{
        //     const result = response.data
        //     // // console.log(result)
        //     const {name,html_url}=result.items[0];
        //     this.repoName = name;
        //     this.repoUrl = html_url;
        //   })
        //   .catch(error => {
        //     alert(error,'请求错误')
        //   })
        axios.get(url)
          .then(response=>{
            const result = response.data
            // // console.log(result)
            const {name,html_url}=result.items[0];
            this.repoName = name;
            this.repoUrl = html_url;
          })
          .catch(error => {
            alert(error,'请求错误')
          })
      },
      
  }
</script>

<style scoped>

</style>