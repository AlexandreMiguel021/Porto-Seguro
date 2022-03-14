import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth)
  const [mobileSize, setMobileSize] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
      if (window.innerWidth < 1024.98) {
        setMobileSize(true)
      } else {
        setMobileSize(false)
      }
    }

    window.addEventListener('resize', handleResize)
  }, [size])

  return { size, mobileSize }
}

export default useWindowSize
