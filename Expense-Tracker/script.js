const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dummyTransactions = [
    {id: 1, text: 'Flower', amount: -20 },
    {id: 2, text: 'Salary', amount: 300 },
    {id: 3, text: 'Book', amount: -10 },
    {id: 4, text: 'Camera', amount: 150 }
];

let transactions = dummyTransactions;

// 下方設定完事件監聽至此處撰寫function
// 設定下方花費或淨賺提交處
// Add transaction
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === ''){
        alert('Please add a text and amount');
    } else {
        const transaction ={
            id: generateID(),
            text: text.value,
            // 影片提及此處須為數字
            amount: +amount.value
        };
        
        // console.log(transaction);確定輸入text及amount有數值
        transactions.push(transaction);

        addTransactionDOM(transaction);

        updateValues();

        text.value = '';
        amount.value = '';
    }
}
// 注意 生成ID 在後續刪除中見效
// Generate random ID
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // 注意
    // Add class based on value
   item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    // Math.abs 將負數轉為正數
    // onclick="removeTransaction(${transaction.id})"注意
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(
            transaction.amount
            )}</span> <button class="delete-btn"  onclick="removeTransaction(${transaction.id})">x</button>
    `;
// 注意
    list.appendChild(item);
}
// 設定總數值，淨賺及花費數值
// Upate the balance, income and expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
    // 注意
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    balance.innerHTML = `$${total}`;
    money_plus.innerHTML = `$${income}`;
    money_minus.innerHTML = `$${expense}`; 
}
// 在設定完上方onclick後，接續此設定為讓history紀錄除去，以ID作為刪除的基礎
// Remove transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id
        !== id);

        init();
}

// 注意
// Init app
function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
    updateValues();
}

init ();

// 設定事件監聽後 至上方撰寫function
// not addTransactionDOM
form.addEventListener('submit', addTransaction);