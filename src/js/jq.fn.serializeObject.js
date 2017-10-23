/*
 * @Author: Joy
 * @Date:   2017-10-23 10:06:23
 * @Last Modified by:   Joy
 * @Last Modified time: 2017-10-23 10:06:39
 */
$.fn.serializeObject = function(data) {
  var serializeObj = {}; //目标对象
  var tempObj = {}; //临时对象
  var array = this.serializeArray(); //转换成数组格式
  if (data != null && data != undefined) {
    $.each(data, function(name, value) {
      array.push({
        "name": name,
        "value": value
      });
    });
  }
  console.log(data);
  console.log(array);
  $(array).each(function() {
    //遍历数组的没个元素
    if (serializeObj[this.name]) {
      //判断对象中是否已经存在该属性
      if ($.isArray(serializeObj[this.name])) {
        serializeObj[this.name].push(this.value); //如果已存在该字段,追加新值
      } else {
        serializeObj[this.name] = [serializeObj[this.name], this.value];
      }
    } else {
      //如果元素 name 不存在,添加属性 name:value
      serializeObj[this.name] = this.value;
    }
  });
  for (var item in serializeObj) {
    if ($.isArray(serializeObj[item])) {
      serializeObj[item] = JSON.stringify(serializeObj[item]);
    }
  }
  return serializeObj;
};
