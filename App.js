const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let expenses = [];

function menu() {

    console.log("\n===== EXPENSE TRACKER =====");
    console.log("1. Add Expense");
    console.log("2. View Expenses");
    console.log("3. View Total");
    console.log("4. Exit");

    input.question("Choose an option: ", function(choice) {

        if (choice === "1") {
            addExpense();
        } else if (choice === "2") {
            viewExpenses();
        } else if (choice === "3") {
            viewTotal();
        } else if (choice === "4") {
            console.log("Thank you for using Expense Tracker.");
            input.close();
        } else {
            console.log("Invalid choice.");
            menu();
        }
    });
}

function addExpense() {

    input.question("Enter expense name: ", function(name) {

        input.question("Enter amount: ", function(amount) {

            amount = Number(amount);

            if (isNaN(amount) || amount <= 0) {
                console.log("Please enter a valid amount.");
                menu();
                return;
            }

            expenses.push({
                name: name,
                amount: amount
            });

            console.log("Expense added successfully.");

            menu();
        });
    });
}

function viewExpenses() {

    console.log("\n===== EXPENSES =====");

    if (expenses.length === 0) {
        console.log("No expenses recorded.");
    } else {

        expenses.forEach(function(expense, index) {

            console.log(
                (index + 1) +
                ". " +
                expense.name +
                " - ₱" +
                expense.amount.toFixed(2)
            );
        });
    }

    menu();
}

function viewTotal() {

    let total = 0;

    expenses.forEach(function(expense) {
        total += expense.amount;
    });

    console.log("\nTotal Expenses: ₱" + total.toFixed(2));

    menu();
}

menu();