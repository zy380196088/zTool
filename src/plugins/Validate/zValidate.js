(function(root,factory,plug){
  factory.call(root,root.jQuery,plug)
})(window,function($,plug){
  var __DEFS__ ={
    raise : "change",
    errorMsg:"输入不合法",
    extendRules:function(rules){
    $.extend(__RULES__,rules);
    }
  };
  var __RULES__ ={
    require:function(rule){
      return this.val() !== '';
    },
    number:function (rule) {
      return true;
    },
    length:function(rule){
      return this.val().length == Number(rule);
    },
    interger:function(rule){
      return true;
    },
    email:function(rule){
      return /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.val());
    },
    regex:function(rule){
      return new RegExp(rule).test(this.val());
    },
    compareto:function(rule){
      return true;
    }
  }
  $.fn[plug] = function(options){
    if(!this.length) return;
    $.extend(this,__DEFS__,options)
    var $fields = this.find("input");
    $fields.on(this.raise,function(){
      var $field = $(this);
      var _this = this;
      var $group = $field.parents(".control-group").removeClass("success").removeClass("error");
      var result = true;
      console.log($group)
      $.each(__RULES__,function(rule,action){
        var val = $field.data("zv-"+rule);
        var errorMsg  = $field.data("zv-"+rule+"-error") || _this.errorMsg;
        if(val){
          if(result = action.call($field,val)){
            $group.addClass("success")
          }else{
            $group.addClass("error")
          }
          return result;
        }
      })
    })
    return this;
  }
},"zValidate");

$(".zValidate").zValidate({
  raise:"change",
  errorMsg:"输入不符合要求"
}).extendRules({
  cardId:function(rule){
    //身份证验证
    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.val());
  },
})