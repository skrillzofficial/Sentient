import React, { useState } from 'react'
import { ChevronLeft, Diameter } from 'lucide-react'
import Agents from '../api/Agent'
import viewers from '../api/ViewerComment'

const Watch = () => {
  // managing the chat/active state
  const [button,setButton]= useState(true)

  // function to toggle through chat and active
  const togglebutton = (boolean)=>{
    setButton(boolean)
  }
  return (
    <div className='bg-black text-gray-100 pb-4 space-y-5'>
        {/* navbar */}
        <div className='w-full relative flex items-center bg-gray-900 border-b-2 border-gray-500'>
             {/* the return/BACK icon */}
              <span className=''><ChevronLeft className='absolute bottom-[35%] top-[35%] text-gray-100 size-[17px]'/></span>

            <nav className='container w-11/12 mx-auto flex items-center justify-between px-3 py-3'>
                {/* left side (enter arena) */}
                <div className='flex flex-col'>
                    <span className='text-3xl font-bold text-wrap tracking-wide bg-gradient-to-br bg-clip-text text-transparent  from-blue-500 to-purple-500 '>Neural Network Brawl</span>
                    {/* <p className='text-[10px] text-gray-100'>Join live, battles and tournament</p> */}
                </div>

                {/* right side  */}
                <div className='flex flex-col gap-2'>
                   <span className='bg-green-300 px-3 py- text-center font-medium rounded-lg text-gray-900 font-semibold'>Live Games</span>
                     {/* <span className='bg-orange-300 px-4 text-center font-medium rounded-lg text-nowrap text-gray-900'>Starting Soon</span> */}
                </div>
            </nav>
           </div> 

        <div className='lg:container mx-auto w-12/12 px-3 flex flex-col md:flex-row gap-5'>
            {/* the field */}
          <div className='relative w-full h-[100vh] bg-gray-900 border border-gray-600 rounded-lg'>
             {/* active agent */}
            <div className='bg-white/20 backdrop-blur-sm absolute top-2 left-3 p-1 rounded-lg'>
                <p className='text-sm text-green-400'>2 Alive</p>
                <p className='text-sm text-red-400'>1 Eliminated</p>
            </div>
            {/* price pool */}
            <div className='bg-white/20 backdrop-blur-sm text-center absolute top-2 right-3 p-1 w-13 rounded-lg'>
                <p className='text-sm text-green-400 font-semibold'>$2000</p>
                <p className='text-sm text-wrap'>price pool</p>
            </div>
            {/* the agents */}
            <span className='absolute top-[75%] left-[30%] relative'>
              <p className='text-sm text-nowrap text-gray-600 absolute left-3 transform -translate-x-1/2 top-[-25px]'>shadow weaver</p>
              <span className='p-3 py-0.5 bg-orange-400 rounded-full'></span> 
            </span>
            
            <span className='absolute top-[45%] left-[50%] relative'>
              <p className='text-sm text-nowrap text-gray-600 absolute left-3 transform -translate-x-1/2 top-[-25px]'>Nexus Prime</p>
              <span className='p-3 py-0.5 bg-red-400 rounded-full'></span> 
            </span>

            <span className='absolute top-[35%] left-[20%] relative'>
              <p className='text-sm text-nowrap text-gray-600 absolute left-3 transform -translate-x-1/2 top-[-25px]'>Iron Guardian</p>
              <span className='p-3 py-0.5 bg-green-400 rounded-full'></span> 
            </span>
            
          </div>
          {/* agent/chat */}
          <div className='space-y-2'>
            <span className='flex px-2 gap-5 bg-gray-600 rounded-lg py-1'>
              <button className={`w-[100%]
              ${button ? 'bg-gray-800'
              :'bg-gray-600'
               } rounded-lg py-1`} onClick={()=>togglebutton(true)}>Agent</button>
              <button className={`w-[100%] ${!button ? 'bg-gray-800' : 'bg-gray-600'} rounded-lg py-1`} 
                onClick={() => togglebutton(false)}
                >Chat</button>
            </span>
            {/* Agent */}
            {
              button && <div className='space-y-2 '>
            <h2 className='font-semibold py-3 '>Active Agent</h2>
              {
                Agents.map((Agent)=>(
                <div key={Agent.id} className='space-y-2 border border-gray-200 p-2 rounded-lg bg-gray-900'>
                  <span className='flex justify-between'>
                    <h2>{Agent.name}</h2>
                    <p>Alive</p>
                  </span>

                  <span className='flex justify-between'>
                    <p>{Agent.status}</p>
                    <p>{Agent.health}</p>
                  </span>

                  <div className='w-full py-1 bg-blue-400 rounded-full'></div>
                  <span className='flex justify-between'>
                    <p>{Agent.kills}</p>
                    <p className='text-gray-400'>by {Agent.player}</p>
                  </span>
                </div>
                ))
              }
          </div>
            }
           {/* chat */}
          {!button && <div className='space-y-2 border border-gray-200 p-2 rounded-lg bg-gray-900'>
            <h2 className='font-semibold py-3 '>Live Chat</h2>
              {
                viewers.map((viewer)=>(
                <div key={viewers.id} >
                  <span className='flex'>
                    <h2>{viewer.viewer}</h2>
                    <p className='text-blue-400'>{viewer.timestamp}</p>
                  </span>
                  <span>{viewer.comment}</span>
                </div>
                ))
              }
          </div>}
          </div>
        </div>
    </div>
  )
}

export default Watch
