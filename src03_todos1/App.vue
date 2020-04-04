<template>
  <div class="todo-container">
    <div class="todo-wrap">
     <Header :addTodo="addTodo"/>
     <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
     <Footer :todos="todos" :deleteCompletedTodos ="deleteCompletedTodos" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
      data() {
          //读取local中保存的todos,如果没有null,此时应该指定一个[]
          //读取todos数据原本是一个json字符串,需要解析为js
        const todos = JSON.parse(localStorage.getItem('todos_key')) || [];
        return {
          todos
        }
      },
      
      methods: {
        addTodo(todo){
          this.todos.unshift(todo)
        },
        deleteTodo(index){
          this.todos.splice(index,1)
          console.log(index)
        },
        deleteCompletedTodos(){
         this.todos = this.todos.filter((todo,index)=>!todo.completed)
        },
        selectAll(isCheckAll){
          this.todos.forEach(todo=>todo.completed = isCheckAll)
        },
        updateTodo(todo,completed){
            todo.completed = completed
        }
      },
      watch: {
        todos:{
          deep:true,
          handler(value){
              window.localStorage.setItem('todos_key',JSON.stringify(value))
          }
        }
      },
  }
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>