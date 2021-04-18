import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from '@react-spring/web'
import './testspring.scss'

function Testspring () {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, {
    key: item => item.key,
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6'
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' }
    ],
    to: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' }
    ],
    leave: [
      { color: '#c23369' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 }
    ],
    update: { color: '#28b4d7' }
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(
      setTimeout(() => set(['Apples', 'Oranges', 'Kiwis']), 2000)
    )
    ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000))
    ref.current.push(
      setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000)
    )
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
      {transitions((style, item, key, ...rest) => (
        <animated.div
          className='transitions-item'
          key={key}
          style={style}
          onClick={reset}
        >
          <animated.div style={{ height: style.innerHeight }}>
            {item}
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}

export default Testspring
