import React, { useCallback, useEffect, useRef, useState } from 'react'
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
    .path {
      stroke-dasharray: ${(props) => props.pathLength + ' ' + props.pathLength};
      stroke-dashoffset: ${(props) =>
              props.animate ? props.pathLength - props.drawOffset : props.pathLength};
    }
  }
`
const Cat = () => {
    const pathRef = useRef()
    const ref = useRef()
    const [pathLength, setPathLength] = useState()
    const [drawReverse, setDrawReverse] = useState()
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        if (drawReverse) {
            setAnimate(true)
        }
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength())
        }
    }, [pathRef, drawReverse])

    const handleScroll = useCallback(() => {
        let scrollPercentage =
            document.documentElement.scrollTop /
            (document.documentElement.scrollHeight -
                document.documentElement.clientHeight)

        let drawLength = pathLength * scrollPercentage
        setDrawReverse(drawLength)
    }, [pathLength])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    // const onScroll = (e) => {
    //   const window = e.currentTarget.scrollTop
    //   console.log(window)
    //   //... rest of you function
    // }
    // useEffect(() => {
    //   window.addEventListener('scroll', onScroll)
    //   return () => {
    //     window.removeEventListener('scroll', onScroll)
    //   }
    // })

    return (
        <Container ref={ref} style={{ height: '200vh', margin: 0 }}>
            <LineContainer
                drawOffset={drawReverse}
                pathLength={pathLength}
                animate={animate}
                className="line-container"
            >
                <svg
                    viewBox="0 0 303 666"
                    fill="none"
                    preserveAspectRatio="xMidYMax meet"
                >
                    <path
                        className="path"
                        ref={pathRef}
                        d="M88.1072 1.99463C89.0381 9.44161 92.0491 16.8245 94.8793 23.7155C98.6518 32.9009 100.658 42.3717 103.457 51.8573C106.368 61.7214 111.414 71.4868 113.189 81.6546C114.435 88.7931 117.983 95.4045 121.165 101.871C127.889 115.535 136.461 128.354 144.441 141.299C157.098 161.831 176.525 175.289 193.3 192.065C201.922 200.686 210.494 208.942 216.326 219.805C222.727 231.732 225.29 244.94 227.161 258.231C229.437 274.4 231.287 287.693 219.486 300.368C210.044 310.509 193.831 315.099 180.308 315.317C167.219 315.528 154.815 314.882 147.902 301.773C142.634 291.782 144.788 273.504 154.975 267.511C160.31 264.373 165.982 263.595 172.081 263.849C180.802 264.212 187.248 275.091 191.545 281.507C204.168 300.355 214.348 323.371 220.79 345.114C225.663 361.562 229.816 386.537 220.389 401.9C209.09 420.312 191.487 430.18 173.686 441.228C164.743 446.779 145.896 459.376 145.896 471.577C145.896 476.436 149.549 478.872 153.721 480.757C167.346 486.914 181.399 489.126 196.16 490.489C214.971 492.225 233.841 490.634 252.644 492.495C261.042 493.327 269.423 494.558 277.274 497.762C286.732 501.623 297.526 510.62 300.651 520.687C305.381 535.931 288.211 543.508 276.422 548.077C249.318 558.579 219.078 562.897 190.19 563.678C171.489 564.183 152.928 566.336 134.208 566.336C130.393 566.336 117.904 566.42 117.904 560.016C117.904 553.666 123.573 549.145 129.041 547.073C138.35 543.547 149.987 544.133 159.741 544.164C170.743 544.198 181.6 545.28 192.297 547.876C204.262 550.78 215.585 555.04 227.161 559.113C233.704 561.415 242.077 564.805 247.527 569.246C267.166 585.247 224.644 600.288 214.62 604.059C157.232 625.651 95.0282 625.761 35.335 635.863C25.2054 637.577 13.002 639.425 3.63151 643.99C-2.34858 646.903 11.2716 649.802 12.5606 650.11C33.9633 655.222 57.7719 654.947 79.5794 653.27C105.245 651.296 129.224 641.682 153.872 635.06C167.6 631.372 181.47 627.682 195.357 624.626C200.185 623.564 205.388 622.319 210.356 622.319C214.473 622.319 212.653 629.106 212.714 632.251C212.8 636.708 215.334 641.407 216.326 643.638C218.273 648.02 222.616 653.658 225.556 657.333C227.088 659.249 228.967 666.308 228.967 663.854"
                        stroke="black"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
            </LineContainer>
            <section className="one">
                <h1 data-rate=".4" data-direction="vertical">
                    OCEAN STUFF
                </h1>
            </section>
            <section className="two">
                <h1 className="scroll" data-rate=".2" data-direction="vertical">
                    OMG Scroll
                </h1>
                <p>big watermark</p>
            </section>
        </Container>
    )
}

export default Cat
