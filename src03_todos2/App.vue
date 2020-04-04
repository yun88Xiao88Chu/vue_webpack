<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo"/> -->
      <!-- <Header @addTodo="addTodo"/> -->
      <Header ref="header" />
      <List :todos="todos" />
      <Footer>
        <template slot="left">
          <input type="checkbox" v-model="isCheckAll" />
        </template>

        <button class="btn btn-danger"
         v-show="completedSize>0" 
         @click="deleteClick" 
         slot="right">
          清除已完成任务
        </button>

        <span>
          <span>已完成{{completedSize}}</span> / 全部{{todos.length}}
        </span>
      </Footer>
    </div>
    <hr>
    <ScopedSlot />
  </div>
</template>

<script type="text/ecmascript-6">
  import ScopedSlot from './components/scoped-slot'
  // import PubSub from 'pubsub-js'
  export default {
    data() {
      //读取local中保存的todos,如果没有null,此时应该指定一个[]
      //读取todos数据原本是一个json字符串,需要解析为js
      const todos = JSON.parse(localStorage.getItem('todos_key')) || [];
      return {
        todos
      }
    },
    mounted() {
      this.$refs.header.$on('addTodo', this.addTodo);
      // 通过全局事件总线绑定事件监听
      this.$globalEventBus.$on('deleteTodo', this.deleteTodo);
      this.$globalEventBus.$on('deleteTodo', () => { //同一个事件上绑定多个回调函数,分发时都会调用
        console.log('deleteTodo callback()')
      });
      // 订阅消息
      this.token = this.$PubSub.subscribe('updateTodo', (msgName, {todo,completed}) => {
        this.updateTodo(todo, completed)
      })
    },
    beforeDestroy() {
      // 解放指定自定义绑定事件
      this.$refs.header.$off('addTodo')
      // 取消订阅
      this.$PubSub.unsubscribe(this.token)
      // this.$PubSub.unsubscribe('updateTodo')
    },

    computed: {
      completedSize() {
        let size = 0;
        this.todos.forEach(todo => {
          if (todo.completed) {
            size++
          }
        })
        return size
      },

      isCheckAll: { //这里的completedSize不能加括号,因为computed计算属性会在读取属性值时返回属性值
        get() {
          return this.todos.length === this.completedSize && this.completedSize > 0
        },

        set(value) {
          this.selectAll(value);
        }
      },
    },

    
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      // deleteCompletedTodos() {
      //   this.todos = this.todos.filter((todo, index) => !todo.completed)
      // },
      selectAll(isCheck) {
        this.todos.forEach(todo => todo.completed = isCheck)
      },
      updateTodo(todo, completed) {
        todo.completed = completed
      },
       deleteClick(){
        this.todos.forEach(todo=>{
          if(todo.completed){
            const title = todo.title;
            if(window.confirm(`确定删除${title}吗`)){
              //  this.deleteCompletedTodos();
              this.todos = this.todos.filter((todo, index) => !todo.completed)
            }
          }
        })
       } 
    },
    watch: {
      todos: {
        deep: true,
        handler(value) {
          window.localStorage.setItem('todos_key', JSON.stringify(value))
        }
      }
    },
    components: {
      ScopedSlot
    }
  }
</script>

<style scoped>
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