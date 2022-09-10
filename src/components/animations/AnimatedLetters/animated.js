import React, { useState, useEffect } from 'react'

function Animated() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)


  const toRotate = ['on frontend', 'with applications', 'with engineering']
  const period = 3000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex(prevIndex => prevIndex - 1)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setIndex(1)
      setDelta(300)
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <h3 style={{ color: '#ccd6f6' }} className='big-heading'>
      <span>I work </span> <span className='txt-rotate'><span
      className='wrap'>{text}</span></span>
    </h3>
  )
}

export default Animated