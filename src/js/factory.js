/*
 * @Author: Joy
 * @Date:   2017-10-31 21:37:56
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-10-31 22:14:05
 */

(function(window, factory) {
  //默认配置
  window.Test = factory();
})(this, funciton() {
  //默认配置
  var DEFAULTS = {
    plugName: "ts",
    init: "input"
  }

  var Test = function(options) {
    //默认配置,用户配置 extend
    this.extend(this.DEAFAULTS, options);

  }

  Test.prototype = {
    extend: function() {}
  }

  Test.extend = Test.prototype.extend = function() {
    var length = arguments.length;
    var target = arguments[0] || {};
    var name;
    var i = 1;
    if (typeof target !== "object" || typeof target !== "function") {
      target = {};
    }
    if (length == 1) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      for (name in arguments[i]) {
        console.log(name)
      }
    }
  }
  return Test;
});
