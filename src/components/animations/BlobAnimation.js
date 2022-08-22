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
const BounceAnimation = styled.h2`
  min-width: 10px;
  display: inline-block;
  animation-fill-mode: both;
  cursor: pointer;
  z-index: 20;
  &:hover {
    animation: ${rubberBand} 1s;
    color: var(--peach);
  }
`

function Bounce({ strArray, className }) {
  return strArray.map((char, i) => (
    <BounceAnimation className={className} key={char + i}>
      {char}
    </BounceAnimation>
  ))
}

export default Bounce