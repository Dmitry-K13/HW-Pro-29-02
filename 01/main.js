let userNickname = 'Alex';
let userScore = 235;


let firstValue = Number(prompt('Цена покупки'));
let secondValue = Number(prompt('Количество'));
let cost = firstValue*secondValue;
let sale = cost*0.05;

console.log('Amount to be paid', cost);
console.log('Discount 5%', sale);  