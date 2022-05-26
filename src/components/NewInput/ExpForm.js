import React, { useState } from 'react';

const ExpForm = () => {
    const [ enteredTitle, setEnteredTitle ]= useState("");
    const [ enteredAmount, setEnteredAmount ] = useState("");
    const [ enteredDate, setEnteredDate ] = useState("");

    // YOU COULD PUT ALL THREE INTO ONE STATE:

    // const [ userInput, setUserInput ] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // });
    
    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);

        // UPDATE THE SINGLE STATE WHICH HOLDS ALL THREE:
        // GOTTA COPY ALL THREE KEY/VALUE PAIRS OR REACT WILL DUMP THE OTHER TWO
        // USE SPREAD OPERATOR TO UPDATE

        // *this goes into each handler event (with corresponding key being changed)*

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // NOW enteredTitle IS HOLDING NEW event.target.value WITHOUT LOSING THE OTHER TWO
        // THIS WORKS *BUT* SOMETIMES MESSES UP
        // IF YOU ARE UPDATING STATE *WHILE STILL* DEPENDING ON PREVIOUS STATE YOU SHOULD USE AN ALTERNATE FORM

        // *this goes into each handler event (with corresponding key being changed)*

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountHandler = (event) => {
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
    };

    const dateHandler = (event) => {
        // console.log(event.target.value);
        setEnteredDate(event.target.value);
    };

    return (
        <form>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountHandler} />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" onChange={dateHandler} />
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpForm;