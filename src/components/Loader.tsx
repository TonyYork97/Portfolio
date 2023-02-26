import React from 'react'
import '../styles/Loader.scss'

type Props = {}

export const Loader = (props: Props) => {
  return (
    <div className='loader-page'>


      <div className='loader'>
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  )

}
