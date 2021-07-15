const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    // 如果點擊超過數字長度，就會保持在最終數字上，進度條最後數字為4，所以console.log出來最後數字會停在4
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    // 設定調用update函式
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    // 點亮circle fill狀態
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    // 設定進度條
    // 選取progress classname的style中的width選項，設定active長度/circle長度，加上"%"單位，最後另外下方設定"-1"，藍色進度條才會完整停在數字circle上
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    // 設定  btn disanle選項在最初(1)與最後(circle.length)
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}

