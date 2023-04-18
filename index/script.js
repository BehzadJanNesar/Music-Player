var progress = document.getElementById("progress") ;
var song = document.getElementById("song") ;
var ctrlIcon = document.getElementById("ctrlIcon") ;
const currentTime = document.getElementById("current-time") ;
const musicDuration = document.getElementById("song-duration") ;
var heart = document.getElementById("heart");

song.onloadedmetadata = () => {
    progress.max = song.duration ;
    progress.value = song.currentTime ;
}
function playPause() {
    if(ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        document.getElementById("disk").classList.add(".play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        document.getElementById("disk").classList.remove(".play");
    }
}




if(song.play()) {
    setInterval(()=> {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = ()=> {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

const setMusic = (i) => {
    currentTime.innerHTML = '00:00' ;

    setTimeout(() => {
        progress.max = song.duration;
        musicDuration.innerHTML = formatTime(song.duration);
    }, 300);
}
setMusic(0);

const formatTime = (time) => {
    let min = Math.floor( time / 60);
    if(min < 10) {
        min = `0${min}`;
    }

    let sec = Math.floor(time % 60);
    if(sec < 10) {
        sec = `0${sec}`;
    }
    return`${min} : ${sec}`;
}

setInterval(() => {
    progress.value=song.currentTime
    currentTime.innerHTML = formatTime(song.currentTime);
}, 500);

heart.addEventListener("click" , () => {
    if(heart.classList.contains("fa-regular")){
        heart.classList.add("fa-solid");
        heart.classList.remove("fa-regular");
    }else {
        heart.classList.add("fa-regular");
        heart.classList.remove("fa-solid");
    }
})