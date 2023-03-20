// Q1
console.log(-9 * 3)
console.log("value is: " + 50)
console.log(17 % 5)
console.log(5 % 17)
console.log(5 / 10)
console.log(4 === 4)
console.log(4 != 5)
console.log(7 <= 8)
let x = 10;
console.log(Math.ceil(x) - Math.floor(x))





let num = prompt("Enter the number:")
alert(num)




let num1 = prompt("Enter the first number: ")
let num2 = prompt("Enter the second number:")
if (num1 > num2) {
  alert(num1 + " " + num2)
}
else if (num2 > num1) {

} alert(num2 + " " + num1)





let num_1 = prompt("Enter the first number: ")
let num_2 = prompt("Enter the second number:")
if (num_1 > num2) {
  alert(num_1)
}
else if (num_2 > num_1) {

} alert(num_2)





let number1 = prompt("Enter the first number: ")
let number2 = prompt("Enter the second number:")
let sum = parseFloat(num1) + parseFloat(num2);
alert("The sum is: " + sum);




switch (num) {
  case num == 1:
    alert("ONE")
    break;
  case num == 2:
    alert("TWO")
    break;
  case num == 3:
    alert("THREE")
    break;
  case num == 4:
    alert("FOUR")
    break;
  case num == 5:
    alert("FIVE")
    break;
  case num == 6:
    alert("SIX")
    break;
  case num == 7:
    alert("SEVEN")
    break;
  case num == 8:
    alert("EIGHT")
    break;

  default:
    alert("NINE")
}


for (let i = 0; i <= 5; i++) {
  alert(i)
}


let message = "";
// add the number to the string with a space to display it in one message
for (let i = 0; i <= 5; i++) {
  message += i + " ";
}
alert(message);


for (let i = 0; i <= 20; i++) {
  console.log(i % 3)
}

let rang = prompt('number in the range 0…100.');
while (rang >= 100 || rang <= 0) {
  rang = prompt("prompt again until a valid number is entered")
}
let str = prompt('Enter Somthing:"');
while (isNaN(str) == false) {
    str = prompt("false prompt again")
}


let sumOfTheNumber =  prompt('Enter a number')

let result=0;
for (let i =0 ; i <= sumOfTheNumber ; i++){
    result = result+i
    
}
alert(result)


let AvgOfTheNumber =  prompt('Enter a number')
let arr=[];
let AvgResult=0;
for (let i =0 ; i <= AvgOfTheNumber ; i++){
    AvgResult = AvgResult+i
    arr[i] = AvgResult
    
}
alert(AvgResult/arr.length)
