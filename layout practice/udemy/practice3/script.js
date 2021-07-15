// 需要動到的都先宣告
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    // 節點(DOM)中的切換類:toggle 
    search.classList.toggle('active')
    input.focus()
})