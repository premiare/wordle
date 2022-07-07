import React from 'react'
import Confetti from 'react-confetti'

export const WinningConfetti = () => {
  return (
    <Confetti width={window.innerWidth} height={window.innerHeight} />
  )
}