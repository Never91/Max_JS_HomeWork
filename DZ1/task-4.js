const credits = 23580;
const pricePerDroid = 3000;
let numberOfDroids = prompt('Введіть кількість дроїдів');

let totalPrice = numberOfDroids * pricePerDroid;

if (numberOfDroids = null) {
    console.log('Скасовано користувачем');
} else if(numberOfDroids>credits) {
    console.log('Недостатньо коштів на рахунку!');
} else {
    console.log('Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.');

    
}