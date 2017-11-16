/*
 * @Author: Zoey
 * @Date: 2017/11/14 09:28
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-11-16 10:45:31
 * @Description:
 */
;
(function($, window, document, undefined) {
  "use strict";

  //定义Plugin的造函数
  var Plugin = function(ele, opt) {
    "use strict";
    var self = this;
    self.$element = ele;
    self.defaults = {};
    //合并配置
    self.settings = $.extend({}, self.defaults, opt);

  };
  //定义Plugin的方法
  Plugin.prototype = {
    init: function() {
      return this.$element;
    }
  };

  $.fn.Plugin = function(options) {
    var PluginObj = new Plugin(this, options);
    return PluginObj.init();
  }
})(jQuery, window, document);
