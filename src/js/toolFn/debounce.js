function _debounce(methods,time) {
  var timer = null ;
  return function(){
    var context = this;
    //执行时先清除time定时器
    clearTimeout(timer);
    timer = setTimeout(function(){
      method.call(context);
    },time)
  }
}