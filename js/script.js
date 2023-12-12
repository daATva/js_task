// for ( let num = 1; num <=5; num++ ){
//     console.log(num);
// }

// let num = 8;
// while (num) {
//     console.log(num);
//     num--;
// }

// for (let num = 0; num < 3; num++){
//     console.log(`Число: ${num}`);
// }

// let num = 0;
// while (num<3){
//     console.log(`Число: ${num}`);
//     num++;
// }

// first:for (let num = 0; num < 2; num++) {
//     for(let size = 0; size <3; size++) {
//         if (size ==1) {
//             break first;
//         }
//     console.log(size);
//     }
// }

// firstFor: for (let num = 0; num < 2; num++) {
//     for (let size = 0; size < 3; size++) {
//         if (size == 1) {
//             break firstFor;
//         }
//         console.log(size);
//     }
// }

// function min(a , b) {
//   if (a < b) {
//         return(a)
//     }
//     else{
//         return b;
//   }
// }
// console.log(min(100,5));

// function minus(a,b) {
//     return a < b ? a : b;
// }

// console.log(minus(100,5));

// function pow(a,b) {
//     let result = a;
//     for (let  i=1; i < b; i++){
//         result *= a;
//     }
//     return result;
// }


// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   } else {
//     alert( pow(x, n) );
//   }


// const userInfo = {
//     name: "Вася",
//     age: 30,
// }

// let userInfo = {
//     name: "Вася",
//     age: 30,
//     "58":"Значение свойства"
// }

// console.log(userInfo[58]);

// userInfo = {
//     name:"Вася",
//     age: 30, 
// }
// console.log(userInfo);

// userInfo.name = "Лена";
// console.log(userInfo.name);
// alert(userInfo.name)

//_________КОНКАТЕНАЦИЯ___________//

// const firstName = "Федя"
// let lastName = prompt('Введите вашу фамлиию')
// alert(firstName + " " + lastName) 


// let question = prompt('Какое "официальное" название JavaScript?')
// if (question = "ECMAScript"){
//     alert('А ТЫ ХОРОООШ , МУЖИК , ХОРООООШ')
// }else{
//     alert('Не знаете? “ECMAScript”!')
// }

// let value = prompt('Введите ваше любимое число !')
// if (value > 0 ){
//     alert(1)
// }else if(value < 0 ){
//     alert(-1)
// }else {
//     value == 0
//     alert(0)
// }
  


// ТЕРНАРНЫЙ ЗНАК 

// let result = (a + b < 4) ? 'Мало' : 'Много'

// let login = prompt('Введите вашу должность ')

// message = (login == "Сотрудник") ? 'Привет' : 
//     (login == 'Директор') ? "Здравствуйте" :
//     (login == "") ? 'Нет логина!' : 'Я тебя не знаю';
// alert(message)

// ================================ФУНКЦИ=============================
// function checkAge(age) {
//     (age > 18) ? 'true' : 'return confirm("Родители разрешили?")'
// } 1 29 time
// let age = prompt('Input your age')

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
// alert(checkAge(age))


//  let a = prompt('input x')
//  let b = prompt('input n')

// function min(a,b) {
//     return(a < b) ? a : b;
// }

// alert(min(a,b))

// function pow(x,n) {
//     return(x * n) ? a : b;
// }

// alert(min(a,b))


// let age = prompt('input your age: ')

// if (age>=14 && age <=90){
//   alert(age)
// }else{
//   alert("Отстань")
// } 2 01 01

// let login = prompt('Кто там')

// if (login === "Админ"){
//     let password = prompt('Пароль?');

//     if(password === 'Я главный'){
//       alert('Здравствуйте!')
//     }else if (password ==='' || password === null) { 
//       alert('Отменено');
//     }else{
//       alert('Невереный пароль')
//     }
// } else if (login === '' || login === null){
//   alert('Отменено')
// }else{
//   alert('Я вас не знаю')
// }

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// let browser = prompt('input your browser: ')

// if(browser === 'Edge'){
//   alert( "You've got the Edge!" );
// } else if (browser === 'Chrome' 
//   || browser === 'Firefox' 
//   || browser === 'Safari' 
//   || browser === 'Opera'){
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number){
//   case 0:
//     alert('Вы ввели число 0');
//     break;
//   case 1:
//     alert('Вы ввели число 0');
//     break;

//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;  

// }

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
 
// =================================Домашнее Задание 17==============================//

// var carYear = "1980"

// var personYear = "2002"

// function calculateAge(year) {
//   var currentYear = 2008
//   var result = currentYear - year
//   return result
// }

// function checkAngLogAge(year , name , number) {
//   if (calculateAge(year) < number )  {
//     console.log('Возвраст ' + name +  ' меньше ' + number + ' лет')
//   } else {
//     console.log('Возвраст ' + name + ' больше ' + number + ' лет')
//   }
// }

// checkAngLogAge(carYear, 'машины' , 20)
// checkAngLogAge(personYear, 'человека' , 7)

// =================================Домашнее Задание 17==============================//

// function checkAge(age) {
//   return (age > 18)? true : confirm('Родители разрешили?')    
// }

// function min(a,b){
//   if(a < b){
//     console.log(a)
//   } else{
//     console.log(b)
//   }
// }
// min(3,1)


// ==================================СТЕПЕНЬ+++++++++++++++++++= \\

// function pow(a,b){
//   let res = a
//   for(let i = 1 ; i < b; i++){
//     res *= a
//   }
//   return res
// }

// let a = prompt("a?", '');
// let b = prompt("b?", '');

// if (a < 1) {
//   alert(`Степень ${a} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(a, b) );
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

//============================= Вывести простые числа ========================//

// let n = 20;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   console.log( i ); // простое число
// }

//============================= Вывести простые числа ========================//

//============================== Чётные числа =================================

// let n = 10 
// primes:
// for ( let i = 2 ;i <= n ; i++){
//     if(i % 2 == 0 ) continue primes;
//   console.log(`Чётное число: ${i}`)
// }


//   let value = prompt('Введите число больше 100' , '')
//   if (value <= 100){
//      resTart()
//   } else{
//   }

// function resTart(value){
//   value = prompt('Введите число больше 100')

// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// let a = prompt('Введите a')
// let b = prompt('Введите b')
// if (a < b ){
//   alert(b)
// }
// else if (a > b){
//  alert(a)
// }
// else{
//   alert("Вы ввели одинаковые числа")
// }

// for(let i = 0 ; i <= 15; i++){
//     if(i % 2 == 0){
//       console.log(i + '- Чётное число')
//     }
//     else {
//       console.log(i + '- Нечётное число')
//     }
// }

// for (let i = 1; i<=100;i++){
//     if(i % 3 == 0){
//       console.log(i + ' -wm')
//     }
//     else if(i % 5 == 0){
//       console.log(i + ' school')
//     }
//     else if (i % 5 == 0 && i % 3 == 0){
//       console.log(i + ' wm-school')
//     }
//     else{
//       console.log(i)
//     }
// }




// let a = +prompt('Введите число')
// let b = +prompt('Введите степень ')
// function pow(a,b){
//   let res = a
//   for (i = 1; i < b; i++){
//     res *= a 
//   }
//   return res
// }

// if (b < 1 ){
//   alert(`Вы ввели  ${b} введите натуральное значение `)
// }
// else{
//   alert(pow(a,b))
// }


// 22.09.22


// let ask = (question, yes, no) =>(confirm(question) ? yes(): no());

// ask (
//   "Вы согласны?",
//   () =>  alert("Вы согласились."),
//   () =>  alert("Вы отменили выполнение.")
// );


// let checkAge = (age) =>((age > 18) ? true : confirm('Родители разрешили?'))

// let a = prompt ('Введите ваш возврасть ')

// alert (checkAge(a))


// function diff(a, b) {
//    return a - b
//  }

// const res = diff(10,30)
// console.log(res)


// ========================== Сздание копии объекта ======================
// const personOne = {
//   name:'Bob',
//   age:21
// }

// function increasePersonAge(person){
//   const updatedPerson = Object.assign({}, person) //Создание нового объекта 
//   updatedPerson.age += 1
//   return updatedPerson 
// }

// const updatedPersonOne = increasePersonAge(personOne)
// console.log(personOne.age)
// console.log(updatedPersonOne.age)

// setTimeout(()=>console.log('Hello, world!'), 2000)

// const peopleGuy = {
//   name:'Сергей' ,
//   surname:'Барбарисов' , 
//   favoriteNumber:13
// }

// const arrowFunc = () =>{
//   console.log(`My name is ${peopleGuy.name} ${peopleGuy.surname} and my favorite number is  ${peopleGuy.favoriteNumber}`)
// }

// arrowFunc()

// const stringTable = "wooden"

// const stringeTable = "WOODEN"

// console.log(typeof stringeTable)

// const b = typeof stringTable != String

// if (typeof stringTable === "string"){
//     console.log('Yea')
// }
// else{
//     console.log('Yeas')
// }



// let winter = prompt ('Введите время суток ')

// const out = `Today good ${winter}`

// if (winter === "Morning"){
//     alert(out)
// } else if (winter === "Evening"){
//     alert (out)
// } else {
//     alert("Вы ошиблись или ввели что - то непонятное :-)")
// }

// const newPost = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// })

// const firstPost = {
//   id:1,
//   author: 'Bogdan',
// }

// console.log(newPost(firstPost)

// const todayDate = new Date(2022, 0, 1, 2, 3, 4, 567)

// alert(todayDate)

// let myVariable1 = 10
// let myVariable2 = '5'


// if(myVariable1 <= myVariable2){
//     console.log('true')
// }else{
//   console.log('BEbbr')
// }
// Напишите код здесь


// let myVariable3 = '20'
// let myVariable4 = 100

// parseInt(myVariable3)

// if(myVariable3 <= myVariable4){
//     console.log('true')
// }


// const myArray = [1 , true , 'billy']

// for ( let i = 0 ;i <= myArray.length  ; i++  ){
//   console.log(i)
// }

// let i = 1

// const messageIntervalId = setInterval(() => {
//   console.log('Сообщение номер ' + i)
//   i = i + 1
// }, 2000)
// ====================================================================15.10.22====================================

// setTimeout(() => clearInterval(messageIntervalId), 11000)

// let styles = ['Джаз' , 'Блюз']

// styles.push('Рок-н-ролл')

// console.log(styles)

// styles[Math.floor((styles.length - 1) / 2)] = 'Классика'

// console.log(styles)

// console.log(styles.shift())

// styles.unshift('Рэп' , 'Регги')

// console.log(styles)

// function sumInput(){
//   let numbers = [];

//   while (true){

//      let value = prompt("Введите число", 0);
  
//       // Прекращаем ввод?
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value);
//   }

  
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput());

// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.forEach(el => console.log(el *2))

// console.log(myArray)

// const myArray = [1, 2, 3]
// console.log(myArray)

// const newArray = myArray.map((el) => {
//   return el * 3 
// })

// console.log(newArray)
// console.log(myArray)


// myArray = [1 , 2 , 3 , 'bebra']

// console.log(myArray)

// myArray.push('last'  , 'bich' )

// console.log(myArray)

// console.log(myArray.length)

// function getMaxSubSum(arr) {
//     let maxSum = 0
//     let partialSum = 0

//     for (let item of arr) {
//         partialSum += item
//         maxSum = Math.max(maxSum , partialSum)
//         if (partialSum < 0 ) partialSum = 0
//     }
//     return maxSum
// }

// alert( getMaxSubSum([-1, -2, -3]))
// alert( getMaxSubSum([100, -9, 2, -3, 5]) )
// ====================================================================16.10.22====================================
// function getMaxSubSum(arr) {
//     let maxSum = 0
//     for (let i = 0; i <arr.length; i++){
//         let sumFixedStart = 0
//         for (let j = i; j< arr.length; j++){
//             sumFixedStart += arr[j]
//             maxSum = Math.max(maxSum, sumFixedStart)
//         }
//     }
//     return maxSum
// }

// function maxSum(arr){
//     let sum = 0 
//     for (i = 0; i < arr.length; i++  ){
//         sumFixed = 0
//         for (j = i; j <  arr.length;j++ ){
//             sumFixed += arr[j]
//             sum = Math.max(sum , sumFixed)
//         }
//     }
//     return sum
// }
// alert( maxSum([-1, -2, -3]))
//  alert( maxSum([100, -9, 2, -3, 5]) )

// for(i = 2; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// let i = 0
// while(i<3){
//     alert(`number ${i}!`)
//     i++ 
// }

// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);


// let n = 10

// nextPrime:
// for(i = 2; i <= n ; i++){
//     for(let j =2; j<i;j++){
//         if(i % j == 0 )continue nextPrime
//     }
//     console.log(i)
// }

// function findPow(x,n){
//     let result = x
//     for(i = 1;i < n;i++){
//         result *=x 
//     }
//     return result
// }

// let x = prompt(`Введите x ` , '')
// let n = prompt(`Введите n ` , '')

// if (n < 1){
//     alert(`Число ${n} неподдерживается , введите натуральное число!`)
// } else{
//     alert(findPow(x , n))
// }
// ====================================================================27.10.22====================================

// cars = [
//     {
//     carBrand:'Mercedes' ,
//     price: '2 000 000' , 
//     isAvailableForSale: true,
//     } ,
//     {
//     carBrand:'BMW' ,
//     price: '3 000 000' , 
//     isAvailableForSale: false,
//     } ,
//     {
//     carBrand:'Audi' ,
//     price: '1 500 000' , 
//     isAvailableForSale: true,
//     } ,
// ]


// const newCar = {
//     carBrand:'Honda' ,
//     price: '1 000 000' , 
//     isAvailableForSale: true,
// }

// cars.unshift(newCar)

// console.log(cars)

// const myObject = {
//     key1: true,
//     key5: 10,
//     key3: 'abc',
//     key4: null,
//     key10: NaN,
//   }
  
//   const objectKeys = Object.keys(myObject)
  
//   objectKeys.forEach((key) => {
//     if (key === 'key1' || key === 'key3') {
//       console.log(myObject[key])
//     }
//   })

// let message = 'яха';
// console.log(message)
// console.log(message / 1)
// console.log(1 / 0)

// let test = prompt("Test");

// console.log(test)
// test = Number(test)

// let sum = test + 11

// console.log(sum)

// let question = prompt("Как тебя зовут  ? Козёл " , "")
// alert(`${question} лох ты`)

// result = confirm(question)
// console.log(result)

// let a = +prompt("Введите число" , 1)
// let b = +prompt("Введите число" , 2)

// alert ( a + b)

// let qes = prompt("Какое «официальное» название JavaScript?")

// if (qes == 'ECMAScript'){
//     alert("Верно!")
// } else{
//     alert("Не знаете? ECMAScript")

// }

// let qes = +prompt("Введите число" , 0)

// if (qes > 0){
//     alert("1")
// }
// else if (qes < 0){
//     alert("-1")
// } else{
//     alert("0")
// }

// const who = prompt("Кто там ? " , "")

// if (who == 'Админ'){
//     const pas = prompt('Введите пароль', "")
//     if(pas =="Я главный"){
//         alert('Здравствуйте!')
//     }else if (pas === "" || pas === null) {
//         alert('Отмена')
//     }else {
//         alert('Вы ввели неверный пароль')
//     }
        
// } else if (who == ""  || who === null  ){
//     alert('Отменено')
// } else {
//     alert('Я вас не знаю')
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
// let i = 0

// while(i<3){
//     alert( `number ${i}!` )
//     i++;
// }

// for (let i = 2; i <= 10 ;i++ ){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }
// let number
// do{
//     number = +prompt("Ввести число, большее 100" , "0")
// }

// while (number <= 100 && number){

// }

// let n
// n = +prompt("Введите число ", 0)
// if(n > 0){
//     for(i = 2; i <=n;i++){
//         if(ii % j == 0){
//             console.log(i)
//         }
//     }
// } 

// let m = +prompt("Введите число m");
// let n = +prompt("Введите число n");
// if (m <= n && m > 0 && n > 0){
//     skipDip:
//     for (let i = m; i <= n; i++) {
//       for (let j = 2; j <i; j++) {
//         if (i % j == 0) continue skipDip;
//       }
//       console.log(i);
//     }
// } else {
//     alert("m и n должны являтся положительными целыми числами и m меньше или равно n")
// }


// const number = +prompt('Введите число между 0 и 3', '');

// switch(number){
//   case 0:
//     alert('Вы ввели число 0 или отменили операциюЫ');
//     break;
//   case 1:
//     alert('Вы ввели число 1');
//     break;
//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }
// const age = +prompt('Введите число между 0 и 3', '');

// function checkAge(age) {
//   switch (true) {
//     case age > 18:
//       alert('Вы ввели число больше 18');
//       break;
//     default:
//       return confirm('Родители разрешили?');
//   }
// }

// const a = +prompt('Введите a', '');
// const b = +prompt('Введите b', '');

// function min(a,b){
//   if(a<b){
//     return(a)
//   }else{
//     return(b)
//   }
// }
// alert(min(a,b))

// const x = +prompt('Введите a', '');
// const n = +prompt('Введите степень числа а', '');

// function pow(x,n){
//   let res = x
//   for(let i = 1;i<n;i++){
//     res *= n
//   }
//   return res
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');


// let x = +prompt('Введите число x', '')
// let n = +prompt('Введите степень числа x', '')

// function sPow(x,n){
//   let result = x
//   for(i = 1;i<n;i++){
//     result *=x
//   }
//   return result
// }

// alert(sPow(x,n))
 

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );


// let ask = (question, yes,no)=>{
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () =>  alert("Вы отменили выполнение.")
// );

// function camelize(str) {
//   let first = str.split('-');
//   first = first.map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1));
//   console.log(first)
//   console.log(first.join(''));
// }

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//   let filt = []
//   let num = arr.map((count) => count <=b && count >=a ? filt.push(count) : count )
//   return filt
//   console.log(num)
//   console.log(filt)
// }

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // удалить, если за пределами интервала
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8];

// arr.sort()
// arr.reverse()

// alert( arr ); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// function copySorted(arr){
//   let sort = [...arr]
//   sort.sort()
//   return sort
// }


// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// /////CALL BACK//////CALL BACK////////CALL BACK////////////CALL BACK/////////

// function sumArray(callback){
//   const arr = [5 , 1 ,3]
//   let sum = 0
//   callback(arr , sum)
// }

// function check(sum , arr){
//     sum =  arr.forEach(elem => sum += elem)
//     console.log(sum)
// }

// sumArray(check)

// function printSum(sum) {
//     sum = 0 
//     for(let key of numbers){
//         sum += key
//     }
//     console.log("Сумма массива:", sum);
// }
  
// const numbers = [1 , 3 ,4 ,5 , 23]

// function calculateSum(numbers, printSum){
//     console.log(numbers)
//     printSum()
// }

// calculateSum(numbers, printSum);


// function aclean(arr) {
//     let map = new Map();
  
//     for (let word of arr) {
//       // разбиваем слово на буквы, сортируем и объединяем снова в строку
//       let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//       map.set(sorted, word);
//     }
  
//     return Array.from(map.values());
//   }
  
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
//   alert( aclean(arr) );

  // let map = new Map();

  // map.set("name", "John");
  
  // let keys = Array.from(map.keys());
  
  // keys.push("more");
  
  // alert(keys); // name, more

// function sumSalaries(salaries){
//   let summer = 0 

//   for(let sum of Object.values(salaries)){
//    summer += sum
//   }
//   return summer
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2

// function count(){
//   return Object.values(user).length
// }

// function validateUsr(username) {
//   return username.length >= 4 && username.length <= 16 && (typeof username === 'string' || username.includes('_')) 
//   && username === username.toLowerCase();
// }

// function validateUsr(username) {
//   const regex = /^[a-z0-9_]{4,16}$/;
//   return regex.test(username);
// }
  

// const string = 'Hi! Hi!! Hi!'

// const splitter = (string.split(''))

// let count = 0

// splitter.forEach(element => {
//   element == '!' ? count++ : element 
// });

// const finalCount = '!'.repeat(count)

// const newArr = splitter.filter(item => item !== '!')

// return newArr.join('') + finalCount


// function isLeapYear(year) {
//   return (1600 <= year && year <= 4000) && (year % 4 == 0 && year % 100 != 0) || year % 400 == 0  ? true : false  
// }

// console.log(isLeapYear(2021))



// function removeSmallest(numbers) {
//   const min = numbers.filter(num => Math.min(num))
//   return min
// }

// removeSmallest([1,2,3,4,5])

// const numbers = [12 , 2 , 1 , 4 , 5]



// const check =  numbers.indexOf(Math.min(...numbers))
// numbers.splice(check,1)
// newArray
// return numbers
// console.log(del)
// console.log(numbers)

// function removeSmallest(numbers) {
//   const min = Math.min(...numbers);
//   const newArray = [...numbers];
//   const index = newArray.indexOf(min);
//   newArray.splice(index, 1);
//   return newArray;
// }



// function reduce(fraction) {
//   let a = fraction[0];
//   let b = fraction[1];

//   while (b !== 0) {
//     let remainder = a % b;
//     a = b;
//     b = remainder;
//   }

//   return fraction.map(elem => (elem / a))

// }

// const fraction = [45, 120];
// console.log(reduce(fraction)); // Выведет 15

// function nthFloyd(n){
//   row = 0
//   count = 0
//   while count < n:
//       row += 1
//       count += row
//   return row
// }

// function solution(number){
//   if(number < 0 ){
//     return 0
//   } else{
//     let sum = 0;
//     for(let i = 0; i< number ; i++){
//      if (i % 3 == 0 || i % 5 == 0){
//      sum+=i
//      } 
//      }
//      return sum  
//   }

//  } 


// console.log(solution(100))

// Счастливый билет

// function isHappyTicket(ticket) {
//   let del = ticket.split('');
//   let length = del.length;
//   let mid = Math.floor(length / 2);
//   let sumLeft = 0;
//   let sumRight = 0;

//   if (length % 2 !== 0) {
//     return false;
//   } else {
//     for (let i = 0; i < length; i++) {
//       let el = parseInt(del[i]);
//       if (i < mid) {
//         sumLeft += el;
//       } else {
//         sumRight += el;
//       }
//     }
//     return sumLeft === sumRight;
//   }
// }

// console.log(isHappyTicket('385916')) 

// Инвертированный регистр

// function invertCase(str){
//   const splitter = str.split('')

//   const newArray = splitter.map(element => {
//     return element === element.toLowerCase() ? element.toUpperCase() : element.toLowerCase()
//   });

//   const res = newArray.join('')

//   console.log(res)

// }

// invertCase('Hello, World!')
// invertCase('I loVe JS')

// 12 12 23 ////


// function closeCompare(a, b, margin = 0) {
//   if (Math.abs(a - b) <= margin) {
//     return 0
//   } else if (a < b) {
//     return -1
//   } else {
//     return 1
//   }
// }

// console.log(closeCompare(3,5 , 0))

// function isPerfect(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//       if(sum != num){
//         sum += i;
//       }
//   }
//   if(num == sum){
//     return true
//   }else{
//     return false
//   }
// }

// console.log(isPerfect(6))

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// let cuser = JSON.parse(JSON.stringify(user))

// console.log(cuser)

function sumTo(n){
  let sum = 0
  for(let i = 0; i <= n; i++){
    sum += i
  }
  console.log(sum)
}

sumTo(100)

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

sumTo(1)

function factorial(n){
  if(n == 1 ) return 1
  return n * factorial(n-1)
}

console.log(factorial(1))