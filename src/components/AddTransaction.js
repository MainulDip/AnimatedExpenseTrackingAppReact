import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState()

  const { addTransaction } = useContext(GlobalContext)

  function formSubmit (e) {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Date.now() / 1000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
    setText('')
    setAmount('')
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={formSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Enter text...'
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            required
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
