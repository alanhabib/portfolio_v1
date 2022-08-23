import React, { useRef } from 'react'
import styled from 'styled-components'
import ocean from '../../images/ocean.jpg'

const Container = styled.div`
  section {
    height: 100vh;
    display: grid;
    place-content: center;
    font-family: 'Garamond';
    font-size: 4em;
  }
  .one {
    background: url(${ocean});
    background-size: cover;
  }

  .two {
    font-size: 6rem;
    position: relative;
    overflow: hidden;
  }

  p {
    position: absolute;
    z-index: -1;
    color: rgb(241, 241, 241);
    top: 10%;
    left: 20%;
    white-space: nowrap;
    font-size: 30rem;
  }
`

const LineContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  svg {
    display: inline-block;
    height: 100%;
  }
`
const Cat = () => {
  let path = useRef()

  //   let path = document.querySelector('path')
  let pathLength = path.current
  console.log(pathLength)
  return (
    <Container style={{ height: '500vh', margin: 0 }}>
      <LineContainer className="line-container">
        <svg
          viewBox="0 0 209 1023"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          <path
            ref={(ref) => (path = ref)}
            d="M123 0C123 252 70.9999 344.333 44.9999 359L5.99991 331C2.99991 353.667 -1.20009 399.4 5.99991 401C13.1999 402.6 34.9999 375.667 44.9999 362C49.9999 371.667 62.7998 391 73.9999 391C85.2 391 111.333 397.667 123 401L205 352M205 352L166 391M205 352L123 319L73.9999 331L109 932L137 919V858C142.833 854.167 156.8 848.8 166 858C175.2 867.2 169.833 872.5 166 874H196L205 914C194.6 924.4 190 980.333 189 1007L173 1021H97H62C49.5 1012.17 28.5999 990.4 44.9999 974C61.3999 957.6 71.1666 935.833 73.9999 927L54 906L49 903"
            stroke="#E32525"
            strokeWidth="4"
          />
        </svg>
      </LineContainer>
      <section className="one">
        <h1 data-rate=".4" data-direction="vertical">
          OCEAN STUFF
        </h1>
      </section>
      <section className="two">
        <h1 data-rate=".2" data-direction="vertical">
          OMG Scroll
        </h1>
        <p>big watermark</p>
      </section>
    </Container>
  )
}

export default Cat
