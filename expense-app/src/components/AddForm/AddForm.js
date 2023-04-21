import React from 'react'
import "./AddForm.css"

const AddForm = () => {
    return (
        <form className='add-form'>
            <div className='form-input'>
                <div className='input-item'>
                    <label for="name-input">Name</label>
                    <input id='name-input' placeholder="Enter name here..."></input>
                </div>
                <div className='input-item'>
                    <label for="amount-input">Amount</label>
                    <input id='name-input' type="number" placeholder="Enter amount here..."></input>
                </div>
                <div className='input-item'>
                    <label for="amount-input">Date</label>
                    <input id='name-input' type="date" ></input>
                </div>
            </div>
            <div className='form-btn'>
                <button className='add-btn'>ADD</button>
                <button className='cancel-btn'>CANCEL</button>
            </div>
        </form>
    )
}

export default AddForm