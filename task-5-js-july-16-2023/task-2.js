
const profileName = document.getElementById('name');
const age = document.getElementById('age');
const date = document.getElementById('date');
const gender = document.getElementById('gender');
const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const description = document.getElementById('description');
const major = document.getElementById('major');
const sibnum = document.getElementById('sibnum');
const sibdes = document.getElementById('sibdes');

const arr = [profileName,
    age,
    date,
    gender,
    html,
    css,
    js,
    description,
    major,
    sibnum,
    sibdes,]

function saveEl(...inputs) {
    console.log(inputs);
    const datas = []
    for (let i = 0; i < inputs.length; i++) {
        // datas.push(inputs[i].value)

        console.log(inputs[i].type == "checkbox");
        if (inputs[i].type == "checkbox") {
            // inputs[i].checked
            datas.push(inputs[i].checked)
        } else {
            datas.push(inputs[i].value)
        }

        console.log(datas);

    }
    return datas
}

function saveData() {

    const saveElData = saveEl(...arr)
    localStorage.setItem('data', JSON.stringify(saveElData));

}


onload = function () {
    const uplode = JSON.parse(this.localStorage.getItem('data'))
    uplode[0]
    profileName.value = uplode[0]
    date.value = uplode[1]
    gender.value = uplode[2]
    html.checked = uplode[3]
    css.checked = uplode[4]
    js.checked = uplode[5]
    description.value = uplode[6]
    major.value = uplode[7]
    sibnum.value = uplode[8]
    sibdes.value = uplode[9]
    


    // console.log(localStorage.getItem('data'));

    // console.log(uplode[0]);

}




// html.addEventListener('change', () => {

//     if (html.checked == "true") {
//         localStorage.setItem('data', JSON.stringify(datas));

//     } else {
//         return false
//     }

// })



// localStorage.clear()
