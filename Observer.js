/*
 * @Author: Joy
 * @Date:   2017-10-22 23:34:11
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-10-22 23:55:55
 */

var Observer = (function() {
  var _message = {};
  return {
    //注册信息接口
    regist: function(type, fn) {
      if (typeof _message[type] == 'undefined') {
        //将动作推入到该消息对应的动作执行队列中
        _message[type] = [fn];
      } else {
        //将动作方法推入该消息对应额动作执行序列中
        _message[type].push(fn);
      }
    },
    //发布信息接口
    fire: function(type, args) {
      //如果该消息没有被注册,则返回
      if (!_message[type])
        return;
      //定义消息信息
      var events = {
          type: type, //消息类型
          args: args || {} //消息携带数据
        },
        i = 0, //消息动作循环变量
        len = _message[type].length; //消息动作长度
      //遍历消息动作
      for (; i < len; i++) {
        //依次执行注册的消息对应的动作序列
        _message[type][i].call(this, events);
      }
    },
    //移除信息接口
    remove: function(type, fn) {
      //如果消息动作队列存在
      if (_message[type] instanceof Array) {
        //从最后一个消息动作遍历
        var i = _message[type].length - 1;
        for (; i >= 0; i++) {
          //如果存在该动作则在消息动作序列中移除相应动作
          _message[type][i] === fn && _message[type].splice(i, 1);
        }
      }
    }
  }
})()
