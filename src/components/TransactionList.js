import React, { useContext, useMemo } from 'react'
import { GlobalContext } from './../context/GlobalState'
import Transaction from '../components/Transaction'
import TransitionStagger from '../UIAnimationCom/TransitionStagger'

const TransactionList = props => {
  const { transactions } = useContext(GlobalContext)

  // const memTransactions = useMemo(() => transactions, [transactions])
  console.log('list re-rendering')
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        <TransitionStagger delay='2000'>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
        </TransitionStagger>
      </ul>
    </>
  )
}

export default TransactionList
