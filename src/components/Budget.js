import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget,expenses,dispatch,Currency } = useContext(AppContext);

    const changeBudget = (val)=>{
        const totalSpent = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        val = parseInt(val);
        if(val > 20000)
        {
            alert('The value can not be more than 20,000');
        }
        if(val <= totalSpent)
        {
            alert('You cannot reduce the budget value lower than the spending');
        }
        else
        {
            dispatch({
                type: 'CHANGE_BUDGET',
                payload: parseInt(val),
            })
        }
    }
//    const [newBudget, setNewBudget] = useState(budget);
//  const handleBudgetChange = (event) => {
//        setNewBudget(event.target.value);
//    }
    return (
        <div className='alert alert-secondary' style={{'display': 'flex', 'flexDirection':'row'}}>
            <span>Budget:{Currency} </span>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{size: 10}}
                step='10'
                max='20000'
                onChange={event=>changeBudget(event.target.value)}>
                </input>
        </div>
    );
};
export default Budget;
