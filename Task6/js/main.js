'use strict'

let Startbtn = document.getElementById('start')[0],
    mainbudjet = document.getElementsByClassName('budget-value')[0],
    budgetday = document.getElementsByClassName('daybudget-value')[0],
    incomelvl = document.getElementsByClassName('level-value')[0],
    mainexpenses = document.getElementsByClassName('expenses-value')[0],
    optexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    savingmounth = document.getElementsByClassName('monthsavings-value')[0],
    savingyear = document.getElementsByClassName('yearsavings-value')[0],


    // timedata = document.querySelector('.time-data')


    yearm = document.querySelector('.year-value'),
    monthm = document.querySelector('.month-value'),
    daym = document.querySelector('.day-value'),

// Кнопки

    buttons = document.getElementsByTagName('button')[0],
    // accept1 = document.querySelector('.expenses-item-btn'),
    // accept2 = document.querySelector('.optionalexpenses-btn'),
    // count = document.querySelector('.count-budget-btn'),
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],



// Input поля
    incomeItem =document.querySelector('choose-income'),
    optionalexpensesitem = document.querySelectorAll('.optionalexpenses-item'),
    expensesitem = document.getElementsByClassName('expenses-item'),

    
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent');






console.log(expensesitem);
console.log(optionalexpensesitem);
console.log(buttons);
console.log(Startbtn);
console.log(sum);
console.log(daym);
console.log(monthm);
console.log(yearm);
