import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import "./ExpenseList.css"

const ExpenseList = (props) => {
  const { expenseList } = props
  console.log(expenseList)
  const ExpenseItems = expenseList && expenseList.map(expenseItem => {
    const dateObject = new Date(expenseItem.expenseDate)
    const month = dateObject.toLocaleString('default', { month: 'long' });
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();
    return <div className='expense-item'>
      <div className='date-container'>
        <span className='month'>{month}</span>
        <span className='year'>{year}</span>
        <span className='date'>{day}</span>
      </div>
      <div className='expense-title'>
        <span>{expenseItem.expenseTitle}</span>
      </div>
      <div className='expense'>${expenseItem.expenseAmount}</div>
    </div>
  })
  return (
    <div className='expense-list'>
      {ExpenseItems}
    </div>
  )
}

export default ExpenseList