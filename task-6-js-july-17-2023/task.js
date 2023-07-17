
const button = document.getElementById("button")
const tbody = document.getElementById("tbody")
const tr = tbody.value

const x = new XMLHttpRequest()
x.open("GET", "task.json")

button.onclick = function () {
    let table;
    const json = JSON.parse(x.responseText)


    for (let i = 0; i < 3; i++) {

        table += `
            <tr>
                <td>${json.names[i]}</td>
                <td>${json.age[i]}</td>
                <td>${json.major[i]}</td>
                <td>${json.unvirsity[i]}</td>
                <td><img src="${json.images[i]}" alt="" width='100px' height="100px"></td>

            </tr>
       
        `
       
    }
    tbody.innerHTML = table
}
x.send()



// let htt = new XMLHttpRequest();
// htt.open("GET", "task.json")
// button.onclick = function () {
//     let ahmad;
//     const httjs = JSON.parse(htt.responseText);
//     for (let i = 0; i < 3; i++) {
//         ahmad += ` <tr >
//    <td>${httjs.names[i]}</td>
//    <td>${httjs.Age[i]}</td>
//    <td>${httjs.major[i]} </td>
//    <td>${httjs.unvirsity[i]}</td>
//    <td>
// <img src="${httjs.images[i]}" alt="">
//    </td>
//  </tr>
//  <br>`


//     }
//     tbody.innerHTML = ahmad

// }
// htt.send();





