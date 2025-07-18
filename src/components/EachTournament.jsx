import { Clock, DollarSign, Play, Star, Trophy } from 'lucide-react'
import React from 'react'
// import Tournament from './Tournament'

const EachTournament = ({img,startsIn,name,type,playersCurrent, playersMax,prizePoolAmount,entryFeeAmount, entryFeeDifficulty, postedImg,title,text,date,likes,comment,Status}) => {
  return (
    <div className='text-gray-300 bg-gray-900 py-5 px-3 flex flex-col gap-2 rounded-md'>
        {/* tournament name and status of tournament */}
        <div className=' flex justify-between items-center'>
            <span className='flex w-[60%] h-[50px]'>
              {/* <Trophy size={20}/> */}
              <h1 className=''>{name}</h1>
            </span>

            <div className='flex items-center w-[40%] justify-end gap-1'>
              <Star size={13} fill='purple' color='purple'/>
              {Status}
            </div>
        </div>

        {/*the tournament description */}
        <p className='text-sm font-semi-bold  text-slate-500 text-center'>{title}</p>

        {/* discription and level */}
        <span className='flex justify-between text-sm font-normal'>
          <p className='text-blue-500'>{type}</p>
          <p>{entryFeeDifficulty}</p>
        </span>

        {/* participant and available user */}
        <div>
          <div className='flex justify-between'>
            <p>participant</p>
            <p>
              <span>{playersCurrent}</span>/<span>{playersMax}</span>
            </p>
          </div>
          <div className='w-full bg-blue-500 h-2 rounded'>
            <span className='w-full h-full bg-purple-50'></span>
            <span></span>
          </div>
        </div>

        {/* price money and entry fee */}
        <div className='flex justify-center gap-3 '>
          <div className='bg-gray-800 py-2 w-[100%] flex flex-col items-center rounded-md'>
            <DollarSign size={17} className='text-green-500 '/>
            <p>PRICE</p>
            <p className='text-green-500'>{prizePoolAmount}$</p>
          </div>
          
          <div className='bg-gray-800 py-2 w-[100%] flex flex-col items-center  rounded-md'>
            <Trophy size={17} className='text-blue-500 '/>
            <p>PRICE</p>
            <p className='text-blue-500'>{entryFeeAmount}$</p>
          </div>
        </div>

        {/* duration */}
        <div className='flex bg-gray-800 py-2 gap-1 items-center text-sm justify-center rounded-md'>
          <Clock size={13} className='text-orange-400'/>
          <p>Starts:</p>
          <p className='text-orange-400 font-normal'>{startsIn}</p>
        </div>
      
      <button className='w-full text-black font-normal flex items-center justify-center py-2 bg-orange-400 rounded-md'>
         <Play size={14}/>
         <p>join game</p>
      </button>
    </div>
  )
}

export default EachTournament