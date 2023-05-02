const musicPlayer = document.querySelector('.music-player');
const playBtn = document.querySelector('.player-controls__play');
const pauseBtn = document.querySelector('.player-controls__pause');
const skipForwardBtn = document.querySelector('.player-controls__skip-forward');
const skipBackwardBtn = document.querySelector('.player-controls__skip-backward');
const volumeSlider = document.querySelector('.volume-slider');
const progressSlider = document.querySelector('.progress-slider');
const title = document.querySelector('.music-info__title');
const artist = document.querySelector('.music-info__artist');
const audio = document.querySelector('.music-player__audio');

let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
  } else {
    audio.play();
    isPlaying = true;
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
  }
}

function skipForward() {
  audio.currentTime += 10;
}

function skipBackward() {
  audio.currentTime -= 10;
}

function updateVolume() {
  audio.volume = volumeSlider.value / 100;
}

function updateProgress() {
  progressSlider.value = (audio.currentTime / audio.duration) * 100;
}

function updateCurrentTime() {
  audio.currentTime = (progressSlider.value / 100) * audio.duration;
}

audio.addEventListener('play', () => {
  isPlaying = true;
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'block';
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  playBtn.style.display = 'block';
  pauseBtn.style.display = 'none';
});

audio.addEventListener('timeupdate', () => {
  updateProgress();
});

playBtn.addEventListener('click', togglePlay);
pauseBtn.addEventListener('click', togglePlay);
skipForwardBtn.addEventListener('click', skipForward);
skipBackwardBtn.addEventListener('click', skipBackward);
volumeSlider.addEventListener('input', updateVolume);
progressSlider.addEventListener('input', updateCurrentTime);
