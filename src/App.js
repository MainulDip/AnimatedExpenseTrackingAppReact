import React, { useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

import { useTrail, useTransition, animated } from 'react-spring'

// function Trail (values) {
//   const { children, ...rest } = values
//   const items = React.Children.toArray(children)
//   console.log(values)
//   const trail = useTrail(items.length, {
//     config: { mass: 1, tension: 477, friction: 47 },
//     opacity: 1,
//     x: 0,
//     from: { opacity: 0, x: 20 }
//   })
//   return (
//     <div {...rest}>
//       <div>
//         {trail.map(({ x, ...rest }, index) => (
//           <animated.div
//             key={index}
//             style={{
//               ...rest,
//               transform: x.to(x => `translate3d(0,${x}px,0)`)
//             }}
//           >
//             <animated.div>{items[index]}</animated.div>
//           </animated.div>
//         ))}
//       </div>
//     </div>
//   )
// }
function Staggers (values) {
  const { children, ...rest } = values
  const items = React.Children.toArray(children)
  // console.log(useTransition)
  console.log(items)
  const transitions = useTransition(
    [{ a: 'hi' }, { a: 'hi' }, { a: 'hi' }, { a: 'hi' }],
    item => {
      console.log('hi')
      return item
    },
    {
      // config: { mass: 1, tension: 477, friction: 47 },
      opacity: 1,
      x: 0,
      from: { opacity: 0, x: 20 }
    }
  )
  console.log(transitions)

  return (
    <div {...rest}>
      <div>
        {/* {console.log(transitions)} */}
        {transitions.map((values, index) => (
          <animated.div
            key={index}
            style={{
              ...rest
              // transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            {/* {console.log(values)} */}
            {`GoodWorking`}
            {/* <animated.div>{items[index]}</animated.div> */}
          </animated.div>
        ))}
      </div>
    </div>
  )
}

function App (props) {
  // const children = React.Children(props.children)
  // const [open, set] = useState(true)
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Staggers>
          {/* <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction /> */}
          {/* <h1>Good</h1>
          <h2>Golden</h2>
          <h2>Golden</h2> */}
        </Staggers>
      </div>
    </GlobalProvider>
  )
}

export default App
