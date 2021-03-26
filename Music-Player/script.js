const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
// 呼應歌名，作為下方keep track of song轉換歌曲用
// Song titles
const songs = ['hey', 'summer', 'ukulele'];
// ukulele=2，如轉換為1，歌曲會因此跳到summer
// Keep track of song
let songIndex = 2;
// innertext再複習,const song->let songIndex->function loadSong
// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  }

  // Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });