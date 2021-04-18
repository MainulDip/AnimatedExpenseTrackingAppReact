import React from 'react'
import { useTrail, animated } from 'react-spring'

const TrailStagger = props => {
  const { children, ...rest } = props
  const items = React.Children.toArray(children)
//   console.log(values)
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 477, friction: 47 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
    leave: { opacity: 0, x: 20 }
  })
  return (
    <div {...rest}>
      <div>
        {trail.map(({ x, ...rest }, index) => (
          <animated.div
            key={index}
            style={{
              ...rest,
              transform: x.to(x => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.div>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default TrailStagger
