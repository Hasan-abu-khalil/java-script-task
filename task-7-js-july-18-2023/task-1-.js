async function get() {
    const response = await fetch("https://api.github.com/users/hasan-abu-khalil/repos")
    const data = await response.json()

    const cards = document.getElementById('cards')
    for (let i = 0; i < data.length; i++) {
        cards.innerHTML += `
        
        <div>
        <h3>${data[i].full_name}</h3>
        <h3>${data[i].name}</h3>
        <h3>${data[i].id}</h3>
        <h4>${data[i].node_id}</h4>
        </div>
        

        `
    }
    

}

get()