/*
 * @Author: Joy
 * @Date:   2017-11-03 21:28:18
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-11-06 10:09:19
 */


//test 1
// - X
function simulateClick(el) {
  var evt;
  if (document.createEvent) { // DOM Level 2 standard
    evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window,
      0, 0, 0, 0, 0, false, false, false, false, 0, null);
    el.dispatchEvent(evt);
  } else if (el.fireEvent) { // IE
    el.fireEvent('onclick');
  }
}

document.getElementsByClassName("m-wz-def")[1].childNodes[0].value = 1345;
simulateClick(document.getElementsByClassName("m-wz-def")[1].childNodes[0])

//test2
// -
var textDom = document.getElementsByClassName("m-wz-def")[1].childNodes[0];

textDom.addEventListener('onchange', console.log("1"), false);

textDom.value = "new Text";
var event = new InputEvent('textarea');
textDom.dispatchEvent(event)

//test 3
var rect = {
  dispatch: function(el, type) {

    try {

      if (el.dispatchEvent) {

        var evt = document.createEvent('Event');

        evt.initEvent(type, true, true);

        el.dispatchEvent(evt);

      } else if (el.fireEvent) {

        el.fireEvent('on' + type);

      }

    } catch (e) {};

  }
};

rect.dispatch(document.getElementsByClassName("m-wz-def")[1].childNodes[0], "change")

//TEST 4
Podium = {};
Podium.keyup = function(k) {
  var oEvent = document.createEvent('KeyboardEvent');

  // Chromium Hack
  Object.defineProperty(oEvent, 'keyCode', {
    get: function() {
      return this.keyCodeVal;
    }
  });
  Object.defineProperty(oEvent, 'which', {
    get: function() {
      return this.keyCodeVal;
    }
  });

  if (oEvent.initKeyboardEvent) {
    oEvent.initKeyboardEvent("keyup", true, true, document.defaultView, false, false, false, false, k, k);
  } else {
    oEvent.initKeyEvent("keyup", true, true, document.defaultView, false, false, false, false, k, 0);
  }

  oEvent.keyCodeVal = k;

  if (oEvent.keyCode !== k) {
    alert("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
  }

  document.getElementsByClassName("m-wz-def")[1].childNodes[0].dispatchEvent(oEvent);
}

Podium.keyup(48);


//Test 5
