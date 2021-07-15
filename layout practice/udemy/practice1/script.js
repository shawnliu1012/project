
const panels = document.querySelectorAll('.panel')

// 設定監聽事件，利用click啟動active classname
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // 下方函式移除陣列[0]active作用
        removeActiveClasses()
        // 再將滑鼠點擊事件的div加上active作用
        panel.classList.add('active')
    })
})
// 原active節點為陣列[0]，此函式為 移除其active節點
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}