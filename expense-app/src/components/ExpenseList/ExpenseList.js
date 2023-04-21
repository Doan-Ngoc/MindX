import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import "./ExpenseList.css"

const ExpenseList = () => {
  return (
    <div className='expense-list'>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  )
}

export default ExpenseList