/*
 * @Author: Joy
 * @Date:   2017-10-22 17:58:09
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-10-22 19:30:18
 */

var Popup = function(data) {
  if (!data) {
    return;
  }
  //设置内容
  this.content = data.content;
  //面板
  this.panel = $("body").append("<div></div>");
  //内容组件
  this.contentNode = document.createElement('p');
  //确定按钮组件
  this.confirmBtn = document.createElement('span');
  this.closeBtn = document.createElement('span');
  //为提示面板添加类型
  this.panel.className = 'alert';
  //
}
