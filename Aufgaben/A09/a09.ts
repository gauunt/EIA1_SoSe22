window.addEventListener("load", function() {
    document.querySelector(".button1").addEventListener("click", playsample);
    document.querySelector(".button2").addEventListener("click", playsample);
    document.querySelector(".button3").addEventListener("click", playsample);
    document.querySelector(".button4").addEventListener("click", playsample);
    document.querySelector(".button5").addEventListener("click", playsample);
    document.querySelector(".button6").addEventListener("click", playsample);
    document.querySelector(".button7").addEventListener("click", playsample);
    document.querySelector(".button8").addEventListener("click", playsample);
    document.querySelector(".button9").addEventListener("click", playsample);
    document.querySelector(".playit").addEventListener("click", playbutton);

    });
    
var sound: HTMLAudioElement[] = [new Audio("./assets/A.mp3"),
    new Audio("./assets/A.mp3"),
    new Audio("./assets/F.mp3"),
    new Audio("./assets/G.mp3"),
    new Audio("./assets/hihat.mp3"),
    new Audio("./assets/kick.mp3"),
    new Audio("./assets/laugh-1.mp3"),
    new Audio("./assets/laugh-2.mp3"),
    new Audio("./assets/snare.mp3")
    ];
    
var playstop: boolean = false;

var playlist: HTMLAudioElement[] = [new Audio("./assets/hihat.mp3"),
    new Audio("./assets/kick.mp3"), new Audio("./assets/snare.mp3")
    ];
    
function playsample(){
        var element = document.querySelector("button:hover").getAttribute("id");
                sound[element].play();
    };
    

var index: ReturnType<typeof setInterval>;
var counter: number = 0;
    
function playall (){
        playlist[counter].play();
        counter++;
        console.log(counter);
        if(counter == playlist.length){
            counter = 0;
            playbutton;
        }
    };
    
function playtune(){
        index = setInterval(playall, 500);
        console.log(typeof index);
        
    };

function playbutton(){
    console.log("test");
    
    if(playstop == false){
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
        playstop = true;
    }

    else{
        document.getElementById("play").classList.remove("fa-stop");
        document.getElementById("play").classList.add("fa-play");
        playstop = false;
    }
}