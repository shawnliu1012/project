const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// 小撇步:加了+號可將回傳值由字串轉換為數字
const ticketPrice = +movieSelect.Value;

container.addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    
    updateSelectedCount();
    }
});