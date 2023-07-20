import React from 'react';

import AvailableMeals from './AvailableMeals';
import MealSummary from './MealSummary';

const Meals = (props) => {
    return <React.Fragment>
        <MealSummary />
        <AvailableMeals />
    </React.Fragment>
};

export default Meals;