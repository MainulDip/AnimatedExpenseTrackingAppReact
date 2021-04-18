import React, { useContext } from 'react'
import { GlobalContext } from './../context/GlobalState'
import Transaction from '../components/Transaction'
import TransitionStagger from '../UIAnimationCom/TransitionStagger'

const TransactionList = props => {
  const { transactions } = useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        <TransitionStagger>
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </TransitionStagger>
      </ul>
    </>
  )
}

export default TransactionList
