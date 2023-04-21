import React from 'react'
import "./AddButton.css"
import { useState } from 'react';

const AddButton = (props) => {
    const { formOpen, setFormOpen } = props
    const formButtonOpened = () => {
        setFormOpen(prevFormOpen => !prevFormOpen)
        console.log('Button clicked!');
    }
    return (
        <div className='add-expense-btn'>
            <button onClick={() => { setFormOpen(true) }}>ADD NEW EXPENSE</button>
        </div>
    )
}

export default AddButton