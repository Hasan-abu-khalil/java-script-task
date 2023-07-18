async function get() {
    const response = await fetch("https://api.github.com/users/hasan-abu-khalil")
    const data = await response.json()

    const cards = document.getElementById('cards')
    for (let i = 0; i < 7; i++) {
        cards.innerHTML += `
        
        <div>
        <h1>${data.login}</h1>
        <h3>${data.id}</h3>
        <h4>${data.node_id}</h4>
        <h4>${data.type}</h4>
        </div>
        

        `
    }
    

}

get()