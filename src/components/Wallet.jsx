import React from 'react'
import { ArrowLeft } from 'lucide-react';

const Wallet = () => {
  return (
    <div>
        {/* wallet  */}
        <div>
          {/* Wallet top bar */}
          <div>
            <ArrowLeft size={50} color="grey"/>
            <div className='flex'>
              <h1>Wallet</h1>
              <p>Manage your funds and transactions</p>
            </div>
      
          </div>
        </div>
    </div>
    
  )
}

export default Wallet