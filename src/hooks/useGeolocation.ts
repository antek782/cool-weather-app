import { useEffect, useState } from "react";

interface Coordinates {
  lat: number;
  long: number;
}

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;

        setCoordinates({ lat: latitude, long: longitude });
      });
    }
  }, []);

  return coordinates;
};

export default useGeolocation;
