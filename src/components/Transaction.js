import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction, children }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amout < 0 ? '-' : '+'
  // console.log(React.Children.toArray(children))
  return (
    <>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}{' '}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className='delete-btn'
        >
          x
        </button>
      </li>
    </>
  )
}

export default Transaction
