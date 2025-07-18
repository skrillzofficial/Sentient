import React from 'react'
import api from "../api/Api"
import { useState } from 'react';
import {Star} from 'lucide-react'
import EachTournament from './EachTournament';

const Tournament = () => {
    const [tournaments, settournament] = useState(api)
    console.log(tournaments);
    
  return (
    <div className='flex flex-col gap-5'>
      {/* the header */}
      <div className='flex gap-2 pt-5 '>
        <Star className='text-purple-500 '/>
        <h2 className='font-semibold text-xl'> Featured Tournaments</h2>
      </div>
      
      <div className='space-y-3 md:grid grid-cols-2 lg:grid-cols-3 gap-3'>
      {
        tournaments.map((tournamen)=>{
          return <EachTournament key={tournamen.id} {...tournamen} />
        })
      }
      </div>

    </div>
  )
}

export default Tournament