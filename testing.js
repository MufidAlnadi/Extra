
let randomArray = Array.from({ length: 100 }, () =>   Math.floor(Math.random() * 100));
let array =  Array.from({ length: 100 }, (any,i) => i + 1);
let randomnum = Math.floor(Math.random() * 100);
let removeDuplicates = (arr) => [...new Set(arr)];
const evenNumbers = randomArray.filter(num => num % 2 === 0);
evenNumbers.sort((a , b) => a-b);

const FizzBuzz = randomArray.map(randomArray => {   
     if (randomArray % 3 ===0 && randomArray % 5 ===0){
        return `FizzBuzz`;
    }
    else if (randomArray % 5 === 0){
        return 'buzz'
    }
    else if (randomArray %3 === 0 ){
        return `fizz`;
    } 
    else{
        return randomArray +1;
    }

});

console.log(FizzBuzz);
console.log( removeDuplicates(FizzBuzz));