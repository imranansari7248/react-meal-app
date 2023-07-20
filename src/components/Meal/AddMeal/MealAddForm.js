import React , { useState } from "react";
import useInput from "../../hooks/use-input";
import './MealAddForm.css';


const MealAddForm = () => {
    const {
        value: enteredTitle,
        isValid: enteredTitleIsValid,
        hasError: titleInputHasError,
        valueChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        reset: resetTitleInput
    } = useInput((value) => value.trim() !== '');

    const formIsValid = enteredTitleIsValid;

    const submitHandler = event => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        resetTitleInput();
    };

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <div className={titleInputHasError ? 'form-control invalid' : 'form-control'}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                        onBlur={titleBlurHandler}
                    />
                    {titleInputHasError && <p className="error-text">Please enter a valid title.</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="price">price</label>
                    <input type="number" id="price" />
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="5"></textarea>
                </div>
                <div className="form-actions">
                    <button type="submit">Add Meal</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default MealAddForm;