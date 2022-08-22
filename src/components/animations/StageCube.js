import React from 'react'
import {
  FaReact,
  FaJsSquare,
  FaGithub,
  FaCss3Alt,
  FaHtml5,
  FaAws,
} from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

const spincube = keyframes`from,
to {
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
16% {
  transform: rotateY(-90deg) rotateZ(90deg);
}
33% {
  transform: rotateY(-90deg) rotateX(90deg);
}
50% {
  transform: rotateY(-180deg) rotateZ(90deg);
}
66% {
  transform: rotateY(-270deg) rotateX(90deg);
}
83% {
  transform: rotateX(90deg);
}`

const StageCubeCont = styled.div`
  width: 50%;
  height: 100%;
  top: 0;
  padding-top: 18%;
  margin-left: 0;
  position: absolute;
  right: 0;
  overflow: hidden;
`
const CubeSpinner = styled.div`
  animation-name: ${spincube};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 12s;
  transform-style: preserve-3d;
  transform-origin: 100px 100px 0;
  margin-left: calc(50% - 100px);

  div {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.4);
    text-align: center;
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px 0px lightyellow;
  }

  .face1 {
    transform: translateZ(100px);
    color: #dd0031;
  }
  .face2 {
    transform: rotateY(90deg) translateZ(100px);
    color: #f06529;
  }
  .face3 {
    transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
    color: #28a4d9;
  }
  .face4 {
    transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
    color: #5ed4f4;
  }
  .face5 {
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
    color: #efd81d;
  }
  .face6 {
    transform: rotateX(-90deg) translateZ(100px);
    color: #ec4d28;
  }
`

const StageCube = () => {
  return (
    <StageCubeCont>
      <CubeSpinner>
        <div className="face1">
          <FaAws color="#000" />
        </div>
        <div className="face2">
          <FaHtml5 color="#F06529" />
        </div>
        <div className="face3">
          <FaCss3Alt color="#28A4D9" />
        </div>
        <div className="face4">
          <FaReact color="#5ED4F4" />
        </div>
        <div className="face5">
          <FaJsSquare color="#EFD81D" />
        </div>
        <div className="face6">
          <FaGithub color="#EC4D28" />
        </div>
      </CubeSpinner>
    </StageCubeCont>
  )
}

export default StageCube
