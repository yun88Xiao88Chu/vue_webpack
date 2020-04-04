<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" v-model="isCheckAll" /> -->
      <slot name="left"></slot>
    </label>

    <!-- <span>
      <span>已完成{{completedSize}}</span> / 全部{{todos.length}}
    </span> -->
    <slot></slot>

    <!-- <button class="btn btn-danger" 
    v-show="completedSize>0" 
    @click="deleteClick">清除已完成任务</button> -->
    <slot name="right"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // props:{
    //   todos:Array,
    //   deleteCompletedTodos: Function,
    //   selectAll:Function
    // },
  //   computed:{
  //     completedSize(){
  //     let size = 0;
  //     this.todos.forEach(todo=>{
  //       if(todo.completed){
  //           size++
  //       }
  //     })
  //     return size
  //   },

  //     isCheckAll:{  //这里的completedSize不能加括号,因为computed计算属性会在读取属性值时返回属性值
  //       get(){
  //         return this.completedSize === this.todos.length && this.completedSize > 0
  //       },

  //       set(value){
  //         this.selectAll(value);
  //       }
  //     },
  //   },

  //   methods: {
  //      deleteClick(){
  //       this.todos.forEach(todo=>{
  //         if(todo.completed){
  //           const title = todo.title;
  //           if(window.confirm(`确定删除${title}吗`)){
  //              this.deleteCompletedTodos();
  //           }
  //         }
  //       }) 
  //   }
  //   },
    
    
  }
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}


</style>