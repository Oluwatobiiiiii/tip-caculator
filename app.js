'use strict';

//GETTING THE ID'S AND CLASSE'S🚀
let bill = document.querySelector('#bill-value');
let percentButtons = document.querySelector('.btn-1');
let customPercent = document.querySelector('#custom-input');
let people = document.querySelector('#people-value');
let tipAmountPerPerson = document.querySelector('.initalValue');
let totalPerPerson = document.querySelector('.initalValueTwo');
let btnReset = document.querySelector('.reset');

//RESETING THE VALUES 💀
btnReset.addEventListener('click', function () {
    bill.value = '';
    customPercent.value = '';
    people.value = '';
    tipAmountPerPerson.innerText = '$0.00';
    totalPerPerson.innerText = '$0.00';

    //RESETING THE BUTTONS
    btnReset.classList.remove('active');
});

//CACULATIONS
const tipMainCaculations = function () {
    const tipAmount =
        ((parseFloat(customPercent.value) / 100) * parseFloat(bill.value)) /
        Number(people.value);
    const totalPerson =
        parseFloat(bill.value) / Number(people.value) + tipAmount;
    const newTipAmount = tipAmount.toFixed(2);
    const newTotalPerson = totalPerson.toFixed(2);
    console.log(totalPerson);
    tipAmountPerPerson.innerText = `$${newTipAmount}`;
    totalPerPerson.innerText = `$${newTotalPerson}`;
};

//BILLING INPUT
bill.addEventListener('change', function () {
    tipAmountPerPerson.innerHTML = '$0';
    totalPerPerson.innerHTML = '$0';
    if (bill.value === '') {
        bill.value = 1;
        tipMainCaculations();
    }
    console.log(Number(bill.value));
});

//CUSTOM PERCENT INPUT
customPercent.addEventListener('change', function () {
    tipAmountPerPerson.innerHTML = '$0';
    totalPerPerson.innerHTML = '$0';
    if (customPercent.value !== '') {
        tipMainCaculations();
    }
});

//CUSTOM PEOPLE INPUT
people.addEventListener('change', function () {
    console.log(typeof people.value);
    tipAmountPerPerson.innerHTML = '$0';
    totalPerPerson.innerHTML = '$0';
    if (people.value !== '') {
        tipMainCaculations();
    }
});

//the percentage buttons
