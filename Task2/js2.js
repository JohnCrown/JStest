
let money, time;

function start() {

    money = +prompt("Ваш бюджет на месяц?", '');
    time  = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');

    }
}
start ();


let appData = {
    budjet: money,
    expenses : {},
    optionalExpenses:{},
    timeData: time,
    income:[],
    saving: true

};

function chooseExpenses() {


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется", "");

        if ((typeof(a)) === 'string' && (typeof(a) != null &&  (typeof(b) != null ))
         && a !=''  && b !='' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        }else {
         i = i -1;
        }

    }

}

chooseExpenses();



function chooseOptExpenses(){
    let k = 0;
    do {
        let c = prompt("Статья необязательных расходов?", "");
        k++;
        if ((typeof (c)) === 'string' &&
        typeof (c) != '' &&
        typeof (c) != null &&
        c.length < 50) {
        console.log("done optionalExpenses");

      } else {
        k--;
      }
        appData.optionalExpenses[k] = c;
    }
    while (k < 3);


}

// chooseOptExpenses();







// let n = 0;
// while (n < 2) {
//     n++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется", "");

//    console.log("while");
// }


// let k = 0;
// do {
//     console.log("do");
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется", "");
//     k++;
// }
// while (k < 2)


function detectDayBudget() {
appData.moneyPerDay = ((appData.budjet ) / 30).toFixed();

alert("Eжедневный бюджет: " + appData.moneyPerDay + "RUB" );
}

detectDayBudget();
// Вызов функции



function detectLevel() {
if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if  (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
}else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}else {
    console.log("Ошибка");
  }

}

detectLevel();


function checkSaving(){
    if (appData.saving == true){
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome) ;
    }
}

checkSaving ();