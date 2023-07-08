'use strict';

let bill = document.querySelector('#bill-value');
let percentButtons = document.querySelector('.btn-1');
let customPercent = document.querySelector('#custom-input');
let people = document.querySelector('#people-value');
let tipAmountPerPerson = document.querySelector('.initalValue');
let totalPerPerson = document.querySelector('.initalValueTwo');
let btnReset = document.querySelector('.reset');

//RESETING THE VALUES
btnReset.addEventListener('click', function () {
    bill.value = '';
    customPercent.value = '';
    people.value = '';
    tipAmountPerPerson.innerText = '$0.00';
    totalPerPerson.innerText = '$0.00';

    //RESETING THR BUTTONS
    btnReset.classList.remove('active');
});

//CACULATIONS
const tipMainCaculations = function () {
    const tipAmount = (Number(bill.value) * percentButtons) / 100;
    const totalPerson = bill.value / 2 + tipAmount;
    tipAmountPerPerson.innerText = `$${tipAmount}`;
    totalPerPerson.innerText = `$${totalPerson}`;
};

//BILLING INPUT
bill.addEventListener('change', function () {
    tipAmountPerPerson.innerHTML = '$0';
    totalPerPerson.innerHTML = '$0';
    if (bill.value === '') {
        bill.value = 1;
        tipMainCaculations();
    }
    console.log(bill.value);
});

customPercent.addEventListener('change', function () {
    tipAmountPerPerson.innerHTML = '$0';
    totalPerPerson.innerHTML = '$0';
    if (customPercent.value !== '') {
        tipMainCaculations();
    }
});

people.addEventListener('change', function () {
    tipAmountPerPerson.innerHTML = '$0';
    totalPerPerson.innerHTML = '$0';
    if (people.value !== '') {
        tipMainCaculations();
    }
});
