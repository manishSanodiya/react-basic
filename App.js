import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "car insurance", amount: 289.4, date: new Date() },
    { title: "toilet paper", amount: 444, date: new Date() },
    { title: "soap", amount: 44, date: new Date() },
    { title: "movie", amount: 800, date: new Date() },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
