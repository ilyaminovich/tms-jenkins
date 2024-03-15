'use strict';

//NORMAL level

/*Task 1 🖥
Выведи все элементы массива в консоль с помощью метода **`forEach`**
```
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
```
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function` */

{   
    console.log("Task 1.1: ");
    

    const fibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

    function getFibonacci(element: number) {
    console.log(element);
    }
    fibonacci.forEach(getFibonacci);
}


{
    console.log("Task 1.2: ");
    

    const fibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

    fibonacci.forEach((element: number) => {
    console.log(element);
    });
}



/*Task 2 🖥
Используя метод **`map`** создайте новый массив, на основе массива **`users`**, 
в котором каждый элемент массива будет содержать строку вида:
> ['member 1: Darya', 'member 2: Masha', ... etc]
```
    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
```
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. */

{
    console.log("Task 2.1: ");


    const users: string[] = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

    function getUsers(element: string, index: number) {
        return (`member ${index + 1}: ${element}`);
        }
    
    let users2: string[] = users.map(getUsers);
    console.log(users2);
}


{
    console.log("Task 2.2: ");


    const users: string[] = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

    const users2: string[] = users.map((element, index) => `member ${index + 1}: ${element}`);

    console.log(users2);
}




/*Task 3 🖥
С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.
```
    const numbers = [7, -4, 32, -90, 54, 32, -21]
```
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. */

{
    console.log("Task 3.1: ");

    const numbers: number[] = [7, -4, 32, -90, 54, 32, -21];

    function getPositiveNumbers(element: number) {
        return element >= 0;
    }
    
    let positiveNumbers: number[] = numbers.filter(getPositiveNumbers);
    console.log(positiveNumbers);
}


{
    console.log("Task 3.2: ");


    const numbers: number[] = [7, -4, 32, -90, 54, 32, -21];
    
    const result: number[] = numbers.filter(number => number >= 0);

    console.log(result);   
}




/*Task 4 🖥
Используя метод **`reduce`** получите сумму всех чисел массива.
```
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
```
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. */

{
    const fibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

    function sumFibonacciNumbers(numbers: number[]): number {
        return numbers.reduce(function (a, b) {
            return a + b;
        });
    }
    let total: number = sumFibonacciNumbers(fibonacci);
    console.log("Task 4.1: ", total);
}


{
    const fibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
    
    let total: number = fibonacci.reduce((a, b)  => a + b);
    console.log("Task 4.2: ", total);
}




/*Task 5 🖥
Используя метод **`find`** найдите в массиве первое четное число.
```
    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
``` */

{
    const numbers: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

    function isEven(element: number) {
        return element % 2 === 0;
      }
    console.log("Task 5: ", numbers.find(isEven));
}




/*Task 6 🖥
Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 
Реализуйте оба варианта, когда результирущее значение true или false */

{
    console.log("Task 6.1:");

    function isMultipleOf(element: number): boolean {
        return element % 3 === 0 && element % 5 === 0;
    }
    console.log([12, 5, 8, 1, 15].some(isMultipleOf));
    console.log([12, 5, 3, 1, 4].some(isMultipleOf));
}


{
    console.log("Task 6.2:");

    let array1: number[] = [2, 5, 8, 1, 15];
    let array2: number[] = [12, 5, 3, 1, 4];

    let multipleOfThreeAndFive = (numbers: number[]): boolean => {
        return numbers.some((element) => {
            return element % 3 === 0 && element % 5 === 0;
        });
    }
    console.log(multipleOfThreeAndFive(array1));
    console.log(multipleOfThreeAndFive(array2));
}




/*Task 7 🖥
Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. 
Реализуйте оба варианта, когда результирущее значение true или false */
{
    function checkEvenNumbers(numbers: number[]): boolean {
        function getSumOfDigitsSquaredNumber (number: number): number {
            let squaredNumber: number = number ** 2; // Квадрат числа
            let sumOfDigits: number = 0;
    
            //Получаем сумму цифр нового числа
            for (const digitStr of String(squaredNumber)) { 
                sumOfDigits += parseInt(digitStr, 10);
            }
                return sumOfDigits;
        }
        //Получаем новый массив и проверяем является ли его каждый элемент четным
        let numberArray: number[] = numbers.map(getSumOfDigitsSquaredNumber);
        return numberArray.every(sum => sum % 2 == 0);
    }
    let numbers: number[] = [2, 14, 123, 1234];
    console.log("Task 7.1: ", checkEvenNumbers(numbers));
}


{
    let evenNumbers = (numbers: number[]): boolean => {
        let sumOfDigitsSquaredNumber = (number: number): number => {
            let squaredNumber: number = number ** 2;
            let sumOfDigits: number = 0;
    
            for (const digitStr of String(squaredNumber)) {
                sumOfDigits += parseInt(digitStr, 10);
            }
            return sumOfDigits;
        };
    
        let numberArray: number[] = numbers.map(sumOfDigitsSquaredNumber);
        return numberArray.every(sum => sum % 2 == 0);
    };
    let numbers: number[] = [5, 15, 111, 1112];
    console.log("Task 7.2: ", evenNumbers(numbers));
}




/*Task 8 🖥
Используя коллекцию **`Map`** создайте список ингредиентов к салату с количеством необходимым для добавления в салат.
Например: Огурцы - 300, помидоры - 200, соль - 10, сметана - 110
Выведите все продукт, количество которых больше 100 гр.
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. */

{   
    console.log("Task 8.1:");

    let saladIngredients = new Map<string, number>([
        ["Огурцы", 300],
        ["Помидоры", 200],
        ["Соль", 10],
        ["Сметана", 110]
    ]);
    
    function getIngredientsOver100g(): void {
        for (let [ingredient, quantity] of saladIngredients) {
            if (quantity > 100) {
                console.log(ingredient);}
            }
        }
        getIngredientsOver100g();
}


{
    console.log("Task 8.2:");


    let saladIngredients = new Map<string, number>([
        ["Огурцы", 300],
        ["Помидоры", 200],
        ["Соль", 10],
        ["Сметана", 110]
    ]);

    saladIngredients.forEach((quantity, ingredient) => {
        if (quantity > 100) {
            console.log(ingredient);
        }
    });
}




/*Task 9 🖥
Используя коллекцию **`Set`** создайте массив неповторяющийхся значений:
```
    const numbers = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]
```
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. */

{
    const numbers: number[] = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];
    
    function getUniqueNumbers(numbers: number[]): number[] {
        return [...new Set(numbers)];
    }
    console.log("Task 9.1: ", getUniqueNumbers(numbers));
    
}


{
    const numbers: number[] = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5];

    const uniqueNumbersArrow = (numbers: number[]): number[] => {
         return [...new Set(numbers)];
    };
    console.log("Task 9.2: ", uniqueNumbersArrow(numbers));
}




/*Task 10 🖥
Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3. 
Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', 
а если нет второго - в переменную elem2 запишите значение 'bbb'. Первый элемент никуда записывать не надо.
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. */

{
    console.log("Task 10.1:");


    const fruits: string[] = ["яблоко", "груша", "слива"];

    function getFruits(array: any[]): [string, string] {
    let [_, elem2 = 'bbb', elem3 = 'eee'] = array;
        return [elem2, elem3];
    }
    const [elem2, elem3] = getFruits(fruits);

    console.log(elem2);
    console.log(elem3);
}


{
    console.log("Task 10.2:");


    const fruits: string[] = ["яблоко"];

    const resultFruits = (array: any[]): [string, string] => {
    let [_, elem2 = 'bbb', elem3 = 'eee'] = array;
        return [elem2, elem3];
    }
    const [elem2, elem3] = resultFruits(fruits);

    console.log(elem2);
    console.log(elem3);
}




/*Task 11 🖥
Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. 
Запишите соответствующие значения в переменные name, surname и age. 
Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: 
{name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.
> Реализуйте решение двумя способами, используя `function declaration` & `arrow function`. */

{
    console.log("Task 11.1:");


    const persenInfo = {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', };

    function getPersenInfoWithDefaults(person: { 
        name?: string, 
        surname?: string, 
        age?: string
     }) {
        const {name = 'Аноном', surname = 'Анонимович', age = '? лет'} = persenInfo;
            return {name, surname, age};
        }
        const result = getPersenInfoWithDefaults(persenInfo);

        console.log(result.name);
        console.log(result.surname);
        console.log(result.age);      
}


{
    console.log("Task 11.2:");


    const personInfo = {};

    const persenInfoWithDefaults = (person: { name?: string, 
        surname?: string, 
        age?: string 
    }) => {
        const { name = 'Аноном', surname = 'Анонимович', age = '? лет' } = person;
        return { name, surname, age };
    };
    
    const result = persenInfoWithDefaults(personInfo);

    console.log(result.name);
    console.log(result.surname);
    console.log(result.age);
}







console.log("ADVANCED level");

/*Task 1 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!
+ Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
+ Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
+ Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
> Примечание: для этой задачи **`y`** не считается гласной. */

{
    let string = "This website is for losers LOL!";

    function removeVowels(string: string): string {
        let vowelsRegex = /[aeiouAEIOU]/g;
        return string.replace(vowelsRegex, '');
    }
    
    let result = removeVowels(string);
    console.log("Task 1: ", result);
}




/*Task 2 👨‍🏫 Нет истории, нет теории
+ В приведенных ниже примерах показано, как написать функцию:
```
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
```
> Параметр - это строка, которая включает только буквы от a..z и A..Z. */

{
    console.log("Task 2:");


    let code: string[] = ['abcd', 'RqaEzty', 'cwAt'];

    let accum = (code: string): string => {
        return code.split('').map((element, index) => {
            return element.toUpperCase() + element.toLowerCase().repeat(index);
        }).join('-');
    };
    
    code.forEach((element) => {
        console.log(accum(element));
    });
}




/*Task 3 👨‍🏫 Нет истории, нет теории
+ В приведенных ниже примерах показано, как написать функцию:
```javascript
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
``` */

{
//=Task 2
}




/*Task 4 👨‍🏫 Самый высокий и самый низкий
+ В этом небольшом задании вам дается строка чисел, разделенных пробелами, 
и вы должны возвращать наибольшее и наименьшее число.
```
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
```
> Строка вывода должна состоять из двух чисел, разделенных одним пробелом, 
при этом наибольшее число должно быть первым. */

{
    console.log("Task 4:");


    function highAndLow(str: string): string {
    
        let numbers: number[] = str.split(' ').map(Number);
    
        let maxNumber: number = Math.max(...numbers);
        let minNumber: number = Math.min(...numbers);
    
            return `${maxNumber} ${minNumber}`;
    }
    console.log(highAndLow("1 2 3 4 5"));
    console.log(highAndLow("1 2 -3 4 5"));
    console.log(highAndLow("1 9 3 4 -5"));
}




/*Task 5 👨‍🏫 Изограммы
+ Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
``` isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case
``` */

{
    console.log("Task 5:");


    function isIsogram(str: string): boolean {
  
        let lowerCaseStr: string = str.toLowerCase();
        let uniqueChars: Set<string> = new Set();
    
        for (const char of lowerCaseStr) {
            if (uniqueChars.has(char)) {
                return false;
            }
            uniqueChars.add(char);
        }
        return true;
    }
    console.log(isIsogram("Dermatoglyphics"));
    console.log(isIsogram("aba"));
    console.log(isIsogram("moOse"));
}