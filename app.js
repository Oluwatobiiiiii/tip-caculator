'use strict';

//GETTING THE ID'S AND CLASSE'S 🚀
let bill = document.querySelector('#bill-value');
let percentButtons = document.querySelectorAll('.btn-1');
let customPercent = document.querySelector('#custom-input');
let people = document.querySelector('#people-value');
let tipAmountPerPerson = document.querySelector('.initalValue');
let totalPerPerson = document.querySelector('.initalValueTwo');
let btnReset = document.querySelector('.reset');
let activeBtn = '';

//RESETING THE VALUES 💀
btnReset.addEventListener('click', function () {
    bill.value = '';
    customPercent.value = '';
    people.value = '';
    tipAmountPerPerson.innerText = '$0.00';
    totalPerPerson.innerText = '$0.00';
    //RESETING THE BUTTONS
    activeBtn.classList.remove('active');
});

//CACULATIONS 😇
const tipMainCaculations = function () {
    const tipAmount =
        ((parseFloat(customPercent.value) / 100) * parseFloat(bill.value)) /
        Number(people.value);
    const totalPerson =
        parseFloat(bill.value) / Number(people.value) + tipAmount;
    const newTipAmount = tipAmount.toFixed(2);
    const newTotalPerson = totalPerson.toFixed(2);
    tipAmountPerPerson.innerText = `$${newTipAmount}`;
    totalPerPerson.innerText = `$${newTotalPerson}`;
};

//BILLING INPUT 💸
bill.addEventListener('click', function () {
    tipAmountPerPerson.innerHTML = '$0';
    totalPerPerson.innerHTML = '$0';
    if (bill.value === '') {
        bill.value = 1;
        tipMainCaculations();
    }
});

//CUSTOM PERCENT INPUT 🤲🏾
customPercent.addEventListener('click', function () {
    tipAmountPerPerson.innerHTML = '$0';
    totalPerPerson.innerHTML = '$0';
    if (customPercent.value !== '') {
        tipMainCaculations();
    }
});

//CUSTOM PEOPLE INPUT 🥷🏾
people.addEventListener('click', function () {
    tipAmountPerPerson.innerHTML = '$0';
    totalPerPerson.innerHTML = '$0';
    if (people.value !== '') {
        tipMainCaculations();
    }
});

//THE PERCENTAGE BUTTONS 😭
for (let i = 0; i < percentButtons.length; i++) {
    percentButtons[i].addEventListener('click', function () {
        let percentage = Number(percentButtons[i].value);
        console.log(percentage);

        const tipAmount =
            ((percentage / 100) * parseFloat(bill.value)) /
            Number(people.value);
        console.log(tipAmount);
        const totalPerson =
            parseFloat(bill.value) / Number(people.value) + tipAmount;
        const newTipAmount = tipAmount.toFixed(2);
        const newTotalPerson = totalPerson.toFixed(2);
        tipAmountPerPerson.innerText = `$${newTipAmount}`;
        totalPerPerson.innerText = `$${newTotalPerson}`;
    });
}
