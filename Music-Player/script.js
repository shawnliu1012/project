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
// 讀取歌名
// Initially load song details into DOM
loadSong(songs[songIndex]);

// innertext再複習,const song->let songIndex->function loadSong
// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  }
// 設定撥放鍵按播放，另外設定轉暫停鍵
// Play song
function playSong() {
    musicContainer.classList.add('play');
    // 設定播放與暫停圖案(下方function亦同)
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
  
    // 歌曲播放以此為主
    audio.play();
  }
// 設定完上方function後，接著設定pause，讓歌曲具有暫停功能
  // Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    // 歌曲暫停以此為主
    audio.pause();
  }

// 設定撥放鍵,因此要在上方設定play 與 pause function
  // Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });