//Var
let engineselector = document.getElementById('engsec')
enginechanged = false
unlocked = true
let image = 1
let pinned = false
let transpToggle = document.getElementById('transpToggle')
let blurToggle = document.getElementById("blurToggle");
let newTabOpen = true
let tabToggle = document.getElementById('tabToggle');
let recomendationEnabled = false
let red, green, blue
let NpMax = false
let textNotepad = document.getElementById('textNp')


//Charms functions 

let charmslocks = document.getElementById('lockinfo')
let charmsuser = document.getElementById('userinfo')
let charmssetting = document.getElementById('settingsinfo')
let charmsreset = document.getElementById('resetinfo')
let charmsrecomendations = document.getElementById('recomendations')
let charmsapps = document.getElementById('appsinfo')

setInterval(() => {
  const d = new Date
  let hour = d.getHours()
  let minute = d.getMinutes()
  const zero = n => {
    return ('0' + n).slice(-2)
  }

  document.getElementById('hour').innerHTML = `${zero(hour)}:${zero(minute)}`

  let weekday = d.getDay()
  let extweekday
  if (weekday == 0) {
    extweekday = "Domingo";
  } else if (weekday == 1) {
    extweekday = "Segunda";
  } else if (weekday == 2) {
    extweekday = "Terça";
  } else if (weekday == 3) {
    extweekday = "Quarta";
  } else if (weekday == 4) {
    extweekday = "Quinta";
  } else if (weekday == 5) {
    extweekday = "Sexta";
  } else {
    extweekday = 'Sábado'
  }

  let day = d.getDate()
  let month = d.getMonth()
  let extmonth
  if (month == 0) {
    extmonth = "janeiro";
  } else if (month == 1) {
    extmonth = "fevereiro";
  } else if (month == 2) {
    extmonth = "março";
  } else if (month == 3) {
    extmonth = "abril";
  } else if (month == 4) {
    extmonth = "maio";
  } else if (month == 5) {
    extmonth = "junho";
  } else if (month == 6) {
    extmonth = "julho";
  } else if (month == 7) {
    extmonth = "agosto";
  } else if (month == 8) {
    extmonth = "setembro";
  } else if (month == 9) {
    extmonth = "outubro";
  } else if (month == 10) {
    extmonth = "novembro";
  } else {
    extmonth = "dezembro"
  }

  let year = d.getFullYear()
  document.getElementById('day').innerHTML = `${extweekday}, ${zero(day)} de ${extmonth} de ${year}`
}, 1);

function changeEngine() {
  if (!enginechanged) {
    engineselector.className = "searchengine bing"
    enginechanged = true
  } else {
    engineselector.className = 'searchengine google'
    enginechanged = false
  }
}

function lock() {
  charmslocks.style.right = '0'
}

function user() {
  charmsuser.style.right = '0'
}

function setting() {
  charmssetting.style.right = '0'
}

function reset() {
  charmsreset.style.right = '0'
}

function recomendations() {
  charmsrecomendations.style.right = '0'
}

function apps() {
  charmsapps.style.right = '0'
}

function bts() {
  charmslocks.style.right = "-26%"
  charmsuser.style.right = "-26%"
  charmsreset.style.right = "-26%"
  charmssetting.style.right = "-26%"
  charmsrecomendations.style.right = "-26%"
  charmsapps.style.right = '-26%'
}

document.getElementById('searchbutton').onclick = function () {
  let searchtext = document.getElementById('searchinput').value
  if (newTabOpen) {
    if (searchtext != '') {
      if (!enginechanged) {
        window.open(`https://www.google.com/search?q=${searchtext}`, '_blank')
      } else {
        window.open(`https://www.bing.com/search?q=${searchtext}`, '_blank')
      }
    }
  } else {
    if (searchtext != "") {
      if (!enginechanged) {
        location.href = `https://www.google.com/search?q=${searchtext}`;
      } else {
        location.href = `https://www.bing.com/search?q=${searchtext}`;
      }
    }
  }
}

function lockall() {
  var pin = document.getElementById('passcharms').value
  var passwordlocks = document.getElementById('passlock').value
  if (unlocked) {
    document.getElementById('lockscreen').style.top = "0"
    unlocked = false
  } else {
    if (passwordlocks == pin) {
      document.getElementById('lockscreen').style.top = "-110%"
      unlocked = true
    }
  }
}

function userinfos() {
  let name = document.getElementById('usern').value
  let masradio = document.getElementById('mas')
  let femradio = document.getElementById('fem')
  let pnsradio = document.getElementById('pns')
  let grettings = document.getElementById('userinfos')
  if (masradio.checked) {
    grettings.innerHTML = `Bem-vindo, ${name}!`
  } else if (femradio.checked) {
    grettings.innerHTML = `Bem-vinda, ${name}!`
  } else if (pnsradio.checked) {
    grettings.innerHTML = `Olá, ${name}!`
  } else {
    alert('Insira um valor em uma das caixas de escolha')
  }
}

function image1() {
  image = 1
}

function image2() {
  image = 2
}

function image3() {
  image = 3
}

function image4() {
  image = 4
}

function image5() {
  image = 5
}

function colorImage() {
  image = 6
}

function selectColorImage() {
  image = 7
}

function applyimg() {
  if (image == 1) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img1.jpg)'
    document.body.style.color = 'white'
  } else if (image == 2) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img2.jpg)'
    document.body.style.color = 'white'
  } else if (image == 3) {
    document.body.style.backgroundImage = 'linear-gradient(to bottom right, #0632ff, #8706d4)'
    document.body.style.color = 'white'
  } else if (image == 4) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img4.jpg)'
    document.body.style.color = 'white'
  } else if (image == 5) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img5.jpg)'
    document.body.style.color = 'white'
  } else if (image == 6) {
    red = Math.random() * 255
    green = Math.random() * 255
    blue = Math.random() * 255
    document.body.style.backgroundImage = 'url(../img/Backgrounds/Transparency.png)'
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    if (red >= 200 || blue >= 200 || green >= 200) {
      document.querySelector('.time').style.color = "#191919"
    } else {
      document.querySelector('.time').removeAttribute('style')
    }
  } else if (image == 7) {
    document.querySelector('.chooseColor').style.transform = 'scale(1)'
  }
}

function reloadpage() {
  location.href = 'index.html'
}

function un_pin() {
  if (!pinned) {
    document.querySelector('.charms').style.right = '0'
    document.querySelector('.charms').style.opacity = '1'
    pinned = true
    document.getElementById('pinIcon').className = "pincharms charmsPinned"
  } else {
    document.querySelector('.charms').removeAttribute('style')
    document.getElementById('pinIcon').className = "pincharms notPinned"
    pinned = false
    if (!transpToggle.checked) {
      transpEffect()
    }
    if (!blurToggle.checked) {
      blurEffect()
    }
  }
}

function transpEffect() {
  if (!transpToggle.checked) {
    charmsapps.style.backgroundColor = "#444"
    charmslocks.style.backgroundColor = "#444"
    charmsuser.style.backgroundColor = "#444"
    charmsreset.style.backgroundColor = "#444"
    charmssetting.style.backgroundColor = "#444"
    charmsrecomendations.style.backgroundColor = "#444"
    document.querySelector(".charms").style.backgroundColor = "#000";
    document.getElementById("lockscreen").style.backgroundColor = "#444"
  } else {
    charmsapps.removeAttribute('style')
    charmslocks.removeAttribute('style')
    charmsuser.removeAttribute('style')
    charmsreset.removeAttribute('style')
    charmssetting.removeAttribute('style')
    charmsrecomendations.removeAttribute('style')
    document.querySelector(".charms").removeAttribute('style')
    document.getElementById("lockscreen").removeAttribute('style')
    if (pinned) {
      document.querySelector(".charms").style.right = "0";
      document.querySelector(".charms").style.opacity = "1";
    }
    if (!blurToggle.checked) {
      blurEffect()
    }
  }
}

function blurEffect() {
  if (!blurToggle.checked) {
    charmsapps.style.backdropFilter = "none"
    charmslocks.style.backdropFilter = "none"
    charmsuser.style.backdropFilter = "none"
    charmssetting.style.backdropFilter = "none"
    charmsreset.style.backdropFilter = "none"
    charmsrecomendations.style.backdropFilter = "none"
    document.getElementById("lockscreen").style.backgroundColor = "#444"
    document.querySelector(".charms").style.backdropFilter = "none"
  } else {
    transpEffect()
  }
}

function un_tab() {
  if (!tabToggle.checked) {
    newTabOpen = false
  } else {
    newTabOpen = true
  }
}

function recomendationsEnable() {
  if (recomendationEnabled) {
    document.querySelector('.reci').style.display = "none"
    recomendationEnabled = false
  } else {
    document.querySelector(".reci").style.display = "block";
    recomendationEnabled = true
  }
}

function closePop() {
    document.querySelector('.chooseColor').removeAttribute('style')
}

function applyColor() {
  let color = document.getElementById('colorChoosed').value
  document.body.style.backgroundImage = 'url(../img/Backgrounds/Transparency.png)'
  document.body.style.backgroundColor = color
  let closeInp = document.getElementById('closeThis')
  if (closeInp.checked) {
    closePop()
  }
}

function max_min_np() {
  let app = document.getElementById('NpApp')
  let appHd = document.getElementById('NpHeader')
  let icon = document.getElementById('iconMaxMinNP')
  if (!NpMax) {
    app.style.left = '0'
    app.style.top = '40px'
    if (!pinned) {
      app.style.width = 'calc(100vw - 1%)'
      appHd.style.width = 'calc(100vw - 1%)'
    } else {
      app.style.width = 'calc(100vw - 15%)'
      appHd.style.width = 'calc(100vw - 17.6%)'
    }
    app.style.height = 'calc(100vh - 40px)'
    NpMax = true
    icon.src = 'img/WindowIcons/Minimize.png'
  } else {
    app.style.left = '100px'
    app.style.top = '100px'
    app.style.width = '800px'
    app.style.height = '600px'
    appHd.style.width = '800px'
    NpMax = false
    icon.src = 'img/WindowIcons/Maximize.png'
  }
}

function closeNp() {
  document.getElementById('NpApp').style.transform = 'scale(0)'
  textNotepad.value = ''
}

function hide_np() {
  document.getElementById('NpApp').style.transform = 'scale(0)'
  document.getElementById('npHided').style.display = 'flex'
}

function appear_np() {
  document.getElementById('NpApp').style.transform = 'scale(1)'
  document.getElementById('npHided').removeAttribute('style')
}


function closeCl() {
  document.getElementById('clApp').style.transform = 'scale(0)'
  document.querySelector('.calcDsp').innerHTML = '0'
}

function hide_cl() {
  document.getElementById('clApp').style.transform = 'scale(0)'
  document.getElementById('clHided').style.display = 'flex'
}

function appear_cl() {
  document.getElementById('clApp').style.transform = 'scale(1)'
  document.getElementById('clHided').removeAttribute('style')
}