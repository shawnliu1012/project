const currencyEl_one = document.getElementById ('currency-one');
const amountEl_one = document.getElementById ('amount-one');
const currencyEl_two = document.getElementById ('currency-two');
const amountEl_two = document.getElementById ('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function caclulate() {
    const currency_one = currencyEl_one.Value;
    const currency_two = currencyEl_two.Value;
}

// Event listeners
// 事件監聽 可與之前表單的課程一起:http://test.domojyun.net/MEMO/JavaScript/7_event.html
currencyEl_one.addEventListener('change',caclulate);
amountEl_one.addEventListener('input',caclulate);
currencyEl_two.addEventListener('change',caclulate);
amountEl_two.addEventListener('input',caclulate);

caclulate();
// 5-4課程說明:A Look at JSON & Fetch
//API status:https://ithelp.ithome.com.tw/articles/10196735
// fetch 用法:https://www.oxxostudio.tw/articles/201908/js-fetch.html
// document.body.innerHTML:https://openhome.cc/Gossip/JavaScript/VisitNodes.html
// innerHTML:https://ithelp.ithome.com.tw/articles/10218607