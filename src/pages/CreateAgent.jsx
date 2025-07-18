import React from 'react'
import { Brain, ChevronLeft, Shield, Skull, Sparkle, Star, Sword, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const CreateAgent = () => {
  return (
    <div className='bg-black pb-5'>
          <div className='container mx-auto w-11/12 text-gray-100 space-y-5'>
        <div className=' flex items-center gap-3 '>
            <Link to={"/"}><span><ChevronLeft className=' bottom-[35%] top-[35%] text-gray-100 size-[17px]'/></span></Link>
            <span>
              <h2 className='text-2xl font-semibold text-transparent  bg-gradient-to-r bg-clip-text text-wrap from-blue-400 to-purple-400 from-blue-400 tracking-wide'>Create AI Agent</h2>
              <p className='text-sm text-gray-400'>Design Your Warrior</p>
            </span>
        </div>
          {/* Basic information and combat stat */}
        <div className='flex flex-col md:flex-row gap-5'>
          <div className='bg-gray-900 w-full rounded-lg border border-gray-700 p-3 py-4'>
            <h2 className='flex gap-2 text-lg font-semibold text-blue-400'><Brain/>Basic Information</h2>
            <form action="" className='flex flex-col gap-3'>
              {/* first input field */}
              <label htmlFor="">Agent Name</label>
              <input type="text" placeholder='Enter agent Name...' className='outline outline-gray-700 px-2 py-1 rounded-lg bg-gray-950' />
              {/* second input field */}
              <label htmlFor="">Description</label>
              <textarea type="text" placeholder='describe your agent' className='outline outline-gray-700 px-2 py-2 rounded-lg bg-gray-950 pb-10' />
            </form>
          </div>
          {/*combat stat....  */}
          <div className='bg-gray-900 w-full rounded-lg border border-gray-700 p-3 py-4'>
            <h2 className='flex gap-2 text-lg font-semibold text-orange-400 '><Skull/>combat stat</h2>
            <form action="" className='flex flex-col gap-2'>
              {/* attack */}
              <label htmlFor="" className='flex flex-col'><span className='flex items-center gap-1'><Sword size={15} className='text-orange-400'/> Attack</span>
              <input type="range" min={0} max={100} className='bg-purple-200 border-none outline-none'/></label>
              {/* defence */}
              <label htmlFor=""  className='flex flex-col'><span className='flex items-center gap-1'><Shield size={15} className='text-blue-400'/> Defence</span>
              <input type="range" min={0} max={100} /></label>
              {/* intellegence */}
              <label htmlFor=""  className='flex flex-col'><span className='flex  items-center gap-1'><Brain size={15} className='text-purple-400'/> Intellegence</span>
              <input type="range"  min={0} max={100}/></label>
              {/* speed */}
              <label htmlFor=""  className='flex flex-col'><span className='flex items-center gap-1'><Zap size={15} className='text-green-400'/>Speed</span>
              <input type="range" min={0} max={100} /></label>
            </form>
          </div>
        </div>
        {/* personality type and special ability */}
          <div className='flex flex-col md:flex-row gap-5'>
            {/* personality */}
            <div className='space-y-2 w-full bg-gray-900 rounded-lg border border-gray-700 px-4 py-4'>
              <h2 className='flex items-center gap-1 text-purple-400 font-semibold text-xl'><Star size={15}/>Personality Type</h2>
              <form className='flex flex-col gap-2'>
            <label className='space-x-1'>
                <input type="radio" name='personality' value="defence-tank"  />
                Defence Tank
                <p className='p-1 pl-4 text-[10px] '>Focuses on offensive tactics and quick strikes</p>
            </label>
            <label className='space-x-1'>
                <input type="radio" name='personality' value="assault-specialist" />
                Assault Specialist
                <p className='p-1 pl-4 text-[10px] '>Uses cunning and evasion tactics</p>
            </label>
            <label className='space-x-1'>
                <input type="radio" name='personality' value="stealth-specialist" className=''/>
                Stealth Specialist
                <p className='p-1 pl-4 text-[10px] '>Uses cunning and evasion tactics</p>
            </label>
            <label className='space-x-1'>
                <input type="radio" name='personality' value="balanced-warrior" />
                Balanced Warrior
                <p className='p-1 pl-4 text-[10px] '>Well-rounded approach to combat</p>
            </label>
            <label className='space-x-1'>
                <input type="radio" name='personality' value="tactical-genius" />
                Tactical Genius
                <p className='p-1 pl-4 text-[10px] '>Relies on superior planning and adaptation</p>
            </label>
          </form>
        </div>

          
          {/* special ability */}
                  <div className='space-y-2 w-full bg-gray-900 rounded-lg border       border-gray-700 px-4 py-4'>
            <h2 className='flex items-center gap-1 text-pink-400 font-semibold text-xl'><Sparkle/>Special Abilities</h2>

            <form action="" className='flex flex-col gap-3'>
              <label htmlFor="" className='space-x-2'>
                <input type="checkbox" />Energy Shield
                <p className=' pl-4 text-[10px] '>Temporary damage protection</p>
              </label>

              <label htmlFor="" className='space-x-2'>
                <input type="checkbox" />Predictive Analysis
                <p className=' pl-4 text-[10px] '>Anticipates opponent moves</p>
              </label>

              <label htmlFor="" className='space-x-2'>
                <input type="checkbox" />Speed Boost
                <p className=' pl-4 text-[10px] '>Temporary movement enhancement</p>
              </label>

              <label htmlFor="" className='space-x-2'>
                <input type="checkbox" />Self-Repair
                <p className=' pl-4 text-[10px] '>Gradual health regeneration</p>
              </label>

              <label htmlFor="" className='space-x-2'>
                <input type="checkbox" />Stealth Mode
                <p className=' pl-4 text-[10px] '>Become undetectable briefly</p>
              </label>
            </form>
          </div>
        </div>

            {/* APPEARANCE */}
         <div className='space-y-2 bg-gray-900 rounded-lg border border-gray-700 px-4 py-4'>
              <h2 className='flex items-center gap-1 text-green-400 font-semibold text-xl'><Star size={15}/>Appearance</h2>
              <form className='flex flex-col gap-2'>


            <label className='space-x-1'>
                <input type="radio" name='personality' value="defence-tank"  />
                Defence Tank
                <p className='p-1 pl-4 text-[10px] '>Focuses on offensive tactics and quick strikes</p>
            </label>
            <label className='space-x-1'>
                <input type="radio" name='personality' value="assault-specialist" />
                Cybernetic Warrior
                <p className='p-1 pl-4 text-[10px] '>Enhanced with digital augmentations</p>
            </label>

            <label className='space-x-1'>
                <input type="radio" name='personality' value="stealth-specialist" className=''/>
                Bio-Enhanced
                <p className='p-1 pl-4 text-[10px] '>Evolved organic intelligence</p>
            </label>
            <label className='space-x-1'>
                <input type="radio" name='personality' value="balanced-warrior" />
                Mechanical Construct
                <p className='p-1 pl-4 text-[10px] '>Pure artificial intelligence in metal form</p>
            </label>
            <label className='space-x-1'>
                <input type="radio" name='personality' value="tactical-genius" />
                Bio-Mechanical Hybrid
                <p className='p-1 pl-4 text-[10px] '>Perfect fusion of organic and synthetic</p>
            </label>
          </form>
        </div>

    </div>
    </div>
    
  )
}

export default CreateAgent
