import React, { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

import { useTrail, a } from 'react-spring'

function Trail ({ open, children, ...props }) {
  const items = React.Children.toArray(children)

  console.log(items)
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 477, friction: 47 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: i => i * 3000,
  })
  return (
    <div className='trails-main' {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className='trails-text'
            style={{
              ...rest,
              transform: x.to(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

function App (props) {
  // const children = React.Children(props.children)
  const [open, set] = useState(true)
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Trail open={open} onClick={() => set(state => !state)}>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          {/* <AddTransaction /> */}
        </Trail>
      </div>
    </GlobalProvider>
  )
}

export default App
