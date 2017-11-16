/*
 * @Author: Joy
 * @Date:   2017-10-23 09:41:20
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-10-23 09:55:17
 */

;(function (window, undefined, $) {
  var Popup = function (options) {
    var defaults = {
      type: ['msg', 'confirm'],//类型
      title: '',//标题
      content: '',//内容
      width: "50",//百分比50%
      height: "50",
      delayTime: 500,//500ms
      autoClose: false,//自动关闭
      autoTime: 2000,//2s自动关闭
      blankClose: true,//点击空白处关闭
      confirmBtn: {
        text: '确定',
        event: function () {
          //确定回调函数
        }
      },
      cancelBtn: {
        text: '取消',
        event: function () {
          //确定取消回调
        }
      },
      closeBtn: {
        event: null
      },
      beforeFn: function () {
        //显示弹框前执行
      },
      closeFn: function () {
        //关闭弹框后执行
      }
    };
    var popupHtml =
      `<div data-popup-type="${type}" data-popup-name="${name}" style="display: none;">
        <div class="wpy-mask">
          <div class="wpy-popup popup-s">
            <div class="popup-header">
              <span class="popup-title">${title}</span>
              <i class="pz-icon icon-close popup-close-btn"></i>
            </div>
            <div class="popup-body">
              <div class="row fn-mt20">
                <div class="btn btn-m btn-color fn-ml50 " data-btn-type="save-add-dept">保存</div>
                <button type="reset" class="btn btn-m popup-cancel-btn fn-ml50"
                        data-btn-type="cancel">取消
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    var setting = $.extend({}, defaults, options);
  };
})(window.jQuery)
