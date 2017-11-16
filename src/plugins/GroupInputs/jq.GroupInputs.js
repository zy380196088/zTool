/*
 * @Author: Joy
 * @Date:   2017-11-16 09:39:19
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-11-16 16:42:15
 * @Description: 点击增加按钮添加 input
 */
;
(function($, window, doucument, undefined) {
  "use strict";

  //定义Plugin的造函数
  var GroupInputs = function(ele, opt) {
    "use strict";
    var self = this;
    self.$element = ele; //DOM 节点
    self.defaults = {
      input: {
        class: "input", //input 样式
        type: "text", //input 的 type 类型,默认 text
        name: "", //input的 name 属性
        placeholder: "",
      },
      btn: {
        plus: {
          text: '', //添加按钮文字
          class: '' //添加按钮样式
        },
        minus: {
          text: '', //删除按钮文字
          class: '' //删除按钮样式
        }
      },
      min: 1, //input最小个数
      minError: function(min) {
        return false;
      },
      max: 5, //input最大个数
      maxError: function(max) {
        return false;
      },

      callBack: function() {}
    }; //默认配置
    //合并配置
    self.settings = $.extend({}, self.defaults, opt); //有效配置
    // self.input = $("<input>").addClass(self.settings.inputClassName);
    self.plusInputTpl = `<p><input type="${self.settings.input.type}" name="${self.settings.input.name}" placeholder="${self.settings.input.placeholder}" class="${self.settings.input.class}"/><span data-btn-type='plusInputBtn' class="${self.settings.btn.plus.class}">${self.settings.btn.plus.text}</span></p>`;
    // self.minusInputTpl = `<p><input type="${self.settings.input.type}" name="${self.settings.input.name}" class="${self.settings.input.class}"/><span data-btn-type='minusInputBtn' class="${self.settings.btn.minus.class}">${self.settings.btn.minus.text}</span></p>`;
  };
  //定义Plugin的方法(私有)
  GroupInputs.prototype = {
    init: function() {
      console.log(this);
      this.render();
      this.bindEvent();
      return this;
    },
    render: function() {
      this.$element.append(this.plusInputTpl);
    },
    bindEvent: function() {
      var self = this;
      self.$element.on("click", "[data-btn-type='plusInputBtn']", function(e) {
        //绑定添加input事件
        self.plusInput(this);
      });
      self.$element.on("click", "[data-btn-type='minusInputBtn']", function(e) {
        //绑定删除input事件
        self.minusInput(this);
      })
    },
    plusInput: function(btnDom) {
      var self = this;
      if (self.$element.find("input")) {
        if (self.$element.find("input").length >= self.settings.max) {
          //超出最大input数量,弹出错误提示
          self.settings.maxError(self.settings.max);
          // console.log("当前input 数量为", self.$element.find("input").length, "已经达到最大数量,无法再增加")
        } else {
          //点击的按钮变为移除按钮
          $(btnDom).attr("data-btn-type", 'minusInputBtn').removeClass(self.settings.btn.plus.class).addClass(self.settings.btn.minus.class).text(self.settings.btn.minus.text);
          //在最后添加一个 input
          self.$element.append(self.plusInputTpl);
        }
      } else {
        console.log("error")
        return false;
      }
    },
    minusInput: function(btnDom) {
      var self = this;
      console.log(self.$element.find("." + self.settings.btn.minusClass))

      if (self.$element.find("input")) {
        if (self.$element.find("input").length <= self.settings.min) {
          //小于最大input数量,弹出错误提示
          self.settings.minError(self.settings.min);
          // console.log("当前input 数量为", self.$element.find("input").length, "已经达到最大数量,无法再增加")
        } else {
          self.$element.find("." + self.settings.btn.plusClass).attr("data-btn-type", 'minusInputBtn').removeClass(self.settings.btn.plus.class).addClass(self.settings.btn.minus.class);
          //移除该input
          $(btnDom).parent().remove();
        }
      }
    }
  };

  //扩展 JQ插件
  $.fn.groupInputs = function(options) {
    var _groupInputs = new GroupInputs(this, options);
    //暴露公有方法
    _groupInputs.getInputsValue = function() {
      var inputArr = this.$element.find("input");
      var valueArr = [];
      inputArr.each(function() {
          if ($(this).val()) {
            valueArr.push($(this).val());
          }
        })
        // console.log(inputArr, valueArr)
      return valueArr;
    }
    return _groupInputs.init(this, options);
  }
})(jQuery, window, document);
