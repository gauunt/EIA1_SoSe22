window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", playsample);
    document.querySelector(".button2").addEventListener("click", playsample);
    document.querySelector(".button3").addEventListener("click", playsample);
    document.querySelector(".button4").addEventListener("click", playsample);
    document.querySelector(".button5").addEventListener("click", playsample);
    document.querySelector(".button6").addEventListener("click", playsample);
    document.querySelector(".button7").addEventListener("click", playsample);
    document.querySelector(".button8").addEventListener("click", playsample);
    document.querySelector(".button9").addEventListener("click", playsample);
    document.querySelector("#playit").addEventListener("click", stopit);
    document.querySelector("#remix").addEventListener("click", remixit);
});
var sound = [new Audio("./assets/A.mp3"),
    new Audio("./assets/C.mp3"),
    new Audio("./assets/F.mp3"),
    new Audio("./assets/G.mp3"),
    new Audio("./assets/hihat.mp3"),
    new Audio("./assets/laugh-1.mp3"),
    new Audio("./assets/laugh-2.mp3"),
    new Audio("./assets/snare.mp3"),
];
var playlist = [new Audio("./assets/hihat.mp3"),
    new Audio("./assets/kick.mp3"), new Audio("./assets/snare.mp3")
];
function playsample() {
    index = document.querySelector("button:hover").getAttribute("id");
    tone(sound[index]);
}
;
var index;
var counter = 0;
function playall() {
    tone(playlist[counter]);
    counter++;
    console.log(counter);
    if (counter == playlist.length) {
        counter = 0;
    }
}
;
function tone(audiotoplay) {
    audiotoplay.play();
}
function stopsign() {
    if (playbeat == 0) {
        document.getElementById("playit").classList.remove("fa-play");
        document.getElementById("playit").classList.add("fa-stop");
        playbeat = 1;
    }
    else {
        document.getElementById("platit").classList.remove("fa-stop");
        document.getElementById("playit").classList.add("fa-play");
        playbeat = 0;
    }
}
var playbeat = 0;
var minus = -1;
function stopit() {
    if (document.getElementById("playit").classList.contains("fa-play")) {
        minus = setInterval(playall, 500);
    }
    else {
        clearInterval(minus);
    }
    stopsign();
}
var remixnext = 0;
function remixit() {
    if (document.getElementById("playit").classList.contains("fa-stop")) {
        stopit();
    }
    var remixset = setInterval(function () {
        remixnext++;
        tone(sound[random(0, 9)]);
        if (remixnext >= 3) {
            clearInterval(remixset);
        }
    }, 500);
}
fnction;
random(min, max);
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + minus;
}
//# sourceMappingURL=a009.js.map