// const num = 4566;
// const result= num%10 ;
// console.log(result)
// const isArms = (number) => {
//     let ans;
//     let sum = 0;
//     num = number;
//     while (num > 0) {
//         r = num % 10;
//         console.log('result of r', r)
//         sum = sum + r * r * r;
//         console.log('sum ', sum)
//         num = parseInt(num / 10)
//         console.log('vag', num)
//     }
//     if (sum === num) {
//         ans = true
//     } else {
//         ans = false
//     }
//     return ans;
// }
// const result = isArms(445)
// console.log(result)
// const num = 15;
// const result = num % 10
// console.log(result)
// Write a C program to check whether a number is prime, Armstrong or perfect number using functions.
const isArms = (number) => {
    let sum = 0;
    let items = number.toString();
    for (let item of items) {
        sum += Math.pow(item, items.length)
    }
    return sum == number ? true : false;
}
const result = isArms(153);
console.log(result);