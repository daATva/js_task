/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

cars = [
    {
    carBrand:'Mercedes' ,
    price: '2 000 000' , 
    isAvailableForSale: true,
    } ,
    {
    carBrand:'BMW' ,
    price: '3 000 000' , 
    isAvailableForSale: false,
    } ,
    {
    carBrand:'Audi' ,
    price: '1 500 000' , 
    isAvailableForSale: true,
    } ,
]

cars.class = "E"

const newCar = {
    carBrand:'Honda' ,
    price: '1 000 000' , 
    isAvailableForSale: true,
}

cars.unshift(newCar)

console.log(cars)