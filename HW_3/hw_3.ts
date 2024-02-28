'use strict';

//NORMAL level

//Task 1
let x:number = 20;
let y:number = 58;
let z:number = 42;

let result:number = x+y+z;

console.log(result);



//Task 2
const secondsInMinute: number = 60;
const minutesInHour: number = 60;
const hoursInDay: number = 24;
const daysInYear: number = 365;

let myAgeInYears: number = 35;

let myAgeInSeconds:number = myAgeInYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;

console.log(myAgeInSeconds);



//Task 3
let count = 42;
let userName = '42';

// Преобразование count в строку
let countAsString:string = String(count);
let countAsString2:string = '' + count;

console.log(countAsString + ' ' + typeof countAsString);
console.log(countAsString2 + ' ' + typeof countAsString2);

// Преобразование userName в число
let userNameAsNumber: number = +userName;
let userNameAsNumber2: number = Number(userName);

console.log(userNameAsNumber + ' ' + typeof userNameAsNumber);
console.log(userNameAsNumber2 + ' ' + typeof userNameAsNumber2);



//Task 4
let a = 1;
let b = 2;
let c = "белых медведей";

let text:string = `${a}${b} ${c}`; 

console.log(text);



//Task 5
let word1: string = "доступ";
let word2: string = "морпех";
let word3: string = "наледь";
let word4: string = "попрек";
let word5: string = "рубило";

let lengthWords: number = word1.length + word2.length + word3.length + word4.length + word5.length;

console.log(lengthWords);



//Task 6
let variableInString:string = 'Hello';
let variableInNumber:number = 2024;
let variableInBoolean:boolean = true;

console.log('Variable: variableInString have type: ' + typeof variableInString);
console.log('Variable: variableInNumber have type: ' + typeof variableInNumber);
console.log('Variable: variableInBoolean have type: ' + typeof variableInBoolean);



//Task 7
let variable1: string = 'true';
let variable2: boolean = false;
let variable3: number = 17;
let variable4: undefined = undefined;
let variable5: null = null;

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);



//Task 8
let height = 15;
let width = 20;

if (height > width) {
    console.log(height);
    } else {
        console.log(width);
    }



//Task 9
for (let i = 3; i <= 20; i += 3) {
    console.log(i);
  }



//Task 10
let key: boolean = true;
let documents: boolean = true;
let pen: boolean = true;
let apple: boolean = false;
let orange: boolean = true;

let shouldGoToWork: boolean = (key && documents && pen  && apple || orange);

console.log(shouldGoToWork);



//Task 11
{
let fizBuzChecker: number = 15;

if (fizBuzChecker % 3==0 && fizBuzChecker % 5 ==0) {
    console.log('FizBuz');
} else if (fizBuzChecker % 5 == 0 || fizBuzChecker % 3 ==0) {
    console.log(fizBuzChecker % 5 == 0 ? 'Fiz' : 'Buz');
}

}



//Task 12
let ageUser: number = 15;

if (ageUser >= 18) {
    console.log('Попей пивка');
} else if (ageUser >= 16 && ageUser < 18) {
    console.log('Можешь выкурить сигаретку, только маме не говори');
} else {
    console.log('Пей колу'); 
}



//Task 13
{
    let destinationSide:string = 'south';
    switch (destinationSide) {
        case 'south':
            console.log('на юг пойдешь счастье найдешь');
            break;
        case 'north':
            console.log('на север пойдешь много денег найдешь');
            break;
        case 'west':
            console.log('на запад пойдешь верного друга найдешь');
            break;
        case 'east':
            console.log('на восток пойдешь разработчиком станешь');
            break;
        default:
            console.log('Введены неверные данные, попробуйте еще раз');
    }
}




//ADVANCED level

//Task 1
{
let a = 4;
let b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log(2);
console.log(2);
}



//Task 2
{
    let Number:number=6;

    let subtractOperand:number=10;
    let addOperand:number=5;
    let multiplyOperand:number=20;
    let divideOperand:number=2;

 console.log(`(((((${Number} - ${subtractOperand}) + ${addOperand}) * ${multiplyOperand}) / ${divideOperand}) = ${result}`)   
} 


//Task 3
let row = '';

for (let i = 1; i <= 6; i++) {
  row += '#';
  console.log(row);
}