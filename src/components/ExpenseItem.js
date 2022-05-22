import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {

    return (
        <Card>
            <ExpenseDate 
            date={props.date}/>
            <h2>{props.title}</h2>
            <p>${props.amount}</p>
        </Card>
    )
}

export default ExpenseItem;