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
let buttonApply = document.getElementById('buttontoApply')
let sizing = 1
let searchInp = document.getElementById('searchinput')
let searchB = document.getElementById('searchbutton')
let song = document.getElementById('songByUser')


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
  buttonApply.innerHTML = 'Aplicar'
}

function image2() {
  image = 2
  buttonApply.innerHTML = 'Aplicar'
}

function image3() {
  image = 3
  buttonApply.innerHTML = 'Aplicar'
}

function image4() {
  image = 4
  buttonApply.innerHTML = 'Aplicar'
}

function image5() {
  image = 5
  buttonApply.innerHTML = 'Aplicar'
}

function image6() {
  image = 6
  buttonApply.innerHTML = 'Aplicar'
}

function colorImage() {
  image = 7
  buttonApply.innerHTML = 'Aplicar'
}

function selectColorImage() {
  image = 8
  buttonApply.innerHTML = 'Continuar'
}

function colorGradient() {
  image = 9
  buttonApply.innerHTML = 'Aplicar'
}

function selectColorGradient() {
  image = 10
  buttonApply.innerHTML = 'Continuar'
}

function userImage() {
  image = 11
  buttonApply.innerHTML = 'Continuar'
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
    document.body.style.backgroundImage = 'url(../img/Backgrounds/img6.jpg)'
    document.body.style.color = 'white'
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
  document.querySelector('.chooseGradient').removeAttribute('style')
  document.querySelector('.chooseImage').removeAttribute('style')
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

function applyGradient() {
  let col1 = document.getElementById('colorChoosed1').value
  let col2 = document.getElementById('colorChoosed2').value
  document.body.style.backgroundImage = `linear-gradient(to bottom right, ${col1}, ${col2})`
  document.body.style.color = 'white'
  let closeInp = document.getElementById('closeThisGd')
  if (closeInp.checked) {
    closePop()
  }
}

//Input da imagem

let imageFile = document.getElementById('imageToBckg')
imageFile.addEventListener('change', function() {
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
  reader.addEventListener('load', function() {
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
    app.style.left = '100px'
    app.style.top = '100px'
    app.style.width = '800px'
    app.style.height = '600px'
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

function lockAllSS() {
  var pin = document.getElementById('passcharms').value
  var passwordlocks = document.getElementById('passlock').value
  document.getElementById('scrSvr').style.display = 'block'
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

function disScrSvr() {
  document.getElementById('scrSvr').style.display = 'none'
}

function clockBckg() {
  let clockChecker = document.getElementById('clockBckg');
  if (clockChecker.checked) {
    document.querySelector('.time').style.backgroundColor = "#f0f0f066"
    document.querySelector('.time').style.backdropFilter = "blur(20px)"
  } else {
    document.querySelector('.time').style.backgroundColor = "transparent"
    document.querySelector('.time').style.backdropFilter = "none"
  }
}

function focusNp() {
  document.getElementById('NpApp').style.zIndex = '998'
  document.getElementById('clApp').style.zIndex = 'auto'
  document.getElementById('mpApp').style.zIndex = 'auto'
}

function focusCalc() {
  document.getElementById('NpApp').style.zIndex = 'auto'
  document.getElementById('clApp').style.zIndex = '998'
  document.getElementById('mpApp').style.zIndex = 'auto'
}

function focusMp() {
  document.getElementById('NpApp').style.zIndex = 'auto'
  document.getElementById('clApp').style.zIndex = 'auto'
  document.getElementById('mpApp').style.zIndex = '998'
}

document.querySelector('#searchinput').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    searchingNow()
  }
});

document.querySelector('.helpWithCharms').addEventListener('mouseover', function() {
  document.querySelector('.helpWithCharms').style.opacity = '0';
  setTimeout(() => {
    document.querySelector('.helpWithCharms').style.display = 'none';
  }, 200);
})

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
    engineselector.style.width = '40px'
    engineselector.style.height = '40px'
    searchInp.style.height = '40px'
    searchInp.style.fontSize = '15px'
    searchB.style.width = '40px'
    searchB.style.height = '40px'
  } else if (sizing == 2) {
    engineselector.removeAttribute('style')
    searchInp.removeAttribute('style')
    searchB.removeAttribute('style')
  } else if (sizing == 3) {
    engineselector.style.width = '80px'
    engineselector.style.height = '80px'
    searchInp.style.height = '80px'
    searchInp.style.fontSize = '30px'
    searchB.style.width = '80px'
    searchB.style.height = '80px'
  } else if (sizing == 4) {
    engineselector.style.width = '120px'
    engineselector.style.height = '120px'
    searchInp.style.height = '120px'
    searchInp.style.fontSize = '60px'
    searchB.style.width = '120px'
    searchB.style.height = '120px'
  }
} 

function openGitHub() {
  setTimeout(() => {
    window.open('https:/github.com/IgorSilva-S/New_Tab_Screen')
  }, 210);
}

let songFile = document.getElementById('chooseSong')
songFile.addEventListener('change', function() {
  let songReader = new FileReader
  songReader.addEventListener('load', function() {
    let songName = document.getElementById('chooseSong').value
    songName = songName.replace(/C:\\fakepath\\/i, '')
    document.getElementById('songName').innerText = songName
    song.src = songReader.result
    song.play()
  
  })
  songReader.readAsDataURL(songFile.files[0])
})