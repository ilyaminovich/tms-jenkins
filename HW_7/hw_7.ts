'use strict';

//NORMAL level

/*Task 1 🖥
Дан массив:
```javascript
    const colors = ['red', 'green', 'blue']
```
Выведите в консоль его длину. */
{
    const colors: string[] = ['red', 'green', 'blue'];
    console.log('Task 1: ',  colors.length);
}




/*Task 2 🖥
Дан массив:
```javascript
    const animals = ['monkey', 'dog', 'cat']
```
Выведите в консоль его последний элемент вне зависимости от его длинны. */
{
    const animals: string[] = ['monkey', 'dog', 'cat'];
    console.log('Task 2: ', animals.at(-1));
}




/*Task 3 🖥
/*Дан массив:
```javascript
    const numbers = [5, 43, 63, 23, 90]
```
Удалите все элементы в массиве и выведите в консоль полученный результат.
> Реализуйте решение двумя способами. */
{console.log('Task 3: ')}
{
    const numbers: number[] = [5, 43, 63, 23, 90];
    numbers.length = 0;
    console.log(numbers);
}
{
    const numbers: number[] = [5, 43, 63, 23, 90];
    numbers.splice(0, 5);
    console.log(numbers);
}




/*Task 4 🖥
Дан массив:
```javascript
    const students = ['Polina', 'Dasha', 'Masha']
```
+ Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
+ Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
+ Полученный результат не забудьте вывести в консоль. */
{
    const students: string[] = ['Polina', 'Dasha', 'Masha'];
    
    // удалим последний элемент и вместо него добавим `Borya`
    students.splice((-1), 1, "Borya"); 
        
    // удалим первый элемент и вместо него добавим `Andrey`
    students.splice(0, 1, "Andrey"); 
    console.log('Task 4: ', students)
}




/*Task 5 🖥
Дан массив:
```javascript
    const cats = ['Gachito', 'Tom', 'Batman']
```
Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**. */
{
    console.log('Task 5: ')

    const cats: string[] = ['Gachito', 'Tom', 'Batman'];
    for (let i = 0; i < cats.length; i++) {
        console.log(cats[i]);
    }
    
    for (const cat of cats) {
        console.log(cat);
}
}




/*Task 6 🖥
```javascript
    const evenNumbers = [2, 4, 6, 8, 10]
    const oddNumbers = [1, 3, 5, 7, 9]
```
+ Соедините два массива чисел в один.
+ В полученном массиве попробуйте найти индекс числа **`8`** */
{
    const evenNumbers: number[] = [2, 4, 6, 8, 10];
    const oddNumbers: number[] = [1, 3, 5, 7, 9];

    const numbers = [...evenNumbers, ...oddNumbers];
    console.log('Task 6: ', numbers.indexOf(8));
}




/*Task 7 🖥
Дан массив:
```javascript
    const binary = [0, 0, 0, 0]
```
+ Наш бинарный массив неполный, в нем явно не хватает единиц.
+ Превратите данный массив в строку.
> [0, 0, 0, 0] -> '0101010' */
{
    const binary: number[] = [0, 0, 0, 0];
    console.log('Task 7: ', binary.join('1'));
}




//ADVANCED level
//Для решения задач используйте циклы **`for`** или **`for of`**


/*Task 1 👨‍🏫
Реализуйте функцию которая будет проверять, является ли слово палиндромом. */
{
    console.log('ADVANCED level Task 1: ');

    function check_palindrome(word: string): void {
    // Создаем массив символов из слова
    const array1: string[] = [...word];
    // Создаем обратную копию массива символов
    const array2 = array1.slice().reverse();
    // Инициализируем переменную для хранения результата проверки
    let isPalindrome = true;
    // Проверяем, являются ли массивы array1 и array2 равными
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            isPalindrome = false;
            break;
        }
    }
    console.log(isPalindrome);
    console.log(array1);
    console.log(array2);
}
check_palindrome('радар1');
}




/*Task 2 👨‍🏫
```javascript
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ]
```
> Выведите в консоль среднее значение чисел в многомерном массиве. */
{
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ];
    
    let sum = 0;
    let count = 0;
    
    for (const row of matrix) {
        for (const num of row) {
            sum += num;
            count++;
        }
    }
    let average = sum / count;
    
    console.log("Task 2: ", average);
}




/*Task 3 👨‍🏫
Дан массив:
```javascript
   const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
```
Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. 
Оба массива затем выведите в консоль.  */
{
    console.log('Task 3: ');

    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
    //инициируем создание двух массивом
    const positiveNumbers: any[] = [];
    const negativeNumbers: any[] = [];

    // Добавляем положительное число в positiveNumbers, отрицательное число в negativeNumbers
    for (let i = 0; i < mixedNumbers.length; i++) {
        if (mixedNumbers[i] >= 0) {
            positiveNumbers.push(mixedNumbers[i]);
        } else {
            negativeNumbers.push(mixedNumbers[i]);
        }
    }
    console.log(positiveNumbers);
    console.log(negativeNumbers);
}




/*Task 4 👨‍🏫
Создать массив длинной не менее 5, из динамически созданных случайных чисел. 
Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. 
В конце вывести оба массива в консоль. */
{
    console.log('Task 4: ');

    let array1: number[] = [];
    let array2: number[] = [];

    for (let i = 0; i < 5; i++) {
    let randomNumber: number = Math.floor(Math.random() * 10);
        array1.push(randomNumber);
    }
    console.log(array1);

    for (let i = 0; i < array1.length; i++) {
    let cubedNumber: number = array1[i] ** 3;
        array2.push(cubedNumber);
    }
    console.log(array2);
}