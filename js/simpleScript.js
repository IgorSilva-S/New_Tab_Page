let engineChanged = false;
let engineChoose = document.getElementById('engineChoose')
let red, greeen, blue
const t = new Date
let hour, minute

setInterval(() => {
    hour = t.getHours()
    minute = t.getMinutes()
    document.getElementById('hour').innerHTML = `${hour}:${minute}`
}, 1);

red = Math.random() * 255
green = Math.random() * 255
blue = Math.random() * 255
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

function changeEngine() {
    if (!engineChanged) {
        engineChoose.className = 'engineChoose bing'
        engineChanged = true
    } else {
        engineChoose.className = 'engineChoose google'
        engineChanged = false
    }
}

function returnToNormalMode() {
    location.href = 'index.html'
}

function changeColor() {
    red = Math.random() * 255
    green = Math.random() * 255
    blue = Math.random() * 255
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

document.querySelector('.searchBar').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchingNow()
    }
});

function searchingNow() {
    let searchtext = document.querySelector('.searchBar').value
            if (!engineChanged) {
                window.open(`https://www.google.com/search?q=${searchtext}`)
            } else {
                window.open(`https://www.bing.com/search?q=${searchtext}`)
            }
}
