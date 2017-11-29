/*
 * @Author: Joy
 * @Date:   2017-11-28 09:26:23
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-11-28 09:27:52
 * @ 关于 ajax 二次封装
 */

(function($) {
    var Loading = ''; //请求返回前的 LODING 
    var _ajax = $.ajax;// copy原始的$.ajax;
    _ajax = function(options){
      var mask = $("div").css({ 
        "position": "fixed",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "background-color": "rgba(0, 0, 0, 0.8)",
        "z-index": "9999 !important"});
      var Loading;
      options.type = options.type ||'POST',
      options.error = function(XMLHttpRequest, msg, e){
        //同一错误处理
      },
      var complete = options.complete;
      options.complete = function (httpRequest, status) {
        //统一的结束状态显示,进度显示
        mask.hide();
        if(complete) {
          complete(httpRequest,status);
        }
      }
    }
    return _ajax(options);
  
    $.ajax({
      url:'',
      type:'POST',
      data:{},
      success : function(data){
        //执行状态是200时候调用
      },
      error : function(XMLHttpRequest, msg, e){
        //执行状态是非200时调用
      },
      complete : function(httpRequest, status){
        //完成了一次请求时调用
      }});
})(jQuery);