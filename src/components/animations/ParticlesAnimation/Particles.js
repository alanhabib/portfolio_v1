import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import ParticlesConfig from './particles-config'

const ParticlesAnimation = ({ children }) => {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }

  return (
    <Particles params={ParticlesConfig} id="tsparticles" init={particlesInit} />
  )
}

export default ParticlesAnimation
