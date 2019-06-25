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
	}	return false;
}
console.log(
	getInt(30,15))

//4
function getWit(n){
	if (Math.abs(100-n)<=10||Math.abs(200-n)<=10) {
		return true;
	}	return false;
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
	return (20<=a && a<=50)||(20<=b && b<=50)||(20<=c && c<=50)
}
console.log(getVa(100,200,30))

//9
function getInts(a,b){
	return (20<=a && a<=50)!= (20<=b && b<=50);
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

//11 input a number. output:return true: if the given number is a Fibonacci number. Otherwise: return false
function fib(n){
fib=[0,1];
while(fib[fib.length-1] <= n){
    const a=fib[fib.length-2]+fib[fib.length-1];
    if(a>n){
        break;
    }else{
        fib.push(a);
    }
}
    return fib;
}

function checkFibo(c){
    const fibo=fib(c);

    return fibo[fibo.length-1]==c;
}
console.log(checkFibo(c));



//12 input array of number. output: the sort array ascending. E.g. [3,1,2] => [1,2,3]
const increases = [8,7,6,5,43,21,3];
increases.sort((a, b) => a-b);

console.log(increases)



/* 13  generate new number in sequence every time call this function. Reset number = 1 if current number = 5.
Format: {char}-{number}
char start at 'A'
number start at 1 */

var alphabet = new Array("A","B","C");

var alphabet = new Array(3);
alphabet[0] = "A";
alphabet[1] = "B";
alphabet[2] = "C";

let n=0;
let i=0;

function getNext(){
i++;

if(i>5){

i=1;
n++;
if(n>=3){
    n=0;
}
}return `${alphabet[n]}-${i}`;


}

console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())
console.log (getNext())