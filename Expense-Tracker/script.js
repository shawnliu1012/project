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

// Add transactions to DOM list
function addTransactionDOM(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // 注意
    // Add class based on value
   item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    // Math.abs 將負數轉為正數
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(
            transaction.amount
            )}</span> <button class="delete-btn">x</button>
    `;
// 注意
    list.appendChild(item);
}
// 注意
// Init app
function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
}

init ();