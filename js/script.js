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
let MpMax = false
let ghMax = false
let textNotepad = document.getElementById('textNp')
let buttonApply = document.getElementById('buttontoApply')
let sizing = 1
let searchInp = document.getElementById('searchinput')
let searchB = document.getElementById('searchbutton')
let song = document.getElementById('songByUser')
let playing = false
let repeating = false;
let repeaterb = document.getElementById('repeatb')
let charmsForMobile = false;
let clockChecker = document.getElementById('clockBckg');
let EnStyle = document.getElementById('enUsVersion')

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

  if (EnStyle.checked) {
    if (weekday == 0) {
      extweekday = "Sunday";
    } else if (weekday == 1) {
      extweekday = "Monday";
    } else if (weekday == 2) {
      extweekday = "Tuesday";
    } else if (weekday == 3) {
      extweekday = "Wednesday";
    } else if (weekday == 4) {
      extweekday = "Thursday";
    } else if (weekday == 5) {
      extweekday = "Friday";
    } else {
      extweekday = 'Saturday'
    }

    if (month == 0) {
      extmonth = "january";
    } else if (month == 1) {
      extmonth = "february";
    } else if (month == 2) {
      extmonth = "march";
    } else if (month == 3) {
      extmonth = "april";
    } else if (month == 4) {
      extmonth = "may";
    } else if (month == 5) {
      extmonth = "june";
    } else if (month == 6) {
      extmonth = "july";
    } else if (month == 7) {
      extmonth = "august";
    } else if (month == 8) {
      extmonth = "september";
    } else if (month == 9) {
      extmonth = "october";
    } else if (month == 10) {
      extmonth = "november";
    } else {
      extmonth = "december"
    }
  }

  let year = d.getFullYear()
  document.getElementById('day').innerHTML = `${extweekday}, ${zero(day)} de ${extmonth} de ${year}`
  if (EnStyle.checked) {
    document.getElementById('day').innerHTML = `${extweekday}, ${extmonth} ${zero(day)}, ${year}`
  }
}, 1);

image = localStorage.getItem('background')
applyimg()

let watchC = localStorage.getItem('watchColor')
if (watchC == 1) {
  document.querySelector('.time').style.color = '#191919'
} else {
  document.querySelector('.time').style.color = '#ffffff'
}

let watchBckg = localStorage.getItem('watchBackg')
if (watchBckg == 1) {
  clockChecker.checked = true
  clockBckg()
}

userinfos()

let recomendEnabled = localStorage.getItem('recomendationActive')
if (recomendEnabled == 1) {
  document.getElementById('enableRecomendations').checked = true
  recomendationsEnable()
}

let helped = localStorage.getItem('helped')
if (helped == 1) {
  hideHelp()
}

let autoPin = localStorage.getItem('pinned')
if (autoPin == 1) {
  un_pin()
}


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
  if (charmsForMobile) {
    charmslocks.style.right = "-101%"
    charmsuser.style.right = "-101%"
    charmsreset.style.right = "-101%"
    charmssetting.style.right = "-101%"
    charmsrecomendations.style.right = "-101%"
    charmsapps.style.right = '-101%'
  }
}

function searchingNow() {
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

function savePassw() {
  let pin = document.getElementById('passcharms').value
  localStorage.setItem('userPassword', pin)
}

function lockall() {
  let pin = localStorage.getItem('userPassword')
  var passwordlocks = document.getElementById('passlock')
  if (pin == null) {
    if (!EnStyle.checked) {
    alert('Você não tem uma senha salva, favor salvar uma senha')
    } else {
      alert("You don't have a saved password, please save a password")
    }
  } else {
    if (unlocked) {
      document.getElementById('lockscreen').style.top = "0"
      unlocked = false
    } else {
      if (passwordlocks.value == pin) {
        document.getElementById('lockscreen').style.top = "-110%"
        document.getElementById('wrongPass').innerHTML = ''
        passwordlocks.value = ''
        unlocked = true
      } else {
        document.getElementById('wrongPass').innerHTML = 'Senha errada, tente novamente :/'
        if (enUs) {
          document.getElementById('wrongPass').innerHTML = 'Wrong password, try again :/'
        }
      }
    }
  }
}

function userinfos() {
  let grettings = document.getElementById('userinfos')
  let lockGrettings = document.getElementById('nameLock')

  if (localStorage.getItem('genero') != null && localStorage.getItem('username') != null) {
    let normalText = `${localStorage.getItem('genero')}, ${localStorage.getItem('username')}!`
    let lockText = `${localStorage.getItem('genero')}, ${localStorage.getItem('username')}. Digite a sua senha para continuar`
    grettings.innerText = normalText
    lockGrettings.innerText = lockText
  }
  if (EnStyle.checked) {
    if (localStorage.getItem('grettingMode') != null && localStorage.getItem('username') != null) {
      let normalText = `${localStorage.getItem('grettingMode')}, ${localStorage.getItem('username')}!`
      let lockText = `${localStorage.getItem('grettingMode')}, ${localStorage.getItem('username')}. Enter your password to continue`
      grettings.innerText = normalText
      lockGrettings.innerText = lockText
    }

  }
}

function saveName() {
  let name = document.getElementById('usern').value
  localStorage.setItem("username", name)
}

function mascheck() {
  let checker = document.getElementById('mas')
  if (checker.checked) {
    localStorage.setItem('genero', 'Bem-vindo')
  }
}

function femcheck() {
  let checker = document.getElementById('fem')
  if (checker.checked) {
    localStorage.setItem('genero', 'Bem-vinda')
  }
}

function pnscheck() {
  let checker = document.getElementById('pns')
  if (checker.checked) {
    localStorage.setItem('genero', 'Olá')
  }
}

function hellocheck() {
  let checker = document.getElementById('hello')
  if (checker.checked) {
    localStorage.setItem('grettingMode', 'Hello')
  }
}

function hicheck() {
  let checker = document.getElementById('hi')
  if (checker.checked) {
    localStorage.setItem('grettingMode', 'Hi')
  }
}

function welcomecheck() {
  let checker = document.getElementById('welcome')
  if (checker.checked) {
    localStorage.setItem('grettingMode', 'Welcome')
  }
}

function image1() {
  image = 1
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 1)
  if (enUs) {
    buttonApply.innerHTML = 'Apply'
  }
}

function image2() {
  image = 2
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 2)
  if (enUs) {
    buttonApply.innerHTML = 'Apply'
  }
}

function image3() {
  image = 3
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 3)
  if (enUs) {
    buttonApply.innerHTML = 'Apply'
  }
}

function image4() {
  image = 4
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 4)
  if (enUs) {
    buttonApply.innerHTML = 'Apply'
  }
}

function image5() {
  image = 5
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 5)
  if (enUs) {
    buttonApply.innerHTML = 'Apply'
  }
}

function image6() {
  image = 6
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 6)
  if (enUs) {
    buttonApply.innerHTML = 'Apply'
  }
}

function colorImage() {
  image = 7
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 7)
  if (enUs) {
    buttonApply.innerHTML = 'Apply'
  }
}

function selectColorImage() {
  image = 8
  buttonApply.innerHTML = 'Continuar'
  localStorage.setItem('background', 8)
  if (enUs) {
    buttonApply.innerHTML = 'Next'
  }
}

function colorGradient() {
  image = 9
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 9)
  if (enUs) {
    buttonApply.innerHTML = 'Apply'
  }
}

function selectColorGradient() {
  image = 10
  buttonApply.innerHTML = 'Continuar'
  localStorage.setItem('background', 10)
  if (enUs) {
    buttonApply.innerHTML = 'Next'
  }
}

function userImage() {
  image = 11
  buttonApply.innerHTML = 'Continuar'
  localStorage.setItem('background', 11)
  if (enUs) {
    buttonApply.innerHTML = 'Next'
  }
}

function applyimg() {
  if (image == 1) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img1.jpg)'
  } else if (image == 2) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img2.jpg)'
  } else if (image == 3) {
    document.body.style.backgroundImage = 'linear-gradient(to bottom right, #0632ff, #8706d4)'
  } else if (image == 4) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img4.jpg)'
  } else if (image == 5) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img5.jpg)'
  } else if (image == 6) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img6.jpg)'
  } else if (image == 7) {
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
  } else if (image == 8) {
    let coloring = localStorage.getItem('colorChoosed')
    if (coloring != null) {
      document.body.style.backgroundImage = 'url(../img/Backgrounds/Transparency.png)'
      document.body.style.backgroundColor = coloring

    } else {
    document.querySelector('.chooseColor').style.transform = 'scale(1)'
    }

  } else if (image == 9) {
    let red2, green2, blue2;
    red = Math.random() * 255
    green = Math.random() * 255
    blue = Math.random() * 255
    red2 = Math.random() * 255
    green2 = Math.random() * 255
    blue2 = Math.random() * 255

    document.body.style.backgroundImage = `linear-gradient(to bottom right, rgb(${red}, ${green}, ${blue}), rgb(${red2}, ${green2}, ${blue2}))`
    document.body.style.color = 'white'
  } else if (image == 10) {
    let gradienting = localStorage.getItem('gradientChoosed')
    if (gradienting != null) {
      document.body.style.backgroundImage = gradienting
      document.body.style.backgroundColor = 'white'
    } else {
      document.querySelector('.chooseGradient').style.transform = 'scale(1)'
    }
  } else if (image == 11) {
    document.querySelector('.chooseImage').style.transform = 'scale(1)'
  }
}

function forceAppearPopup() {
  if (image == 1) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img1.jpg)'
  } else if (image == 2) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img2.jpg)'
  } else if (image == 3) {
    document.body.style.backgroundImage = 'linear-gradient(to bottom right, #0632ff, #8706d4)'
  } else if (image == 4) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img4.jpg)'
  } else if (image == 5) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img5.jpg)'
  } else if (image == 6) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img6.jpg)'
  } else if (image == 7) {
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
  } else if (image == 8) {
    document.querySelector('.chooseColor').style.transform = 'scale(1)'
  } else if (image == 9) {
    let red2, green2, blue2;
    red = Math.random() * 255
    green = Math.random() * 255
    blue = Math.random() * 255
    red2 = Math.random() * 255
    green2 = Math.random() * 255
    blue2 = Math.random() * 255

    document.body.style.backgroundImage = `linear-gradient(to bottom right, rgb(${red}, ${green}, ${blue}), rgb(${red2}, ${green2}, ${blue2}))`
    document.body.style.color = 'white'
  } else if (image == 10) {
    document.querySelector('.chooseGradient').style.transform = 'scale(1)'
  } else if (image == 11) {
    document.querySelector('.chooseImage').style.transform = 'scale(1)'
  }
}

function reloadpage() {
  location.href = 'index.html'
}

function reloadSpage() {
  location.href = 'simpleSearch.html'
}

function reloadSpageUs() {
  location.href = 'enUsSimpleSearch.html'
}

function un_pin() {
  if (!pinned) {
    document.querySelector('.charms').style.right = '0'
    document.querySelector('.charms').style.opacity = '1'
    pinned = true
    document.getElementById('pinIcon').className = "pincharms charmsPinned"
    localStorage.setItem('pinned', 1)
  } else {
    document.querySelector('.charms').removeAttribute('style')
    document.getElementById('pinIcon').className = "pincharms notPinned"
    pinned = false
    localStorage.setItem('pinned', 0)
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
    localStorage.setItem('recomendationActive', 0)
  } else {
    document.querySelector(".reci").style.display = "block";
    recomendationEnabled = true
    localStorage.setItem('recomendationActive', 1)
  }
}

function closePop() {
  document.querySelector('.chooseColor').removeAttribute('style')
  document.querySelector('.chooseGradient').removeAttribute('style')
  document.querySelector('.chooseImage').removeAttribute('style')
}

function applyColor() {
  let color = document.getElementById('colorChoosed').value
  document.body.style.backgroundImage = 'url(../img/Backgrounds/Transparency.png)'
  document.body.style.backgroundColor = color
  localStorage.setItem('colorChoosed', color)
  let closeInp = document.getElementById('closeThis')
  if (closeInp.checked) {
    closePop()
  }
}

function applyGradient() {
  let col1 = document.getElementById('colorChoosed1').value
  let col2 = document.getElementById('colorChoosed2').value
  document.body.style.backgroundImage = `linear-gradient(to bottom right, ${col1}, ${col2})`
  document.body.style.color = 'white'
  localStorage.setItem('gradientChoosed', `linear-gradient(to bottom right, ${col1}, ${col2})`)
  let closeInp = document.getElementById('closeThisGd')
  if (closeInp.checked) {
    closePop()
  }
}

//Input da imagem

let imageFile = document.getElementById('imageToBckg')
imageFile.addEventListener('change', function () {
  var reader = new FileReader
  reader.addEventListener('load', function () {
    document.getElementById('prevImg').style.backgroundImage = `url(${reader.result})`
  });
  reader.readAsDataURL(imageFile.files[0]);
  let name = imageFile.value
  name = name.replace(/C:\\fakepath\\/i, '')
  document.getElementById('nameImg').textContent = name
})
function applyImageFile() {
  var reader = new FileReader
  reader.addEventListener('load', function () {
    document.body.style.backgroundImage = `url(${reader.result})`
  });
  reader.readAsDataURL(imageFile.files[0]);
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

    } else {
      app.style.width = 'calc(100vw - 15%)'
    }
    app.style.height = 'calc(100vh - 40px)'
    NpMax = true
    icon.src = 'img/WindowIcons/Minimize.png'
  } else {
    app.style.left = 'var(--spaceNp)'
    app.style.top = 'var(--spaceNp)'
    app.style.width = 'var(--widthNp)'
    app.style.height = 'var(--heightNp)'
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
  document.querySelector('.calculator__display').innerHTML = '0'
  num1 = NaN;
  num2 = undefined
  op = undefined
}

function hide_cl() {
  document.getElementById('clApp').style.transform = 'scale(0)'
  document.getElementById('clHided').style.display = 'flex'
}

function appear_cl() {
  document.getElementById('clApp').style.transform = 'scale(1)'
  document.getElementById('clHided').removeAttribute('style')
}

function closeMp() {
  document.getElementById('mpApp').style.transform = 'scale(0)'
  song.src = ''
  document.getElementById('songName').innerText = 'O nome da música aparecerá aqui'
}

function hide_Mp() {
  document.getElementById('mpApp').style.transform = 'scale(0)'
  document.getElementById('mpHided').style.display = 'flex'
}

function appear_mp() {
  document.getElementById('mpApp').style.transform = 'scale(1)'
  document.getElementById('mpHided').removeAttribute('style')
}

function appear_ghost() {
  document.getElementById('ghostApp').style.transform = 'scale(1)'
  document.getElementById('ghostHided').removeAttribute('style')
}

function hideGhost() {
  document.getElementById('ghostApp').style.transform = 'scale(0)'
  document.getElementById('ghostHided').style.display = 'flex'
}

function closeGhost() {
  document.getElementById('ghostApp').style.transform = 'scale(0)'
}

function max_min_Mp() {
  let app = document.getElementById('mpApp')
  let appHd = document.getElementById('mpHeader')
  let icon = document.getElementById('iconMaxMinMP')
  if (!MpMax) {
    app.style.left = '0'
    app.style.top = '0'
    if (!pinned) {
      app.style.width = 'calc(100vw - 1%)'

    } else {
      app.style.width = 'calc(100vw - 15%)'
    }
    app.style.height = 'calc(100vh - 40px)'
    MpMax = true
    icon.src = 'img/WindowIcons/Minimize.png'
  } else {
    app.style.left = 'var(--spaceMusic)'
    app.style.top = 'var(--spaceMusic)'
    app.style.width = 'var(--widthMusic)'
    app.style.height = 'var(--heightMusic)'
    MpMax = false
    icon.src = 'img/WindowIcons/Maximize.png'
  }
}

function max_min_ghost() {
  let app = document.getElementById('ghostApp')
  let appHd = document.getElementById('ghostHeader')
  let icon = document.getElementById('iconMaxMinGh')
  if (!ghMax) {
    app.style.left = '0'
    app.style.top = '0'
    if (!pinned) {
      app.style.width = 'calc(100vw - 1%)'

    } else {
      app.style.width = 'calc(100vw - 15%)'
    }
    app.style.height = 'calc(100vh - 40px)'
    ghMax = true
    icon.src = 'img/WindowIcons/Minimize.png'
  } else {
    app.style.left = 'var(--spaceGhost)'
    app.style.top = 'var(--spaceGhost)'
    app.style.width = 'var(--widthGhost)'
    app.style.height = 'var(--heightGhost)'
    ghMax = false
    icon.src = 'img/WindowIcons/Maximize.png'
  }
}



function lockAllSS() {
  var pin = localStorage.getItem('userPassword')
  var passwordlocks = document.getElementById('passlock').value
  document.getElementById('scrSvr').style.display = 'block'
  lockall()
  if (pin == null) {
    if (!EnStyle.checked) {
      alert('O protetor de tela será ativado, mas o site não será bloqueado')
    } else {
      alert('The screensaver will be activated, but the website will not be blocked')
    }
  }
}

function disScrSvr() {
  document.getElementById('scrSvr').style.display = 'none'
}

function clockBckg() {
  if (clockChecker.checked) {
    document.querySelector('.time').style.backgroundColor = "#f0f0f066"
    document.querySelector('.time').style.backdropFilter = "blur(20px)"
    localStorage.setItem('watchBackg', 1)
  } else {
    document.querySelector('.time').style.backgroundColor = "transparent"
    document.querySelector('.time').style.backdropFilter = "none"
    localStorage.setItem('watchBackg', 0)
  }
}

function focusNp() {
  document.getElementById('NpApp').style.zIndex = '997'
  document.getElementById('clApp').style.zIndex = 'auto'
  document.getElementById('mpApp').style.zIndex = 'auto'
  document.getElementById('ghostApp').style.zIndex = 'auto'
}

function focusCalc() {
  document.getElementById('NpApp').style.zIndex = 'auto'
  document.getElementById('clApp').style.zIndex = '997'
  document.getElementById('mpApp').style.zIndex = 'auto'
  document.getElementById('ghostApp').style.zIndex = 'auto'
}

function focusMp() {
  document.getElementById('NpApp').style.zIndex = 'auto'
  document.getElementById('clApp').style.zIndex = 'auto'
  document.getElementById('mpApp').style.zIndex = '997'
  document.getElementById('ghostApp').style.zIndex = 'auto'
}

function focusGh() {
  document.getElementById('NpApp').style.zIndex = 'auto'
  document.getElementById('clApp').style.zIndex = 'auto'
  document.getElementById('mpApp').style.zIndex = 'auto'
  document.getElementById('ghostApp').style.zIndex = '997'
}

document.getElementById('searchinput').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    searchingNow()
  }
});

function entKey(event) {
  if (event.key == 'Enter') {
    searchingNow()
  }
}


function hideHelp() {
  if (EnStyle.checked) {
    document.querySelector('.helpWithCharmsUS').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.helpWithCharmsUS').style.display = 'none';
    }, 200);
  } else {
    document.querySelector('.helpWithCharms').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.helpWithCharms').style.display = 'none';
    }, 200);
  }
  localStorage.setItem('helped', 1)
}


function size1() {
  sizing = 1
}

function size2() {
  sizing = 2
}

function size3() {
  sizing = 3
}

function size4() {
  sizing = 4
}

function applyBtnSize() {
  if (sizing == 1) {
    engineselector.style.width = 'var(--smallSearch)'
    engineselector.style.height = 'var(--smallSearch)'
    searchInp.style.height = 'var(--smallSearch)'
    searchInp.style.fontSize = 'var(--smallSize)'
    searchB.style.width = 'var(--smallSearch)'
    searchB.style.height = 'var(--smallSearch)'
  } else if (sizing == 2) {
    engineselector.removeAttribute('style')
    searchInp.removeAttribute('style')
    searchB.removeAttribute('style')
  } else if (sizing == 3) {
    engineselector.style.width = 'var(--largeSearch)'
    engineselector.style.height = 'var(--largeSearch)'
    searchInp.style.height = 'var(--largeSearch)'
    searchInp.style.fontSize = 'var(--largeSize)'
    searchB.style.width = 'var(--largeSearch)'
    searchB.style.height = 'var(--largeSearch)'
  }
}

function openGitHub() {
  setTimeout(() => {
    window.open('https:/github.com/IgorSilva-S/New_Tab_Screen')
  }, 210);
}

let songFile = document.getElementById('chooseSong')
songFile.addEventListener('change', function () {
  const songReader = new FileReader
  songReader.addEventListener('load', function () {
    let songName = document.getElementById('chooseSong').value
    songName = songName.replace(/C:\\fakepath\\/i, '')
    document.getElementById('songName').innerText = songName
    song.src = songReader.result
    song.play()
    playing = true
  })
  songReader.readAsDataURL(songFile.files[0])
})

setInterval(() => {
  document.getElementById('volnum').innerText = document.getElementById('volSlid').value + "%"
  song.volume = document.getElementById('volSlid').value / 100
}, 1);

function playorpause() {
  if (playing == false) {
    song.play();
    playing = true;
  } else {
    song.pause();
    playing = false;
  }
}

function repeater() {
  if (repeating == false) {
    repeating = true;
    repeaterb.innerHTML = ""
  } else {
    repeating = false;
    repeaterb.innerHTML = ""
  }
}


setInterval(() => {
  if (playing) {
    document.querySelector('.playB').innerText = ''
  } else {
    document.querySelector('.playB').innerText = ''
  }
}, 1);

song.addEventListener('ended', function () {
  if (repeating) {
    song.currentTime = 0;
    song.play()
  } else {
    playing = false
  }
})

//Slider 

var progressEl = document.querySelector('.timeSong');
let mouseDownOnSlider = false;

song.addEventListener('loadeddata', () => {
  progressEl.value = 0;
});
song.addEventListener('timeupdate', () => {
  if (!mouseDownOnSlider) {
    progressEl.value = (song.currentTime / song.duration) * 100;
  }
});

progressEl.addEventListener('change', () => {
  const pct = progressEl.value / 100;
  song.currentTime = (song.duration || 0) * pct;
});
progressEl.addEventListener('mousedown', () => {
  mouseDownOnSlider = true;
});
progressEl.addEventListener('mouseup', () => {
  mouseDownOnSlider = false;
});

//Fim slider

song.addEventListener('timeupdate', function () {
  let s = parseInt(song.currentTime % 60);
  let m = parseInt((song.currentTime / 60) % 60);
  let sd = parseInt(song.duration % 60);
  let md = parseInt((song.duration / 60) % 60);
  let musicTime = document.getElementById('totalTime')
  if (s < 10) {
    s = '0' + s
  }
  if (m < 10) {
    m = '0' + m
  }
  if (sd < 10) {
    sd = '0' + sd;
  }
  if (md < 10) {
    md = '0' + md;
  }
  document.getElementById('actualTime').innerHTML = m + ":" + s
  if (isNaN(song.duration)) {
    musicTime.innerHTML = "Carregando"
  } else {
    musicTime.innerHTML = md + ":" + sd
  }
})

function resetNotepad() {
  let app = document.getElementById('NpApp')
  app.style.left = 'var(--spaceNp)'
  app.style.top = 'var(--spaceNp)'
  if (NpMax) {
  max_min_np()
  }
}

function resetCalc() {
  let app = document.getElementById('clApp')
  app.style.left = 'var(--spaceCalc)'
  app.style.top = 'var(--spaceCalc)'
}

function resetMusPlay() {
  let app = document.getElementById('mpApp')
  app.style.left = 'var(--spaceMusic)'
  app.style.top = 'var(--spaceMusic)'
  app.style.width = 'var(--widthMusic)'
  app.style.height = 'var(--heightMusic)'
  if (MpMax) {
  max_min_Mp()
  }
}

function resetGhost() {
  let app = document.getElementById('ghostApp')
  app.style.left = 'var(--spaceGhost)'
  app.style.top = 'var(--spaceGhost)'
  app.style.width = 'var(--widthGhost)'
  app.style.height = 'var(--heightGhost)'
  if (ghMax) {
  max_min_ghost()
  }
}

//Funções responsivas

function openCharms() {
  let charms = document.querySelector('.charms');
  charms.style.right = '0';
  charmsForMobile = true
}

function closeCharms() {
  let charms = document.querySelector('.charms');
  charms.style.right = '-101%';
}

