import React from 'react'
import "./AddForm.css"
import { useState } from 'react';

const AddForm = (props) => {
    const { formOpen, setFormOpen, addExpenseItemToList } = props
    //Set state cho expense item
    const [expenseDetails, setExpenseDetails] = useState({
        expenseTitle: "",
        expenseAmount: "",
        expenseDate: ""
    })
    //Cập nhật giá trị input
    const formInputChangeHandler = (event) => {
        const { name, value } = event.target
        let updatedValue = value;
        if (name === "expenseDate") {
            updatedValue = new Date(value).toISOString().split("T")[0];
        }
        setExpenseDetails((prevExpenseDetails) => ({
            ...prevExpenseDetails,
            [name]: updatedValue
        }))
    }
    //Submit expense item
    const formSubmitHandler = (event) => {
        console.log('form submmitted')
        event.preventDefault()
        addExpenseItemToList(expenseDetails)
        setExpenseDetails({
            expenseTitle: "",
            expenseAmount: "",
            expenseDate: ""
        })
    }
    return (
        <form className='add-form' onSubmit={formSubmitHandler}>
            <div className='form-input'>
                <div className='input-item'>
                    <label htmlFor="name-input">Name</label>
                    <input id='name-input' name="expenseTitle" value={expenseDetails.expenseTitle}
                        onChange={formInputChangeHandler}
                        placeholder="Enter name here..."></input>
                </div>
                <div className='input-item'>
                    <label htmlFor="amount-input">Amount</label>
                    <input id='name-input' name="expenseAmount" type="number" value={expenseDetails.expenseAmount}
                        onChange={formInputChangeHandler}
                        placeholder="Enter amount here..."></input>
                </div>
                <div className='input-item'>
                    <label htmlFor="amount-input">Date</label>
                    <input id='name-input' name="expenseDate" type="date" value={expenseDetails.expenseDate}
                        onChange={formInputChangeHandler}></input>
                </div>
            </div>
            <div className='form-btn'>
                <button className='add-btn' type="submit">ADD</button>
                <button className='cancel-btn' onClick={() => { setFormOpen(false) }}>CANCEL</button>
            </div>
        </form>
    )
}

export default AddForm