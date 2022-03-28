import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BackButton } from '../components/BackButton/BackButton';
import { ConfirmMenu } from '../components/ConfirmMenu/ConfirmMenu';
import { Map } from '../components/Map/Map';
import { useMap } from '../hooks/useMap';
import { Location } from '../interfaces/location.interface';

function Confirm() {
  const { query } = useRouter();
  const { pickup, dropoff } = query;

  const {dropOffCoordinates,getDropOffCoordinates,getPickUpCoordinates,pickupCoordinates}=useMap();

  // const [pickupCoordinates, setPickupCoordinates] = useState<number[]>([0, 0])
  // const [dropOffCoordinates, setDropOffCoordinates] = useState<number[]>([0, 0])

  // const getPickUpCoordinates = async (pickup?: string | string[]) => {
  //   try {
  //     // const pickup='Santa Monica'
  //     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?access_token=pk.eyJ1Ijoicm9tZWx4MjMiLCJhIjoiY2tzZHA2Y2M0MHQyMjJvbXNsMmVjZW41aCJ9.2As_5QylbPvQj6mFtsHD_g`;
  //     const resp = await fetch(url);
  //     const data: Location = await resp.json();
  //     setPickupCoordinates(data.features[0].center);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // const getDropOffCoordinates = async (dropoff?: string | string[]) => {
  //   try {
  //     // const dropoff='Los Angeles'
  //     const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?access_token=pk.eyJ1Ijoicm9tZWx4MjMiLCJhIjoiY2tzZHA2Y2M0MHQyMjJvbXNsMmVjZW41aCJ9.2As_5QylbPvQj6mFtsHD_g`;
  //     const resp = await fetch(url);
  //     const data: Location = await resp.json();
  //     setDropOffCoordinates(data.features[0].center);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    getPickUpCoordinates(pickup);
    getDropOffCoordinates(dropoff);
    console.log(pickup, dropoff);
  }, [pickup, dropoff]);


  return (
    <div className="bg-gray-700 text-white w-full min-h-screen">
      <div className="w-full flex flex-col h-screen">
        <div className="absolute top-0 left-2 z-10">
          <BackButton path='search' />
        </div>
        <Map
          pickupCoordinates={pickupCoordinates}
          dropOffCoordinates={dropOffCoordinates}
        />
        <ConfirmMenu />
      </div>
    </div>
  )
}

export default Confirm;