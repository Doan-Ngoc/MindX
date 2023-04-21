import React from 'react'
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <div className='date-container'>
        <span className='month'>January</span>
        <span className='year'>2022</span>
        <span className='date'>16</span>
      </div>
      <div className='expense-title'>
        <span>Some Books</span>
      </div>
      <div className='expense'>$50</div>
    </div>
  )
}

export default ExpenseItem