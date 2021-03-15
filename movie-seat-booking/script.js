const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// 再理解一下
populateUI();

// 小撇步:加了+號可將回傳值由字串轉換為數字
//這裡從const改成let，因事件監聽換票價時發生錯誤，why?
let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

//Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    
    // 此函式簡化 const seatsIndex = [...selectedSeats].map(function(seat) { return [...seats].indexOf(seat)});
    // arrat.map():https://ithelp.ithome.com.tw/articles/10215281
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    // localStorage: https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/javascript-localstorage-%E7%9A%84%E4%BD%BF%E7%94%A8-e0da6f402453
    // https://ithelp.ithome.com.tw/articles/10195522
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem
    // JSON.stringify: https://www.w3school.com.cn/js/js_json_stringify.asp
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Get datd from localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')
    );
   if (selectedSeats !== null && selectedSeats.length > 0) {
    // seat = 上方的 const seats = document.querySelectorAll('.row .seat:not(.occupied)');
        seat.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
   }

   const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

   if (selectedMovieIndex !== null) {
       movieSelect.selectedIndex = selectedMovieIndex;
   }
}

//Movie select event
//這裡在撰寫code時犯了錯誤，將value的v寫成大寫導致票價無法計算，筆記需記錄一下
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    // 此處在code上方創建函式
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});

//Seat click event
//這裡在看影片時，講師將 e前面的function去掉了，理解為何
container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')
        ) {
        e.target.classList.toggle('selected');
    
    updateSelectedCount();
    }
});

// Initial count and total set
// 再理解一下這
updateSelectedCount();