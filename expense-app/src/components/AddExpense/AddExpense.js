import React from 'react'
import "./AddExpense.css"
import AddButton from '../AddButton/AddButton'
import AddForm from '../AddForm/AddForm'

const AddExpense = () => {
  return (
    <div className='add-expense-section'>
      <AddButton />
      <AddForm />
    </div>
  )
}

export default AddExpense