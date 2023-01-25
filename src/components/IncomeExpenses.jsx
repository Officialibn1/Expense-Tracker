import React, {useContext} from 'react';

import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    // Getting all the amount value in each array
    const amounts = transactions.map(transaction => transaction.amount)


    // Suming up all the positive values in amount to get the total Income
    const income = amounts
    .filter(amount => amount > 0)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);
    
    // Suming up all the negative values in amount to get the total Expense
    const expense = amounts
    .filter(amount => amount < 0)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" 
                className="money plus">
                    +${income}
                </p>
            </div>
            
            <div>
                <h4>Expense</h4>
                <p id="money-minus" 
                className="money minus">
                    -${Math.abs(expense)}
                </p>
            </div>
        </div>
    );
}

export default IncomeExpenses;
