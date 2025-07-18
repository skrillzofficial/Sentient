import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className='w-full relative flex items-center bg-gray-900 border-b-2 border-gray-500'>
             {/* the return/BACK icon */}
             <Link to={'/'}> <span className=''><ChevronLeft className='absolute bottom-[35%] left-[10px] top-[35%] text-gray-100 size-[17px]'/></span></Link>

            <nav className='container w-11/12 mx-auto flex items-center justify-between px-3 py-3'>
                {/* left side (enter arena) */}
                <div className='flex flex-col '>
                    <span className='text-3xl font-bold text-wrap tracking-wide bg-gradient-to-br bg-clip-text text-transparent  from-blue-500 to-purple-500 '>Enter Arena</span>
                    <p className='text-[10px] text-gray-100'>Join live, battles and tournament</p>
                </div>

                {/* right side  */}
                <div className='flex flex-col gap-2'>
                    <span className='bg-green-300 px-3 py- text-center font-medium rounded-lg text-gray-900'>Live Games</span>
                    <span className='bg-orange-300 px-4 text-center font-medium rounded-lg text-nowrap text-gray-900'>Starting Soon</span>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Nav