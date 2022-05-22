import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 49.99,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.55,
      date: new Date(2021, 6, 11)
    },
    {
      id: "e3",
      title: "New TV",
      amount: 100,
      date: new Date(2021, 9, 16)
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 250,
      date: new Date(2021, 11, 20)
    }
  ];

  return (
    <div className="App">
      <h1>Budget Journal</h1>
      <Expenses 
      items={expenses}/>
      
     
    </div>
  );
}

export default App;
