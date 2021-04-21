import React from 'react'
import { useTransition, animated } from 'react-spring'

const TransitionStagger = props => {
  const { children, ...rest } = props
  const items = React.Children.toArray(children)
  // console.log(props.delay)
  const transitions = useTransition(items, {
    config: { mass: 1, tension: 477, friction: 47 },
    from: { opacity: 0, y: 20 },
    enter: singleItem => async (next, cancel) => {
      console.log(singleItem.key)
      await new Promise(resolve =>
        setTimeout(resolve, props.delay ? +props.delay : 0)
      )
      await next({ opacity: 1, y: 0 })
    },
    trail: 321,
    keys: items.map((item, index) => index)
  })

  return (
    <div {...rest}>
      {transitions((style, item) => (
        <animated.div style={style}>
          <animated.div>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default TransitionStagger
