import React from 'react'
import { useTransition, animated } from 'react-spring'

const TransitionStagger = props => {
  const { children, ...rest } = props
  const items = React.Children.toArray(children)
  console.log(items)
  const transitions = useTransition(items, {
    config: { mass: 1, tension: 477, friction: 16 },
    from: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    trail: 700,
    // leave: { opacity: 0, y: 20 }
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
