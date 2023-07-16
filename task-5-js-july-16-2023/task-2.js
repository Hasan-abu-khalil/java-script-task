
function saveData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const date = document.getElementById('date').value;
    const gender = document.getElementById('gender').value;
    const html = document.getElementById('html').value;
    const css = document.getElementById('css').value;
    const js = document.getElementById('js').value;
    const description = document.getElementById('description').value;
    const major = document.getElementById('major').value;
    const sibnum = document.getElementById('sibnum').value;
    const sibdes = document.getElementById('sibdes').value;



    const datas = [name, age, date, gender, html, css, js, description, major,sibnum,sibdes]
    localStorage.setItem('data', JSON.stringify(datas));
    


}


// localStorage.clear()
