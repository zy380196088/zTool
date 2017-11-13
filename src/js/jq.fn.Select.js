//基于对象扩展
;(function (window, undefined, $) {


  //自定义定义方法(可扩展)
  var methods = {
    init: function (options) {
    },
    render: function () {
    },
    update: function () {
    }
  };

  $.fn.PluginName = function (options) {
    //插件代码
    //此处没有必要将this包在$号中如$(this)，因为this已经是一个jQuery对象。

    //创建默认值配置，拓展任何被提供的选项
    var defaults = {};
    //合并配置
    var settings = $.extend({}, defaults, options);

    //return this 链式调用(chainability)
    return this.each(function () {
      var  $self = $(this);
      //此处 callback 函数中 this 代表某个 Dom 元素,需要加$()
    });
  };

  //暴露公共方法
  $.fn.PluginName.publicFn = function () {
  };

  //私有方法,检测参数是否合法
  function _fn(options) {
    return !options || (options && typeof options === "object") ? true : false;
  }

})(jQuery);