import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

const ProfileNav = () => {
  return (
    <div className='w-full relative flex items-center bg-gray-900 border-b-2 border-gray-500'>
             {/* the return/BACK icon */}
              <Link to={'/'}> <span className=''><ChevronLeft className='absolute bottom-[35%] top-[35%] left-[10px] text-gray-100 size-[17px]'/></span></Link>

            <nav className='container w-11/12 mx-auto flex items-center justify-between px-3 py-3 justify-between'>
                {/* left side (enter arena) */}
                <div className='flex flex-col '>
                    <span className='text-3xl font-bold text-wrap tracking-wide bg-gradient-to-br bg-clip-text text-transparent  from-blue-500 to-purple-500 '>UserName</span>
                    <p className='text-[10px] text-gray-100'>player playing style</p>
                </div>

                {/* right side  */}
                <div className='flex flex-col gap-2'>
                    <Link to="/createAgent"><button className='bg-blue-300 px-2 py-2 text-center font-medium text-sm rounded-lg text-gray-900'>Edit agent</button></Link>
                    {/* <span className='bg-orange-300 px-4 text-center font-medium rounded-lg text-nowrap text-gray-900'>Starting Soon</span> */}
                </div>
            </nav>
        </div>
  )
}

export default ProfileNav
