import { Router } from '@reach/router'
import React from 'react'
// import Contact from './Contact/contact'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <Home path="/" />
      {/* <Contact path="contact" /> */}
    </Router>
  )
}

export default App
