import { useRef } from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {
    const inputAmoutRef = useRef();
    
    const submitHandler = (event) => {
        event.preventDefault();
        const amountOfItem = +inputAmoutRef.current.value;
        props.onAdd(amountOfItem);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label='Amount' ref={inputAmoutRef} input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
    </form>
}

export default MealItemForm; 