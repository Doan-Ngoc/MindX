import './App.css';
import AddExpense from './components/AddExpense/AddExpense';
import FilterByYear from './components/FilterByYear/FilterByYear';
import ChartContainer from './components/ChartContainer/ChartContainer'
import ExpenseList from './components/ExpenseList/ExpenseList';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <AddExpense />
      </div>
      <div className='body'>
        <FilterByYear />
        <ChartContainer />
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
