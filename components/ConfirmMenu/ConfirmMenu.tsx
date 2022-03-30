import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { carList } from './List'

interface Props {
  pickupCoordinates: number[];
  dropOffCoordinates: number[];
}

interface Carlist {
  imgUrl: string;
  service: string;
  multiplier: number;
}
export const ConfirmMenu: FC<Props> = ({ pickupCoordinates, dropOffCoordinates }) => {
  const [duration, setDuration] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [select, setSelect] = useState<Carlist>({
    imgUrl: '',
    service: '',
    multiplier: 0,
  })
  const [scroll, setScroll] = useState(false)
  const showList = () => {
    setScroll(!scroll)
  }
  // console.log(pickupCoordinates, dropOffCoordinates);
  const handleDuration = async () => {
    try {
      if (pickupCoordinates && dropOffCoordinates) {
        const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0].toString()},${pickupCoordinates[1].toString()};${dropOffCoordinates[0].toString()},${dropOffCoordinates[1].toString()}?access_token=pk.eyJ1Ijoicm9tZWx4MjMiLCJhIjoiY2tzZHA2Y2M0MHQyMjJvbXNsMmVjZW41aCJ9.2As_5QylbPvQj6mFtsHD_g`;
        const duration = await fetch(url)
        const data = await duration.json()
        setDuration(data.routes[0].duration)
        // console.log(data);
      }
      // console.log('duration', duration);
    } catch (error) {
      console.log(error);
    }
  }
  const handleConfirm = () => {
    if(select.imgUrl===''){
      alert('Please select a car')
      return;
    }
    setConfirm(!confirm)
  }
  const handleSelect = (car: Carlist) => {
    const { imgUrl, service, multiplier } = car;
    setSelect({ imgUrl, service, multiplier });
  }
  useEffect(() => {
    handleDuration();
  }, [pickupCoordinates, dropOffCoordinates])

  return (
    <div className={`w-full flex flex-col bg-gray-200 text-black transition-all ${scroll ? 'h-full' : 'h-1/2'}`}>
      <button
        className='bg-white py-2 text-sm'
        onClick={showList}
      >Elige un viaje o desliza hacia arriba para obtener más
      </button>
      {
        confirm ?
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h1>Se Confirmo el vehiculo</h1>
            <Image
              src={select.imgUrl}
              width={100}
              height={100}
              alt="car"
            />
            <h2>{select.service}</h2>
            <h1 className='font-semibold text-2xl'>${(select.multiplier * duration / 100).toPrecision(4)}</h1>
          </div>
          : <div className='w-full h-full overflow-y-scroll'>
            {
              carList.map((car, i) =>
                <div key={i} className={`flex items-center justify-between px-4 border-t border-white hover:cursor-pointer hover:bg-gray-400 ${select!==car?'':'bg-gray-400'}`}
                  onClick={() => handleSelect(car)}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={car.imgUrl}
                      width={100}
                      height={100}
                      alt="car"
                    />
                    <div className="">
                      <h1 className='font-semibold'>{car.service}</h1>
                      <h2 className='text-blue-500 text-sm font-medium'>5 min away</h2>
                    </div>
                  </div>
                  {
                    duration ?
                      <h1 className='font-semibold'>${(car.multiplier * duration / 100).toPrecision(4)}</h1>
                      :
                      <h1 className='font-semibold'>No se pudo calcular</h1>
                  }
                </div>
              )
            }
          </div>
      }
      <div className="w-full px-6 py-2 bg-white">
        <button
          className='bg-black text-white w-full py-3'
          onClick={handleConfirm}>Confirmar UberX</button>
      </div>
    </div>
  )
}
