

// const cardsnum = [
//     {
//         title: "hasan ",
//         num: "25",
//         image: "img/Capture66.PNG"
//     },
//     {
//         title: "ahmad ",
//         num: "20",
//         image: "img/Capture66.PNG"

//     },
//     {
//         title: "husam",
//         num: "30",
//         image: "img/Capture66.PNG"

//     },
//     {
//         title: "murad",
//         num: "21",
//         image: "img/Capture66.PNG"

//     }
// ];

// // Create cards
// const cardContainer = document.getElementById("cardcontainer");

// cardsnum.forEach(cards => {
//     const card = document.createElement("div");
//     card.className = "card";
//     card.style.cssText = `
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     padding: 10px;
//     margin: 15px;
//     width: 21%;
//     display: inline-block;
//     text-align: center;
//     font-family:'Times New Roman', Times, serif;
//     `


//     const title = document.createElement("h1");
//     title.textContent = cards.title;
//     card.appendChild(title);
//     title.style.cssText = `
//     margin-top: 10px;
//     color:#666;
//     `

//     const num = document.createElement("p");
//     num.textContent = cards.num;
//     card.appendChild(num);
//     num.style.cssText = `
//     margin-top: 5px;
//     font-size: 25px;
//     color:#666;

//     `

//     const image = document.createElement("img");
//     image.src = cards.image;
//     card.appendChild(image);
//     image.style.cssText = `
//     width: 100%;
//     height: auto;
//     border-radius: 5px;
//     `


//     cardContainer.appendChild(card);
// });


let arr = ['card1', 'card2', 'card3', 'card4',]
let num = ['num1', 'num2', 'num3', 'num4',]


let arr1 = ['card1ww', 'cardwwe2', 'carwewd3', 'cardwe4',]
let num2 = ['nweum1', 'nweum2', 'nuwem3', 'nuwem4',]

const cardContainer = document.getElementById("cardcontainer");






function createCard(array, number) {

    for (let i = 0; i < 4; i++) {
        const cards = document.createElement('div')
        let headingStyle = 'color:red;'
        let imageStyle = 'width:100%;'
        let paragraphStyle = 'font-size:30px;'

        cards.innerHTML = `
        <h1 class='heading' style=${headingStyle}>${array[i]}</h1>
        <p class='text'style=${paragraphStyle} >${number[i]}</p>
        <img src="img/Capture66.PNG" alt="" style=${imageStyle} >
        `
        cardContainer.style = `
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap:20px;
        `
        cards.style = `
        display: flex;
        width:22%;
        flex-direction: column;
        text-align: center;
        `
        




        // document.body.innerHTML += cards
        cardContainer.appendChild(cards)
    }
}
createCard(arr, num)
createCard(arr1, num2)


