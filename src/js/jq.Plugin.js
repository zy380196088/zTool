/*
 * @Author: Zoey
 * @Date: 2017/11/14 09:28
 * @Last Modified by: Zoey
 * @Last Modified time: 2017/11/14 09:28
 * @Description:
 */
;(function(window,undefined,$){
  "use strict";

  //定义Plugin的造函数
  var Plugin = function(ele,opt){
    "use strict";
    this.$element = ele;
    this.defaults = {},

  };
  //定义Plugin的方法
  Plugin.prototype = {
    init:function(){
      return this.$element;
    }
  }

  $.fn.Plugin = function(options){
    var PluginObj = new Plugin(this,options);
    return PluginObj.init();
  }
})(jQuery);