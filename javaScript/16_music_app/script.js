const bollywoodSongs = {
    songs: [
        {
            title: "pehle bhi main",
            artist: "vishal mishra",
            album: "Animal",
            releaseYear: 2022,
            path: "./songs/Pehle Bhi Main Animal 128 Kbps.mp3",
            src: "./pictures/pehle bhi mai.jpeg"
        },
        {
            title: "Suit Suit",
            artist: ["Arjun, Guru Randhawa"],
            album: "Hindi medium",
            releaseYear: 2016,
            path: "./songs/Suit Guru Randhawa 128 Kbps.mp3",
            src: "./pictures/suit suit.jpeg"
        },
        {
            title: "Milne hai mujhse aae",
            artist: ["Arjit singh"],
            album: "Aashiqui 2",
            releaseYear: 2014,
            path: "./songs/128-Milne Hai Mujhse Aayi - Aashiqui 2 128 Kbps.mp3",
            src: "./pictures/milne hai mujhse aae.jpeg"
        },
        {
            title: "brazil",
            artist: ["Vengaboys"],
            album: "Album",
            releaseYear: 2008,
            path: "./songs/Brazil La La La-(PagalSongs.Com.IN).mp3",
            src: "./pictures/brazil.jpeg"
        },
        {
            title: "Kaise hua",
            artist: "vishal mishra",
            album: "Kabir singh",
            releaseYear: 2020,
            path: "./songs/128-Kaise Hua - Kabir Singh 128 Kbps.mp3",
            src: "./pictures/kaise hua.jpeg"
        },
    ]
};

// Greeting based on time of day
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".heading");
    const currentHour = new Date().getHours();
    let greeting;
    if (currentHour >= 0 && currentHour < 3) {
        greeting = "MidNight";
    } else if (currentHour >= 3 && currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good Afternoon";
    } else if (currentHour >= 18 && currentHour <= 24) {
        greeting = "Good Evening";
    }
    heading.textContent = greeting;
});

let audioplay = new Audio();
let songIndex = 0;
let isPlaying = false;
let isSeeking = false;

document.addEventListener("DOMContentLoaded", () => {
    let faplay = document.querySelector(".fa-play");
    faplay.addEventListener("click", (e) => {
        playMusic();
    }, false);
});

function playMusic() {
    if (audioplay.paused || audioplay.currentTime <= 0) {
        if (audioplay.src === "") {
            let randomIndex = Math.floor(Math.random() * bollywoodSongs.songs.length);
            let randomSong = bollywoodSongs.songs[randomIndex];
            audioplay.src = randomSong.path;
            updateFooter(randomSong);
        }
        audioplay.play();
        isPlaying = true;
        updatePlayButtonState();
    } else {
        audioplay.pause();
        isPlaying = false;
        updatePlayButtonState();
    }
}

function updatePlayButtonState() {
    let faplay = document.querySelector(".fa-play, .fa-pause");
    if (isPlaying) {
        faplay.classList.remove("fa-play");
        faplay.classList.add("fa-pause");
    } else {
        faplay.classList.remove("fa-pause");
        faplay.classList.add("fa-play");
    }
}

// Handling play/pause for song items
document.addEventListener("DOMContentLoaded", () => {
    let songItems = document.querySelectorAll(".songItems");
    songItems.forEach((element) => {
        element.addEventListener("click", () => {
            let respectiveSong = element.querySelector(".newSong");
            let innerdata = respectiveSong.innerText.trim().toLowerCase();
            let song = bollywoodSongs.songs.find((songElement) => songElement.title.trim().toLowerCase() === innerdata);
            if (song) {
                if (!isPlaying) {
                    audioplay.src = song.path;
                    audioplay.play().then(() => {
                        updatePlayButtonState();
                        isPlaying = true;
                    }).catch((error) => {
                        console.error("Error playing audio:", error);
                    });
                } else {
                    audioplay.pause();
                    updatePlayButtonState();
                    isPlaying = false;
                }
                updateFooter(song);
            } else {
                console.log("Song not found");
            }
        });
    });
});

// Full screen functionality
document.addEventListener("DOMContentLoaded", () => {
    let fullScreen = document.querySelector(".fullScreen");
    let halfScreen = document.querySelector(".halfScreen");

    fullScreen.addEventListener("click", () => {
        let mainContainer = document.querySelector(".main-container");
        let leftContainer = document.querySelector(".left-container");
        if (mainContainer && leftContainer) {
            mainContainer.style.width = '100%';
            leftContainer.style.display = "none";
            fullScreen.style.display = "none";
            halfScreen.style.marginLeft = "1rem";
        }
    }, false);

    halfScreen.addEventListener("click", () => {
        let mainContainer = document.querySelector(".main-container");
        let leftContainer = document.querySelector(".left-container");
        if (mainContainer && leftContainer) {
            leftContainer.style.display = "block";
            leftContainer.style.width = "18%";
            mainContainer.style.width = "82%";
            fullScreen.style.display = "block";
        }
    });
});

// Search bar functionality
document.addEventListener("DOMContentLoaded", () => {
    let searchSelect = document.querySelector(".search-select");
    searchSelect.style.display = "none";
    let search = document.querySelector(".search");
    search.addEventListener("click", () => {
        searchSelect.style.display = "flex";
    }, false);
});

// Toggle dark/light mode
document.addEventListener("DOMContentLoaded", () => {
    let changeMode = document.querySelector('.changeMode');
    changeMode.addEventListener("click", () => {
        let isDarkMode = changeMode.textContent === "Dark Mode";
        changeMode.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
        let leftContainer = document.querySelector(".left-container");
        let mainContainer = document.querySelector(".main-container");
        let bottomPart = document.querySelector(".bottom-part");
        // Toggle dark/light mode on elements
        [leftContainer, mainContainer, bottomPart].forEach(el => {
            el.classList.toggle('dark-mode', isDarkMode);
        });
    }, false);
});

// Progress bar functionality
let currentTime = document.querySelector(".current-time");
let duration = document.querySelector(".total-time");
let range = document.querySelector("#range");

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    secs = secs < 10 ? "0" + secs : secs;
    return minutes + ":" + secs;
}

audioplay.addEventListener("timeupdate", () => {
    if (!isSeeking) {
        let progress = parseInt((audioplay.currentTime / audioplay.duration) * 100);
        range.value = progress;
        currentTime.textContent = formatTime(audioplay.currentTime);
        duration.textContent = formatTime(audioplay.duration - audioplay.currentTime);
    }
}, false);

range.addEventListener('input', () => {
    isSeeking = true;
    const seekTime = (range.value / 100) * audioplay.duration;
    audioplay.currentTime = seekTime;
}, false);

range.addEventListener('change', () => {
    isSeeking = false;
});

// Volume controller functionality
let volumeController = document.getElementById("volumeControler");
let image = document.querySelector(".range-img");

volumeController.addEventListener("input", () => {
    audioplay.volume = volumeController.value / 100;
    image.src = volumeController.value == 0 ? "./pictures/mute.png" : "./pictures/volume.png";
});

// Updating footer with the current song details
function updateFooter(incomingSong) {
    let footer_image = document.querySelector(".footer-image");
    if (footer_image) {
        footer_image.src = incomingSong.src;
    } else {
        console.error('footer_image element not found.');
    }

    let song_title = document.querySelector(".song-title");
    if (song_title) {
        song_title.textContent = incomingSong.title;
    } else {
        console.error('song_title element not found.');
    }

    let song_artist = document.querySelector(".song-artist");
    if (song_artist) {
        song_artist.textContent = incomingSong.artist;
    } else {
        console.error('song_artist element not found.');
    }
}
