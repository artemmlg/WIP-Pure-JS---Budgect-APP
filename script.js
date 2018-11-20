'use strict';

let appData = {
        budget: '',
        timeData: '',
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
};

function estimateBudget() {
        appData.budget = +prompt("Your monthly budget in UAH?", "");
        appData.timeData = prompt('Enter date in format: YYYY-MM-DD', "");
        
        while (!isFinite(appData.budget) || appData.budget == null || appData.budget == "") {
                alert("Monthly budget should be a number");
                appData.budget = +prompt("Your monthly budget in UAH?", "");
        }
}

function countMonthlyBudget() {
        appData.moneyPerOneDay = (appData.budget / 30).toFixed();
        alert("Your budget for one day, will be: " + appData.moneyPerOneDay + " uah.");
}

function countWealthLevel() {
        //average ukrainian monthly budget 9042uah
        if (appData.budget < 9043) {
                //minimum ukrainian monthly budget 3723uah
                alert(appData.budget < 3724 ? "It's a minimum wealth level" : "It's an average wealth level");
        } else {
                alert("WOW, You have above avarage wealth leavel")
        }
}

function monthlyExpenses() {
        let mandatory = prompt("Your mostly expanse for this month?", '');
        refresherMandatory:
                while (typeof mandatory !== "string" || mandatory == null || mandatory == "") {
                        alert("We expecting a name for mandatory expanse from you");
                        mandatory = prompt("Your mostly expanse for this month?", '');
                }
        let howMuch = +prompt("How much price of it in UAH?", '');
        refresherExpanses:
                while (!isFinite(howMuch) || howMuch == null || howMuch == "") {
                        alert("Re-type price for unit, only with numbers without any symbols");
                        howMuch = +prompt("How much price of it in UAH?", '');
                }
        appData.expenses[mandatory] = howMuch;
}

function countBankSavings() {
        appData.savings = confirm("Do you have any Bank Deposit?");
        if(appData.savings == true){
                let depositSumm = +prompt("Your deposit summ (without any symbols)", ""),
                percent = +prompt("What your deposit percent (without any symbols)", ""),
                term = +prompt("How many month", "");

                appData.depositIncome = depositSumm / 100 / term * percent; 
                alert("Your monthly income from deposit: " + appData.depositIncome.toFixed() + " uah.");
        }
}

estimateBudget();
countMonthlyBudget();
countWealthLevel();
// monthlyExpenses();
countBankSavings();