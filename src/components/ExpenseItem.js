import React, { useContext } from 'react';
import { TiDelete, TiPlus,TiMinus} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {
    const { dispatch,Currency} = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const item = {
            name: name,
            quantity: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><TiPlus size='2.2em' color="green" onClick={event=> increaseAllocation(props.name)}></TiPlus></td>
        <td><TiMinus size='2.2em' color="red" onClick={event=> decreaseAllocation(props.name)}></TiMinus></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
