import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40px;
  z-index: 10;
  color: var(--light-slate);

  .svg-envelope-animate {
    width: 30px;
    height: auto;

    .paper {
      transform: translateY(10px) translateX(3px);
      transition: transform 0.5s;
      transition-timing-function: ease-out;
    }

    &:hover {
      .paper {
        transform: translateY(3px) translateX(3px);
      }
    }

    .paper {
    }

    .svg-envolope-color {
      fill: #4e4e4e;
    }
  }
`
export const Letter = () => {
  return (
    <Container>
      <svg
        className='svg-envelope-animate'
        width='25px'
        height='27px'
        viewBox='0 0 25 27'
        version='1.1'
      >
        <title>envelope</title>
        <g
          id='Page-1'
          stroke='none'
          stroke-width='1'
          fill='none'
          fill-rule='evenodd'
        >
          <g id='bottom-envelope'>
            <path
              class='svg-envolope-color'
              id='mail-envelope-open-path-copy-2'
              fill='#8D8D8D'
              d='M12.5,0 L25,11 L25,25.0059397 C25,26.1054862 24.10296,27 22.9964051,27 L2.00359486,27 C0.88976324,27 0,26.1072288 0,25.0059397 L0,11 L12.5,0 Z'
            ></path>
            <path
              id='mail-envelope-open-path'
              fill='#FFFFFF'
              d='M12.5,1.30000019 L1.54687503,10.9909992 L1.54687503,22.190589 L23.4415036,22.190589 L23.4415031,10.9909992 L14.4278349,3 L12.5,1.30000019 Z'
            ></path>
          </g>
          <g className='paper' transform='translate(3.000000, 3.000000)'>
            <path
              class='svg-envolope-color'
              id='mail-envelope-open-path-copy'
              fill='#8D8D8D'
              d='M17.0025781,-8.8817842e-16 C18.1090746,-8.8817842e-16 19,0.89525812 19,1.99961498 L19,5.36 L19.0000008,16 L1.0191048e-09,16 L-1.33226763e-15,5.36 L-1.33226763e-15,1.99961498 C-1.33226763e-15,0.88743329 0.89427625,-8.8817842e-16 1.99742191,-8.8817842e-16 L17.0025781,-8.8817842e-16 Z'
            ></path>
            <path
              id='mail-envelope-open-path'
              fill='#FFFFFF'
              d='M18,2.00862577 C18,1.45157714 17.5452911,1 17.0000398,1 L1.9999602,1 C1.44769743,1 1,1.44373571 1,2.00207596 L1,16.0313873 L18,16.0313873 L18,2.00862577 Z'
            ></path>
            <path
              class='svg-envolope-color'
              id='mail-envelope-open-path'
              fill='#8D8D8D'
              d='M3,4 L3,5 L16,5 L16,4 L3,4 L3,4 L3,4 Z'
            ></path>
            <path
              class='svg-envolope-color'
              id='mail-envelope-open-path'
              fill='#8D8D8D'
              d='M3,7 L3,8 L16,8 L16,7 L3,7 L3,7 L3,7 Z'
            ></path>
            <path
              class='svg-envolope-color'
              id='mail-envelope-open-path'
              fill='#8D8D8D'
              d='M3,13 L3,14 L16,14 L16,13 L3,13 L3,13 L3,13 Z'
            ></path>
            <path
              class='svg-envolope-color'
              id='mail-envelope-open-path'
              fill='#8D8D8D'
              d='M3,10 L3,11 L16,11 L16,10 L3,10 L3,10 L3,10 Z'
            ></path>
          </g>
          <g id='upper-envelope' transform='translate(0.000000, 11.000000)'>
            <path
              class='svg-envolope-color'
              id='TOP'
              fill='#8D8D8D'
              d='M1.484375,8.8817842e-16 L10.5625,8 L14.4375,8 L22.7146597,0.604003909 C22.7146597,0.604003909 23.390625,0 23.390625,0 L25,8.8817842e-16 L25,14.0059397 C25,15.1054862 24.10296,16 22.9964051,16 L2.00359486,16 C0.88976324,16 0,15.1072288 0,14.0059397 L0,8.8817842e-16 L1.484375,8.8817842e-16 Z'
            ></path>
            <path
              id='mail-envelope-open-path'
              fill='#FFFFFF'
              d='M9.5,9 L2.5,15 L22.5,15 L15.5,9 L9.5,9 L9.5,9 L9.5,9 Z'
            ></path>
            <path
              id='mail-envelope-open-path'
              fill='#FFFFFF'
              d='M23.68514,14.7251701 L16,8.0170898 L24,1 L24,7.5000199 L24,14.0000398 C24,14.2831537 23.8789949,14.5418569 23.68514,14.7251701 L23.68514,14.7251701 L23.68514,14.7251701 L23.68514,14.7251701 Z'
            ></path>
            <path
              id='mail-envelope-open-path'
              fill='#FFFFFF'
              d='M9,8.0170898 L1,1 L1,7.5000199 L1,14.0000398 C1,14.2831537 1.12100514,14.5418569 1.31486,14.7251701 L9,8.0170898 Z'
            ></path>
          </g>
        </g>
      </svg>
    </Container>
  )
}