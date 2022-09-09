import React from 'react'
import styled from 'styled-components'
import { Layout, Hero, About, Jobs, Featured } from '../components'
import Form from '../components/Form'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

const Home = ({ location }) => (
  <div id='root'>
    <Layout location={location}>
      <StyledMainContainer className='fillHeight'>
        <Hero id='home' />
        <About id='about' />
        <Jobs id='jobs' />
        <Featured id='projects' />
        <Form id='contact' />
      </StyledMainContainer>
    </Layout>
  </div>

)

export default Home