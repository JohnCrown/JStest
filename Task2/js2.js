'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
    time  = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budjet: money,
    expenses : {},
    optionalExpenses:{},
    timeData: time,
    income:[],
    saving: false

};




for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется", "");

        if ((typeof(a)) === 'string' && (typeof(a) != null &&  (typeof(b) != null ))
         && a !=''  && b !='' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        }else {

        }


}

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



appData.moneyPerDay = (appData.budjet ) / 30;

alert("Eжедневный бюджет: " + appData.moneyPerDay + "RUB" );

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if  (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
}else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}else {
    console.log("Ошибка");
}

