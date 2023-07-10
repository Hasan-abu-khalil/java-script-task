/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

let avg = prompt('what is your rate ?')

if (avg >= 90) {
    alert('a')
} else if (avg >= 80) {
    alert('b')
}
else if (avg >= 70) {
    alert('c')
}
else if (avg >= 60) {
    alert('d')
}
else if (avg >= 50) {
    alert('e')
}
else {
    alert('fail')
}

