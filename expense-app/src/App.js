import './App.css';
import AddExpense from './components/AddExpense/AddExpense';
import FilterByYear from './components/FilterByYear/FilterByYear';
import ChartContainer from './components/ChartContainer/ChartContainer'
import ExpenseList from './components/ExpenseList/ExpenseList';
import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [formOpen, setFormOpen] = useState(false)

  //Hiển thị chi tiêu sau khi submit form
  /*const [expenseDetails, setExpenseDetails] = useState({
        expenseTitle: "",
        expenseAmount: "",
        expenseDate: ""
    })*/
  const [expenseList, setExpenseList] = useState([])
  const addExpenseItemToList = (item) => {
    let newItem = {
      ...item,
      id: uuidv4()
    }
    console.log(newItem.id)
    const updatedExpenseList = [...expenseList]
    updatedExpenseList.push(newItem)
    setExpenseList(updatedExpenseList)
  }

  //Render chart theo năm được chọn 
  const years = [2021, 2022, 2023, 2024]
  const [selectedYear, setSelectedYear] = useState(years[1])
  const getSelectedYear = (year) => {
    setSelectedYear(year)
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
        <FilterByYear
          years={years}
          selectedYear={selectedYear}
          getSelectedYear={getSelectedYear} />
        <ChartContainer
          selectedYear={selectedYear}
          expenseList={expenseList} />
        <ExpenseList
          expenseList={expenseList} />
      </div>
    </div>
  );
}

export default App;
