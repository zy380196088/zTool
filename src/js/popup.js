/*
 * @Author: Joy
 * @Date:   2017-10-23 09:41:20
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-10-23 09:55:17
 */

(function(window, undefined,$) {
  var Popup = function() {};
  Popup.prototype = {
    open: function(options) {
      this.opt = options;
      this.popHtml();
      this.popStyle();
    },

  }
})(window.jQuery)
