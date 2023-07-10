# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Calculate the correct tip and total cost of the bill per person

### Screenshot

![](images/Screenshot%202023-07-09%20at%2000.57.10.png)

### Links

-   Solution URL: (https://www.frontendmentor.io/solutions/tip-caculator-challenge-TIUDmombM7)
-   Live Site URL: (https://tip-caculator-tawny.vercel.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Javscript
-   Desktop-first workflow

### What I learned

it is better to call all the document query selector without including any elements
I learnt how to use a loop to iterate over diffrent buttons with the same selector

### Useful resources

MDN DOCS: https://developer.mozilla.org/

```js
// PROUD OF THIS FUNCTION

btnReset.addEventListener('click', function () {
    bill.value = '';
    customPercent.value = '';
    people.value = '';
    tipAmountPerPerson.innerText = '$0.00';
    totalPerPerson.innerText = '$0.00';

    //RESETING THR BUTTONS
    btnReset.classList.remove('active');
});

//I USED A LOOP TO ITERATE OVER DIFFRENT FUNCTIONS

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
```

## Author

-   Frontend Mentor - [@Oluwatobiiiiii](https://www.frontendmentor.io/profile/Oluwatobiiiiii)
-   Twitter - [@Oluwatobicodes](https://www.twitter.com/Oluwatobicodes)
