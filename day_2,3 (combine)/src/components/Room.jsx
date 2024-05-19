import React from 'react'
import { useParams } from 'react-router-dom'

const Room = () => {

    const getName = useParams()

  return (
    <>
        {(getName.name) === 'ben'?
        (<div>this is ben room</div>)
        :
        (<div>this is harry room</div>)

      
      }
    </>
  )
}

export default Room