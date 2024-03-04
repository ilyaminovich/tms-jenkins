'use strict';

//NORMAL level

//Task 1
//Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, 
//до параметра, который мы в неё передаем. 
//> Если передадим число 100 то, 
//надо вычислить сумму чисел от 0 до 100 (должно получится 5050)
{
    function calculateSum(n: number): number {
    let sum: number = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
let result: number = calculateSum(100);
console.log(result);
}


//Task 2
//Напишите функцию которая в качестве аргумента принимает в себя сумму кредита 
//который хочет получить клиент и верните результат переплаты по кредиту:
//+ процентная ставка в год — 17%,
//+ количество лет — 5.
//> Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.
{
    function calculateLoanOverpayment(creditAmount: number, annualRate:number = 0.17, loanTermYears:number = 5): number {
    let LoanOverpayment = (creditAmount * annualRate * loanTermYears);
    return LoanOverpayment;
}
let overpaymentAmount: number = calculateLoanOverpayment(1000);
console.log(overpaymentAmount);
}


//Task 3
//Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
//+ строку
//+ значение от
//+ значение по
//После вызова функция должна вернуть переданную строку 
//обрезанную по значениям от и по
{
    function cutSubstring(string: string, startValue: number, endValue: number): string {
    return string.slice(startValue, endValue);
   }
let str: string = cutSubstring("Изначально JavaScript был создан, чтобы «сделать веб-страницы живыми»", 41, 68);
console.log(str);
}


//Task 4
//Написать функцию **getSumNumbers**, которая будет принимать число 
//и вычислять сумму цифр из которых состоит число.
//> Для 2021 это будет 5.

{
    function getSumNumbers(number: number): number {
    let sumOfDigits: number = 0;

    for (const digitStr of String(number)) {
        sumOfDigits += parseInt(digitStr, 10);
    }
    return sumOfDigits; ;
   }
let sum: number = getSumNumbers(2021);
console.log(sum);
}


//Task 5
//Написать функцию **`getSum`** которая принимает два целых числа a и b, 
//которые могут быть положительными или отрицательными, 
//найти сумму всех чисел между ними, включая их, и вернуть ее. 
//Если два числа равны, верните a или b.
{
    function getSum(a: number, b:number): number {
    let sum: number = 0;
    if (a === b) {
        return a;
    }
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}
let result: number = getSum(-2, 5);
console.log(result);
}


//Task 6
//Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:
//+ булевое значение
//+ функцию **foo**//callback1 которая выводит в консоль свое имя
//+ функцию **boo**//callback2 которая выводит в консоль свое имя
//> Если переданное булевое значение **true** запускаем 
//функцию **foo**/callback1 иначе **boo**/callback2
{
    function getFunctionResults(res: boolean, OwnName: () => void, OwnName2: () => void): void {
        if (res) {
            OwnName();
        } else {
            OwnName2();
        }
    }
    function OwnName(): void {
        console.log("OwnName");
    }
    function OwnName2(): void {
        console.log("OwnName2");
    }
getFunctionResults(false, OwnName, OwnName2);
}



//Task 7
//Напишите самовызыввающиеся функцию подсчет факторила числа: 
//число должно передаваться как параметр функции
((n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log(result);
})(5);




//ADVANCED level

//Task 1
//Реализуйте функцию, который принимает 3 целочисленных 
//значения a, b, c. Функция должна возвращать **true**, 
//если треугольник можно построить со сторонами заданной длины, 
//и **false** в любом другом случае.
{
    function isTrianglePossible(a:number, b:number, c:number) {
    return (a + b > c) && (b + c > a) && (a + c > b);
}
let result = isTrianglePossible(1, 4, 5);
console.log(result);
}


//Task 2
//Ваша задача - разбить плитку шоколада заданного //размера n x m на маленькие квадраты. 
//Каждый квадрат имеет размер 1x1 и не может быть разбит. 
//Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.

//+ Например, если вам дается плитка шоколада размером 2 x 1, //вы можете разделить ее 
//на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать 
//два надлома.

//+ Если входные данные недействительны, вы должны вернуть 0 
//(поскольку надломы не требуются, если у нас нет шоколада для разделения). 
//Ввод всегда будет неотрицательным целым числом.
{
function getMinBreaks(a: number, b:number): number {
    return (a * b - 1) < 1 ? 0 : (a * b - 1);
}
let MinBreaks: number = getMinBreaks(5, 7);
console.log(MinBreaks);
}
