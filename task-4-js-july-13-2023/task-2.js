const mousover = document.getElementById('mousover')
mousover.style = `
 background: yellow;
    font-size: 20px;
    width:300px;
    height:50px;
`

function over() {
    mousover.textContent = 'Hello Word'
}

function out() {
    mousover.textContent = 'can i hellp you ?'
}



const img = document.getElementById('img')
const select = document.getElementById('flag-name')
const imgList = ["img/Flag_of_Jordan.svg.png", "img/download (2).png"]


select.addEventListener('change', (event) => {
    const value = select.options[select.selectedIndex].value

    if (value == 'jordan') {
        img.setAttribute('src', imgList[0])
    } else {
        img.setAttribute('src', imgList[1])
    }
})










const fontfamily = document.getElementById('font')
const fontSize = document.getElementById('size')
const italic = document.getElementById('italic')
const bold = document.getElementById('bold')
const underline = document.getElementById('underline')

const result = document.getElementById('result')

fontfamily.addEventListener('change', (event) => {

    result.style.fontFamily = `${event.target.value}`

})


fontSize.addEventListener('change', (event) => {
    result.style.fontSize = `${event.target.value}`

})


fontSize.addEventListener('change', (event) => {
    result.style.fontSize = `${event.target.value}`
})

italic.addEventListener('change', (event) => {

    if (italic.checked == true) {

        result.style.fontStyle = `${event.target.value}`
    } else  {
        result.style = 'font-style: normal;'
    }

})
bold.addEventListener('change', (event) => {
    if (bold.checked == true) {
        result.style.fontWeight = `${event.target.value}`
    } else {
        result.style = 'font-weight: normal;'
    }

})
underline.addEventListener('change', (event) => {
    
    if (underline.checked == true) {
        result.style.textDecoration = `${event.target.value}`
    } else {
        result.style = 'text-decoration: normal;'
    }
})