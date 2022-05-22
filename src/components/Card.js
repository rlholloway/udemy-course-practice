import './Card.css';

const Card = (props) => {
    // If children inside Card component has other classNames attached (ie. <Card className="expense-item">) and you want their css to be applied then:
    // const classes = 'card' + props.className;

    // ^If doing this then inside return change the div className to:
    // className={classes}
    return (
        <div className='card'>
            {props.children}
            {/* props.children means that everything INSIDE the card component (in ExpenseItem.js) is passed down as props */}
        </div>
    )
}

export default Card;