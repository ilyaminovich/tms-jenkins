'use strict';

//NORMAL level


//Task 1 💻
/*Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. */

//option 1
{
    //Создание объекта
    let user = {
        name: 'John',
        age: 25
      };

console.log(user); //{ name: 'John', age: 25 }

//Удаление ключей через деструктуризацию
let {name, age, ...newUser} = user;

console.log(newUser); //{}
}


//option 2
{
    interface User {
    name?: string; //необязательное свойство
    age?: number; //необязательное свойство
  }
  let obj: User = {
    name: 'John',
    age: 25
  };
 console.log(obj); //{ name: 'John', age: 25 }

    delete obj.name;
    delete obj.age;

console.log(obj); //{}
}




//Task 2 🖥
/*Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ 
и если есть вывести в консоль **true** */
{
 let user = {
        name: 'John',
        age: 25
      };

      console.log("name" in user ) //true
}




//Task 3 🖥
/*Дан обьект:
```javascript
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }```
C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта. */
{
    const student = {
        name: 'John',
        age: 19,
        isHappy: true
    }
    for (let studentKey in student ) {
        console.log(studentKey);
    }
    let studentKey: keyof typeof student;
    for (studentKey in student) {
        console.log(student[studentKey]);
}
}




//Task 4 🖥
/*Дан обьект:
```javascript
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};```
Вывести в консоль слово красный и синий */
{
    const colors = {
        'ru pum pu ru rum': {
            red: 'красный',
            green: 'зеленый',
            blue: 'синий'
        },
    };
    console.log(colors['ru pum pu ru rum'].red);
    console.log(colors['ru pum pu ru rum'].blue);
}




//Task 5 🖥
/* Дан обьект:
```javascript
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey: 664,
        alexandra: 199
    } ```
Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную */
{
    let salaries = {
        andrey: 500,
        sveta: 413,
        anton: 987,
        andrey2: 664,
        alexandra: 199
    };

    let totalSalary = 0;
    let employeeCount = 0;
    
    let employee: keyof typeof salaries
    for (employee in salaries) {
        totalSalary += salaries[employee];
        employeeCount++;
        }    

    let averageSalary = totalSalary / employeeCount;
    
    console.log(averageSalary);
}



//Task 6 🖥
/*
Создать валидатор, 2 метода: валидатор и логин. 
Первый метод принимают у пользователя логин и пароль для регистрации. 
Затем данные записать в обьект. 
Второй метод принимает данные пользователя и объект зарегестрированного пользователя. 
Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**.   */
{
    function getUserRegistrationCredentials(login: string, password: string): any {
        return {
            login,
            password
        };
      }
      let user_1 = getUserRegistrationCredentials("John", '123');

    function checkUserCredentials(login: string, password: string, user: { login: string, password: string }): void{
        if (login === user.login && password === user.password) {
        console.log('Добро пожалоВать');
        };
      }
      checkUserCredentials("John", '123', user_1);
}





//ADVANCED level


//Task 1 👨‍🏫
/* Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. 
Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.  */
{
    function getFormatFootballScore(footballScore: string): void {
        const goals = footballScore.split(':').map(Number);
        const team1 = convertToWord(goals[0]);
        const team2 = convertToWord(goals[1]);
        console.log(`${team1} - ${team2}`);
    }
        function convertToWord(goals: number): string {
        const words = ['Ноль', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
        return words[goals];
    }
        getFormatFootballScore('2:5');
}




//Task 2 🖥
/*
Даны два одинаковых обьекта. Сравните их так чтобы они были равны
```javascript
    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
```*/
{
    let student1: { name: string; age: number } = {
        name: 'Polina',
        age: 27,
    };
    
    let student2: { name: string; age: number } = {
        name: 'Polina',
        age: 27,
    };
    
    let areEqual = true;
    
    const list_keys1 = Object.keys(student1);
    const List_keys2 = Object.keys(student2);
    
    if (list_keys1.length === List_keys2.length) {
        for (const key of list_keys1) {
            if (student1[key as keyof typeof student1] !== student2[key as keyof typeof student2]) {
                areEqual = false;
                break;
            }
        }
    } else {
        areEqual = false;
    }
    
    if (areEqual) {
        console.log('Объекты равны');
    } else {
        console.log('Объекты не равны');
    }
}



//Task 3 🖥
/*
Дан объект cat. Склонируйте его 2 способами, и подтвердите, 
что при изменении поля в 1ом объекте, это же поле не меняется во втором объекте. 
Объекты должны быть описаны с помощью типа или интерфейса
```javascript
const cat = {
      name: 'Енчик',
      age: 3,
   }
```  */
{
    type IСat = {
        name: string,
        age: number
    };
    
    const cat: IСat = {
        name: 'Енчик',
        age: 3,
     }

     let clone = { ...cat};
     clone.name = "Фантик";

    console.log(cat.name); // все ещё Енчик в первоначальном объекте
    console.log(clone.name); // Фантик

}