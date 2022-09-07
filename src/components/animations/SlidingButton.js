import React from 'react'
import styled from 'styled-components'
import useWindowDimensions from '@hooks/useWindowDimensions'


const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;

`

const StyledButton = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  padding: 5px;
`
const AnimatedButton = styled(StyledButton)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: ${(props) => props.visible && `calc(${props.height}px - 120px)`};
  left: ${(props => props.visible ? `${props.left}` : 'initial')};
  transform: ${(props) => !props.visible && props.side === 'right' ?
          `translate(calc(${props.width}px / 2.2), calc(${props.height}px - ${props.position}))  scale(1)`
          : `translate(calc(-${props.width}px / 2.2), calc(${props.height}px - ${props.position}))  scale(1)`};
  @media (max-width: 768px) {
    //top: 0;
    //z-index: 100;
  }
  ${(props) =>
          !props.visible &&
          `
          transition: transform 0.5s;
          transition-timing-function: ease-out; 
          position: fixed;
      `}
  ${(props) =>
          props.visible &&
          ` transform: rotate(0) translate(0, 0);    
            transition: transform 0.5s;
            transition-timing-function: ease-out;
            &:hover,
            &:focus {
            transform: translateY(-3px);
              } 
            
            `}

`

const SlidingButton = ({ visible, isHome, side, topPosition, leftPosition, children }) => {
  const { height, width } = useWindowDimensions()

  return (
    <StyledButtonWrapper>
      <AnimatedButton height={height} width={width} visible={visible} side={side} left={leftPosition}
                      position={topPosition}>
        {children}
      </AnimatedButton>
    </StyledButtonWrapper>
  )
}

export default SlidingButton
