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
let appsEnabled = true
let lockEnabled = true
let userEnabled = true
let quickSettingsEnabled = true
let resetEnabled = true
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
let EnStyle = document.getElementById('enUsVersion');
let ghostRunning = false
let SettingMax = false
let settingPersonBackground = document.getElementById("settingsBackgroundImage")
let settClock = document.getElementById("settingsClockPrev")
let CusImg = localStorage.getItem("CustomImage")
let sClockChecker = document.getElementById('settingsClockBckg');
let sTabToggle = document.getElementById('settingsOINT');
let gamesChecker = document.getElementById('enableGames')
let cycle = document.getElementById('dayCycle')
let clockAMPM = false
let settingPassword
let settingLocked = false
let settingAccessAllow = true
let winTB = false

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
  if (hour >= 12) {
    cycle.innerText = 'PM'
  } else {
    cycle, innerText = 'AM'
  }
  if (clockAMPM) {
    if (hour >= 13) {
      hour = hour - 12
    }
  }

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

function checkAll() {
  let watchC = localStorage.getItem('watchColor')
  if (watchC == 1) {
    document.querySelector('.time').style.color = '#191919'
    settClock.style.color = '#191919'
  } else {
    document.querySelector('.time').style.color = '#ffffff'
    settClock.style.color = '#ffffff'
  }

  let watchBckg = localStorage.getItem('watchBackg')
  if (watchBckg == 1) {
    clockChecker.checked = true
    sClockChecker.checked = true
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

  let themeChanger = localStorage.getItem('darkTheme')
  if (themeChanger == "yes") {
    document.getElementById('changeColorStyle').checked = true
    changeWebSiteTheme()
  }

  let clockType = localStorage.getItem('cAP')
  if (clockType == 1) {
    document.getElementById('hourForm').checked = true
    dayCycle()
  }

  let checkSetting = localStorage.getItem('sLocked') 
  if (checkSetting == 1) {
    autoLockSetting()
  }
}

checkAll()

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
        if (EnStyle.checked) {
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

function saveName(whoComes) {
  let name
  if (whoComes == 'bySettings') {
    name = document.getElementById('usernSetting').value
    document.getElementById('usern').value = name
  }
  if (whoComes == 'byCharms') {
    name = document.getElementById('usern').value
    document.getElementById('usernSetting').value = name
  }
  document.getElementById('settingsUserName').innerText = name
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
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Apply'
  }
}

function image2() {
  image = 2
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 2)
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Apply'
  }
}

function image3() {
  image = 3
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 3)
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Apply'
  }
}

function image4() {
  image = 4
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 4)
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Apply'
  }
}

function image5() {
  image = 5
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 5)
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Apply'
  }
}

function image6() {
  image = 6
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 6)
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Apply'
  }
}

function colorImage() {
  image = 7
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 7)
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Apply'
  }
}

function selectColorImage() {
  image = 8
  buttonApply.innerHTML = 'Continuar'
  localStorage.setItem('background', 8)
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Next'
  }
}

function colorGradient() {
  image = 9
  buttonApply.innerHTML = 'Aplicar'
  localStorage.setItem('background', 9)
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Apply'
  }
}

function selectColorGradient() {
  image = 10
  buttonApply.innerHTML = 'Continuar'
  localStorage.setItem('background', 10)
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Next'
  }
}

function userImage() {
  image = 11
  buttonApply.innerHTML = 'Continuar'
  localStorage.setItem('background', 11)
  if (EnStyle.checked) {
    buttonApply.innerHTML = 'Next'
  }
}

function applyimg() {
  if (image == 1) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img1.jpg)'
    settingPersonBackground.style.backgroundImage = 'url(../img/Backgrounds/img1.jpg)'
  } else if (image == 2) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img2.jpg)'
    settingPersonBackground.style.backgroundImage = 'url(../img/Backgrounds/img2.jpg)'
  } else if (image == 3) {
    document.body.style.backgroundImage = 'linear-gradient(to bottom right, #0632ff, #8706d4)'
    settingPersonBackground.style.backgroundImage = 'linear-gradient(to bottom right, #0632ff, #8706d4)'
  } else if (image == 4) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img4.jpg)'
    settingPersonBackground.style.backgroundImage = 'url(../img/Backgrounds/img4.jpg)'
  } else if (image == 5) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img5.jpg)'
    settingPersonBackground.style.backgroundImage = 'url(../img/Backgrounds/img5.jpg)'
  } else if (image == 6) {
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img6.jpg)'
    settingPersonBackground.style.backgroundImage = 'url(../img/Backgrounds/img6.jpg)'
  } else if (image == 7) {
    red = Math.random() * 255
    green = Math.random() * 255
    blue = Math.random() * 255
    document.body.style.backgroundImage = 'url(../img/Backgrounds/Transparency.png)'
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    settingPersonBackground.style.backgroundImage = 'url(../img/Backgrounds/Transparency.png)'
    settingPersonBackground.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    if (red >= 200 || blue >= 200 || green >= 200) {
      document.querySelector('.time').style.color = "#191919"
      settClock.style.color = "#191919"
    } else {
      document.querySelector('.time').removeAttribute('style')
      settClock.removeAttribute('style')
    }
  } else if (image == 8) {
    let coloring = localStorage.getItem('colorChoosed')
    if (coloring != null) {
      document.body.style.backgroundImage = 'url(../img/Backgrounds/Transparency.png)'
      document.body.style.backgroundColor = coloring
      settingPersonBackground.style.backgroundImage = 'url(../img/Backgrounds/Transparency.png)'
      settingPersonBackground.style.backgroundColor = coloring

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
    settingPersonBackground.style.backgroundImage = `linear-gradient(to bottom right, rgb(${red}, ${green}, ${blue}), rgb(${red2}, ${green2}, ${blue2}))`
  } else if (image == 10) {
    let gradienting = localStorage.getItem('gradientChoosed')
    if (gradienting != null) {
      document.body.style.backgroundImage = gradienting
      settingPersonBackground.style.backgroundImage = gradienting
      document.body.style.backgroundColor = 'white'
    } else {
      document.querySelector('.chooseGradient').style.transform = 'scale(1)'
    }
  } else if (image == 11) {
    setTimeout(() => {
      if (CusImg != null) {
        document.body.style.backgroundImage = `url(${CusImg})`
        settingPersonBackground.style.backgroundImage = `url(${CusImg})`
      } else {
        document.querySelector('.chooseImage').style.transform = 'scale(1)'
      }
    }, 1);
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
  if (!tabToggle.checked || !sTabToggle.checked) {
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

function appsDisable() {
  if (appsEnabled) {
    document.querySelector('.appsi').style.display = "none"
    appsEnabled = false
  } else {
    document.querySelector(".appsi").style.display = "block";
    appsEnabled = true
  }
}

function lockDisable() {
  if (lockEnabled) {
    document.querySelector('.locki').style.display = "none"
    lockEnabled = false
  } else {
    document.querySelector(".locki").style.display = "block";
    lockEnabled = true
  }
}

function userDisable() {
  if (userEnabled) {
    document.querySelector('.useri').style.display = "none"
    userEnabled = false
  } else {
    document.querySelector(".useri").style.display = "block";
    userEnabled = true
  }
}

function quickSettingsDisable() {
  if (quickSettingsEnabled) {
    document.getElementById('quickSetting').style.display = "none"
    document.getElementById('nSetting').style.display = "block";
    quickSettingsEnabled = false
  } else {
    document.getElementById('quickSetting').style.display = "block"
    document.getElementById('nSetting').style.display = "none";
    quickSettingsEnabled = true
  }
}

function resetDisable() {
  if (resetEnabled) {
    document.querySelector('.reseti').style.display = "none"
    resetEnabled = false
  } else {
    document.querySelector(".reseti").style.display = "block";
    resetEnabled = true
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
  settingPersonBackground.style.backgroundImage = 'url(../img/Backgrounds/Transparency.png)'
  settingPersonBackground.style.backgroundColor = color
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
  settingPersonBackground.style.backgroundImage = `linear-gradient(to bottom right, ${col1}, ${col2})`
  settingPersonBackground.style.color = 'white'
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
    settingPersonBackground.style.backgroundImage = `url(${reader.result})`
    localStorage.removeItem("CustomImage")
    localStorage.setItem("CustomImage", reader.result)
  });
  reader.readAsDataURL(imageFile.files[0]);

}

function max_min_np() {
  let app = document.getElementById('NpApp')
  let icon = document.getElementById('iconMaxMinNP')
  app.style.transitionDuration = '.2s'
  if (!NpMax) {
    app.style.left = '0'
    app.style.top = '40px'
    if (!pinned) {
      app.style.width = 'calc(100vw - 1%)'

    } else {
      app.style.width = 'calc(100vw - 15%)'
    }
    if (!winTB) {
      app.style.height = 'calc(100vh - 40px)'
    } else {
      app.style.height = 'calc(100vh - 87px)'
    }
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
  setTimeout(() => {
    app.style.transitionDuration = '0s'
  }, 1);
}

function snap_np(event) {
  event.preventDefault();
  document.getElementById('npSnap').classList.toggle('snapActive')
}

function mobile_snap_np() {
  document.getElementById('npSnapMobile').classList.toggle('snapMobileActive')
}

function hide_np() {
  document.getElementById('NpApp').style.transform = 'scale(0)'
  document.getElementById('npHided').style.display = 'flex'
}

function appear_np() {
  document.getElementById('NpApp').style.transform = 'scale(1)'
  document.getElementById('npHided').removeAttribute('style')
}

function hide_cl() {
  document.getElementById('clApp').style.transform = 'scale(0)'
  document.getElementById('clHided').style.display = 'flex'
}

function appear_cl() {
  document.getElementById('clApp').style.transform = 'scale(1)'
  document.getElementById('clHided').removeAttribute('style')
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
  document.getElementById('ghostApp').style.display = 'flex'
  document.getElementById('ghostHided').removeAttribute('style')
  if (!deathed) {
    ghostRunning = true
  }
}

function appear_setting() {
  document.getElementById('settingApp').style.transform = 'scale(1)'
  document.getElementById('settingHided').removeAttribute('style')
}


function hideGhost() {
  document.getElementById('ghostApp').style.display = 'none'
  document.getElementById('ghostHided').style.display = 'flex'
  ghostRunning = false
}

function openGhost() {
  document.getElementById('ghostApp').style.display = 'flex';
  document.getElementById('ghostHided').removeAttribute('style');
  if (!deathed) {
    ghostRunning = true
  }
}

function max_min_Mp() {
  let app = document.getElementById('mpApp')
  let appHd = document.getElementById('mpHeader')
  let icon = document.getElementById('iconMaxMinMP')
  app.style.transitionDuration = '.2s'
  if (!MpMax) {
    app.style.left = '0'
    app.style.top = '0'
    if (!pinned) {
      app.style.width = 'calc(100vw - 1%)'

    } else {
      app.style.width = 'calc(100vw - 15%)'
    } if (!winTB) {
      app.style.height = 'calc(100vh - 40px)'
    } else {
      app.style.height = 'calc(100vh - 87px)'
    }
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
  setTimeout(() => {
    app.style.transitionDuration = '0s'
  }, 1);
}

function snap_Mp(event) {
  event.preventDefault();
  document.getElementById('mpSnap').classList.toggle('snapActive')
}

function mobile_snap_Mp() {
  document.getElementById('mpSnapMobile').classList.toggle('snapMobileActive')
}

function snap_ghost(event) {
  event.preventDefault();
  document.getElementById('ghSnap').classList.toggle('snapActive')
}
function mobile_snap_ghost() {
  document.getElementById('ghSnapMobile').classList.toggle('snapMobileActive')
}

function max_min_ghost() {
  let app = document.getElementById('ghostApp')
  let appHd = document.getElementById('ghostHeader')
  let icon = document.getElementById('iconMaxMinGh')
  app.style.transitionDuration = '.2s'
  if (!ghMax) {
    app.style.left = '0'
    app.style.top = '0'
    if (!pinned) {
      app.style.width = 'calc(100vw - 1%)'

    } else {
      app.style.width = 'calc(100vw - 15%)'
    } if (!winTB) {
      app.style.height = 'calc(100vh - 40px)'
    } else {
      app.style.height = 'calc(100vh - 87px)'
    }
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
  setTimeout(() => {
    app.style.transitionDuration = '0s'
  }, 1);
}

function snap_Sett(event) {
  event.preventDefault();
  document.getElementById('settingSnap').classList.toggle('snapActive')
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
  if (clockChecker.checked || sClockChecker.checked) {
    document.querySelector('.time').style.backgroundColor = "#f0f0f066"
    document.querySelector('.time').style.backdropFilter = "blur(20px)"
    settClock.style.backgroundColor = '#f0f0f066'
    settClock.style.backdropFilter = 'blur(20px)'

    localStorage.setItem('watchBackg', 1)
  } else {
    document.querySelector('.time').style.backgroundColor = "transparent"
    document.querySelector('.time').style.backdropFilter = "none"
    settClock.style.backgroundColor = 'transparent'
    settClock.style.backdropFilter = 'none'
    localStorage.setItem('watchBackg', 0)
  }
}

function focusNp() {
  document.getElementById('NpApp').style.zIndex = '997'
  document.getElementById('clApp').style.zIndex = 'auto'
  document.getElementById('mpApp').style.zIndex = 'auto'
  document.getElementById('ghostApp').style.zIndex = 'auto'
  document.getElementById('settingApp').style.zIndex = 'auto'
}

function focusCalc() {
  document.getElementById('NpApp').style.zIndex = 'auto'
  document.getElementById('clApp').style.zIndex = '997'
  document.getElementById('mpApp').style.zIndex = 'auto'
  document.getElementById('ghostApp').style.zIndex = 'auto'
  document.getElementById('settingApp').style.zIndex = 'auto'
}

function focusMp() {
  document.getElementById('NpApp').style.zIndex = 'auto'
  document.getElementById('clApp').style.zIndex = 'auto'
  document.getElementById('mpApp').style.zIndex = '997'
  document.getElementById('ghostApp').style.zIndex = 'auto'
  document.getElementById('settingApp').style.zIndex = 'auto'
}

function focusGh() {
  document.getElementById('NpApp').style.zIndex = 'auto'
  document.getElementById('clApp').style.zIndex = 'auto'
  document.getElementById('mpApp').style.zIndex = 'auto'
  document.getElementById('ghostApp').style.zIndex = '997'
  document.getElementById('settingApp').style.zIndex = 'auto'
}

function focusSet() {
  document.getElementById('NpApp').style.zIndex = 'auto'
  document.getElementById('clApp').style.zIndex = 'auto'
  document.getElementById('mpApp').style.zIndex = 'auto'
  document.getElementById('ghostApp').style.zIndex = 'auto'
  document.getElementById('settingApp').style.zIndex = '997'
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
  app.style.width = 'var(--widthNp)'
  app.style.height = 'var(--heightNp)'
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

//Funções Mútuas

function closeApp(id) {
  if (id == 'gh1') {
    document.getElementById('ghostApp').style.display = 'none'
    ghostRunning = false
    score = -1
    ghost.removeAttribute('class')
    ghost.className = 'normal'
  } else {
    document.getElementById(id + 'App').style.transform = 'scale(0)'
    if (id == 'Np') {
      textNotepad.value = ''
    }
    if (id == 'cl') {
      document.querySelector('.calculator__display').innerHTML = '0'
      num1 = NaN;
      num2 = undefined
      op = undefined
    }
    if (id == 'mp') {
      song.src = ''
      document.getElementById('songName').innerText = 'O nome da música aparecerá aqui'
    }
    if (id == 'setting') {
      settingsGoTo('sHome')
    }
  }
}

function settingsGoTo(id) {
  let home = document.getElementById('settingsHome')
  let sys = document.getElementById('settingsSystem')
  let psn = document.getElementById('settingsPerson')
  let user = document.getElementById('settingsUser')
  let acs = document.getElementById('settingsAccess')
  let rst = document.getElementById('settingsReset')
  let abt = document.getElementById('settingsAbout')
  let bHome = document.getElementById('sHome')
  let bSys = document.getElementById('sSys')
  let bPsn = document.getElementById('sPsn')
  let bUser = document.getElementById('sUser')
  let bAcs = document.getElementById('sAcs')
  let bRst = document.getElementById('sRst')
  let bAbt = document.getElementById('sAbt')
  if (!settingLocked) {
    home.style.display = 'none'
    sys.style.display = 'none'
    psn.style.display = 'none'
    user.style.display = 'none'
    acs.style.display = 'none'
    rst.style.display = 'none'
    abt.style.display = 'none'
    bHome.className = 'settingsBarButton'
    bSys.className = 'settingsBarButton'
    bPsn.className = 'settingsBarButton'
    bUser.className = 'settingsBarButton'
    bAcs.className = 'settingsBarButton'
    bRst.className = 'settingsBarButton'
    bAbt.className = 'settingsBarButton'
    if (id == 'sHome') {
      home.style.display = 'block'
      bHome.className = 'settingsBarButtonActive'
    }
    if (id == 'sSys') {
      sys.style.display = 'block'
      bSys.className = 'settingsBarButtonActive'
    }
    if (id == 'sPsn') {
      psn.style.display = 'block'
      bPsn.className = 'settingsBarButtonActive'
    }
    if (id == 'sUser') {
      user.style.display = 'block'
      bUser.className = 'settingsBarButtonActive'
    }
    if (id == 'sAcs') {
      acs.style.display = 'block'
      bAcs.className = 'settingsBarButtonActive'
    }
    if (id == 'sRst') {
      rst.style.display = 'block'
      bRst.className = 'settingsBarButtonActive'
    }
    if (id == 'sAbt') {
      abt.style.display = 'block'
      bAbt.className = 'settingsBarButtonActive'
    }
  } else {
    if (settingAccessAllow) {
      home.style.display = 'none'
      sys.style.display = 'none'
      psn.style.display = 'none'
      user.style.display = 'none'
      acs.style.display = 'none'
      rst.style.display = 'none'
      abt.style.display = 'none'
      bHome.className = 'settingsBarButton'
      bSys.className = 'settingsBarButton'
      bPsn.className = 'settingsBarButton'
      bUser.className = 'settingsBarButton'
      bAcs.className = 'settingsBarButton'
      bRst.className = 'settingsBarButton'
      bAbt.className = 'settingsBarButton'
      if (id == 'sAcs') {
        acs.style.display = 'block'
        bAcs.className = 'settingsBarButtonActive'
      } else if (id == 'sHome') {
        home.style.display = 'block'
        bHome.className = 'settingsBarButtonActive'
      } else {
        alert('Configurações bloqueadas')
        home.style.display = 'block'
        bHome.className = 'settingsBarButtonActive'
      }
    } else {
      alert('Configurações bloqueadas')
      home.style.display = 'block'
      bHome.className = 'settingsBarButtonActive'
    }
  }
}

function max_min_Sett() {
  let app = document.getElementById('settingApp')
  let icon = document.getElementById('iconMaxMinSetting')
  let closeButton = document.getElementById('setting')
  app.style.transitionDuration = '.2s'
  if (!SettingMax) {
    app.style.left = '0'
    app.style.top = '0'
    if (!pinned) {
      app.style.width = 'calc(100vw - 1%)'

    } else {
      app.style.width = 'calc(100vw - 15%)'
    }
    if (!winTB) {
      app.style.height = 'calc(100vh - 40px)'
    } else {
      app.style.height = 'calc(100vh - 87px)'
    }
    SettingMax = true
    icon.src = 'img/WindowIcons/Minimize.png'
    app.style.borderRadius = '0'
    closeButton.style.borderRadius = '0'
  } else {
    app.style.left = 'var(--leftSpaceSettings)'
    app.style.top = 'var(--topSpaceSettings)'
    app.style.width = 'var(--widthSettings)'
    app.style.height = 'var(--heightSettings)'
    SettingMax = false
    icon.src = 'img/WindowIcons/Maximize.png'
    app.style.borderRadius = '8px'
    closeButton.removeAttribute('style')
  }
  setTimeout(() => {
    app.style.transitionDuration = '0s'
  }, 1);
}

function hideSett() {
  document.getElementById('settingApp').style.transform = 'scale(0)'
  document.getElementById('settingHided').style.display = 'flex'
}

function changeWebSiteTheme() {
  if (document.body.className == "dark") {
    document.body.removeAttribute('class')
    localStorage.setItem("darkTheme", "no")
  } else {
    document.body.className = "dark"
    localStorage.setItem("darkTheme", "yes")
  }
}

function pickTB() {
  let changeTB = document.getElementById('changeTB')
  if (changeTB.checked) {
    document.getElementById('wTB').style.bottom = '0'
    document.getElementById('nTB').style.bottom = '-50px'
    winTB = true
    if (NpMax) {
      document.getElementById('NpApp').style.height = 'calc(100vh - 87px)'
    }
    if (MpMax) {
      document.getElementById('mpApp').style.height = 'calc(100vh - 87px)'
    }
    if (ghMax) {
      document.getElementById('ghostApp').style.height = 'calc(100vh - 87px)'
    }
    if (SettingMax) {
      document.getElementById('settingApp').style.height = 'calc(100vh - 87px)'
    }
  } else {
    document.getElementById('wTB').style.bottom = '-50px'
    document.getElementById('nTB').style.bottom = '0px'
    winTB = false
    if (NpMax) {
      document.getElementById('NpApp').style.height = 'calc(100vh - 40px)'
    }
    if (MpMax) {
      document.getElementById('mpApp').style.height = 'calc(100vh - 40px)'
    }
    if (ghMax) {
      document.getElementById('ghostApp').style.height = 'calc(100vh - 40px)'
    }
    if (SettingMax) {
      document.getElementById('settingApp').style.height = 'calc(100vh - 40px)'
    }
  }
}

function pickAlign() {
  let alignChoose = document.getElementById('iconsAlign')
  if (alignChoose.checked) {
    document.getElementById('wTB').style.justifyContent = 'center'
  } else {
    document.getElementById('wTB').style.justifyContent = 'flex-start'
  }
}

function enableGames() {
  let RecGames = document.getElementById('recGames')
  let CharmsGhost = document.getElementById('ghCharms')
  let TBGhost = document.getElementById('ghTB')
  let ghButton = document.getElementById('ghButton')
  if (!gamesChecker.checked) {
    RecGames.style.display = 'none'
    CharmsGhost.style.display = 'none'
    TBGhost.style.display = 'none'
    ghButton.style.display = 'none'
  } else {
    RecGames.style.display = 'block'
    CharmsGhost.style.display = 'block'
    TBGhost.style.display = 'block'
    ghButton.style.display = 'block'
  }
}

function dayCycle() {
  let hourForm = document.getElementById('hourForm')
  if (!hourForm.checked) {
    cycle.style.display = 'none'
    clockAMPM = false
    localStorage.setItem('cAP', 0)
  } else {
    cycle.style.display = 'block'
    clockAMPM = true
    localStorage.setItem('cAP', 1)
  }
}

function passwordToSettings() {
  settingPassword = prompt('Digite a senha para as configurações')
  if (settingPassword != '' || settingPassword != '') {
    localStorage.setItem('settingPassword', settingPassword)
    settingsGoTo('sHome')
    settingLocked = true
    localStorage.setItem('sLocked', 1)
    document.querySelector('.alertLock').style.display = 'block'
  }
}

function autoLockSetting() {
  settingPassword = localStorage.getItem('settingPassword')
  settingLocked = localStorage.getItem('sLocked')
  if (settingLocked == 1) {
    settingLocked = true
    document.querySelector('.alertLock').style.display = 'block'
  } else {
    settingLocked = false
  }
}

function unlockSettings() {
  passTst = prompt("Digite a senha das configurações")
  if (passTst == settingPassword) {
    alert('Configurações desbloqueada')
    settingLocked = false
    localStorage.setItem('sLocked', 0)
    document.querySelector('.alertLock').style.display = 'none'
  } else {
    alert('Senha errada, tente novamente')
  }
}

function genere() {
  let genChoser = document.getElementById('settingsGen')
  if (genChoser.value == 'g1') {
    localStorage.setItem('genero', 'Bem-vindo')
  } else if (genChoser.value == 'g2') {
    localStorage.setItem('genero', 'Bem-vinda')
  } else if (genChoser.value == 'g3') {
    localStorage.setItem('genero', 'Olá')
  }
}