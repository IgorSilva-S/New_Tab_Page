const ghost = document.getElementById("ghost");
const crystal = document.getElementById("crystal");
const soil = document.querySelector(".soil");
const clouds = document.querySelector(".clouds");
const gameOver = document.querySelector(".gameAlerts");
let score = 0
let bScore = 1
let maxscore = 0
let normalTime = 1.2
let cloudsTime = 1.7
let bNT = 1.2
let deathed = false
//let prevDie = document.getElementById('prevDie')
const oldScore = scr => {
    return ('0000' + scr).slice(-5)
}

maxscore = localStorage.getItem('yourMax')
if (maxscore == null) {
    maxscore = 0
}

document.getElementById('mSign').innerText = `Max.Score: ${oldScore(maxscore)}`

setInterval(() => {
    if (ghostRunning) {
        score = score + 1
        document.getElementById('scrSign').innerText = `Score: ${oldScore(score)}`
        if (score == 99999) {
            score = 0
        }
        if (score % 100 == 0) {
            bScore = score
        }
        crystal.addEventListener('animationiteration', function () {
            if (bScore % 100 == 0) {
                normalTime = normalTime - 0.05
                cloudsTime = cloudsTime - 0.05
                crystal.style.animationDuration = `${normalTime}s`
                soil.style.animationDuration = `${normalTime}s`
                clouds.style.animationDuration = `${cloudsTime}s`
                bScore = 1
            }
        })
    }
}, 100);
function jump() {
    if (ghostRunning) {
        if (dispatchEvent.classList != "jump") {
            //first it checks if the dino is mid-jump. If not, it makes it jump.
            ghost.classList.add("jump");
            setTimeout(function () {
                ghost.classList.remove("jump");
                //removes the jump class from the dino once it has jumped so that it can jump again
            }, 500);
        }
    }
}
let checkAlive = setInterval(function () {
    let ghostTop = parseInt(
        window.getComputedStyle(ghost).getPropertyValue("top")
    );
    let crystalLeft = parseInt(
        window.getComputedStyle(crystal).getPropertyValue("left")
    );
    //check for collision
        if (crystalLeft > 0 && crystalLeft < 70 && ghostTop >= 143) {
            ghostRunning = false
            deathed = true
            ghost.style.animationPlayState = "paused";
            crystal.style.animationPlayState = "paused";
            soil.style.animationPlayState = "paused";
            clouds.style.animationPlayState = "paused";
            normalTime = 1.2
            cloudsTime = 1.7
            if (score > maxscore) {
                maxscore = score
                document.getElementById('mSign').innerText = `Max.Score: ${oldScore(maxscore)}`
                localStorage.setItem('yourMax', maxscore)
            }
            gameOver.style.display = 'flex'
            ghost.classList.remove("normal")
            ghost.classList.add("death")
        }


}, 10);

crystal.addEventListener('animationiteration', function () {
    let typeOfCrystal = Math.floor((Math.random() * 6) + 1)
    crystal.className = `type${typeOfCrystal}`
})

function resetGame() {
    deathed = false
    ghostRunning = true
    ghost.removeAttribute('style')
    crystal.removeAttribute('style')
    crystal.style.left = "100%"
    soil.removeAttribute('style')
    clouds.removeAttribute('style')
    score = -1
    bScore = 1
    ghost.classList.remove("death")
    ghost.classList.add("normal")
    gameOver.style.display = 'none'
}