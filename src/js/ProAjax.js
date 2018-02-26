/*
 * @Author: Joy
 * @Date:   2018-01-05 16:56:31
 * @Last Modified by:   Joy
 * @Last Modified time: 2018-01-05 16:56:45
 */



/*promise Ajax结合
 options = {
 "url":url,
 "type":'post',
 "data":param,
 "async":true,
 };
 */

function ProAjax(options) {
  var _default = {
    "url": options.url,
    "type": ((options.type == null) || (typeof options.type === "undefined")) ? 'POST' : options.type,
    "data": options.data || {},
    "async": true,
    "successFn": function(res) {

    },
    "errorFn": function(XMLHttpRequest, textStatus, errorThrown) {

    }
  };
  var _PROMISE = new Promise(function(resolve, reject) {
    $.ajax({
      url: options.url,
      type: ((options.type == null) || (typeof options.type === "undefined")) ? 'POST' : options.type,
      dataType: 'json',
      data: options.data == null ? {} : options.data,
      async: options.async == null ? true : options.async,
      success: function(res) {
        options.successFn(res);
        resolve();
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        options.errorFn(XMLHttpRequest, textStatus, errorThrown);
        reject();
      }
    });
  });
  return _PROMISE;
}
