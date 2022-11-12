//task 1
// function radianConvert(degree){
//     return (degree*3.14)/180
// }
// console.log(radianConvert(360))

// const radianConvert = function(degree){
//     return (degree*3.14)/180
// }
// console.log(radianConvert(360))

// const radianConvert = degree => (degree*3.14)/180
// console.log(radianConvert(360))

//task 2
// function caclNums(num1,num2){
//     let sum=0
//     // for (let i=num1;i<=num2;i++){
//     //     sum+=i
//     // }
//     while (num1<=num2){
//         sum += num1
//         console.log(sum)
//         num1++
//     }
//     return sum
// }
// console.log(caclNums(2,5))

// const caclNums = function caclNums(num1,num2){
//     let sum=0
//     for (let i=num1;i<=num2;i++){
//         sum+=i
//     }
// //     while (num1<=num2){
// //         sum += num1
// //         console.log(sum)
// //         num1++
// //     }
//     return sum
// }
// console.log(caclNums(2,5))

// const caclNums = (num1,num2) => {
//     let sum=0
//         for (let i=num1;i<=num2;i++){
//             sum+=i
//         }
//     return sum
// }
// console.log(caclNums(2,5))

// task3
// function factorial(n){
//     let res = 1
//     for (let i = 2;i<=n;i++){
//         res *= i
//     }
//     return res
// }
// console.log(factorial(5))

// const factorial = function (n){
//     let res = 1
//     for (let i = 2;i<=n;i++){
//         res *= i
//     }
//     return res
// }
// console.log(factorial(5))

// const factorial = n => {
//     let res = 1
//     for (let i = 2;i<=n;i++){
//         res *= i
//     }
//     return res
// }
// console.log(factorial(5))

// task 4
const cashMachine = (price, cash) => cash>=price?`Сдача: ${cash-price}$`: 'Недостаточная сумма для оплаты'
console.log(cashMachine(573,580))

