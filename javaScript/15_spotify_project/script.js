console.log("hello everyone ");

// GETS ELEMENT BY THE NAMES AND DECLARE TEHM WITH THE VARIABLE

let songs=[
    {songname:"tum gae ho kyu", filepath:"./songs/1.mp3", logo:"pictures/covers/1.jpg"},
    {songname:"babe", filepath:"./songs/2.mp3", logo:"pictures/covers/2.jpg"},
    {songname:"pehle bhi mai", filepath:"./songs/Jama_kudu.mp3", logo:"pictures/covers/3.jpg"},
    {songname:"broken angel", filepath:"./songs/4.mp3", logo:"pictures/covers/4.jpg"},
    {songname:"no entry", filepath:"./songs/5.mp3", logo:"pictures/covers/5.jpg"},
    {songname:"jamal kudu", filepath:"./songs/6.mp3", logo:"pictures/covers/6.jpg"},
    {songname:"love me like you do", filepath:"./songs/7.mp3", logo:"pictures/covers/7.jpg"},
    {songname:"i love you", filepath:"./songs/8.mp3", logo:"pictures/covers/8.jpg"},
    {songname:"tum mile", filepath:"./songs/pehle_bhi_mai.mp3", logo:"pictures/covers/9.jpg"}
];


//===================================== FOR SONGS ========================================
let songIndex=0;
let autoPlay = new Audio("./songs/BrokenAngel.mp3");
let masterplay = document.querySelector("#masterplay");
let play_controler = document.querySelector("#play-controler");
let gif =document.querySelector("#gif")

//=================================== FOR CURRENT AND TOTAL DURATION=======================
let currentTimeDisplay = document.getElementById("current-time");
let totalDurationDisplay = document.getElementById("total-duration");

//=================================== TO PLAY REST OF SONGS=================================
let songItems=Array.from(document.getElementsByClassName("songs"));


//============================== EVENT FOR FIRST SONG PLAYING=======================================
autoPlay.addEventListener("timeupdate", () => {
    console.log('timeupdate');
    let progress = parseInt(autoPlay.currentTime / autoPlay.duration * 100);
    play_controler.value = progress;
    currentTimeDisplay.textContent = formatTime(autoPlay.currentTime);
    totalDurationDisplay.textContent = formatTime(autoPlay.duration);
});

play_controler.addEventListener("change", () => {
     autoPlay.currentTime = (play_controler.value * autoPlay.duration) / 100;
     currentTimeDisplay.textContent = formatTime(autoPlay.currentTime);
});

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
}


masterplay.addEventListener("click", (e) => {
    console.log("buttom pressed");
    if (autoPlay.paused || autoPlay.currentTime <= 0) {
        autoPlay.play(); 
        masterplay.classList.remove("fa-play-circle"); 
        masterplay.classList.add("fa-pause-circle"); 
        gif.style.opacity = "1";
  }
  else{
      autoPlay.pause();
      masterplay.classList.remove("fa-pause-circle"); 
      masterplay.classList.add("fa-play-circle"); 
      gif.style.opacity = "0";
  }
  
});

//====================================== EVENT FOR REST OF SONG PLAYING==========================
let img=document.querySelectorAll(".cover-img");
let songName=document.querySelectorAll(".songName");
let listedSong=document.querySelectorAll(".listedSong");
let masterSongName=document.querySelector("#masterSongName");
let songItemPlay=document.querySelectorAll('.songItemPlay')
let gif_inside=document.querySelector(".gif-inside");
let previousicon=document.querySelector(".previous");
let nexticon=document.querySelector(".next");

songs.forEach((element,i)=>{
    console.log("second");
    console.log(element,i);
});

   songItemPlay.forEach((element, index) => {
    element.addEventListener('click', () => {
        console.log("song item clicked");
        if (songIndex === index && !autoPlay.paused) {
            // If the same song is clicked and it is playing, pause it
            autoPlay.pause();
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
            document.getElementById(songIndex + 1).classList.remove("fa-pause-circle");
            document.getElementById(songIndex + 1).classList.add("fa-play-circle");
        } else {
            // If a different song is clicked or the song is paused, play the new song
            songIndex = index;
            autoPlay.src = songs[songIndex].filepath;
            autoPlay.currentTime = 0;
            autoPlay.play();
            gif.style.opacity = 1;
            changeSongItemPlayButton();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        }
    });
});

function changeSongItemPlayButton() {
    // Reset all play buttons to play icon
    document.querySelectorAll('.songItemPlay').forEach((element) => {
        console.log("first");
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
        gif_inside.style.opacity = 0;
    });
    // Set the play button of the currently playing song to pause icon
    document.getElementById(songIndex + 1).classList.remove("fa-play-circle");
    document.getElementById(songIndex + 1).classList.add("fa-pause-circle");
    gif_inside.style.opacity = 1;
}





previousicon.addEventListener("click", () => {
    console.log("previous button clicked");
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    autoPlay.src = songs[songIndex].filepath;
    autoPlay.currentTime = 0;
    autoPlay.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    changeSongItemPlayButton();
});

nexticon.addEventListener("click", () => {
    console.log("next button clicked");
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    autoPlay.src = songs[songIndex].filepath;
    autoPlay.currentTime = 0;
    autoPlay.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    changeSongItemPlayButton();
});
