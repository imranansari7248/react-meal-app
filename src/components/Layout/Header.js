import React from "react";

import classes from './Header.module.css';

import mealImage from '../assests/meal.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <React.Fragment>
        <div className={classes.header}>
            <h2>React Meal</h2>
            <HeaderCartButton onClick={props.onShowCart} />
        </div>
        <img className={classes['main-image']} src={mealImage} alt="HEy????" />
    </React.Fragment>
};

export default Header;