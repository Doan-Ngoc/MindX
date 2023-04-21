import React from 'react'
import "./AddExpense.css"
import AddButton from '../AddButton/AddButton'
import AddForm from '../AddForm/AddForm'

const AddExpense = (props) => {
  const { formOpen, setFormOpen, expenseDetails, setExpenseDetails, addExpenseItemToList } = props
  return (
    <div className='add-expense-section'>
      {!formOpen &&
        <AddButton
          formOpen={formOpen}
          setFormOpen={setFormOpen} />}
      {formOpen &&
        <AddForm
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          addExpenseItemToList={addExpenseItemToList} />}
    </div>
  )
}

export default AddExpense