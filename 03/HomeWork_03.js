// Task 1
let userFirstNumber = Number(prompt('Type number'));
let userSecondNumber = Number(prompt('Type number'));
let userOperation = prompt('Select operation: +-/*');

function minus(userFirstNumber, userSecondNumber){
    console.log(`Minus ${userFirstNumber} - ${userSecondNumber} = ${userFirstNumber-userSecondNumber}`);
}
function summ(userFirstNumber, userSecondNumber){
    console.log(`Summ ${userFirstNumber} + ${userSecondNumber} = ${userFirstNumber+userSecondNumber}`);
}
function multiply(userFirstNumber, userSecondNumber){
    console.log(`Multiply ${userFirstNumber} * ${userSecondNumber} = ${userFirstNumber*userSecondNumber}`);
}
function divide(userFirstNumber, userSecondNumber){
    if(userSecondNumber == 0){
        alert('Division by 0 is not possible');
    }
    else{
        console.log(`Divide ${userFirstNumber} / ${userSecondNumber} = ${userFirstNumber/userSecondNumber}`);
    }
}

switch (userOperation) {
    case '-':
        minus(userFirstNumber, userSecondNumber);
        break;
    case '+':
        summ(userFirstNumber, userSecondNumber);
        break;
    case '*':
        multiply(userFirstNumber, userSecondNumber);
        break;
    case '/':
        divide(userFirstNumber, userSecondNumber);
        break;
    default:
        console.log('No information')
        break;
}

// Task 2
for(let i=1;i<=20;i++){
    if(i % 2 == 0)
    console.log(`Even numbers ${i}`);
}

// Task 3
for(let i=10;i>=0;i--){
    console.log(`Value ${i}`);
}

// Task 4
function multiplication_table(number) {
    for(let i=1;i<=10;i++){
        console.log(`${number} * ${i} = ${i*number}`);
    }
}

multiplication_table(9)

// Task 5
let planet = prompt('Planet name:');

switch (planet) {
    case 'Mercury':
        console.log('This planet is in the solar system.')
        break;
    case 'Venus':
        console.log('This planet is in the solar system.')
        break;
    case 'Earth':
        console.log('This planet is in the solar system.')
        break;
    case 'Mars':
        console.log('This planet is in the solar system.')
        break;
    case 'Jupiter':
        console.log('This planet is in the solar system.')
        break;
    case 'Saturn':
        console.log('This planet is in the solar system.')
        break;
    case 'Uranus':
        console.log('This planet is in the solar system.')
        break;
    case 'Neptune':
        console.log('This planet is in the solar system.')
        break;
    
    default:
        console.log('This planet is not in the solar system.')
        break;
}
