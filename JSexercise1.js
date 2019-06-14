//1

function getSum(a,b){
	if (a==b) {
		return (a+b)*3;
	}else{
		return a+b;
	}
}
console.log(
	getSum(1,2))

//2
 
 function getAbsolute(n){
 	const a=Math.abs(n-51);

 	if(n>51){
 		return a*3;
 	}else{
 		return a;
 	}
 }

console.log(
	getAbsolute(51))

//3
function getInt(a,b){
	if (a==30||b==30||a+b==30) {
		return true;
	}

console.log(
	getInt(30,15))

//4
function getWit(n){
	if (Math.abs(100-n)<=10||Math.abs(200-n)<=10) {
		return true;
	}
}
console.log(getWit(98))

//5
function getDiv(n){
	return (n%3==0||n%7==0);
}
console.log(getDiv(9))

//6
function getTemp(a,b){
	return (a<0 && b>100||b<0 && a>100)
}
console.log(getTemp(109,-1))

//7
function getInts(a,b){
	return (100<=a && a<=200||100<=b && b<=200)
}
console.log(getInts(99,200))

//8
function getVa(a,b,c){
	return (20<=a && a<=50||20<=b && b<=50||20<=c && c<=50)
}
console.log(getVa(100,200,30))

//9
function getInts(a,b){
	return (100<=a && a<=200)!= (100<=b && b<=200);
}
console.log(getInts(90,150))

//10
function getClos(a,b){
	if (Math.abs(100-a)<Math.abs(100-b)) {
		return a;
	}else if(a==b){
		return 0;
	}else{
		return b;
	}
}
console.log(getClos(99,98))

//11
function getInt(a,b){
	return (40<=a && a<=50 && 40<=b && b<=50) || (50<=a && a<=60 && 50<=b && b<=60)
}
console.log(getInt(55,60))