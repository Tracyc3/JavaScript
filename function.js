var array = [3, 4];
var add = function(a, b){
	return a + b;
};
var sum = add.apply(null, array);
console.log(sum);

var myObject = {
	value:0,
	increment: function(inc){
		this.value += typeof inc === 'number' ? inc :1;
	}
};

//方法调用
myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

//函数调用
var sum = add(3,4);
console.log(sum);

//构造器调用模式
var Quo = function(string){
	this.status = string
}; //创建一个构造器函数。它构造一个带有status属性的对象

//给Quo的所有实例提供一个名为get_status的公共方法
Quo.prototype.get_status = function(){
	return this.status;
};

//构造一个Quo实例
var myQuo = new Quo("confused");
console.log(myQuo.get_status());

//apply调用模式
var statusObject = {
	status: "A-OK"
};

var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);


//闭包
var myObject = (function(){
	var value = 0;

	return {
		increment: function(inc){
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function(){
			return value;
		}
	};
}());

myObject.increment(3);
console.log(myObject.getValue());


//创建一个名为quo的构造函数
//它构造出带有get_status方法和status属性的一个对象

var quo = function(status){
	return {
		get_status: function(){
			return status;
		}
	};
};
var myQuo = quo("amazed");

console.log(myQuo.get_status());