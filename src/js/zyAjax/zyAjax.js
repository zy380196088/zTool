/*
 * @Author: Joy
 * @Date:   2017-11-28 09:26:23
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-11-28 09:27:52
 * @ 关于 ajax 二次封装
 */
(function ($) {
  var Loading = ''; //请求返回前的 LODING
  var mask = $("div").css({
    "position": "fixed",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%",
    "background-color": "rgba(0, 0, 0, 0.2)",
    "z-index": "9999 !important"
  });
  $._ajax = function (options) {
    options.type = options.type || 'POST';
    options.error = function (XMLHttpRequest, msg, e) {
      //同一错误处理
      console.log(XMLHttpRequest,msg,e);
    };
    var complete = options.complete;
    options.complete = function (httpRequest, status) {
      //统一的结束状态显示,进度显示
      $("body").append(mask).hide();
      if (complete) {
        complete(httpRequest, status);
      }
    };
    var success = options.success;

    if (options.url) {
      $.ajax({
        url: options.url,
        type: options.type || 'POST',
        async:options.async || true,
        data: options.param || {},
        beforeSend:function () {
          $(mask).appendTo($("html")).show();
        },
        success: function (data) {
          //执行状态是200时候调用
          if(success){
            success(data);
          }
        },
        error: function (XMLHttpRequest, msg, e) {
          //执行状态是非200时调用
        },
        complete: function (httpRequest, status) {
          //完成了一次请求时调用
          if(complete){
            complete(httpRequest,status);
          }
        }
      });
    }else{
      console.log("url is undefined")
    }
  };
  return $._ajax;
})(jQuery)