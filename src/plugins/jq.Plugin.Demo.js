/*
 * @Author: Zoey
 * @Date: 2017/11/14 09:28
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-11-17 09:33:26
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
    self.tpl = '';
  };
  //定义Plugin的方法
  Plugin.prototype = {
    init: function() {
      return this;
    },
    render: function() {
      this.$element.append(this.tpl)
    },
    bindEvent: function() {
      var self = this;
    }
  };

  $.fn.Plugin = function(options) {
    var _PluginObj = new Plugin(this, options);
    _PluginObj.publicFn = function() {}; //暴露公共方法
    return _PluginObj.init(this, options);
  }
})(jQuery, window, document);
