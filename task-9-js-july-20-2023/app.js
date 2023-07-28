
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
        
        newList += ` <li>${el} <span onclick="deleteTask(${index})" ><i class="fa-solid fa-trash"></i></span> <button onclick="editTask(${index})">Edit</button></li>`
            
        
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



function editTask(index) {
    let getlocalStorage = localStorage.getItem('new list')
    listArr = JSON.parse(getlocalStorage)
    let editedTask = prompt("Edit task:", listArr[index])
    if (editedTask !== null && editedTask.trim() !== '') {
        listArr[index] = editedTask
        localStorage.setItem('new list', JSON.stringify(listArr))
        showTask()
    }
}











