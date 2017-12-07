function Field(params) {
  this.field_id = params.fid;//需要驗證的字段
  this.validators = params.val;//验证器对象数组
  this.on_success = params.successFn;//验证成功时执行的事件
  this.on_error = params.errorFn;//当验证失败的时候执行的事件
  this.checked = false;
}

Field.prototype.validate = function () {
  // 循环遍历每一个验证器
  for (item in this.validators) {
    //给验证器附加验证成功和验证失败的回调事件
    this.set_callback(this.validators[item]);
    //执行验证器上的验证方法,验证是否符合规则
    if (!this.validators[item].validate(this.data())) {
      break;// 一旦任意一个验证器失败就停止
    }
  }
}
Field.prototype.data = function () {
  //获取字段值
  return document.getElementById(this.field_id).value;
}

//验证器回调函数的方法set_callback
Field.prototype.set_callback = function (val) {
  var self = this;
  val.on_success = function () {
    self.checked = true;
    self.on_success(val.tips);//执行验证成功的事件
  }
  val.on_error = function () {
    self.checked = false;
    self.on_error(val.tips);
  }
}


//长度校验
function Len_val(min_len, max_len, tip) {
  this.min_v = min_len;
  this.max_v = max_len;
  this.tips = tip;
  this.on_success = null;
  this.on_error = null;
}

Len_val.prototype.validate = function (fd) {
  if (fd.length < this.min_v || fd.length > this.max_v) {
    this.on_error();
    return false;
  }
  this.on_success();
  return true;
}

//正则校验
function Exp_val(expresion, tip) {
  this.exps = expresion;
  this.tips = tip;
  this.on_success = null;
  this.on_error = null;
}

Exp_val.prototype.validate = function (fd) {
  if (!fd) {
    this.on_success();
    return true;
  }
  if (this.exps.test(fd)) {
    this.on_success();
    return true;
  } else {
    this.on_error();
    return false;
  }
}

// 远程验证
function Remote_val(url, tip) {
  this.p_url = url;
  this.tips = tip;
  this.on_success = null;
  this.on_error = null;
}

Remote_val.prototype.validate = function (fd) {
  var self = this;
  $.post(this.p_url, {f: fd}, function (data) {
    if (data) {
      self.on_success();
      return;
    } else {
      self.on_error();
    }
  }, "json");
  return false;
}

// 自定义函数验证器
function Man_val(tip, func) {
  this.tips = tip;
  this.val_func = func;
  this.on_success = null;
  this.on_error = null;
}

Man_val.prototype.validate = function (fd) {
  if (this.val_func(fd)) {
    this.on_success();
  } else {
    this.on_error();
  }
}

//用一个类来做入口,在构造的时候传入 Field 对象的列表,并且每一个控件的onblur事件绑定到validate的包装器上
function UserForm(items) {
  this.f_item = items;
  // 把字段验证对象数组复制给属性
  for (var idx = 0; idx < this.f_item.length; idx++) {
    //获取封装后的回调事件
    var fc = this.get_check(this.f_item[idx]);
    $("#" + this.f_item[idx].field_id).blur(fc);//绑定到控件上
  }
}

UserForm.prototype.get_check = function (v) {
  //返回包装了调用 validate方法的事件
  return function () {
    v.validate();
  }
}

//绑定提交按钮的 onclick 事件
UserForm.prototype.set_submit = function (bid, bind) {
  var self = this;
  $("#" + bid).click(
    function () {
      if (self.validate()) {
        bind();
      }
    }
  )
}

UserForm.prototype.validate = function () {
  for (let idx in this.f_item) {// 循环每一个验证器
    this.f_item[idx].validate();//再检测
    if (!this.f_item[idx].checked) {
      return false;// 如果错误就返回失败,组织提交
    }
  }
  return true;//每一个都没错误就执行提交
}

