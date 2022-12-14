import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled, { css } from 'styled-components'
import { navLinks } from '@utils/config'
import { loaderDelay } from '@utils'
import useScrollDirection from '@hooks/useScrollDirection'
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion'
import { Menu } from '@components'
import AnimatedCircle from './animations/AnimatedCircle'
import pdf from '../assets/resume.pdf'

const StyledHeader = styled.header`
  ${({ theme }) => theme?.mixins?.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(0, 83, 159, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${({ scrollDirection, scrolledToTop }) =>
      scrollDirection === 'up' &&
      !scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(0, 83, 159, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${({ scrollDirection, scrolledToTop }) =>
      scrollDirection === 'down' &&
      !scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`

const StyledNav = styled.nav`
  ${({ theme }) => theme?.mixins?.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme?.mixins?.flexCenter};

    a {
      color: var(--green);
      width: 4rem;
      height: 4rem;
      padding: 12px;
      &:hover,
      &:focus {
        svg {
          fill: var(--green-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }
`

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme?.mixins?.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme?.mixins?.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`

const CircleText = styled.div`
  color: var(--peach);
`

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const prefersReducedMotion = usePrefersReducedMotion()

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const timeout = isHome ? loaderDelay : 0
  const fadeClass = isHome ? 'fade' : ''
  const fadeDownClass = isHome ? 'fadedown' : ''
  const Logo = (
    <div className="logo" tabIndex="-1">
      {isHome ? (
        // <CustomLogo to="/" aria-label="home">
        <AnimatedCircle text={<CircleText>AH</CircleText>} />
      ) : (
        // </CustomLogo>
        // <CustomLogo to="/" aria-label="home">
        <AnimatedCircle text={<CircleText>AH</CircleText>} />
        // </CustomLogo>
      )}
    </div>
  )

  const ResumeLink = (
    <a href={pdf} className="resume-button" target={'_blank'} rel="noreferrer">
      Resume
    </a>
  )

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            {Logo}
            <StyledLinks>
              <ol>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link
                        activeClass="active"
                        to={url}
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        style={{ color: '#fff' }}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
              </ol>
              <div>{ResumeLink}</div>
            </StyledLinks>

            <Menu />
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  {Logo}
                </CSSTransition>
              )}
            </TransitionGroup>

            <StyledLinks>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition
                        key={i}
                        classNames={fadeDownClass}
                        timeout={timeout}
                      >
                        <li
                          key={i}
                          style={{
                            transitionDelay: `${isHome ? i * 100 : 0}ms`,
                          }}
                        >
                          <Link
                            activeClass="active"
                            to={url}
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                            style={{ cursor: 'pointer' }}
                          >
                            {name}
                          </Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>

              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                    <div
                      style={{
                        transitionDelay: `${
                          isHome ? navLinks.length * 100 : 0
                        }ms`,
                      }}
                    >
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </StyledLinks>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  )
}

Nav.propTypes = {
  isHome: PropTypes.bool,
}

export default Nav
