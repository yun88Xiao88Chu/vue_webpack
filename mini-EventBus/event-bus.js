/* 自定义全局事件总线模块
  1).EventBus:包含所有功能的全局事件总线对象
  2).EventBus.on(eventName,listener):绑定事件监听
  3).EventBus.emit(evenName,data):分发事件
  4).EventBus.off(eventName):解绑事件监听
*/
(function(window){
  const EventBus = {}
  /* 绑定事件监听
     eventName:事件名
     listener: 监听的回调函数 
  */
    EventBus.on = function  (params) {
      
    }
    /* 
      分发事件
      eventName: 事件名
      data: 要传递给监听回调函数的数据
    */
   EventBus.emit = function (eventName,data) {

   }
   /* 
      解绑事件
      eventName: 事件名,如果不指定解绑所有监听
   */
  EventBus.off = function(eventName){

  }
    window.EventBus = EventBus
})(window)