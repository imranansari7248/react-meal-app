import React, { useContext, useState } from 'react';
import cartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';
import Modal from '../UI/Modal';

const Cart = props => {
    const [showCheckout, setShowCheckout] = useState(false);
    const cartCtx = useContext(cartContext);

    const onAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const onRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map(item => <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={onAddHandler.bind(null, item)}
            onRemove={onRemoveHandler.bind(null, item.id)} />)}
    </ul>
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const orderButtonAction = <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button} onClick={() => setShowCheckout(!showCheckout)}>Order</button>
    </div>

    return (
        <React.Fragment>
            <Modal onClose={props.onClose}>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                {showCheckout && <Checkout onCancel={props.onClose}/>}
                {!showCheckout && orderButtonAction}

            </Modal>
        </React.Fragment>
    )
};

export default Cart;