const API_KEY = "https://saavn.dev/api/songs/yDeAS8Eh/suggestions";
let audioPlaying = null;
let currentPlayingElement = null;
let songItem = [];

const fetchFromApi = async () => {
  try {
    const response = await fetch(API_KEY);
    const data = await response.json();
    if (data.success) {
      let songDetail = data.data;
      songItem = songDetail; // Populate songItem with the fetched data
      console.log(songDetail);
      makeTheTopSuggestion(songDetail);
    } else {
      console.error("Error finding the request");
    }
  } catch (error) {
    console.error("Error", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchFromApi();
});

function makeTheTopSuggestion(incomingData) {
  let topSuggestion = document.querySelector(".second-container");
  topSuggestion.innerHTML = "";

  incomingData.forEach((element, index) => { // Adding index parameter to track song index
    console.log(element);
    const songImage = element.image.find((img) => img.quality === "500x500");
    const downloadUrl = element.downloadUrl.find((du) => du.quality === "320kbps");
    const songName = element.name;
    const artistNames = element.artists.name;
    const songHtml = `
              <div onclick="playAudio('${songImage.url}', '${downloadUrl.url}', '${songName}', '${artistNames}', this, ${index})" class="songItems">
                <div class="first container-2">
                  <div class="box-4">
                    <div class="photo-1">
                      <img src="${songImage.url}" alt="${songName}" class="photo"/>
                    </div>
                    <div class="about">
                      <marquee behavior="slide" direction="left" scrollamount="3" width="100%" class="newSong">
                        <h3>${songName}</h3>
                      </marquee>
                      <p>${artistNames}</p>
                    </div>
                    <img src="./pictures/playbutton.png" alt="playbutton" class="playbutton"/>
                  </div>
                </div>
              </div>
            `;
    topSuggestion.innerHTML += songHtml;
  });
}

function playAudio(songImage, downloadUrl, songName, artistNames, element, index) {
  if (!audioPlaying) {
    audioPlaying = new Audio(downloadUrl);
  } else {
    if (audioPlaying.src !== downloadUrl) {
      audioPlaying.src = downloadUrl;
      audioPlaying.load();
    }
  }

  if (currentPlayingElement && currentPlayingElement !== element) {
    let prevPlayButton = currentPlayingElement.querySelector(".playbutton");
    prevPlayButton.src = "./pictures/playbutton.png";
  }

  currentPlayingElement = element;
  let playButton = element.querySelector(".playbutton");
  let footerImage = document.querySelector(".footer-image");
  let songTitle = document.querySelector(".song-title");
  let songArtist = document.querySelector(".song-artist");

  if (audioPlaying.paused) {
    audioPlaying.play();
    playButton.src = "./pictures/pause.png";
    footerImage.src = songImage;
    songTitle.textContent = songName;
    songArtist.textContent = artistNames;
    makingSeekBarUpdate();
  } else {
    audioPlaying.pause();
    playButton.src = "./pictures/playbutton.png";
  }

  songIndex = index; // Update the current song index
}


function makingSeekBarUpdate() {
  let currentTime = document.querySelector(".current-time");
  let duration = document.querySelector(".total-time");
  let range = document.querySelector("#range");


  audioPlaying.addEventListener("timeupdate", () => {
    let progress = parseInt((audioPlaying.currentTime / audioPlaying.duration) * 100);
    range.value = progress;
    currentTime.textContent = formatTime(audioPlaying.currentTime);
    duration.textContent = formatTime(audioPlaying.duration - audioPlaying.currentTime);
  });

  range.addEventListener("input", () => {
    const seekTime = (range.value / 100) * audioPlaying.duration;
    audioPlaying.currentTime = seekTime;
  });

  let volumeController = document.getElementById("volumeControler");
  let image = document.querySelector(".range-img");
  volumeController.addEventListener("input", () => {
    audioPlaying.volume = volumeController.value / 100;
    let value = volumeController.value;
    if (value == 0) {
      image.src = "./pictures/mute.png";
    } else {
      image.src = "./pictures/volume.png";
    }
  });

  

function changeSong(incomingIndex) {
  const song = songItem[incomingIndex];
  const songImage = song.image.find((image) => image.quality === "500x500").url;
  const downloadUrl = song.downloadUrl.find((du) => du.quality === "320kbps").url;
  const songName = song.name;
  const artistNames = song.artists.name;

  playAudio(songImage, downloadUrl, songName, artistNames, currentPlayingElement, incomingIndex);
}
}
function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = Math.floor(seconds % 60);
  secs = secs < 10 ? "0" + secs : secs;
  return minutes + ":" + secs;
}
