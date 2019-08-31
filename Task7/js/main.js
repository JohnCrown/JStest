'use strict'

let mainbudjet = document.getElementsByClassName('budget-value')[0],
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
    Startbtn = document.getElementById('start'),
    expbuttons = document.getElementsByTagName('button')[0],
    // accept1 = document.querySelector('.expenses-item-btn'),
    // accept2 = document.querySelector('.optionalexpenses-btn'),
    // count = document.querySelector('.count-budget-btn'),
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    checkboxsave = document.querySelector('#savings'),



// Input поля
    incomeItem = document.querySelector('.choose-income'),
    optionalexpensesitem = document.querySelectorAll('.optionalexpenses-item'),
    expensesitem = document.getElementsByClassName('expenses-item'),



    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent');

    let money, time;



    Startbtn.addEventListener('click', function() {
        time  = prompt("Введите дату в формате YYYY-MM-DD", '');
        money = +prompt("Ваш бюджет на месяц?", '');

        while(isNaN(money) || money == "" || money == null){
            money = +prompt("Ваш бюджет на месяц?", '');

        }
        appData.budjet = money;
        appData.timeData = time;
        mainbudjet.textContent = money.toFixed();
        yearm.value = new Date(Date.parse(time)).getFullYear();
        monthm.value = new Date(Date.parse(time)).getMonth() +1;
        daym.value = new Date(Date.parse(time)).getDay();

    });







  
    expbuttons.addEventListener('click', function(){

        let sum = 0;

        for (let i = 0; i < expensesitem.length; i++) {
            let a = expensesitem[i].value,
                b = expensesitem[++i].value;

                if ((typeof(a)) === 'string' && (typeof(a) != null &&  (typeof(b) != null ))
                 && a !=''  && b !='' && a.length < 50) {
                    console.log("done");
                    appData.expenses[a] = b;
                    sum += +b;
                }else {
                 i = i -1;
                }

            }
        mainexpenses.textContent = sum;



    });

  

optionalexpensesBtn.addEventListener(('click') , function()  {
   for (let i = 0; i < optionalexpensesitem.length;i++) {
       let opt = optionalexpensesitem[i].value;
       appData.optionalExpenses[i] = opt;
       optexpenses.textContent +=appData.optionalExpenses[i] + ' ';
   }

});

countBtn.addEventListener('click', function() {
     if (appData.budjet != undefined) {
        let sum = 0;

        for (let i = 0; i < expensesitem.length; i++) {
            let a = expensesitem[i].value,
                b = expensesitem[++i].value;
                appData.expenses[a] = b;
                sum += +b;


            }

        appData.moneyPerDay = ((appData.budjet - sum) / 30).toFixed();
        budgetday.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
           incomelvl.textContent = "Минимальный уровень достатка";
        } else if  (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            incomelvl.textContent = "Средний уровень достатка";
        }else if (appData.moneyPerDay > 2000) {
            incomelvl.textContent = "Высокий уровень достатка";
        }else {
            incomelvl.textContent = "Ошибка";
          }
        }else {
            budgetday.textContent = 'Произошла ошибка';
        }

     });



incomeItem.addEventListener('input', function() {

    let items = incomeItem.value;
    appData.income = items.split (', ');
    income.textContent = appData.income;

});


checkboxsave.addEventListener('click', function(){
    if (appData.saving == true) {
        appData.saving = false;
    }else {
        appData.saving = true;
    }
});

sum.addEventListener('input', function(){
   if (appData.saving == true){
       let summ = +sum.value,
       perceny = +percent.value;
    //    + чтобы преобразовать в число
    appData.monthIncome = summ/100/12*perceny;
    appData.yearIncome = summ/100*perceny;

    savingmounth.textContent = appData.monthIncome.toFixed(1);
    savingyear.textContent = appData.yearIncome.toFixed(1);

    }
});
percent.addEventListener('input', function(){
   if (appData.saving == true){
    let summ = +sum.value,
    perceny = +percent.value;

 appData.monthIncome = summ/100/12*perceny;
 appData.yearIncome = summ/100*perceny;

savingmounth.textContent = appData.monthIncome.toFixed(1);
savingyear.textContent = appData.yearIncome.toFixed(1);

    }

});







    let appData = {
        budjet: money,
        expenses : {},
        optionalExpenses:{},
        timeData: time,
        income:[],
        saving: false

        // chooseExpenses: function(){


        // },

        // detectDayBudget: function() {

        //     alert("Eжедневный бюджет: " + appData.moneyPerDay + "RUB" );
        // },
        // detectLevel: function (){


        // },
        // checkSaving: function(){
        //     if (appData.saving == true){
        //         let save = +prompt("Какова сумма накоплений"),
        //             percent = +prompt("Под какой процент");

        //         appData.monthIncome = save/100/12*percent;
        //         alert("Доход в месяц с вашего депозита: " + appData.monthIncome) ;
        //     }
        // },

        // chooseOptExpenses: function () {

        //     let k = 0;
        // do {
        //     let c = prompt("Статья необязательных расходов?", "");
        //     k++;
        //     if ((typeof (c)) === 'string' &&
        //     typeof (c) != '' &&
        //     typeof (c) != null &&
        //     c.length < 50) {
        //     console.log("done optionalExpenses");

        //   } else {
        //     k--;
        //   }
        //     appData.optionalExpenses[k] = c;
        // }
        // while (k < 3);
        // },

        // chooseIncome: function () {

            // let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)',  '');
            // while(items == "" || items == null){
            //     items = +prompt('Что принесет дополнительный доход? (Перечислите через запятую)',  '');
            // }


            // appData.income = items.split (', ');
        //     appData.income.push(prompt('Может что то еще'));
        //     appData.income.sort();


        //     appData.income.forEach(function(item, i = [1], income) {
        //         alert (" (Способы доп. заработка :" + appData.income +")");
        //         // i + ": " + items +
        //     });
        // }

    };


    // for (let key in appData) {
    //     console.log("Наша программа включает в себя данные: " + key + ' имеет значение ' + appData[key]);
    // }





