import { useState } from "react";
import { Location } from '../interfaces/location.interface';

export const useMap = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState<number[]>([0, 0]);
  const [dropOffCoordinates, setDropOffCoordinates] = useState<number[]>([
    0, 0,
  ]);

  const getPickUpCoordinates = async (pickup?: string | string[]) => {
    try {
      // const pickup='Santa Monica'
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?access_token=pk.eyJ1Ijoicm9tZWx4MjMiLCJhIjoiY2tzZHA2Y2M0MHQyMjJvbXNsMmVjZW41aCJ9.2As_5QylbPvQj6mFtsHD_g`;
      const resp = await fetch(url);
      const data: Location = await resp.json();
      // console.log(data.features)
      setPickupCoordinates(data.features[0].center);
    } catch (error) {
      console.log(error);
    }
  };
  const getDropOffCoordinates = async (dropoff?: string | string[]) => {
    try {
      // const dropoff='Los Angeles'
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?access_token=pk.eyJ1Ijoicm9tZWx4MjMiLCJhIjoiY2tzZHA2Y2M0MHQyMjJvbXNsMmVjZW41aCJ9.2As_5QylbPvQj6mFtsHD_g`;
      const resp = await fetch(url);
      const data: Location = await resp.json();
      setDropOffCoordinates(data.features[0].center);
      // console.log(data.features)
    } catch (error) {
      console.log(error);
    }
  };
    return {
        pickupCoordinates,
        dropOffCoordinates,
        getPickUpCoordinates,
        getDropOffCoordinates,
    };
};
