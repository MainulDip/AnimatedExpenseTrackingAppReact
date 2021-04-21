import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

import TransitionStagger from './UIAnimationCom/TransitionStagger'

function App () {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <TransitionStagger delay='777'>
          <Balance />
          <IncomeExpenses />

          <TransactionList />
          <AddTransaction />
        </TransitionStagger>
      </div>
    </GlobalProvider>
  )
}

export default App
