window.onload = function () {
    songLoby.play()
    setTimeout(() => {
        JOY.classList.add("show-JOY")
        JOY.classList.remove("hide-JOY")
        JOY.onclick = function () {
            popupSecret.style.display = "flex";
            const popupComponent = popupSecret.querySelector(".popup-component")
            popupComponent.classList.add("show-anim")
            playSound(clickBtnOpen)

            setTimeout(() => {
                popupComponent.classList.remove("show-anim")
            }, 500);
        }
        setTimeout(() => {
            JOY.classList.remove("show-JOY")
            JOY.classList.add("hide-JOY")
            popupJoyShow = false
        }, 10000);
    }, 27000);
}

const akun = localStorage.getItem("akun")
if (!akun) {
    document.getElementById("popupAkun").style.display = "flex"
}

function simpanAkun(e) {
    playSound(clickBtnOpen)
    const player = document.getElementById("inputAkun").value.trim()
    if (player !== "") {
        localStorage.setItem("akun", player)
        document.getElementById("popupAkun").style.display = "none"
    } else {
        playSound(clickBtnClose)
        document.getElementById("warningAkun").style.display = "block"
    }
}
// ADMIN
const loginAdmin = document.getElementById("loginAdmin")
const popupLAdmin = document.getElementById("popupLAdmin")
const closeLAdmin = document.getElementById("closeLAdmin")
const submitAkun = document.getElementById("submitAkun")
loginAdmin.onclick = function () {
    popupLAdmin.style.display = "flex";

    const popupComponent = popupLAdmin.querySelector(".popup-component")
    popupComponent.classList.add("show-anim")
    playSound(clickBtnOpen)

    setTimeout(() => {
        popupComponent.classList.remove("show-anim")
    }, 500);
}

closeLAdmin.onclick = function () {
    const popupComponent = popupLAdmin.querySelector(".popup-component")
    popupComponent.classList.add("hide-anim")

    playSound(clickBtnClose)

    setTimeout(() => {
        popupLAdmin.style.display = "none";
        popupComponent.classList.remove("hide-anim")
    }, 500);
};

submitAkun.onclick = function () {
    const inputUser = document.getElementById("userName").value
    const inputPassword = document.getElementById("password").value
    const UserName = "ADMIN"
    const Password = "GAMEPERTAMAAJA"

    if (inputUser === UserName && inputPassword === Password) {
        playSound(clickBtnOpen)
        localStorage.setItem("Role", "Admin")
        popupLAdmin.style.display = "none"
        adminBtn.style.display = "block"
        table1.style.display = "none"
        table2.style.display = "flex"
    } else {
        playSound(clickBtnClose)
    }
}

const adminBtn = document.getElementById("adminBtn")
const popupAdmin = document.getElementById("popupAdmin")
const closeAdmin = document.getElementById("closeAdmin")
adminBtn.onclick = function () {
    localStorage.setItem("unlockedLevel", "10")

    popupAdmin.style.display = "flex";

    const popupComponent = popupAdmin.querySelector(".popup-component")
    popupComponent.classList.add("show-anim")
    playSound(clickBtnOpen)

    setTimeout(() => {
        popupComponent.classList.remove("show-anim")
    }, 500);
}

closeAdmin.onclick = function () {
    const popupComponent = popupAdmin.querySelector(".popup-component")
    popupComponent.classList.add("hide-anim")

    playSound(clickBtnClose)

    setTimeout(() => {
        popupAdmin.style.display = "none";
        popupComponent.classList.remove("hide-anim")
    }, 500);
};

function logOut() {
    playSound(clickBtnOpen)
    setTimeout(() => {
        localStorage.removeItem("Role", "Admin")
        popupLAdmin.style.display = "none"
        adminBtn.style.display = "none"
        table1.style.display = "flex"
        table2.style.display = "none"
    }, 500);
}

const table1 = document.getElementById("tableAdmin1")
const table2 = document.getElementById("tableAdmin2")

if (localStorage.getItem("Role") === "Admin") {
    adminBtn.style.display = "block"
    table1.style.display = "none"
    table2.style.display = "flex"
} else {
    adminBtn.style.display = "none"
    table1.style.display = "flex"
    table2.style.display = "none"
}

// ADMIN END
// SFX
let clickBtnOpen = new Audio("assets/sounds/buttonOri1.mp3")
let clickBtnClose = new Audio("assets/sounds/buttonX.mp3")
let songLoby = new Audio("assets/sounds/songGameLoby.mp3")

function playSound(audio) {
    const sound = audio.cloneNode()
    sound.play()
}

function playSongLoby() {
    songLoby.play()
}

document.addEventListener("click", playSongLoby)
document.addEventListener("touchstart", playSongLoby)
// SFX END
// LOGO SECRET
// const logoSecret = document.getElementById("logoSecret")

// let jumlahClick = 0
// logoSecret.onclick = function () {
//     jumlahClick += 1

//     if (jumlahClick === 20) {
//         console.log(`kamu sudah click ini 20x (akan muncul popuup)`)
//         jumlahClick -= 20
//     } else {
//         console.log(jumlahClick)
//     }
// }
// LOGO SECRET END
// SECRET JOY
const JOY = document.getElementById("secretJOY")
const popupSecret = document.getElementById("popupSecret")
const closeSecret = document.getElementById("closeSecret")

let popupJoyShow = false

function showJoy() {
    if (popupJoyShow) return
    popupJoyShow = true

    setTimeout(() => {
        JOY.classList.add("show-JOY")
        JOY.classList.remove("hide-JOY")
        JOY.onclick = function () {
            popupSecret.style.display = "flex";
            const popupComponent = popupSecret.querySelector(".popup-component")
            popupComponent.classList.add("show-anim")
            playSound(clickBtnOpen)

            setTimeout(() => {
                popupComponent.classList.remove("show-anim")
            }, 500);
        }
        setTimeout(() => {
            JOY.classList.remove("show-JOY")
            JOY.classList.add("hide-JOY")
            popupJoyShow = false
        }, 10000);
    }, 20000);
}

document.addEventListener("click", showJoy)
document.addEventListener("touchstart", showJoy)

closeSecret.onclick = function () {
    const popupComponent = popupSecret.querySelector(".popup-component")
    popupComponent.classList.add("hide-anim")

    playSound(clickBtnClose)

    setTimeout(() => {
        popupSecret.style.display = "none";
        popupComponent.classList.remove("hide-anim")
    }, 500);
}
function btnCopy() {
    const pw9 = document.getElementById("password9").innerHTML
    playSound(clickBtnOpen)

    setTimeout(() => {
        navigator.clipboard.writeText(pw9)
    }, 500);
}
// SECRET JOY END
// POPUP PLAY
const popupPlay = document.getElementById("popupPlay");
const playBtn = document.getElementById("playBtn");
const game1 = document.getElementById("game1");
const game2 = document.getElementById("game2");
const game3 = document.getElementById("game3");
const closePlay = document.getElementById("closePlay");

playBtn.onclick = function () {
    popupPlay.style.display = "flex";

    const popupComponent = popupPlay.querySelector(".popup-component")
    popupComponent.classList.add("show-anim")
    playSound(clickBtnOpen)

    setTimeout(() => {
        popupComponent.classList.remove("show-anim")
    }, 500);
};

game1.onclick = function () {
    playSound(clickBtnOpen)

    setTimeout(() => {
        location.href = ("games/tebakGambar/level1.html")
    }, 500);
};

game2.onclick = function () {
    playSound(clickBtnOpen)

    setTimeout(() => {
        location.href = ("#")
    }, 500);
};

game3.onclick = function () {
    playSound(clickBtnOpen)

    setTimeout(() => {
        location.href = ("#")
    }, 500);
};

closePlay.onclick = function () {
    const popupComponent = popupPlay.querySelector(".popup-component")
    popupComponent.classList.add("hide-anim")

    playSound(clickBtnClose)

    setTimeout(() => {
        popupPlay.style.display = "none";
        popupComponent.classList.remove("hide-anim")
    }, 500);
};
// POPUP PLAY END

// POPUP SETTING
const settingBtn = document.getElementById("settingBtn")
const popupSetting = document.getElementById("popupSetting");
const change1 = document.querySelectorAll(".bg-target1")
const change2 = document.querySelectorAll(".bg-target2")
const change3 = document.querySelectorAll(".bg-target3")
const bgOrange = document.getElementById("orange")
const bgBlue = document.getElementById("blue")
const bgBlack = document.getElementById("black")
const closeSetting = document.getElementById("closeSetting")

settingBtn.onclick = function () {
    popupSetting.style.display = "flex";
    const popupComponent = popupSetting.querySelector(".popup-component")
    popupComponent.classList.add("show-anim")

    playSound(clickBtnOpen)

    setTimeout(() => {
        popupComponent.classList.remove("show-anim")
    }, 500);
};

closeSetting.onclick = function () {
    const popupComponent = popupSetting.querySelector(".popup-component")
    popupComponent.classList.add("hide-anim")

    playSound(clickBtnClose)

    setTimeout(() => {
        popupSetting.style.display = "none";
        popupComponent.classList.remove("hide-anim")
    }, 500);
};

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

const songToggle = document.getElementById("settingSong")

songToggle.onclick = function () {
    songToggle.classList.toggle("active")

    if (songToggle.classList.contains("active")) {
        songLoby.muted = true
    } else {
        songLoby.muted = false
    }
}

// POPUP SETTING END

// POPUP ABOUT
const aboutBtn = document.getElementById("aboutBtn")
const popupAbout = document.getElementById("popupAbout");
const closeAbout = document.getElementById("closeAbout");

aboutBtn.onclick = function () {
    popupAbout.style.display = "flex";
    const popupComponent = popupAbout.querySelector(".popup-component")
    popupComponent.classList.add("show-anim")
    playSound(clickBtnOpen)

    setTimeout(() => {
        popupComponent.classList.remove("show-anim")
    }, 500);
};

closeAbout.onclick = function () {
    const popupComponent = popupAbout.querySelector(".popup-component")
    popupComponent.classList.add("hide-anim")

    playSound(clickBtnClose)

    setTimeout(() => {
        popupAbout.style.display = "none";
        popupComponent.classList.remove("hide-anim")
    }, 500);
};

function goTako() {
    location.href = ("https://tako.id/ResTra23")
}
// POPUP ABOUT END