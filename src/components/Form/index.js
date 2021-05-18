import React from 'react'
import { FaPlus } from 'react-icons/fa'

import './Form.css'

export default function Form({ novaTarefa, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input onChange={handleChange} 
                type="text"
                value={novaTarefa}
                placeholder="Add a task" />
                <button type="submit">
                    <FaPlus className="plus"/>
                </button>
            </form>    
    )
}