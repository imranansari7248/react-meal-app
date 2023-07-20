import React, { useContext } from 'react';
import cartContext from '../../../store/cart-context';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const cartCtx = useContext(cartContext);
    const price = `$${props.price.toFixed(2)}`;

    const onAddThisItem = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount,
        });
    };
    return (
        <li key={props.id} className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAdd={onAddThisItem} />
            </div>
        </li>
    )
};

export default MealItem; 