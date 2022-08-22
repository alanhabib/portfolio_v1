import React, { useEffect, useRef } from 'react'
// import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components'
import { srConfig } from '../../utils/config'
import sr from '../../utils/sr'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import profile from '../../images/alanhabib.jpeg'
import ParticlesAnimation from '../animations/ParticlesAnimation/Particles'
import AnimatedLetters from '../animations/AnimatedLetters'

const StyledAboutSection = styled.section`
  // max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme?.mixins?.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`

const About = () => {
  const revealContainer = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(revealContainer.current, srConfig())
  }, [])

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'React Native',
    'Node.js',
    'Styled-Components',
  ]

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <ParticlesAnimation />
      <h2 className="numbered-heading">
        <AnimatedLetters strArray={'About me'.split('')} idx={15} />
      </h2>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Alan and I enjoy creating things that live on
              the internet. My interest in web development started back in 2018
              when I decided to try out the intense Academy Web Developer
              Bootcamp. During that time I learned a lot about JavaScript, HTML
              &amp; CSS!
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://www.academicwork.se/">a big consultancy firm</a>{' '}
              later on
              <a href="https://ding.se/">an inhouse consultancy agency</a>,{' '}
              <a href="https://itsitchy.com/">a start-up</a>, and{' '}
              <a href="https://www.quinyx.com/">a big corporation</a>. My main
              focus these days is building a SaaS platform with the best digital
              experiences at <a href="https://quinyx.com/">Quinyx</a>.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <img src={profile} alt="profile" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  )
}

export default About
