/*
 * @Author: Joy
 * @Date:   2017-11-07 10:54:55
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-11-09 11:37:34
 */

var Form = {
  id: '', //表单对应 id
  name: '', //表单 name
  inputItem: [{
    required: false, //是否必填
    disabled: true, //是否可用
    readOnly: false, //是否只读
    name: '',
    type: ['text', 'number', 'checkbox', 'radio'], //类型
    value: , //值
    events: [{
      blur: ,
      change: ,
      focus: ,
    }], //事件
  }]
}



var Validator = function(argument) {
  //将验证方法绑定到 Validator 上
}


;
(function($, window, document, undefined) {
  $.fn.Validator = function(option) {
    var $self = this;
    this.default = {}; //默认配置
    this.message = {

    }
    this.options = $.extend({}, this.default, option); //扩展自定义配置
  }

  $.fn.Form = function(options) {

  }
})(jQuery, window, document);
