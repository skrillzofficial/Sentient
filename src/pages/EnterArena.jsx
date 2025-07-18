import React from 'react'
import Nav from '../components/Nav'
import Directory from '../components/Directory'
import Tournament from '../components/Tournament'

const EnterArena = () => {
  return (
    <div className=' bg-black'>
          <Nav/>
      <div className='container mx-auto w-11/12 text-gray-100 px-5 py-5'> 
          <Directory/>
          <Tournament/>
      </div>
    </div>

  )
}

export default EnterArena