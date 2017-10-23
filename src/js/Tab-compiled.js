/*
 * @Author: Zoey
 * @Date: 2017/10/23 11:27
 * @Last Modified by: Zoey
 * @Last Modified time: 2017/10/23 11:27
 * @Description:
 */

'use strict';

let $ = require('jQuery');
class Tab {
  constructor(opts) {
    this.index = opts.index || 0;
    this.$tabHeader = opts.header;
    this.$tabBody = opts.body;
    this.render();
    this.bindEvent();
  }

  render() {
    this.$tabHeader.find("li").eq(this.index).addClass("active").siblings().removeClass("active");
    this.$tabHeader.find("li").eq(this.index).addClass("active").siblings().removeClass("active");
  }
}

let tab = new Tab();

//# sourceMappingURL=Tab-compiled.js.map