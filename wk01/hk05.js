//state01
/*function b1() {
	//var myVar
	console.log(myVar);
}
function a1(){
	var myVar=1;
	b1();//b1沒有在a1中做宣告，故b1的console找到的是未宣告函數
	console.log(myVar);
}
var myVar=2;
console.log(myVar);
a1();*/
//state02
/*function a1(){
	var myVar=1;
	function b1() {
	//var myVar
	console.log(myVar);
}
	b1();
	console.log(myVar);
}

var myVar=2;
console.log(myVar);
a1();*/

/*var firstname='Simon';
var addSurename=()=>{
	var surname='Holmes';
	var fullname=firstname+' '+surname;
	console.log(fullname);
}
addSurename();*/

var firstname='Simon';
var addSurename=()=>{
	var surname='Holmes';
	var fullname=firstname+' '+surname;
	firstname='David';
	console.log(fullname);
}
addSurename();