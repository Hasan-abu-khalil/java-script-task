// console.log('Here is : ', 'Reduce & Filter')

//Using Reduce 1 -5
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
        Using the varabile persons
        Create a function called avgAge
        that accept an array
        and return average age of this array

Ex: avgAge(persons) => 41.2
*/
console.log('____________');

const avgAge = persons.reduce(function (age1, age2) {
    return age1 + age2.age / 5;
}, 0)
console.log(avgAge);




/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
console.log('____________');

const names = persons.reduce(function (acc, curr) {
    const fullName = (`${curr.name.first} ${curr.name.last}`);
    acc.push(fullName);
    return acc;
}, []);

const longestName = names.reduce(function (long, sort) {
    if (sort.length > long.length) {
    }
    return sort;
}, '');

console.log(longestName);
/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
console.log('____________');

number = [1, 2, 4, 9]

function maxNumber(arr) {
    let max = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }

    }
    return max
}
console.log(maxNumber(number));

/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
console.log('____________');

function repeatChar(char, str) {
    let count = []
    for (let i = 0; i < char.length; i++) {
        if (char[i] == str) {
            count++
        }
    }
    return count
}

console.log(repeatChar('hello world wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', 'w'));

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
console.log('____________');

function usAndNumberBeetweenUs(num1, num2) {

    if (num1 > num2) {
        num1 = num2
    }
    const between = []
    for (let i = num1; i <= num2; i++) {
        between.push(i)

    }
    return between
}
console.log(usAndNumberBeetweenUs(2, 5));







//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
console.log('____________');

number = [1, 8, 6, 4]

function evenOnly(even) {
    const evenNum = even.filter(function (num) {
        return num % 2 === 0;
    })

    return evenNum
}
console.log(evenOnly(number));

/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
console.log('____________');

multi = [1, 8, 6, 4]
function multiFour(mf) {
    const mfNum = mf.filter(function (num) {
        return num % 4 === 0;
    })

    return mfNum
}

console.log(multiFour(multi));

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
console.log('____________');

const array = ["hello", 'world'];
function containChar(arr, char) {

    const string = arr.filter(function (str) {
        return str.includes(char);
    });
    return string;
}
console.log(containChar(array, 'w'));
console.log(containChar(array, 'l'));




/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]

// function evenIndexOddLength(str) {

//     const result = str.filter(function (string, index) {
//         return
//     })
//     return result
// }
// console.log(evenIndexOddLength());
/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
console.log("__________________");

function olderThan(old, age) {

    const older = old.filter(function (person) {
        return person.age > age;
    });
    return older
}

console.log(olderThan(persons, 56));
/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number
// return index % 2 === 0 && string.length;
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
console.log("__________________");

var stringss = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]

function shorterThan(short, then) {

    const shorts = short.filter(function (str) {
        return str.length > then;
    });
    return shorts
}

console.log(shorterThan(stringss,5));


// if you finish the exercises review the material of the week and help your classmate
