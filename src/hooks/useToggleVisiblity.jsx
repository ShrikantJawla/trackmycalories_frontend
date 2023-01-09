import { useState } from 'react'

export const useToggleVisiblity = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisiblity = () => {
    setIsVisible((prev) => (prev = !prev))
  }
  return { isVisible, toggleVisiblity }
}
