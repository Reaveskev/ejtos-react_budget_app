import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency, expenses } = useContext(AppContext);

    const setBudget = (value) => {
        dispatch ({
            type: 'SET_BUDGET',
            payload: value,
        });
    }

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
  

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input
                required='required'
                type='number'
                id='cost'
                step="10"
                value={budget}
                 onChange={(event) => {
                     if(event.target.value > 20000){
                        alert("Budget value can not exceed 20,000")
                        return
                     } else if (event.target.value < totalExpenses){
                        alert("You cannot reduce the budget value lower than the spending")
                        return 
                     } else {
                     setBudget(event.target.value)
                    }
                    }
                }
                >
                </input></span>
        </div>
    );
};
export default Budget;
