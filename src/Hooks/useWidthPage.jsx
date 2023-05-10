"use client"
import { useState, useEffect } from 'react'

function useWidthPage(breakpoint) {
  const [showSelect, setShowSelect] = useState(false)

  useEffect(() => {
    function handleResize() {
      setShowSelect(window.innerWidth < breakpoint)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return [showSelect]
}

export default useWidthPage