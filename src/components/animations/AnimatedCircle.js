import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotateCW = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`
const Outer = styled.div`
  position: absolute;
  border-radius: 50%;
  box-sizing: border-box;
  border-top: 4px solid transparent;
  border-left: 4px solid var(--peach);
  border-bottom: 4px solid var(--navy);
  border-right: 4px solid var(--peach);
  height: 50px;
  width: 50px;
  animation: ${rotateCW} 36s infinite linear;
`

const Reverse = styled(Outer)`
  animation: ${rotateCW} 36s infinite linear;
  animation-direction: reverse;
`
const AnimatedCircle = ({ text = '' }) => {
  return (
    <PageContainer>
      <Outer />
      {text}
      <Reverse />
    </PageContainer>
  )
}

export default AnimatedCircle
