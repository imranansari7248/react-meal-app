import React from 'react'

const Checkout = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <h3>Address Details: </h3>
            </div>
            <div>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" />
            </div>
            <div>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <div>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Confirm</button>
            </div>
        </form>
    )
}

export default Checkout