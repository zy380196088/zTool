/*
  关于数组去重方法大全 (也是在网上看到的一篇文章 弄懂去重你就GET啦)
 */

/*
方法一 : (这个简单但是消耗内存大,速度慢)
*/
Array.prototype.distinct = function () {
  var arr = this,
    i,
    j,
    len = arr.length;
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        len--;
        j--;
      }
    }
  }
  return arr;
};

/*
方法二 : 
*/
Array.prototype.distinct = function (param) {
  var arr = this,
    result = [],
    i,
    j,
    len = arr.length;
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        j = ++i;
      }
    }
    result.push(arr[i])
  }
  return result;
}

/*
  方法三 : 利用对象的属性不能相同的特点进行去重
*/

Array.prototype.distinct = function () {
  var arr = this,
    i,
    obj = {},
    result = [],
    len = arr.length;
  for (i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) { //如果能查找到，证明数组元素重复了
      obj[arr[i]] = 1;
      result.push(arr[i]);
    }
  }
  return result;
};

/*
  方法四: 数组递归去重
*/
Array.prototype.distinct = function () {
  var arr = this,
    len = arr.length;
  arr.sort(function (a, b) { //对数组进行排序才能方便比较
    return a - b;
  })

  function loop(index) {
    if (index >= 1) {
      if (arr[index] === arr[index - 1]) {
        arr.splice(index, 1);
      }
      loop(index - 1); //递归loop函数进行去重
    }
  }
  loop(len - 1);
  return arr;
};


/*
方法五 : 利用indexOf 以及 forEach
*/
Array.prototype.distinct = function () {
  var arr = this,
    result = [],
    len = arr.length;
  arr.forEach(function (v, i, arr) { //这里利用map，filter方法也可以实现
    var bool = arr.indexOf(v, i + 1); //从传入参数的下一个索引值开始寻找是否存在重复
    if (bool === -1) {
      result.push(v);
    }
  })
  return result;
};

/*
方法六: ES6 SET
*/
function distinct(array) {
  return Array.from(new Set(array));
}