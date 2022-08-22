import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import useInterval from '../../hooks/useInterval'

const animation = keyframes`
    50% {opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
    60% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
    75% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
    80% {opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px);}
`

const Wrapper = styled.span`
  display: inline-block;
  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  span:nth-child(1) {
    animation-delay: 0.1s;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.3s;
  }

  span:nth-child(4) {
    animation-delay: 0.4s;
  }

  span:nth-child(5) {
    animation-delay: 0.5s;
  }
`

function TextAnimation() {
  const web = 'Web Development'.split('')
  const software = 'Software Engineering'.split('')
  const application = 'Application Development'.split('')
  const [items, setItems] = useState(web)
  const [count, setCount] = useState(0)
  const [play, setPlay] = useState(false)

  useInterval(
    () => {
      setItems(web)
      setCount(count + 1)

      if (count === 1) {
        setItems(software)
      }

      if (count === 2) {
        setCount(0)
        setItems(application)
      }
    },
    play ? 6000 : null
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(software)
      setPlay(true)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Wrapper>
      {items.map((char, i) => (
        <span key={char + i}>{char}</span>
      ))}
    </Wrapper>
  )
}

export default TextAnimation
