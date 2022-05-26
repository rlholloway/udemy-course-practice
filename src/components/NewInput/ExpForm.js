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

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Title</label>
                    {/* ADDING value={enteredTitle} GIVES US TWO-WAY BINDING SO THAT WE CAN CLEAR THE INPUT (by feeding enteredTitle back into it) AFTER SUBMITTING AND HOLDING THE DATA*/}
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountHandler} />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={enteredDate} onChange={dateHandler} />
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpForm;