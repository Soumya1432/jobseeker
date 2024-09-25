
import React from 'react'
import { Button } from '../ui/button';

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl border-gray-400 border-[1px] cursor-pointer'>
        <div>
            <h1  className='font-medium text-lg'>Company Name</h1>
            <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Job Title</h1>
            <p className='text-sm text-slate-700 '>Lorem setIsMenuOpen sit amtet dolor consteribhike ikghejk ei </p>
        </div>
       <div  className='flex items-center gap-2 mt-4'>
       <Button variant="outline" className='text-blue-700 font-bold'>
           12 position
          </Button>
          <Button variant="outline" className='text-red-700 font-bold'>
           Part Time
          </Button>
          <Button  variant="outline"  className='text-green-700 font-bold'>
           12 LPA
          </Button>
          
       </div>
    </div>
  )
}

export default LatestJobCards;
