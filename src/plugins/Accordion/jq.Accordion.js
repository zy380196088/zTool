/*
 * @Author: Zoey
 * @Date: 2017/10/25 15:45
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-11-19 21:47:48
 * @Description: 手风琴小插件
 * @HtmlDemo:
 *  <ul class="wpy-accordion">
 *    <li class="toggleItem">
 *      <p class="toggleTitle"><i class="pz-icon icon-more fn-mg5">标题1</p>
 *      <ul class="toggleContent hide">
 *        <li>内容1</li>
 *        <li>内容1</li>
 *      </ul>
 *    </li>
 *    <li class="toggleItem">
 *      <p class="toggleTitle"><i class="pz-icon icon-more fn-mg5">>标题2</p>
 *      <ul class="toggleContent hide">
 *        <li>内容2</li>
 *        <li>内容2</li>
 *      </ul>
 *    </li>
 *  </ul>
 */

'use strict';

;
(function($, window, document, undefined) {

  $.fn.Accordion = function(option) {
    var $this = this;
    this.default = {
      itemClassSelector: '.toggleItem',
      titleClassSelector: '.toggleTitle',
      contentClassSelector: '.toggleContent',
      showOnlyOne: true, //只展开一个
      speed: 500, //展开速度
      event: 'click', //触发事件,支持"click,mouseover"
    };
    this.options = $.extend({}, this.default, option);
    this.toggleState = function(ele) {
      var $nextContent = $(ele).next($this.options.contentClassSelector);
      var _changeState = $nextContent.hasClass("hide") ? 'show' : 'hide';
      switch (_changeState) {
        case 'show':
          {
            $(ele).find("i").removeClass("icon-more").addClass("icon-moreunfold");
            $nextContent.slideDown($this.options.speed).removeClass("hide");
            break;
          }
        case 'hide':
          {
            $(ele).find("i").removeClass("icon-moreunfold").addClass("icon-more");
            $nextContent.slideUp($this.options.speed).addClass("hide");
            break;
          }
        default:
          break;
      }
    };
    $this.find(this.options.titleClassSelector).css("cursor", "pointer");
    $this.find(this.options.titleClassSelector).bind($this.options.event, function() {
      if ($this.options.showOnlyOne) {
        //只展开一个,关闭其他的项
        $this.find("i").removeClass("icon-moreunfold").addClass("icon-more"); //所有icon变为收拢状态
        $this.not(this).find($this.options.contentClassSelector).slideUp().addClass("hide");
      }
      $this.toggleState(this);

    });
  }
})(jQuery, window, document);
