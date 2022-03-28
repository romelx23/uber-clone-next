import Image from 'next/image'
import React, { useState } from 'react'
import { carList } from './List'

export const ConfirmMenu = () => {
  const [duration, setDuration] = useState(0);
  const [scroll, setScroll] = useState(false)
  const showList=()=>{
    setScroll(!scroll)
  }
  return (
    <div className={`w-full flex flex-col bg-gray-200 text-black transition-all ${scroll?'h-full':'h-1/2'}`}>
      <button 
      className='bg-white py-2 text-sm'
      onClick={showList}
      >Elige un viaje o desliza hacia arriba para obtener más 
      </button>
      <div className='w-full h-full overflow-y-scroll'>
        {
          carList.map((car, i) =>
            <div key={i} className="flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <Image
                  src={car.imgUrl}
                  width={100}
                  height={100}
                  alt="car"
                />
                <div className="">
                  <h1 className='font-semibold'>{car.service}</h1>
                  <h2 className='text-blue-400 text-sm font-medium'>5 min away</h2>
                </div>
              </div>
              <h1 className='font-semibold'>${(car.multiplier * 20.32).toPrecision(4)}</h1>
            </div>
          )
        }
      </div>
      <div className="w-full px-6 py-2 bg-white">
        <button className='bg-black text-white w-full py-3'>Confirmar UberX</button>
      </div>
    </div>
  )
}
