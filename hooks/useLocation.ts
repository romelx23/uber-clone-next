import { useState } from "react";
import { Location, Feature } from '../interfaces/location.interface';

export const useLocation = () => {
  const [pickupLocation, setPickupLocation] = useState<Feature[]>([]);
  const [dropOffLocation, setDropOffLocation] = useState<Feature[]>([]);

  const getPickUpLocation = async (e: React.FormEvent,pickup?: string | string[]) => {
      e.preventDefault();
    try {
      // const pickup='Santa Monica'
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?access_token=pk.eyJ1Ijoicm9tZWx4MjMiLCJhIjoiY2tzZHA2Y2M0MHQyMjJvbXNsMmVjZW41aCJ9.2As_5QylbPvQj6mFtsHD_g`;
      const resp = await fetch(url);
      const data: Location = await resp.json();
      console.log(data.features,'useLocation - pick')
      setPickupLocation(data.features);
    } catch (error) {
      console.log(error);
    }
  };
  const getDropOffLocation = async (e: React.FormEvent,dropoff?: string | string[]) => {
    e.preventDefault();
    try {
      // const dropoff='Los Angeles'
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?access_token=pk.eyJ1Ijoicm9tZWx4MjMiLCJhIjoiY2tzZHA2Y2M0MHQyMjJvbXNsMmVjZW41aCJ9.2As_5QylbPvQj6mFtsHD_g`;
      const resp = await fetch(url);
      const data: Location = await resp.json();
      setDropOffLocation(data.features);
      console.log(data.features,'useLocation - drop')
    } catch (error) {
      console.log(error);
    }
  };
    return {
        pickupLocation,
        dropOffLocation,
        getPickUpLocation,
        getDropOffLocation,
    };
};
