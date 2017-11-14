/*
 * @Author: Zoey
 * @Date: 2017/11/14 13:16
 * @Last Modified by: Zoey
 * @Last Modified time: 2017/11/14 13:16
 * @Description:
 */

'use strict';
function overTime(time) {
  var lastTime = new Date().getTime();
  var currentTime = new Date().getTime();
  var timeOut = (time ? time : 10 ) * 60 * 1000; //设置超时时间： 10分
  $(document).ready(function () { /* 鼠标移动事件 */
    $(document).mousemove(function () {
      lastTime = new Date().getTime(); //更新操作时间
      console.log("lastTime", lastTime)
    });
  });
  function testTime() {
    currentTime = new Date().getTime(); //更新当前时间
    if (currentTime - lastTime > timeOut) { //判断是否超时
      console.log("超时");
      wpyTools.wpyMsg("登录超时,请重新登录", 4000, false);
      $.ajax({
        type: "post",
        url: "/rest/login/logout",
        success: function () {
          window.location.href = '/login.html';
        },
        error: function () {
          window.location.href = '/login.html';
        }
      });
    }
  }

  /* 定时器 间隔1秒检测是否长时间未操作页面 */
  window.setInterval(testTime, 1000); //如不用jq可修改为对应的js
}

// overTime(1);