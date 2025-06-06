// HP
function updateHPImage(hp) {
    const hpImg = document.getElementById("healtPoint")
    hpImg.src = `../../assets/images/HP-${hp}.png`
}

window.onload = function () {
    const HPLimit = 2
    if (localStorage.getItem("HP") === null) {
        localStorage.setItem("HP", HPLimit)
    }

    const currentHP = parseInt(localStorage.getItem("HP"))
    updateHPImage(currentHP)
}
// HP END
// SFX
let clickBtnOpen = new Audio("../../assets/sounds/buttonOri1.mp3")
let clickBtnClose = new Audio("../../assets/sounds/buttonX.mp3")
let sGameOver = new Audio("../../assets/sounds/gameOver.mp3")
let smashHit = new Audio("../../assets/sounds/smashHit.mp3")

function playSound(audio) {
    const sound = audio.cloneNode()
    sound.play()
}
// SFX END
// MENU
const menu = document.getElementById("menuBtn")
const popupMenu = document.getElementById("popupMenu")
const closeMenu = document.getElementById("closeMenu")

menu.onclick = function () {
    playSound(clickBtnOpen)
    popupMenu.style.display = "flex"
}

closeMenu.onclick = function () {
    playSound(clickBtnClose)
    popupMenu.style.display = "none"
}
// BTN MENU
const resume = document.getElementById("resumeBtn")
const setting = document.getElementById("settingBtn")
const quit = document.getElementById("quitBtn")
const popupSetting = document.getElementById("popupSetting")
const closeSetting = document.getElementById("closeSetting")

resume.onclick = function () {
    playSound(clickBtnOpen)
    popupMenu.style.display = "none"
}

setting.onclick = function () {
    playSound(clickBtnOpen)
    popupSetting.style.display = "flex"
}

closeSetting.onclick = function () {
    playSound(clickBtnClose)
    popupSetting.style.display = "none"
}

quit.onclick = function () {
    playSound(clickBtnOpen)
    localStorage.removeItem("HP")
    localStorage.removeItem("unlockedLevel")
    setTimeout(() => {
        location.href = ("../../index.html")
    }, 500);
}
// BTN MENU END
// MENU END
// SETTING
const change1 = document.querySelectorAll(".bg-target1")
const change2 = document.querySelectorAll(".bg-target2")
const change3 = document.querySelectorAll(".bg-target3")
const bgOrange = document.getElementById("orange")
const bgBlue = document.getElementById("blue")
const bgBlack = document.getElementById("black")

bgOrange.onclick = function () {
    playSound(clickBtnOpen)
    change1.forEach(el1 => {
        el1.style.backgroundColor = "#FA812F";
    });
    change2.forEach(el2 => {
        el2.style.backgroundColor = "#FFB22C";
    });
    change3.forEach(el3 => {
        el3.style.background = "linear-gradient(to bottom,rgb(237, 147, 13),rgb(225, 184, 100))";
    });
}

bgBlue.onclick = function () {
    playSound(clickBtnOpen)
    change1.forEach(el1 => {
        el1.style.backgroundColor = "#3D90D7";
    });
    change2.forEach(el2 => {
        el2.style.backgroundColor = "#3A59D1";
    });
    change3.forEach(el3 => {
        el3.style.background = "linear-gradient(to bottom, #3A59D1, #7AC6D2)";
    });
}

bgBlack.onclick = function () {
    playSound(clickBtnOpen)
    change1.forEach(el1 => {
        el1.style.backgroundColor = "#3C3D37";
    });
    change2.forEach(el2 => {
        el2.style.backgroundColor = "#697565";
    });
    change3.forEach(el3 => {
        el3.style.background = "linear-gradient(to bottom, #1E201E, #697565)";
    });
}
// SETTING END
// JAWABAN
const submit = document.getElementById("btnSubmit1")
const answerResults = document.getElementById("answerResults")
const btnGameOver = document.getElementById("btnGameOver")

submit.onclick = function (e) {
    playSound(clickBtnOpen)
    e.preventDefault()
    setTimeout(() => {
        const jawabanUser1 = document.getElementById("jawabanUser1").value.trim().toLowerCase()
        const jawabanBenar = "kotak makan"

        if (jawabanUser1 === jawabanBenar) {
            localStorage.setItem("unlockedLevel", "2")
            location.href = "level2.html"
        } else {
            playSound(clickBtnClose)
            answerResults.style.display = "flex"

            let nowHP = parseInt(localStorage.getItem("HP"))

            if (nowHP > 0) {
                nowHP -= 1
                localStorage.setItem("HP", nowHP)
            }
            updateHPImage(nowHP)

            if (nowHP === 0) {
                sGameOver.play()
                answerResults.style.display = "none"
                gameOver.style.display = "flex"
            }
        }
    }, 500);
}

answerResults.onclick = function () {
    answerResults.style.display = "none"
}

btnGameOver.onclick = function () {
    gameOver.style.display = "none"
    localStorage.removeItem("HP")
    localStorage.removeItem("unlockedLevel")
    setTimeout(() => {
        location.href = "../../index.html"
    }, 500);
}

const jawabanUser2 = document.getElementById("jawabanUser2")
const soalLevel2 = document.getElementById("soalLevel2")

jawabanUser2.onclick = function () {
    playSound(clickBtnOpen)
    setTimeout(() => {
        localStorage.setItem("unlockedLevel", "3")
        location.href = "level3.html"
    }, 500);
}

soalLevel2.onclick = function () {
    playSound(clickBtnClose)
    answerResults.style.display = "flex"

    let nowHP = parseInt(localStorage.getItem("HP"))

    if (nowHP > 0) {
        nowHP -= 1
        localStorage.setItem("HP", nowHP)
    }
    updateHPImage(nowHP)

    if (nowHP === 0) {
        sGameOver.play()
        answerResults.style.display = "none"
        gameOver.style.display = "flex"
    }
}

function btn3Benar() {
    playSound(clickBtnOpen)
    setTimeout(() => {
        localStorage.setItem("unlockedLevel", "4")
        location.href = "level4.html"
    }, 500);
}

function btn4Benar() {
    playSound(clickBtnOpen)
    setTimeout(() => {
        localStorage.setItem("unlockedLevel", "5")
        location.href = "level5.html"
    }, 500);
}

function btn3Salah() {
    playSound(clickBtnClose)
    answerResults.style.display = "flex"

    let nowHP = parseInt(localStorage.getItem("HP"))

    if (nowHP > 0) {
        nowHP -= 1
        localStorage.setItem("HP", nowHP)
    }
    updateHPImage(nowHP)

    if (nowHP === 0) {
        sGameOver.play()
        answerResults.style.display = "none"
        gameOver.style.display = "flex"
    }
}

// LEVEL 5
let counthHit = 50
const monster5 = document.getElementById("monsterLvl5")
const jumlahHit = document.getElementById("jumlahHit")
const humman5 = document.getElementById("hummanLvl5")

monster5.onclick = function () {
    playSound(smashHit)
    counthHit -= 1
    jumlahHit.textContent = counthHit

    if (counthHit === 0) {
        setTimeout(() => {
            localStorage.setItem("unlockedLevel", "6")
            location.href = "level6.html"
        }, 500);
    } else if (counthHit === 1) {
        monster5.style.display = "none"
        humman5.style.display = "block"

        setTimeout(() => {
            monster5.style.display = "block"
            humman5.style.display = "none"
        }, 10000);
    }
}

humman5.onclick = function () {
    playSound(clickBtnClose)
    answerResults.style.display = "flex"

    setTimeout(() => {
        counthHit = 50
        jumlahHit.textContent = counthHit
        monster5.style.display = "block"
        humman5.style.display = "none"
    }, 500);
    let nowHP = parseInt(localStorage.getItem("HP"))

    if (nowHP > 0) {
        nowHP -= 1
        localStorage.setItem("HP", nowHP)
    }
    updateHPImage(nowHP)

    if (nowHP === 0) {
        sGameOver.play()
        answerResults.style.display = "none"
        gameOver.style.display = "flex"
    }
}
// LEVEL 5 END
// LEVEL 6
const soalBtn6 = document.getElementById("soalBtn6")

function munculBtn6() {
    setTimeout(() => {
        soalBtn6.style.display = "block"
    }, 10000);
}

soalBtn6.onclick = function () {
    playSound(clickBtnOpen)
    setTimeout(() => {
        localStorage.setItem("unlockedLevel", "7")
        location.href = "level7.html"
    }, 500);
}
document.addEventListener("click", munculBtn6)
document.addEventListener("touchstart", munculBtn6)
// LEVEL 6 END
// LEVEL 7
function btn7Benar() {
    playSound(clickBtnOpen)
    setTimeout(() => {
        localStorage.setItem("unlockedLevel", "8")
        location.href = "level8.html"
    }, 500);
}
// LEVEL 7 END
// LEVEL 8
function btn8Benar() {
    playSound(clickBtnOpen)
    setTimeout(() => {
        localStorage.setItem("unlockedLevel", "9")
        location.href = "level9.html"
    }, 500);
}
// LEVEL 8 END
// LEVEL 9
const submit9 = document.getElementById("btnSubmit9")
const btnLoby = document.getElementById("backLoby9")

submit9.onclick = function (e) {
    playSound(clickBtnOpen)
    e.preventDefault()
    setTimeout(() => {
        const jawabanUser9 = document.getElementById("jawabanUser9").value.trim().toLowerCase()
        const jawabanBenar9 = "hidup jokowi"

        if (jawabanUser9 === jawabanBenar9) {
            localStorage.setItem("unlockedLevel", "10")
            location.href = "level10.html"
        } else {
            playSound(clickBtnClose)
            answerResults.style.display = "flex"

            let nowHP = parseInt(localStorage.getItem("HP"))

            if (nowHP > 0) {
                nowHP -= 1
                localStorage.setItem("HP", nowHP)
            }
            updateHPImage(nowHP)

            if (nowHP === 0) {
                sGameOver.play()
                answerResults.style.display = "none"
                gameOver.style.display = "flex"
            }
        }
    }, 500);
}

btnLoby.onclick = function () {
    playSound(clickBtnOpen)
    localStorage.removeItem("HP")
    localStorage.removeItem("unlockedLevel")
    setTimeout(() => {
        location.href = ("../../index.html")
    }, 500);
}
// LEVEL 9 END
// LEVEL 10
const submit10 = document.getElementById("btnSubmit10")

submit10.onclick = function (e) {
    playSound(clickBtnOpen)
    e.preventDefault()
    setTimeout(() => {
        const time = new Date()
        const jam = time.getHours().toString().padStart(2, "0")
        const menit = time.getMinutes().toString().padStart(2, "0")
        const newTime = `${jam}:${menit}`

        const jawabanUser10 = document.getElementById("jawabanUser10").value.trim()

        if (jawabanUser10 === newTime) {
            localStorage.setItem("time", newTime)
            localStorage.setItem("unlockedLevel", "11")
            location.href = "winner.html"
        } else {
            playSound(clickBtnClose)
            answerResults.style.display = "flex"

            let nowHP = parseInt(localStorage.getItem("HP"))

            if (nowHP > 0) {
                nowHP -= 1
                localStorage.setItem("HP", nowHP)
            }
            updateHPImage(nowHP)

            if (nowHP === 0) {
                sGameOver.play()
                answerResults.style.display = "none"
                gameOver.style.display = "flex"
            }
        }
    }, 500);
}

document.getElementById("nameWin").innerHTML = `PLAYER NAME : ${localStorage.getItem("akun")}<br> TIME : ${localStorage.getItem("time")}`
// LEVEL 10 END
// JAWABAN END
