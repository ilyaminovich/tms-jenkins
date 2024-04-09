///Module

/*Task 1 💻
Создайте класс родитель Car и два класса дочерних (любые 2 марки машины), разнесенных по разным модулям. 
Реализуйте несколько методов для этих классов. 
В методах, где принимаются какието параметры, сделайте проверку через условный оператор, 
который в случае неудачи будет выбрасывать исключение. Вызов модулей реализуйте через import, export
*/

import {BMW} from './bmw';
import {RollsRoyce} from './rollsRoyce';

let bmwCar = new BMW("BMW 600", "T234", "350 km/h", "$1000000");
let rollsRoyceCar = new RollsRoyce("RollsRoyce 1.2", "T4", "200 km/h", "$1000001");

console.log(bmwCar.getCharacteristicsCar());
console.log(rollsRoyceCar.getCharacteristicsCar());

try {
    bmwCar.turnOnLights(true);
} catch (error: any) {
    console.error(error.message);
}

try {
    rollsRoyceCar.playRadio("FM 98.5");
} catch (error: any) {
    console.error(error.message);
}
