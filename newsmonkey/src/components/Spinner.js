import React  from 'react'
import loading from './loading.gif'

const spinner=()=> {

    return (
      <div className='spin'>
        <img src={loading} alt='loading'/>
      </div>
    )
  
}

export default spinner

