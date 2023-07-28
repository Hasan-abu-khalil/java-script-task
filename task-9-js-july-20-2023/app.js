
const inputBox = document.querySelector('.add input')
const addBtn = document.querySelector('.add button')
const toDo = document.querySelector('.todo')
const search = document.querySelector('.search input')


inputBox.onkeyup = function () {
    let data = inputBox.value
    if (data.trim() != 0) {
        addBtn.classList.add("active")
    } else {
        addBtn.classList.remove('active')
    }

}
showTask()

addBtn.onclick = function () {
    let data = inputBox.value
    let getlocalStorage = localStorage.getItem('new list')
    if (getlocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getlocalStorage)
    }
    listArr.push(data)
    localStorage.setItem('new list', JSON.stringify(listArr))
    showTask()
    addBtn.classList.remove('active')

}

function showTask() {
    // let data = inputBox.value
    let getlocalStorage = localStorage.getItem('new list')
    if (getlocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getlocalStorage)
    }
    let newList = ''
    listArr.forEach((el, index) => {
        newList += ` <li>${el} <span onclick="deleteTask(${index})" ><i class="fa-solid fa-trash"></i></span> <button onclick="upDate(this.value)">update</button></li>`
    });

    toDo.innerHTML = newList
    inputBox.value = ''
}

function deleteTask(index) {
    let getlocalStorage = localStorage.getItem('new list')
    listArr = JSON.parse(getlocalStorage)
    listArr.splice(index, 1)

    localStorage.setItem('new list', JSON.stringify(listArr))
    showTask()
}



function upDate(i) {
    
    let getlocalStorage = localStorage.getItem('new list')
    listArr= JSON.parse(getlocalStorage)
    
    getlocalStorage[0]
    inputBox.value = getlocalStorage[i]
    console.log(getlocalStorage);
    
    // for (let i = 0; i < uplode.length; i++) {
    //     inputBox.value = uplode[i]

    // }

}

// search.onkeyup = function (ss) {
//     let ser = []
//     let searchValue = search.value
//     if (searchValue) {

//         ser = listArr.filter(data =>{
//             return data
//         })
//         .map(data => `<li>${data}</li>`).join('')
//     }
//     toDo.innerHTML

//     console.log(toDo);


// }










