let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

const expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
];

for (let i = 0; i < expenseEntries.length; i++) {
    totalExpensesValue += expenseEntries[i][1];
}

function calculateAverageExpense() {
    if (expenseEntries.length > 0) {
        return totalExpensesValue / expenseEntries.length;
    } else { 
        return 0;
    }
}

function calculateBalance() {
    return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
    if (calculateBalance() < 0) {
        balanceColor = "red";
    } 
    else if (calculateBalance() < budgetValue * 0.25) {
        balanceColor = "orange";
    } 
    else {
        balanceColor = "green";
    }
}

function calculateCategoryExpenses(category) {
    let totalCategory = 0;
    for (let i = 0; i < expenseEntries.length; i++) {
        if (expenseEntries[i][0] === category) {
            totalCategory += expenseEntries[i][1];
        }
        
    }
    console.log(expenseEntries);
    return totalCategory;
}

function calculateLargestCategory() {
    let categoriesTotals = [
    ["groceries", 0],
    ["restaurants", 0],
    ["transport", 0],
    ["home", 0],
    ["subscriptions", 0]
];

    let largestCategory = ["groceries", 0];

    for (let categorieTotal of categoriesTotals) {
        categorieTotal[1] = calculateCategoryExpenses(categorieTotal[0]);
        if (categorieTotal[1] > largestCategory[1]) {
            largestCategory = categorieTotal;
        }
    }  
    return largestCategory[0];   
}

function addExpenseEntry(category) {
    expenseEntries.push(category);
    totalExpensesValue += category[1];
}

