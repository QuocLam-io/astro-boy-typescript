import React from 'react'

type ProgressDisplayProps = {
  incorrectGuesses: number
}

const ProgressDisplay = ({incorrectGuesses}: ProgressDisplayProps) => {

  return (
    <div className='ProgressDisplay' >
      <div className="counter-displays"></div>
      <img src={`/public/imgs/fail${incorrectGuesses}.svg`} alt="Rocket" />
    </div>
  )
}

export default ProgressDisplay