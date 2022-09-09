import React, { useState, useEffect, useRef } from 'react'
// import { useStaticQuery, graphql } from "gatsby";
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { srConfig } from '../../utils/config'
import { KEY_CODES } from '../../utils'
import sr from '../../utils/sr'
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion'
import AnimatedLetters from '../animations/AnimatedLetters'

const StyledJobsSection = styled.section`
  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }

    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
  }
`

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * var(--tab-width)));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .location {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`

const DATA = [
  {
    id: 4,
    company: 'Quinyx',
    title: 'Frontend Engineer',
    text: [
      'Developing a SaaS platform with React/TypeScript that is being used by many big companies, such as Mc\'Donalds, Burger King, SATS and more',
      'Working with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Lokalise and Storybook. We use these frontend development tools to build complex scheduling solutions and exceptional digital experiences.',
      'Communicate with multi-disciplinary teams of engineers, designers and product managers on a daily basis',
    ],
    date: 'Jan 2022 - Ongoing',
    location: 'Stockholm',
    url: 'https://quinyx.com/',
  },
  {
    id: 3,
    company: 'Itchy',
    title: 'Software Engineer',
    text: [
      'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Itchy´s mobile and web application',
      'Worked on the whole tech-stack from react-native frontend to python backend followed by an S3 AWS bucket.',
      'Main focus was working on the frontend application but I also worked server development when needed',
    ],
    date: 'Oct 2021 - Jan 2022',
    location: 'Stockholm',
    url: 'https://itsitchy.com/',
  },
  {
    id: 2,
    company: 'Ding',
    title: 'Frontend Developer',
    text: [
      'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, React Native and React',
      'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.',
      'Worked on an application that has sold over 250 000 times on app store.',
      'Clients included Convini AB, Odd Molly and Lyft and more.',
    ],
    date: 'May 2019 - Oct 2020',
    location: 'Stockholm',
    url: 'https://ding.se/',
  },
  {
    id: 1,
    company: 'Academic Work',
    title: 'Web developer',
    text: [
      'Interfaced with UX-designers and other developers to ensure thoughtful and coherent user experiences across AW platform.',
      'Worked with a client on a scale-up company managing their database in SQL.',
    ],
    date: 'May 2018 - Jan 2019',
    location: 'Stockholm',
    url: 'https://www.academicwork.se/',
  },
]

const Jobs = () => {
  const [activeTabId, setActiveTabId] = useState(0)
  const [tabFocus, setTabFocus] = useState(null)
  const tabs = useRef([])
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealContainer.current, srConfig())
  }, [])

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus()
      return
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0)
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1)
    }
  }

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus])

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault()
        setTabFocus(tabFocus - 1)
        break
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault()
        setTabFocus(tabFocus + 1)
        break
      }

      default: {
        break
      }
    }
  }

  return (
    <StyledJobsSection id='jobs' ref={revealContainer}>
      <h2 className='numbered-heading'>
        <AnimatedLetters strArray={'Where I’ve Worked'.split('')} idx={15} />
      </h2>
      <div className='inner'>
        <StyledTabList
          role='tablist'
          aria-label='Job tabs'
          onKeyDown={(e) => onKeyDown(e)}
        >
          {DATA?.map(({ company }, i) => {
            return (
              <StyledTabButton
                key={i}
                isActive={activeTabId === i}
                onClick={() => setActiveTabId(i)}
                ref={(el) => (tabs.current[i] = el)}
                id={`tab-${i}`}
                role='tab'
                tabIndex={activeTabId === i ? '0' : '-1'}
                aria-selected={activeTabId === i ? true : false}
                aria-controls={`panel-${i}`}
              >
                <span>{company}</span>
              </StyledTabButton>
            )
          })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {DATA?.map(({ title, text, date, location, url, company }, i) => {
            return (
              <CSSTransition
                key={i}
                in={activeTabId === i}
                timeout={250}
                classNames='fade'
              >
                <StyledTabPanel
                  id={`panel-${i}`}
                  role='tabpanel'
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}
                >
                  <h3>
                    <span>{title}</span>
                    <span className='company'>
                      &nbsp;@
                      <a href={url} className='inline-link'>
                        {company}
                      </a>
                    </span>
                  </h3>
                  <p className='location'>{date}</p>
                  <div className='range'>{location}</div>
                  <ul className='skills-list'>
                    {text.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                  {' '}
                </StyledTabPanel>
              </CSSTransition>
            )
          })}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  )
}

export default Jobs
