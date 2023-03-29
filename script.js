
//JS code for play, forward, backward + range included = github.com/syedimtiyaz-1/

const tracks = ['song/1.mp3', 'song/sigma.mp3', 'song/music.mp3'];
let currentTrackIndex = 0;

const audioPlayer = new Audio();

audioPlayer.src = tracks[currentTrackIndex];

const playButton = document.getElementById('play');
const forwardButton = document.querySelector('.fa-forward');
const backwardButton = document.querySelector('.fa-backward');
const timeRange = document.getElementById('time');

playButton.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.classList.remove('fa-play-circle');
    playButton.classList.add('fa-pause-circle');
  } else {
    audioPlayer.pause();
    playButton.classList.remove('fa-pause-circle');
    playButton.classList.add('fa-play-circle');
  }
});

forwardButton.addEventListener('click', function() {
  currentTrackIndex++;
  if (currentTrackIndex >= tracks.length) {
    currentTrackIndex = 0;
  }
  audioPlayer.src = tracks[currentTrackIndex];
  audioPlayer.play();
  document.querySelector('.track-name').textContent = tracks[currentTrackIndex];
});

backwardButton.addEventListener('click', function() {
  currentTrackIndex--;
  if (currentTrackIndex < 0) {
    currentTrackIndex = tracks.length - 1;
  }
  audioPlayer.src = tracks[currentTrackIndex];
  audioPlayer.play();
  document.querySelector('.track-name').textContent = tracks[currentTrackIndex];
});

audioPlayer.addEventListener('timeupdate', function() {
  const duration = audioPlayer.duration;
  const currentTime = audioPlayer.currentTime;
  const progress = (currentTime / duration) * 100;
  timeRange.value = progress;
});

timeRange.addEventListener('input', function() {
  const progress = timeRange.value;
  const duration = audioPlayer.duration;
  const currentTime = (progress / 100) * duration;
  audioPlayer.currentTime = currentTime;
});
