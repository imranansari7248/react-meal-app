import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';


import CartIcon from "../Cart/CartIcon";

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const { items } = ctx;


    const noOfCartItems = items.reduce((curValue, item) => {
        return curValue + item.amount;
    }, 0);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
        <button className={`${classes.button} ${btnIsHighlighted ? classes.bump : ''}`} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span >Your Cart</span>
            <span className={classes.badge}>{noOfCartItems}</span>
        </button>
    )
};

export default HeaderCartButton;