<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" 
    v-model = "title" @keyup.enter="add" />
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // props:{
    //   addTodo:Function
    // },
    data() {
      return {
        title:''
      }
    },
    methods: {
      add(){
        //得到输入数据
        const title = this.title.trim();
        //如果没有输入不添加
        if(!title){
          this.title = '';
          return;
        };
        //封装一个todo对象
          const todo = {
            id: Date.now(),
            title,
            completed:false
          };
          //调用addTodo添加一个todo显示
          // this.addTodo(todo);
          this.$emit('addTodo',todo)
          //清除输入
          this.title = ''
      }
    },
  }
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}

</style>