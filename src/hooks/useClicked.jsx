import { useState } from 'react'

const useClicked = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(false)
    setClicked(!clicked)
  }

  return {
    clicked,
    handleClick,
    setClicked,
  }
}

export default useClicked
