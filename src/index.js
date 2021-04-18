import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import TestsSpring from './testspring';
import reportWebVitals from './reportWebVitals';

// import './global.scss'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TestsSpring/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React, { useRef, useState, useEffect, useCallback } from 'react'
// import { render } from 'react-dom'
// import { useTransition, animated } from 'react-spring'
// import './testspring.css'

// function App () {
//   const ref = useRef([])
//   const [items, set] = useState([])
//   const transitions = useTransition(items, null, {
//     from: {
//       opacity: 0,
//       height: 0,
//       innerHeight: 0,
//       transform: 'perspective(600px) rotateX(0deg)',
//       color: '#8fa5b6'
//     },
//     enter: [
//       { opacity: 1, height: 80, innerHeight: 80 },
//       { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
//       { transform: 'perspective(600px) rotateX(0deg)' }
//     ],
//     leave: [
//       { color: '#c23369' },
//       { innerHeight: 0 },
//       { opacity: 0, height: 0 }
//     ],
//     update: { color: '#28b4d7' }
//   })

//   const reset = useCallback(() => {
//     ref.current.map(clearTimeout)
//     ref.current = []
//     set([])
//     ref.current.push(
//       setTimeout(() => set(['Apples', 'Oranges', 'Kiwis']), 2000)
//     )
//     ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000))
//     ref.current.push(
//       setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000)
//     )
//   }, [])

//   useEffect(() => void reset(), [])

//   return (
//     <div>
//       {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
//         <animated.div
//           className='transitions-item'
//           key={key}
//           style={rest}
//           onClick={reset}
//         >
//           <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
//             {item}
//           </animated.div>
//         </animated.div>
//       ))}
//     </div>
//   )
// }

// render(<App />, document.getElementById('root'))

// import ReactDOM from 'react-dom'
// import React, { useRef, useState, useEffect } from 'react'
// import lorem from 'lorem-ipsum'
// import { X } from 'react-feather'
// import { useTransition } from 'react-spring'
// import {
//   GlobalStyle,
//   Main,
//   Container,
//   Message,
//   Button,
//   Content,
//   Life
// } from './stylespringtest'

// let id = 0

// function MessageHub ({
//   config = { tension: 125, friction: 20, precision: 0.1 },
//   timeout = 3000,
//   children
// }) {
//   const [refMap] = useState(() => new WeakMap())
//   const [cancelMap] = useState(() => new WeakMap())
//   const [items, setItems] = useState([])
//   const transitions = useTransition(items, item => item.key, {
//     from: { opacity: 0, height: 0, life: '100%' },
//     enter: item => async next =>
//       await next({ opacity: 1, height: refMap.get(item).offsetHeight }),
//     leave: item => async (next, cancel) => {
//       cancelMap.set(item, cancel)
//       await next({ life: '0%' })
//       await next({ opacity: 0 })
//       await next({ height: 0 })
//     },
//     onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
//     config: (item, state) =>
//       state === 'leave' ? [{ duration: timeout }, config, config] : config
//   })

//   useEffect(
//     () =>
//       void children(msg => setItems(state => [...state, { key: id++, msg }])),
//     []
//   )
//   return (
//     <Container>
//       {console.log(transitions)}
//       {transitions.map(({ key, item, props: { life, ...style } }) => (
//         <Message key={key} style={style}>
//           <Content ref={ref => ref && refMap.set(item, ref)}>
//             <Life style={{ right: life }} />
//             <p>{item.msg}</p>
//             <Button
//               onClick={e => {
//                 e.stopPropagation()
//                 cancelMap.has(item) && cancelMap.get(item)()
//               }}
//             >
//               <X size={18} />
//             </Button>
//           </Content>
//         </Message>
//       ))}
//     </Container>
//   )
// }

// export default function App () {
//   const ref = useRef(null)
//   return (
//     <Main onClick={() => ref.current(lorem())}>
//       <GlobalStyle />
//       Click here to create notifications
//       <MessageHub children={add => (ref.current = add)} />
//     </Main>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))
