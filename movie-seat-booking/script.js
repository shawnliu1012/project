const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// 小撇步:加了+號可將回傳值由字串轉換為數字
//這裡從const改成let，因事件監聽換票價時發生錯誤，why?
let ticketPrice = +movieSelect.value;

//Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie select event
//這裡在撰寫code時犯了錯誤，將value的v寫成大寫導致票價無法計算，筆記需記錄一下
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
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