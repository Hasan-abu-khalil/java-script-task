
function color() {
    let color = document.getElementById('color').value;
    sessionStorage.setItem('color', document.body.style.backgroundColor = color);
}

if (sessionStorage.color) {
    document.getElementById('color').value = sessionStorage.color;
    document.body.style.backgroundColor = sessionStorage.color;
}