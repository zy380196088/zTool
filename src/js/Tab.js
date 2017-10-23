/*
 * @Author: Zoey
 * @Date: 2017/10/23 11:27
 * @Last Modified by: Zoey
 * @Last Modified time: 2017/10/23 11:27
 * @Description:
 */

// <ul class="tab-header">
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
//   </ul>
//   <ul class="tab-body">
//   <li>第一页</li>
//   <li>第二页</li>
//   <li>第三页</li>
//   </ul>

'use strict';
let $ = require('jQuery');

export default class Tab {
  //构造函数
  constructor(opts) {
    this.index = opts.index || 0;//初始化变量，其中 index 是值当前显示的第几页，如果没有传值，则默认显示第一
    this.$tabHeader = opts.header;
    this.$tabBody = opts.body;
    this.render();
    this.bindEvent();
  }

  render() {
    this.$tabHeader.find("li").eq(this.index).addClass("active").siblings().removeClass("active");
    this.$tabBody.find("li").eq(this.index).show().siblings().hide();
  }

  bindEvent() {
    this.$tabHeader.on("click", "li", e => {
      this.index = $(e.target).index();// 用 e.target 来获取当前点击的 dom 对象
      this.render();//根据当前 index 渲染头部和身体
    })
  }
}


let tab = new Tab({
  header:$(".tab-header"),
  body:$(".tab-body")
});