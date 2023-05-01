function totalCost (budget, prices) {
    let price1 = prices [0];
    let price2 = prices[1];
    const salesTax = 1.08;
    let totalCost = 0;
    totalCost = (price1 + price2) * salesTax;
    const withinBudget = isWithinBudget(totaCost, budget);
    return withinBudget;
}

const isWithinBudget = (totalCost, budget) => {
    if (totalCost > budget) {
        return false;
    } else {
        return true ;
    }
};

console.log(totalCost(50))