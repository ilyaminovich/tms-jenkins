'use strict';

//NORMAL level

//Task 1
let userName: string = "Иван Иванов";
for (let i = 0; i < 5; i++) {
  if (i % 2 === 1) {
    console.log(`привет ${userName.toLowerCase()}`);
  } else {
    console.log(`ПРИВЕТ ${userName.toUpperCase()}`);
  }
}



//Task 2
{
  let str: string = 'я учу typescript!';
  let result = str.includes('учу') ? str.indexOf('учу') : 
  'Данной подстроки нет';
  console.log(result);
  }


//Task 3
{
  const min: number = Math.ceil(0);
  const max: number = Math.floor(30);
  const pos: number = Math.floor(Math.random() * (max - min)) + min;

  let str: string = 'я учу typescript!';

  let result = (pos < str.length) ? str[pos] :
  'Вы вышли за границу строки';
  console.log(result);
}



//Task 4
{
  let str: string = 'я учу typescript!';
  let result = str.endsWith('.') ? 'Данное предложение закончено' :
  'В конце предложения не хватает точки';
  console.log(result);
}



//Task 5
{
let str: string = 'я учу typescript!';
  console.log(str.slice(2,5));
  console.log(str.slice(-11,-1));

  console.log(str.substring(2,5));
  console.log(str.substring(6,16));
}



//Task 6
{
  let str: string = 'я учу typescript!';
console.log(str.split(" ")); 
}


//Task 7
{
let str: string = '                я учу typescript!                ';
console.log(str.trim()); 
}



//Task 8
{
let number:number = 8.829734872948;
console.log(parseFloat(number.toFixed(3)));
}


//Task 9
{
  const min: number = Math.ceil(5.68484);
  const max: number = Math.floor(117.351834);
  const myNumber: number = 5//Math.random() * (max - min) + min;
    
  let result = Number.isInteger(myNumber) ? myNumber :
      Math.round(myNumber);
  console.log(result);
     }


//Task 10 = Task 11
// Задание в файле повторяется
 {
  const min: number = Math.ceil(5.68484);
  const max: number = Math.floor(117.351834);
  const res: number = Math.random() * (max - min) + min;
  let myNumber = res;

  console.log(Math.floor(myNumber));
  console.log(Math.ceil(myNumber));
  console.log(Math.round(myNumber));
 }


//Task 12 = Task 13
// Задание в файле повторяется
{
const min: number = Math.ceil(5.68484);
const max: number = Math.floor(117.351834);
const res: number = Math.random() * (max - min) + min;
let myNumber = res;

console.log(Math.pow(myNumber, 2));
}



//Task 14
{
  const min: number = Math.ceil(1.5);
  const max: number = Math.floor(32.2);
  const res: number = Math.floor(Math.random() * (max - min) + min);
  console.log(res);
  }


//Task 15
{
const min: number = Math.ceil(5.68484);
const max: number = Math.floor(117.351834);
const res: number = Math.random() * (max - min) + min;
console.log(res);
}



//Task 16
let currentDate: Date = new Date();

// Получаем день, месяц и год
let day: number = currentDate.getDate();
let month: number = currentDate.getMonth() + 1;
let year: number = currentDate.getFullYear();

// Получаем часы, минуты и секунды
const hours: number = currentDate.getHours();
const minutes: number = currentDate.getMinutes();
const seconds: number = currentDate.getSeconds();

console.log(`Текущая дата: ${month}/${year}/${day}. Текущее время: ${hours}:${minutes}:${seconds}`);