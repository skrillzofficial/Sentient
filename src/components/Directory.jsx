import { Funnel, Search } from 'lucide-react'
import React from 'react'

const Directory = () => {
  return (
   <div className='space-y-5'>
      <div className='flex flex-col gap-3'>
         {/* the search bar */}
         <div className='flex w-full items-center border-3 border-gray-400 pl-2 pr-20 py-1 md:py-2 rounded-lg '>
            <span><Search className='size-[16px] text-gray-500 gap-1'/></span>
            <input type="text" placeholder='search games...' className='text-[14px] md:text-xl outline-none'/>
         </div>

         {/* the all levels button */}
         <div className='flex md:flex-row flex-col items-start gap-2'>
            <button className=' flex items-center bg-blue-500 px-5 py-1 text-gray-800 rounded-md '><span className='flex text-center items-center'><Funnel className='size-[14px]'/></span><p className='px-2 md:text-lg'>All Levels</p></button>

           <span className='flex flex-col md:flex-row gap-1 '>
               <button className='border-1 border-green-500 py-2 px-3 text-green-500 font-medium rounded-md text-center'>Easy</button>
               <button className='border-1 border-yellow-500 py-2 px-3 text-yellow-500 font-medium rounded-md text-center'>Medium</button>
               <button className='border-1 border-orange-500 py-2 px-3 text-orange-500 font-medium rounded-md text-center'>Hard</button>
               <button className='border-1 border-red-500 py-2 px-3 text-red-500 font-medium rounded-md text-center'>Extreme</button>
           </span>
         </div>

         {/* the filiter for the (live,starting,featured) button */}
         {/* <div className='w-full flex items-center justify-between text-[12px] bg-gray-700 py-2 px-2 rounded-md'>
            <button className='bg-gray-900 px-1 py-1 rounded-md'>All Games</button>
            <button>Live</button>
            <button>Starting</button>
            <button>Featured</button>
         </div> */}
      </div>
      <div className='w-full flex items-center justify-between text-[12px] md:text-xl bg-gray-700 py-2 px-2 rounded-md'>
            <button className='bg-gray-900 px-1 py-1  rounded-md'>All Games</button>
            <button>Live</button>
            <button>Starting</button>
            <button>Featured</button>
         </div>
   </div>
    
  )
}

export default Directory