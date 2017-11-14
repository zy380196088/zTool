/**
 * Created by zhouyu on 2017/7/31.
 */

//根据角色渲染菜单
function initMenu(userId) {

  // userId:0 => 网评员 Menu,
  // userId:1 => 区县管理 Menu
  // userId:2 => 市级管理 Menu
  var url = window.location.href;
  var MenuData = [{
    menuList: [{
      num: 1,
      text: '首页',
      show: true,
      on: false,
      url: '/wpy/index.html'
    }, {
      num: 2,
      text: '任务管理',
      show: true,
      on: false,
      url: '/wpy/task/index.html'
    }, {
      num: 3,
      text: '组织管理',
      show: false,
      on: false,
      url: '/wpy/organization/index.html'
    }, {
      num: 4,
      text: '舆情监控',
      show: true,
      on: false,
      url: '/wpy/monitor/index.html'
    }, {
      num: 5,
      text: '数据中心',
      show: false,
      on: false,
      url: '/wpy/dataCenter/selfIndex.html'
    }, {
      num: 6,
      text: '知识库',
      show: true,
      on: false,
      url: '/wpy/knowledgeBase/publicIndex.html'
    }, {
      num: 7,
      text: '系统管理',
      show: false,
      on: false,
      url: '/wpy/system/index.html'
    }, {
      num: 8,
      text: '媒体服务',
      show: false,
      on: false,
      url: '/wpy/mediaServices/Index.html'
    }],
  },
    {
      menuList: [{
        num: 1,
        text: '首页',
        show: true,
        on: false,
        url: '/county/index.html'
      }, {
        num: 2,
        text: '任务管理',
        show: true,
        on: false,
        url: '/county/task/index.html'
      }, {
        num: 3,
        text: '组织管理',
        show: true,
        on: false,
        url: '/county/organization/index.html'
      }, {
        num: 4,
        text: '舆情监控',
        show: true,
        on: false,
        url: '/county/monitor/index.html'
      }, {
        num: 5,
        text: '数据中心',
        show: true,
        on: false,
        url: '/county/dataCenter/selfIndex.html'
      }, {
        num: 6,
        text: '知识库',
        show: true,
        on: false,
        url: '/county/knowledgeBase/publicIndex.html'
      }, {
        num: 7,
        text: '系统管理',
        show: false,
        on: false,
        url: '/county/system/index.html'
      }, {
        num: 8,
        text: '媒体服务',
        show: true,
        on: false,
        url: '/county/mediaServices/Index.html'
      }],
    },
    {
      menuList: [{
        num: 1,
        text: '首页',
        show: true,
        on: false,
        url: '/municipal/index.html'
      }, {
        num: 2,
        text: '任务管理',
        show: true,
        on: false,
        url: '/municipal/task/index.html'
      }, {
        num: 3,
        text: '组织管理',
        show: true,
        on: false,
        url: '/municipal/organization/index.html'
      }, {
        num: 4,
        text: '舆情监控',
        show: true,
        on: false,
        url: '/municipal/monitor/index.html'
      }, {
        num: 5,
        text: '数据中心',
        show: true,
        on: false,
        url: '/municipal/dataCenter/publicIndex.html'
      }, {
        num: 6,
        text: '知识库',
        show: true,
        on: false,
        url: '/municipal/knowledgeBase/publicIndex.html'
      }, {
        num: 7,
        text: '系统管理',
        show: false,
        on: false,
        url: '/municipal/system/index.html'
      }, {
        num: 8,
        text: '媒体服务',
        show: true,
        on: false,
        url: '/municipal/mediaServices/Index.html'
      }],
    }
  ];

  if (getIndexOf(url, 'task') == true) {
    changeMenuStatus(1, MenuData)
  }

  if (getIndexOf(url, 'organization') == true) {
    changeMenuStatus(2, MenuData)
  }

  if (getIndexOf(url, 'monitor') == true) {
    changeMenuStatus(3, MenuData)
  }

  if (getIndexOf(url, 'dataCenter') == true) {
    changeMenuStatus(4, MenuData)
  }

  if (getIndexOf(url, 'knowledgeBase') == true) {
    changeMenuStatus(5, MenuData)
  }
  if (getIndexOf(url, 'system') == true) {
    changeMenuStatus(6, MenuData)
  }
  if (getIndexOf(url, 'mediaServices') == true) {
    changeMenuStatus(7, MenuData)
  }
  if ((getIndexOf(url, 'task') || getIndexOf(url, 'organization') || getIndexOf(url, 'dataCenter') || getIndexOf(url, 'knowledgeBase') || getIndexOf(url, 'system') || getIndexOf(url, 'monitor') || getIndexOf(url, 'mediaServices') || getIndexOf(url, 'user_center')) !== true) {
    changeMenuStatus(0, MenuData)
  }

  switch (userId) {
    case 0:
    {
      renderHtml(MenuData[0], 'topMenu-tpl', 'topMenu-dom');
      break;
    }
    case 1:
    {
      renderHtml(MenuData[1], 'topMenu-tpl', 'topMenu-dom');
      break;
    }
    case 2:
    {
      renderHtml(MenuData[2], 'topMenu-tpl', 'topMenu-dom');
      break;
    }
    default:
      break;
  }
  //查找字符串中的字符串
  function getIndexOf(Str, searchStr) {
    //console.log("urlStr", Str);
    var index = Str.indexOf(searchStr);
    if (index == -1) {
      return false;
    } else {
      return true;
    }
  }

  function changeMenuStatus(index, menuDataArr) {
    //index 改变 MENU 的索引;
    for (var i = 0; i < menuDataArr.length; i++) {
      menuDataArr[i].menuList[index].on = true;
    }
  }
}

//juicer模板渲染
function renderHtml(data, jsId, domId) {
  var tpl = $('#' + jsId).html();
  // console.log(tpl)
  var html = juicer(tpl, data);
  $('#' + domId).empty().append(html);
  // console.log("renderHtml:", html)
}

var wpyTools = {
  //xxxx秒 => 输出'a天b小时c分钟'
  secondTimeToDay: function (t) {
    var d = 0,
      h = 0,
      m = 0,
      s = 0;
    if (t >= 0) {
      d = Math.floor(t / 3600 / 24); //天
      h = Math.floor(t / 60 / 60 % 24); //小时
      m = Math.floor(t / 60 % 60); //分钟
      // s = Math.floor(t % 60);
    }
    return d + "天 " + h + "小时 " + m + " 分钟";
  },
  isNull: function (data) {
    if (data == null) {
      return "0"
    } else {
      return data;
    }
  },
  urlAddHttp: function (url) {
    if (typeof url == 'string') {
      url = url.substr(0, 7).toLowerCase() == "http://" ? url : "http://" + url;
      return url;
    } else {
      return "";
    }
  },
  unique: function (arr) {
    var res = [];
    var json = {};
    for (var i = 0; i < arr.length; i++) {
      if (!json[arr[i]]) {
        res.push(arr[i]);
        json[arr[i]] = 1;
      }
    }
    return res;
  },
  numberToPercentStr: function (number, decimal) {
    //number转换数,decimal小数点后保留几位,默认为2
    var decimal = parseInt(decimal) || 2;
    return parseFloat(number * 0.01).toFixed(decimal) + '%';
    console.log(parseFloat(number * 0.01).toFixed(decimal), '%')
  },
  parseQueryString: function (url) {
    //把url的参数部分转化成json对象
    var reg_url = /^[^\?]+\?([\w\W]+)$/,
      reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
      arr_url = reg_url.exec(url),
      ret = {};
    if (arr_url && arr_url[1]) {
      var str_para = arr_url[1],
        result;
      while ((result = reg_para.exec(str_para)) != null) {
        ret[result[1]] = result[2];
      }
    }
    return ret;
  },
  getQueryString: function (name) {
    // 通过key获取url中的参数值
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  parseParam: function (param, key) {
    var paramStr = "";
    if (param instanceof String || param instanceof Number || param instanceof Boolean) {
      paramStr += "&" + key + "=" + encodeURIComponent(param);
    } else {
      $.each(param, function (i) {
        var k = key == null ? i : key + (param instanceof Array ? "[" + i + "]" : "." + i);
        paramStr += '&' + wpyTools.parseParam(this, k);
      });
    }
    return paramStr.substr(1);
  },
  goParamPage: function (param, pageUrl) {
    //pageUrl 为相对于根目录的页面地址
    if (!!param && !!pageUrl) {
      var urlStr = pageUrl + '?' + wpyTools.parseParam(param);
      window.location.href = urlStr;
    } else {
      console.log("跳转页面地址无变化");
      return false;
    }

  },
  md5: function (string) {
    function md5_RotateLeft(lValue, iShiftBits) {
      return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function md5_AddUnsigned(lX, lY) {
      var lX4, lY4, lX8, lY8, lResult;
      lX8 = (lX & 0x80000000);
      lY8 = (lY & 0x80000000);
      lX4 = (lX & 0x40000000);
      lY4 = (lY & 0x40000000);
      lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
      if (lX4 & lY4) {
        return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
      }
      if (lX4 | lY4) {
        if (lResult & 0x40000000) {
          return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
        } else {
          return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
        }
      } else {
        return (lResult ^ lX8 ^ lY8);
      }
    }

    function md5_F(x, y, z) {
      return (x & y) | ((~x) & z);
    }

    function md5_G(x, y, z) {
      return (x & z) | (y & (~z));
    }

    function md5_H(x, y, z) {
      return (x ^ y ^ z);
    }

    function md5_I(x, y, z) {
      return (y ^ (x | (~z)));
    }

    function md5_FF(a, b, c, d, x, s, ac) {
      a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
      return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };

    function md5_GG(a, b, c, d, x, s, ac) {
      a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
      return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };

    function md5_HH(a, b, c, d, x, s, ac) {
      a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
      return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };

    function md5_II(a, b, c, d, x, s, ac) {
      a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
      return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };

    function md5_ConvertToWordArray(string) {
      var lWordCount;
      var lMessageLength = string.length;
      var lNumberOfWords_temp1 = lMessageLength + 8;
      var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
      var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
      var lWordArray = Array(lNumberOfWords - 1);
      var lBytePosition = 0;
      var lByteCount = 0;
      while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
        lByteCount++;
      }
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
      lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
      lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
      return lWordArray;
    };

    function md5_WordToHex(lValue) {
      var WordToHexValue = "",
        WordToHexValue_temp = "",
        lByte, lCount;
      for (lCount = 0; lCount <= 3; lCount++) {
        lByte = (lValue >>> (lCount * 8)) & 255;
        WordToHexValue_temp = "0" + lByte.toString(16);
        WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
      }
      return WordToHexValue;
    };

    function md5_Utf8Encode(string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    };
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22;
    var S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20;
    var S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23;
    var S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
    string = md5_Utf8Encode(string);
    x = md5_ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
      AA = a;
      BB = b;
      CC = c;
      DD = d;
      a = md5_FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
      d = md5_FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
      c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
      b = md5_FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
      a = md5_FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
      d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
      c = md5_FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
      b = md5_FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
      a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
      d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
      c = md5_FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
      b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
      a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
      d = md5_FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
      c = md5_FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
      b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
      a = md5_GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
      d = md5_GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
      c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
      b = md5_GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
      a = md5_GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
      d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
      c = md5_GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
      b = md5_GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
      a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
      d = md5_GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
      c = md5_GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
      b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
      a = md5_GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
      d = md5_GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
      c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
      b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
      a = md5_HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
      d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
      c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
      b = md5_HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
      a = md5_HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
      d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
      c = md5_HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
      b = md5_HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
      a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
      d = md5_HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
      c = md5_HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
      b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
      a = md5_HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
      d = md5_HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
      c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
      b = md5_HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
      a = md5_II(a, b, c, d, x[k + 0], S41, 0xF4292244);
      d = md5_II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
      c = md5_II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
      b = md5_II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
      a = md5_II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
      d = md5_II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
      c = md5_II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
      b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
      a = md5_II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
      d = md5_II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
      c = md5_II(c, d, a, b, x[k + 6], S43, 0xA3014314);
      b = md5_II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
      a = md5_II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
      d = md5_II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
      c = md5_II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
      b = md5_II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
      a = md5_AddUnsigned(a, AA);
      b = md5_AddUnsigned(b, BB);
      c = md5_AddUnsigned(c, CC);
      d = md5_AddUnsigned(d, DD);
    }
    return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
  },
  getFormJson: function (domId) {
    var json = {};
    var $dom = $("#" + domId).serializeArray();
    $.each($dom, function () {
      if (json[this.name] !== undefined) {
        if (!json[this.name].push) {
          json[this.name] = [json[this.name]];
        }
        o[this.name].push(this.value || '');
      }
    });
    return json;
  },
  refreshPage: function () {
    location.reload();
  },
  windowGoBack: function () {
    window.history.go(-1);
  },
  returnTaskType: function (typeValue) {
    typeValue = parseInt(typeValue)
    switch (typeValue) {
      case 0:
        return '跟评';
      case 1:
        return '转发';
      case 2:
        return '发文';
      default:
        return '未知';
    }
  },
  //二次封装 Layer.msg
  //text 提示的信息, time 提示在多少时间后消失, 消失后执行的回调函数
  wpyMsg: function (text, time, callback) {
    //回调函数是否传入,否则默认是刷新页面
    var callbackFn;
    switch (typeof callback) {
      case 'function':
        callbackFn = callback;
        break;
      case 'boolean':
        if (callback === false)
        //不执行任何回调函数
          callbackFn = false;
        break;
      default:
        callbackFn = wpyTools.refreshPage;
        break;
    }

    layer.msg(text, {
      time: time ? time : 2000
    }, function () {
      if (callbackFn == false) {
        setTimeout(function () {
          return false;
        }, time);
      } else {
        setTimeout(function () {
          callbackFn();
        }, time);
      }
    })
  }
};

//juicer 全局函数注册

//空处理
juicer.register('isNull', wpyTools.isNull);
//时间转换(x秒 => a天 b时 c分
juicer.register('timeTransform', wpyTools.secondTimeToDay);
//半分比加
juicer.register('percent', wpyTools.numberToPercentStr);
juicer.register('taskTypeValue', wpyTools.returnTaskType);
juicer.register('httpUrl', wpyTools.urlAddHttp);
//创建下拉选择框 (选择下拉数据,渲染下拉选择的domId,选择后调用 callback)
function initSelect(selectOptions, domId, callback) {
  var selectDom = $('#' + domId);
  var returnValue;
  if (!!selectOptions.dataArr && selectOptions.dataArr.length > 0) {
    var selectHtml = '<div class="wpy-select">' +
      '<div class="select-box">' +
      '<span class="input-placeholder">' + selectOptions.default.text + '</span>' +
      '<i class="pz-icon icon-iccaretdown"></i>' +
      '</div>' +
      '<ul class="option-list">'
    var selectListHtml = '';
    for (var i = 0; i < selectOptions.dataArr.length; i++) {
      selectListHtml += '<li class="select-option" value="' + selectOptions.dataArr[i].value + '" data-text="' + selectOptions.dataArr[i].text + '">' + selectOptions.dataArr[i].text + '</li>'
    }
    selectHtml += (selectListHtml + '</ul></div>');
    $('#' + domId).append(selectHtml);
  }
  //展开 收拢 下拉菜单事件绑定
  selectDom.on("click", ".wpy-select > .select-box", function (e) {
    e.stopPropagation();
    console.log("$(this).parent()", $(this).parent())
    var arrowBtn = $(this).parent().find("i");
    var selfOptionList = $(this).parent().find(".option-list");
    var allOptionList = $("body").find(".option-list");
    var selectInput = $(this).parent().find(".input-placeholder");
    selectInput.text(selectOptions.default.text);
    selectInput.attr("value", selectOptions.default.value);
    switch (arrowBtn.hasClass("icon-iccaretdown")) {
      case true:
        // console.log("展开");
        arrowBtn.removeClass("icon-iccaretdown").addClass("icon-iccaretup");
        allOptionList.hide();
        selfOptionList.show();
        break;
      case false:
        // console.log("隐藏");
        arrowBtn.removeClass("icon-iccaretup").addClass("icon-iccaretdown");
        selfOptionList.hide();
        break;
    }
  });
  selectDom.on("mouseleave", ".wpy-select,.wpy-select > .option-list", function (e) {
    e.stopPropagation();
    var arrowBtn = $(this).parent().find("i");
    var optionList = $(this).parent().find(".option-list");
    arrowBtn.removeClass("icon-iccaretup").addClass("icon-iccaretdown");
    optionList.hide();
  });
  //点击选择 事件绑定
  selectDom.on("click", ".wpy-select > .option-list >.select-option", function (e) {
    e.stopPropagation();
    var self = this;
    var selectValue = $(self).attr("value");
    selectDom.attr("data-value", selectValue);
    returnValue = selectValue;
    var selectText = $(self).attr("data-text");
    var arrowBtn = $(self).parent().parent().find("i");
    var showTextBox = $(self).parent().parent().find(".select-box>.input-placeholder");
    showTextBox.text(selectText);
    arrowBtn.removeClass("icon-iccaretup").addClass("icon-iccaretdown");
    $(self).parent().fadeOut();
    //调用回调函数,传参选择的 value
    (callback && typeof(callback) === "function") && callback(returnValue);
  });
}

//搜索框
function initSearch(domId, callback) {
  var dom = $('#' + domId);
  var returnSearchKey;
  dom.empty().append('<div class="wpy-input wpy-input-search" style="display: inline-block;"><input type="text" placeholder="请输入标题关键字"><i class="pz-icon icon-search"></i></div>');
  var inputDom = dom.find('input');
  dom.on("click", "i", function (e) {
    e.stopPropagation();
    returnSearchKey = inputDom.val();
    //调用回调函数,传参选择的 value
    (callback && typeof(callback) === "function") && callback(returnSearchKey);
  })
}

//单排单选按钮
function initInlineSelect(options, domId, callback) {
  //格式参考, domId:ID字符串,callback 为函数,
  // var options = {
  //   dataArr: [{
  //     value: 0,
  //     text: '未开始'
  //   }, {
  //     value: 1,
  //     text: '进行中',
  //   }, {
  //     value: 2,
  //     text: '已结束',
  //   }, {
  //     value: 2,
  //     text: '已经关闭',
  //   }],
  //   default: {
  //     value: 'all',
  //     text: '全部'
  //   }
  // };

  var dom = $('#' + domId);
  var returnValue;
  if (!!options.dataArr && options.dataArr.length > 0) {
    // console.log("initInlineSelect")
    var html = '<ul class="inline-select"><li class="select-on" data-value="' + options.default.value + '">' + options.default.text + '</li>';
    var LiHtml = '';
    for (var i = 0; i < options.dataArr.length; i++) {
      LiHtml += '<li data-value="' + options.dataArr[i].value + '">' + options.dataArr[i].text + '</li>';
    }
    html += (LiHtml + '</ul>');
  }
  //渲染 dom
  dom.empty().append(html);
  //绑定点击事件
  dom.on("click", "li", function () {
    dom.find("li").removeClass("select-on");
    $(this).addClass("select-on");
    returnValue = $(this).attr("data-value");
    (callback && typeof(callback) === "function") && callback(returnValue);
  })
}

//tab初始化
function initTab(options, domId, callback) {
  // options.type: 0表示水平tab,1表示竖排 tab(注意不是字符串)
  //  options = {
  //   type:0,
  //   activeTabIndex:0,
  //   tabHeader: [{
  //     value: 0,
  //     text: '上级任务'
  //   }, {
  //     value: 1,
  //     text: '已发任务'
  //   }],
  // }

  var dom = $("#" + domId);
  switch (options.type) {
    case 0:
    {
      //横排 tab
      var hTabHtml = '<ul class="wpy-tab-header horizontal-tab">';
      var hTabLiHtml = ''; //tab Li元素集
      if (!!options.tabHeader && options.tabHeader.length > 0) {
        for (var i = 0; i < options.tabHeader.length; i++) {
          if (i == options.activeTabIndex) {
            hTabLiHtml += '<li class="wpy-tab-header-item wpy-tab-on " data-tab-index="' + i + '" data-value="' + options.tabHeader[i].value + '">' + options.tabHeader[i].text + '</li>'
          } else {
            hTabLiHtml += '<li class="wpy-tab-header-item" data-tab-index="' + i + '"  data-value="' + options.tabHeader[i].value + '">' + options.tabHeader[i].text + '</li>'
          }
        }
        hTabHtml += (hTabLiHtml + '</ul>');
      }
      dom.find("ul").empty().append(hTabHtml);
    }
      break;
    case 1:
    {
      //竖排 tab
      var vTabHtml = '<ul class="wpy-tab-header vertical-tab">';
      var vTabLiHtml = ''; //tab Li元素集

      if (!!options.tabHeader && options.tabHeader.length > 0) {
        for (var i = 0; i < options.tabHeader.length; i++) {
          if (i === options.activeTabIndex) {
            vTabLiHtml += '<li class="wpy-tab-header-item wpy-tab-on "  data-tab-index="' + i + '" data-value="' + options.tabHeader[i].value + '">' + options.tabHeader[i].text + '</li>'
          } else {
            vTabLiHtml += '<li class="wpy-tab-header-item"  data-tab-index="' + i + '" data-value="' + options.tabHeader[i].value + '">' + options.tabHeader[i].text + '</li>'
          }
        }
        vTabHtml += (vTabLiHtml + '</ul>');
      }
      dom.find("ul").empty().append(vTabHtml);
    }
      break;
    default:
      alert("参数错误");
      return;
  }
  dom.on("click", "li", function () {
    var $self = $(this);
    var returnValue = $self.attr("data-value");
    console.log("tabValue", returnValue);
    dom.find(".wpy-tab-header-item").removeClass("wpy-tab-on");
    $self.addClass("wpy-tab-on");
    (callback && typeof(callback) === "function") && callback(returnValue);
  })
}

// 常见的 正则表达式 校验
// QQ号、手机号、Email、是否是数字、去掉前后空格、是否存在中文、邮编、身份证、URL、日期格式、IP
var wpyRegExp = {
  // 检查字符串是否为合法QQ号码
  isQQ: function (str) {
    // 1 首位不能是0  ^[1-9]
    // 2 必须是 [5, 11] 位的数字  \d{4, 9}
    var reg = /^[1-9][0-9]{4,9}$/gim;
    if (reg.test(str)) {
      console.log('QQ号码格式输入正确');
      return true;
    } else {
      console.log('请输入正确格式的QQ号码');
      return false;
    }
  },
  // 检查字符串是否为合法手机号码
  isPhone: function (str) {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
    if (reg.test(str)) {
      console.log('手机号码格式输入正确');
      return true;
    } else {
      console.log('请输入正确格式的手机号码');
      return false;
    }
  },
  // 检查字符串是否为合法Email地址
  isEmail: function (str) {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    // var reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (reg.test(str)) {
      console.log('Email格式输入正确');
      return true;
    } else {
      console.log('请输入正确格式的Email');
      return false;
    }
  },
  // 检查字符串是否是数字
  isNumber: function (str) {
    var reg = /^\d+$/;
    if (reg.test(str)) {
      console.log(str + '是数字');
      return true;
    } else {
      console.log(str + '不是数字');
      return false;
    }
  },
  // 去掉前后空格
  trim: function (str) {
    var reg = /^\s+|\s+$/g;
    return str.replace(reg, '');
  },
  // 检查字符串是否存在中文
  isChinese: function (str) {
    var reg = /[\u4e00-\u9fa5]/gm;
    if (reg.test(str)) {
      console.log(str + ' 中存在中文');
      return true;
    } else {
      console.log(str + ' 中不存在中文');
      return false;
    }
  },
  // 检查字符串是否为合法邮政编码
  isPostcode: function (str) {
    // 起始数字不能为0，然后是5个数字  [1-9]\d{5}
    var reg = /^[1-9]\d{5}$/g;
    // var reg = /^[1-9]\d{5}(?!\d)$/;
    if (reg.test(str)) {
      console.log(str + ' 是合法的邮编格式');
      return true;
    } else {
      console.log(str + ' 是不合法的邮编格式');
      return false;
    }
  },
  // 检查字符串是否为合法身份证号码
  isIDcard: function (str) {
    var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    if (reg.test(str)) {
      console.log(str + ' 是合法的身份证号码');
      return true;
    } else {
      console.log(str + ' 是不合法的身份证号码');
      return false;
    }
  },
  // 检查字符串是否为合法URL
  isURL: function (str) {
    var reg = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
    if (reg.test(str)) {
      console.log(str + ' 是合法的URL');
      return true;
    } else {
      console.log(str + ' 是不合法的URL');
      return false;
    }
  },
  // 检查字符串是否为合法日期格式 yyyy-mm-dd
  isDate: function (str) {
    var reg = /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/;
    if (reg.test(str)) {
      console.log(str + ' 是合法的日期格式');
      return true;
    } else {
      console.log(str + ' 是不合法的日期格式，yyyy-mm-dd');
      return false;
    }
  },
  // 检查字符串是否为合法IP地址
  isIP: function (str) {
    // 1.1.1.1  四段  [0 , 255]
    // 第一段不能为0
    // 每个段不能以0开头
    //
    // 本机IP: 58.50.120.18 湖北省荆州市 电信
    var reg = /^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/gi;
    if (reg.test(str)) {
      console.log(str + ' 是合法的IP地址');
      return true;
    } else {
      console.log(str + ' 是不合法的IP地址');
      return false;
    }
  }
};

//若用户登录是否长时间误操作,登出
/*
 *   time:[number]表示无操作的持续时间,//默认单位(分钟)
 */

