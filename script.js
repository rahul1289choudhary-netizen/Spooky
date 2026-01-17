// Select elements
let playButton = document.getElementById('play'); // Your main play/pause button
let progressBar = document.getElementById('myProgressBar');
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// Song list
let songs = [
    { songName: "Fell For You", filePath: "Fell For You.mp3", coverPath: "fell.jpg" },
    { songName: "Young G.O.A.T", filePath: "Young G.O.A.T.mp3", coverPath: "Young G.O.A.T.jpg" },
    { songName: "The Beast", filePath: "The Beast.mp3", coverPath: "The Beast.jpg" }
   
];

let songIndex = 0;

// Create Audio object
let audioElement = new Audio(songs[songIndex].filePath);

// 🎵 Play / Pause toggle
playButton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playButton.textContent = '⏸️'; // show pause
    } else {
        audioElement.pause();
        playButton.textContent = '▶️'; // show play
    }
});

// ⏱ Update progress bar as song plays
audioElement.addEventListener('timeupdate', () => {
    if (audioElement.duration) {
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        progressBar.value = progress;
    }
});

// 🎚 Seek functionality
progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

// ⏭ Next song
nextButton.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length; // loop back to first
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    playButton.textContent = '⏸️';
});

// ⏮ Previous song
prevButton.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // loop to last
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    playButton.textContent = '⏸️';
});

