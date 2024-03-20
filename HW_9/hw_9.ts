'use strict';

/*Task 1 💻
Создайте класс Animal, в конструктор которого передается имя, 
и с помощью метода данного класса можно вывести фразу `This is a <animalType>. It's name is <name>`. 
Так же данный класс должен иметь статическое поле animalType, 
значение которого должно подставляться в фразу, которую выводит метод выше.*/

{
    class Animal {

        static animalType: string = "tiger";
        
        name: string;
               
        constructor(name: string) {
            this.name = name;
        }
        showAnimal() {
            return `This is a ${Animal.animalType}. It's name is ${this.name}`;
        }
    }
    const animal = new Animal("Indie").showAnimal();
    
    console.log(animal);
}