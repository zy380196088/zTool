/*
 * @Author: Joy
 * @Date:   2017-10-30 17:00:17
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-10-31 09:26:32
 */

{
  ADD_ENTITY: [fn1, fn2, fn3],
  REMOVE_ENTITY: [fn4],
  UPDATE_ENTITY: [fn5, fn6]
}

class EventEmitter {
  constructor() {
    this._events = {}; //所有事件中心
  }
  on(event, callback) {
    //添加事件
    let callbacks = this._events[event] || [];
    callbacks.push(callback);
    this._events[event] = callback;
  }

  off(event, callback) {
    //移除某事件
    delete this._event[event];
  }

  emit(event) {
    let callbacks = this._events[event];
    if (!callbacks || callbacks.length === 0) {
      throw new Error('请先注册事件' + event)
    }
    let args = [].slice.call(arguments, 1) //返回参数索引从1开始的参数数组
      // 根据给定的事件名来调用它相关的回调函数
    callbacks.forEach(fn => fn.apply(thimargs));
  }
}
