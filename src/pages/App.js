import { Router } from '@reach/router'
import React from 'react'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <Home path='/' />
    </Router>
  )
}

export default App
