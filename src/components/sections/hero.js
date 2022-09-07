import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components'
import { navDelay, loaderDelay } from '../../utils'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import BlobAnimation from '../animations/BlobAnimation'
import FontAnimation from '../animations/FontAnimation'

const StyledHeroSection = styled.section`
  ${({ theme }) => theme?.mixins?.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme?.mixins?.bigButton};
    margin-top: 50px;
  }
`

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay)
    return () => clearTimeout(timeout)
  }, [])

  const one = <h1>Hi, my name is</h1>
  const two = (
    <BlobAnimation
      className='big-heading'
      idx={10}
      strArray={'Alan H.'.split('')}
    />
  )
  const three = (
    <h3 className='big-heading'>
      <FontAnimation copy={'I do Web Development'.split('')} role='heading' />
    </h3>
  )
  const four = (
    <>
      <p>
        I’m a frontend developer specializing in building exceptional digital
        experiences. Currently, I’m focused on improving and working on a SaaS
        application at{' '}
        <a href='https://quinyx.com/' target='_blank' rel='noreferrer'>
          Quinyx
        </a>
        .
      </p>
      <br />
      <p>
        Apart from work I also menthor new developers through{' '}
        <a
          href='https://calendly.com/alanhabib'
          target='_blank'
          rel='noreferrer'
        >
          Calendly
        </a>{' '}
        which is really beneficial even for me. I prepare, help, explain
        different questions regarding that which has to do with Software
        Engineering and Web Development.
      </p>
    </>
  )

  const items = [one, two, three, four]

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames='fadeup' timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  )
}

export default Hero
