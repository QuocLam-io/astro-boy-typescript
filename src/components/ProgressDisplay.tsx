import React from 'react'

type ProgressDisplayProps = {
  incorrectGuesses: number
}

const ProgressDisplay = ({incorrectGuesses}: ProgressDisplayProps) => {

  return (
    <div>
      <img src={`/public/imgs/fail${incorrectGuesses}.svg`} alt="" srcset="" />
    </div>
  )
}

export default ProgressDisplay