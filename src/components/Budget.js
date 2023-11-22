import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency,dispatch,expenses} = useContext(AppContext) ;

    const handleBudgetChange = (event) => {
        const newBudget = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (newBudget > 20000) {
            alert("The budget cannot exceed funds  £ 20,000");
            return;
        }

        if (newBudget < totalExpenses) {
            alert("The budget cannot be less than the spending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }
    const handleBudgetInput = (event) => {
        const newBudget = event.targe.value;
        if(newBudget > 20000)
        {
            alert("The budget cannot exceed funds  £ 20,000");
            return;
        }
    }
    return (
<div className='alert alert-secondary'>
    <span>Budget: {currency}</span>
    <input type="number" step="10" max="20000" value={budget} onChange={handleBudgetChange} onInput={handleBudgetInput} ></input>
</div>
    );
};
export default Budget;
