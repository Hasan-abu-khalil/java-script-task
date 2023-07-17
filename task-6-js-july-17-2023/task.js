
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






