import React, { FC, useEffect } from 'react'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tZWx4MjMiLCJhIjoiY2tzZHA2Y2M0MHQyMjJvbXNsMmVjZW41aCJ9.2As_5QylbPvQj6mFtsHD_g';
interface Props{
  pickupCoordinates?:number[];
  dropOffCoordinates?:number[];
}

export const Map:FC<Props> = ({pickupCoordinates,dropOffCoordinates}) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3
    });
    if(pickupCoordinates){
      addToMap(map,pickupCoordinates);
    }
    if(dropOffCoordinates){
      addToMap(map,dropOffCoordinates);
    }
    if(pickupCoordinates && dropOffCoordinates){
      map.fitBounds([
        [pickupCoordinates[0],pickupCoordinates[1]], // southwestern corner of the bounds
        [dropOffCoordinates[0], dropOffCoordinates[1]] // northeastern corner of the bounds
        ],{
          padding: 60
        });
    }
  }, [pickupCoordinates,dropOffCoordinates]);

  const addToMap=(map:mapboxgl.Map,coordinates:number[])=>{
    const marker1 = new mapboxgl.Marker()
    .setLngLat([coordinates[0],coordinates[1]])
    .addTo(map);
  }

  return (
    <div className='w-full h-full bg-blue-500 flex justify-center relative' id="map">
      <h1 className='absolute z-10 text-2xl text-gray-600'>Uber Clone</h1>
    </div>
  )
}
