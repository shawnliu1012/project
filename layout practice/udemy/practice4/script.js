const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }
    // 樣板字串語法
    loadText.innerText = `${load}%`
    // 利用參考網站的scale函式，加以填入數值
    // 數值為0到100
    // 不透明度為0到1(透明為1)
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // blur效果為30px到0px
    // filter 用於定於元素(通常是 <img>)的視覺效果。
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}