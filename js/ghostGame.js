const ghost = document.getElementById("ghost");
const crystal = document.getElementById("crystal");
function jump() {
    if (dispatchEvent.classList != "jump") {
        //first it checks if the dino is mid-jump. If not, it makes it jump.
        ghost.classList.add("jump");
        setTimeout(function () {
            ghost.classList.remove("jump");
            //removes the jump class from the dino once it has jumped so that it can jump again
        }, 500);
    }
}
let checkerDeath = document.getElementById('disScr')
let checkAlive = setInterval(function () {
    if (!checkerDeath.checked) {
    let ghostTop = parseInt(
        window.getComputedStyle(ghost).getPropertyValue("top")
    );
    let crystalLeft = parseInt(
        window.getComputedStyle(crystal).getPropertyValue("left")
    );
    //check for collision
    if (crystalLeft > 0 && crystalLeft < 70 && ghostTop >= 143) {
        ghost.style.animationPlayState = "paused";
        crystal.style.animationPlayState = "paused";
        alert("Whoops! Game Over :(");
        alert('Try again: ')
        ghost.removeAttribute('style')
        crystal.removeAttribute('style')
    }
}
}, 10);

setInterval(() => {
    let typeOfCrystal = Math.floor((Math.random() * 10) + 1)
    crystal.className = `type${typeOfCrystal}`
}, 500);