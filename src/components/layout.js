import React, { useState, useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Nav from './nav'
import Loader from './loader'
import Footer from './footer'
import { GlobalStyle, theme } from '@styles'
import SlidingButton from './animations/SlidingButton'
import Icon from './icons/icon'
import { email } from '../utils/config'
import FadeIn from './animations/FadeIn'
import useElementOnScreen from '../hooks/useElementOnScreen'


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

`

const Layout = ({ children, location }) => {
  const isHome = location?.pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  })

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'))
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('target', '_blank')
        }
      })
    }
  }

  useEffect(() => {
    if (isLoading) {
      return
    }

    if (location.hash) {
      const id = location.hash.substring(1) // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }

    handleExternalLinks()
  }, [isLoading, location.hash])
  
  return (
    <div id='root'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <a className='skip-to-content' href='#about'>
          Skip to Content
        </a>
        {isLoading && isHome ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (

          <StyledContent>
            <FadeIn delay={700} duration={1000}>
              <Nav isHome={isHome} />
            </FadeIn>
            <FadeIn delay={3000} duration={1000}>
              <Wrapper>
                <SlidingButton side={'left'} leftPosition={'40%'} topPosition={'110px'} visible={isVisible}>
                  <a style={{ width: '30px', height: '30px' }} href={`mailto:${email}`}><Icon name={'Envelope'} /></a>
                </SlidingButton>
                <SlidingButton side={'right'} leftPosition={'45%'} topPosition={'80px'}
                               visible={isVisible}><a style={{ width: '30px', height: '30px' }}
                                                      href={'https://twitter.com/alanhabib10'}
                                                      aria-label={'Twitter'} target='_blank' rel='noreferrer'>
                  <Icon name={'Twitter'} /></a></SlidingButton>
                <SlidingButton side={'right'} leftPosition={'50%'} topPosition={'150px'}
                               visible={isVisible}> <a style={{ width: '30px', height: '30px' }}
                                                       href={'https://www.linkedin.com/in/alan-habib-43a5b9167/'}
                                                       aria-label={'Linkedin'} target='_blank' rel='noreferrer'>
                  <Icon name={'Linkedin'} /></a></SlidingButton>
                <SlidingButton side={'right'} leftPosition={'55%'} topPosition={'230px'}
                               visible={isVisible}><a style={{ width: '30px', height: '30px' }}
                                                      href={'https://calendly.com/alanhabib/15min'}
                                                      aria-label={'Calendly'} target='_blank' rel='noreferrer'>
                  <Icon name={'Calendly'} /></a></SlidingButton>
              </Wrapper>
            </FadeIn>

            <div
              style={{
                position: 'absolute',
                bottom: '200px',
              }}
              ref={containerRef}
            />
            <div id='content'>
              {children}
              {/*<Footer />*/}
            </div>
          </StyledContent>

        )}
      </ThemeProvider>
    </div>
  )
}

export default Layout
