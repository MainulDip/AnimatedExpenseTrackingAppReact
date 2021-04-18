import React, { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

import TransitionStagger from './UIAnimationCom/TransitionStagger'

function App () {
  // const children = React.Children(props.children)
  // const [open, set] = useState(true)
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <TransitionStagger>
          <Balance />
          <IncomeExpenses />
        </TransitionStagger>
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
