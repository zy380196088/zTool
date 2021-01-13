// 函数节流
function _throttle(methods, time) {
	let timer = null;
	let _start_time = new Date();
	return function () {
		let context = this;
		let _end_time = new Date();
		let _during_time = _end_time - _start_time;
		if (_during_time >= time) {
			//大于等于设定的时间采取执行函数;
			methods.call(context);
			//执行完后重置开始时间
			_start_time = _end_time;
		}
	}
}