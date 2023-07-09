

let x = 250;
let zakat = 0.025
console.log(x*zakat );
// create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 







// Array Tasks : 
// 1
// Correct the syntax error
let array1 = [1, 7, 9, 45,]

let array2 = ["Str", "alex", "moh"]

let array3 = ['the', 'fox', 'over', 'lazy', 'dog',]
console.log(array1);
console.log(array2);
console.log(array3);






// 2
// What the index of "Banana","Tomato"
var fruits = ["Tomato", "Banana", "Watermelon"]
console.log(fruits.indexOf('Banana'));
console.log(fruits.indexOf('Tomato'));






// 3
// Create an array represents your:
// 1- Favorite Food (2)
// 2- Favorite Sport (3)
// 3- Favorite Movie (2)

let food = ['Pizza', 'fries']
let sport = ['football', 'tennis', 'basketball']
let movis = ['Avatar', ' Fast and Furious',]
console.log(food);
console.log(sport);
console.log(movis);


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let num = [1,2,3]
let types = ['t','u','g','x',]

console.log(num [0]);
console.log(types[0]);



/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let num2 = [1,2,3]
let types2 = ['t','u','g','x',]
console.log(num2 [2]);
console.log(types2 [3]);


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.push(10)
array.shift()
array.shift()
array.shift()
array.unshift(8)
array.unshift(6)
array.unshift(4)
array.unshift(3)
array.unshift(1)
console.log(array)





/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var arrayy2 = []
arrayy2.unshift(5)
arrayy2.unshift(3)
arrayy2.unshift(-7)
arrayy2.unshift(9)
arrayy2.unshift(5)
console.log(arrayy2);


/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
// console.log(arr1.sort());
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort((a, b) => a - b);

console.log(arr1);


