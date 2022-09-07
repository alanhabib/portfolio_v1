import React from 'react'
import styled, { keyframes } from 'styled-components'

const moveText = keyframes`
0% {
    bottom: -0.2em;
    opacity: 1;
    color: var(--lightest-slate);
}

50% {
    bottom: 0.2em;
    color: var(--peach);
}

100% {
    bottom: 0;
    opacity: 1;
color: var(--lightest-slate);
}
`
const AnimateSpan = styled.span`
  position: relative;
  animation: ${moveText} 0.75s forwards;
  bottom: -1em;
  opacity: 0;
`

const FontAnimation = ({ copy, role }) => {
  return (
    <span aria-label={copy} role={role}>
      {copy.map((char, index) => {
        let style = { animationDelay: 0.5 + index / 10 + 's' }
        return (
          <AnimateSpan aria-hidden="true" key={index} style={style}>
            {char}
          </AnimateSpan>
        )
      })}
    </span>
  )
}

export default FontAnimation
