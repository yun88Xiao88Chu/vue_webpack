<template>
  <div>
     <p>clicked {{count}} times,count is {{evenOrOdd}}</p>
     <button @click="increment">+</button>
     <button @click="decrement">-</button>
     <button @click="incrementIfOdd">incrent if odd</button>
     <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    // computed: {
    //   count(){
    //     return this.$store.state.count
    //   },
    //   evenOrOdd(){
    //     return this.$store.getters.evenOrOdd
    //   }
    // },
    computed: {
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },
    
    methods: {
      increment(){
        this.$store.commit('INCREMENT')
      },
      decrement(){
        this.$store.commit('DECREMENT')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      }
    },
  }
  /* store:组件与vuex通信的一个桥梁对象
     state    属性读取数据
     getters  属性读取数据
     commit()  
     dispatch()
  */
</script>

<style scoped>

 
</style>
