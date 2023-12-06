/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const peopleGuy = {
    name:'Сергей' ,
    surname:'Барбарисов' , 
    favoriteNumber:13
}

const arrowFunc = () =>{
    console.log(`My name is  + ${peopleGuy.name} ${peopleGuy.surname} + and my favorite number is  ${peopleGuy.favoriteNumber}`)
}

arrowFunc()