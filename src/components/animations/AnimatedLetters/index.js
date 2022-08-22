import React from 'react'
import styled, { keyframes } from 'styled-components'

const rubberBand = keyframes`
  0%{transform: scale3d(1,1,1)};
  35%{transform: scale3d(1.25,0.75,1)};
  45%{transform: scale3d(.75,1,1)};
  60%{transform: scale3d(1.2,0.8,1)};
  75%{transform: scale3d(1.05,.95,1)};
  100%{transform: scale3d(1,1,1)};
`
const TextAnimateHover = styled.span`
  min-width: 10px;
  display: inline-block;
  animation-fill-mode: both;
  cursor: pointer;

  &:hover {
    animation: ${rubberBand} 1s;
    color: #eea47fff;
  }
`

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <TextAnimateHover
          key={char + i}
          className={`${letterClass} _${i + idx}`}
        >
          {char}
        </TextAnimateHover>
      ))}
    </span>
  )
}

export default AnimatedLetters
