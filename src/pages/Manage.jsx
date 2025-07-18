import React, { useState } from 'react'
import ProfileNav from '../components/ProfileNav'
import History from '../api/History'
// import Overview from '../components/Overview'
import { Brain, Calendar, DollarSign, Heart, Shield, Skull, Sword, Trophy } from 'lucide-react'

const Manage = () => {
    // declaring varaibles
let overview = "overview"
let history = "history"
let stats = "stats"
// the usestate for the buttons
const [display, setDispaly] = useState('overview')

// funtion to toggle throught section
const toggleDisplay = (display) =>{
 setDispaly(display)
 console.log(display)
}

  return (
    <div className='space-y-2 min-h-[100vh] bg-black pb-5 '>
      <ProfileNav/>
      <div className='px-5 space-y-3 container mx-auto w-11/12'>
      {/* the directory to through the overview,stats,History */}
        <ul className='flex items-center bg-gray-800 gap-2 py-1.5 px-2 w-full rounded-md justify-between text-gray-400'>
            <button className={`p-1  rounded-md ${display === overview ?'bg-gray-900':'bg-gray-800'}`} onClick={()=>toggleDisplay(overview)}>Overview</button>
            <button className={`p-1 rounded-md ${display === history ?'bg-gray-900':'bg-gray-800'}`} onClick={()=>toggleDisplay(history)}>History</button>
            <button className={`p-1 px-2 rounded-md ${display === stats ?'bg-gray-900':'bg-gray-800'}`} onClick={()=>toggleDisplay(stats)}>Stats</button>
        </ul>
        {/* To avoid creating too many components (made the overview component and history component here..) */}
        {/* OVERVIEW */}
        {/* AGENT PROFILE (card 1)*/}
        {
            display === overview && <div className='flex flex-col md:flex-row gap-2 '>
            <div className='flex border-1 border-gray-500 flex-col gap-2 items-center w-full bg-gray-900 rounded-md p-3 py-6'>
                <h2 className='w-full text-blue-400 text-2xl font-semibold'>PROFILE</h2>
                <span className='p-5 rounded-full bg-linear-to-br from-blue-500 to-purple-500'><Brain size={35}/></span>
                <span className='text-center'>
                    <p className='font-bold text-3xl text-gray-300 font-sans'>Nexus Prime</p>
                    <p className='text-xl text-gray-400'>player style</p>
                </span>
                <span className=' w-full flex justify-between'>
                    <p className='text-md text-gray-200 font-semibold fonts-sans'> Level</p>
                    <p className='text-md font-semibold fonts-sans text-blue-400'>15</p>
                </span>
                <span className='flex justify-between w-full text-md text-gray-200 font-semibold fonts-sans'>
                    <p >XP</p>
                    <p>2300/3000</p>
                </span>
                <span  className='p-1 w-full rounded bg-purple-500'>
                    <span></span>
                    <span></span>
                </span>
            </div>
            {/* card 2 */}
            <div className='flex flex-col border-1 border-gray-500 gap-2 items-center w-full bg-gray-900 rounded-md p-3 py-4'>
                <h2 className=' text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-green-400 to-red-400 text-xl w-full text-start'>Performance</h2>
                {/* wins and loses */}
                <div className='w-full flex gap-2 justify-center '>
                    <span className='w-[50%] bg-gray-800 flex flex-col items-center justify-center rounded-md p-2 text-green-400'>
                        <Trophy size={30}/>
                        <p className='text-lg font-normal'>23</p>
                        <p className='text-lg font-normal'>wins</p>
                    </span>
                    <span className='w-[50%] bg-gray-800 flex flex-col items-center justify-center rounded-md p-2 text-red-400'>
                        <Skull/>
                        <p className='text-lg font-normal'>4</p>
                        <p className='text-lg font-normal'>Loses</p>
                    </span>

                </div>
                    <span className='bg-gray-800 w-full p-2 rounded-md text-center flex flex-col items-center py-3'>
                        <DollarSign className='text-green-400'/>
                        <p className='text-green-400 text-xl font-lg'>$0000</p>
                        <p className='text-gray-400'>Total Earnings</p>
                    </span>
                    <span className='grid place-items-center'>
                        <p className='font-semibold text-lg text-white'>85.5%</p>
                        <p className='text-gray-400'>Win Rate</p>
                    </span>
                <div></div>
            </div>
         </div>
        }
        
        {/* stat card */}
        {display === stats && <div className='flex flex-col border-1 border-gray-500 gap-2 items-center w-full bg-gray-900 rounded-md p-3 py-4'>
            <h2 className=' text-orange-400 bg-clip-text font-extrabold text-xl w-full text-start'>Combat stats</h2>
            <ul className='space-y-3 w-full text-gray-300 font-semibold text-lg'>
                <button className='flex justify-between'>
                    <span className='flex items-center gap-1'>
                        <Heart size={17} className='text-blue-400 '/>
                        <p className=''>Health</p>
                    </span>
                    <p>23</p>
                </button>
                <button className='flex justify-between'>
                    <span className='flex items-center gap-1'>
                        <Sword size={17} className='text-orange-400 '/>
                        <p>Attack</p>
                    </span>
                    <p>27</p>
                </button>
                <button className='flex justify-between'>
                    <span className='flex items-center gap-1'>
                        <Shield size={17} className='text-green-400 '/>
                        <p>Defence</p>
                    </span>
                    <p>25</p>
                </button>
                <button className='flex justify-between'>
                    <span className='flex items-center gap-1'>
                        <Brain size={17} className='text-purple-400 '/>
                        <p>Intelligence</p>
                    </span>
                    <p>25</p>
                </button>
            </ul>
        </div> }
        
     
      {/* HISTORY */}
      {display === history && <div className='flex border-1 border-gray-500 flex-col gap-2 w-full bg-gray-900 rounded-md p-3 py-6'>
         {
            History.map(data=>(
                <div key={data.id} className='text-white'>
                  <div className='flex justify-between gap-2 w-full bg-gray-800 rounded-md p-2'>
                    <span className='flex items-center gap-1'>
                       <Calendar size={25}/>
                        <span className='flex flex-col'>
                            <p>{data.date}</p>
                            <p>vs {data.oppenent}</p>
                        </span>     
                    </span>

                    <span>
                        <p>{data.endedin}</p>
                        <p>{data?.money?.profit}</p>
                    </span>
                  {/* </span>
                  <span> */}

                  </div>
                </div>
            ))
         }
      </div> }
      
    </div>
</div>
  )
}

export default Manage
