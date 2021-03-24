const currencyEl_one = document.getElementById ('currency-one');
const amountEl_one = document.getElementById ('amount-one');
const currencyEl_two = document.getElementById ('currency-two');
const amountEl_two = document.getElementById ('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
// 注意value大小寫 此處此次練習有誤 應多注意
function caclulate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
// 取得此網址api
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        // 取得json檔案格式，以json()方法處理
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            const rate = data.rates[currency_two];

            rateEl.innerText = `1${currency_one} = ${rate} ${currency_two}`;

            // toFixed 取第幾位四捨五入:https://www.w3school.com.cn/jsref/jsref_tofixed.asp
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        });
}

// Event listeners
// 事件監聽 可與之前表單的課程一起:http://test.domojyun.net/MEMO/JavaScript/7_event.html
currencyEl_one.addEventListener('change',caclulate);
amountEl_one.addEventListener('input',caclulate);
currencyEl_two.addEventListener('change',caclulate);
amountEl_two.addEventListener('input',caclulate);

// swap鍵交換匯率 & 使用temp變數
swap.addEventListener('click', () =>{
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    caclulate();
});

caclulate();
// 5-4課程說明:A Look at JSON & Fetch
//API status:https://ithelp.ithome.com.tw/articles/10196735
// fetch 用法:https://www.oxxostudio.tw/articles/201908/js-fetch.html
// document.body.innerHTML:https://openhome.cc/Gossip/JavaScript/VisitNodes.html
// innerHTML:https://ithelp.ithome.com.tw/articles/10218607