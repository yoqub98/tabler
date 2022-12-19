import { useState, useRef } from 'react';
import {formatTime} from './Utils'

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [checkOutTime, setCheckoutTime] = useState("0")
  const countRef = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    setCheckoutTime ((timer))
    
  }

  const handlePause = () => {
    setCheckoutTime ((timer))
    clearInterval(countRef.current)
    setIsPaused(false)
    
    
   
  }

  const handleResume = () => {
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(true)
    setTimer(0)
  }

  return { timer, isActive, isPaused, checkOutTime, handleStart, handlePause, handleResume, handleReset, }
}

export default useTimer