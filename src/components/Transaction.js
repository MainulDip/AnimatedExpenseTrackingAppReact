import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'

const to = i => ({
  x: 0,
  y: i * 0,
  scale: i * 1,
  rot: 0,
  delay: i * 100
})
const from = i => ({ x: 0, rot: 0, scale: 0, y: 0 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(0deg) rotateY(${r /
    0}deg) rotateZ(${r}deg) scale(${s})`

const Transaction = ({ transaction, children }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amout < 0 ? '-' : '+'

  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(1, i => ({
    ...to(i),
    from: from(i)
  }))
  const bind = useGesture({
    onDrag: state => {
      const {
        args: [index],
        down,
        delta: [xDelta],
        direction: [xDir],
        velocity,
        movement: [dragpos],
        velocities
      } = state

      console.log(state)
      const trigger = Math.abs(velocities[0]) > 0.3 // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
      if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set(item => {
        if (index !== item) return // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        // console.log(`Gone Has Indexs: ${gone.has(index)}`)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? dragpos : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.4 : 1 // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: 0,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        }
      })

      // console.log(`xDelta: ${xDelta} || xDir: ${xDir}} || x: ${gone.has(index) ? (200 + window.innerWidth) * dir : down ? xDelta : 0} || distance: ${distance}`)

      if (!down && gone.size === 0) {
        setTimeout(() => {
          gone.clear() || set(item => to(item))
        }, 600)
      } else if (!down && gone.size === 1) {
        setTimeout(() => {
          deleteTransaction(transaction.id) && gone.clear()
        }, 600)
      }
    }
  })

  return (
    <>
      {/* // Now we're just mapping the animated values to our view, that's it. Btw,
      this component only renders once. :-) */}
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          style={{
            cursor: 'grab',
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            )
          }}
        >
          <animated.li
            className={transaction.amount < 0 ? 'minus' : 'plus'}
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans)
            }}
          >
            {transaction.text}{' '}
            <span>
              {sign}${Math.abs(transaction.amount)}
            </span>
          </animated.li>
        </animated.div>
      ))}
    </>
  )
}

export default Transaction
