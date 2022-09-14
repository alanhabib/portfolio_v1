import React from 'react'
import styled, { keyframes } from 'styled-components'

const fly = keyframes`
  from {
    transform: translateY(0.1em);
  }
  to {
    transform: translateY(-0.1em);
  }
`
const load = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`


const ButtonContainer = styled.button`
  font-family: inherit;
  font-size: 20px;
  background: var(--navy);
  color: white;
  padding: 0 16px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: all 0.2s;
  margin: 0 auto;
  width: 150px;
  justify-content: center;
  height: 65px;

  span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover .svg-wrapper {
    animation: ${fly} 0.6s ease-in-out infinite alternate;
  }

  &:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  &:hover span {
    transform: translateX(5em);
  }

  &:active {
    transform: scale(0.95);
  }
`

const Loader = styled.div`
  width: 45px;
  height: 45px;
  border: 4px solid var(--peach);
  border-radius: 50px;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 0.5s linear forwards;

  span {
    display: block;
    background: var(--peach);
  }

  .hour {
    width: 4px;
    height: 18px;
    border-radius: 50px;
    position: absolute;
    top: 18.5px;
    left: 10px;
    animation: ${load} 1.2s linear infinite;
    transform-origin: top center;
  }

  .min {
    width: 4px;
    height: 18px;
    border-radius: 50px;
    position: absolute;
    top: 18.5px;
    left: 10px;
    animation: ${load} 1.2s linear infinite;
    transform-origin: top center;
  }

  .min {
    height: 14px;
    animation: ${load} 4s linear infinite;
  }

  .circle {
    width: 8px;
    height: 8px;
    border-radius: 50px;
    position: absolute;
    top: 14px;
    left: 8px;
  }
`

const Button = ({ isLoading, success }) => {
  return (
    <ButtonContainer>
      {success ? <div>Success</div> : <>
        {
          isLoading ? <Loader className='loader'>
            <span className='hour' />
            <span className='min' />
            <span className='circle' />
          </Loader> : <>
            <div className='svg-wrapper-1'>
              <div className='svg-wrapper'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path fill='currentColor'
                        d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z' />
                </svg>
              </div>
            </div>
            <span>Send</span> </>
        }
      </>}
    </ButtonContainer>
  )
}

export default Button