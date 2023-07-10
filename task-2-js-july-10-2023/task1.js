/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

let num1 = 100
let num2 = 99
let num3 = num1 + num2
console.log(num3);


/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

let num4 = 3
let num5 = -7
let num6 = 2

let num7 = ((3 * -7) * 2)
console.log(num7);


/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let arr = [0, -1, 4]
arr.sort((a, b) => (a - b))
arr.reverse()
console.log(arr);
/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

let a = -5;
let b = -2;
let c = -6;
let d = 0;
let f = -1;
if (a > b && a > c && a > d && a > f) {
    console.log(a);
}
else if (b > a && b > c && b > d && b > f) {
    console.log(b);
}
else if (c > a && c > b && c > d && c > f) {
    console.log(c);
}
else if (d > a && d > c && d > b && d > f) {
    console.log(d);
}
else {
    console.log(f);
}
/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

let x = 50
let y = 10
if (x > y) {
    alert('Hello word')
} else {
    alert('goodbye')

}

/******* End Your Code ********* */



