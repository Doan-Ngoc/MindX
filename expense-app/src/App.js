import './App.css';
import AddExpense from './components/AddExpense/AddExpense';
import FilterByYear from './components/FilterByYear/FilterByYear';
import ChartContainer from './components/ChartContainer/ChartContainer'
import ExpenseList from './components/ExpenseList/ExpenseList';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {

  const [formOpen, setFormOpen] = useState(false)

  //Hiển thị chi tiêu sau khi submit form
  const [expenseList, setExpenseList] = useState([])
  const addExpenseItemToList = (newItem) => {
    const updatedExpenseList = [...expenseList]
    updatedExpenseList.push(newItem)
    setExpenseList(updatedExpenseList)
  }
  return (
    <div className="App">
      <div className='header'>
        <AddExpense
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          addExpenseItemToList={addExpenseItemToList} />
      </div>
      <div className='body'>
        <FilterByYear />
        <ChartContainer />
        <ExpenseList
          expenseList={expenseList} />
      </div>
    </div>
  );
}

export default App;
