import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!");
        console.log(title);
    }

    return (
        <Card>
            <ExpenseDate 
            date={props.date}/>
            <h2>{title}</h2>
            <p>${props.amount}</p>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;