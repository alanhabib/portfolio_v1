import { useEffect, useRef, useState } from 'react'

const useElementOnScreen = (options) => {
  const containerRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  const callBackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options)
    let observerRefValue = null
    if (containerRef.current) {
      observer.observe(containerRef.current)
      observerRefValue = containerRef.current
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue)
    }
  }, [containerRef, options, callBackFunction])

  return [containerRef, isVisible]
}

export default useElementOnScreen