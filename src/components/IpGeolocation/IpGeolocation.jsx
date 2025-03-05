import { useEffect, useState } from "react";

const IPGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLocation = async () => {
    try {
      const response = await fetch("https://ipinfo.io/json?token=0a3525eca6c683");
      if (!response.ok) throw new Error("Failed to fetch location");

      const data = await response.json();
      setLocation({
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        loc: data.loc, // Latitude, Longitude
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="mt-5 w-80vw">
        <p className="font-bold">Canny wants to know your location.</p>
      {loading && <p>Fetching location...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <p className="mt-3">
          IP: {location.ip} <br />
          City: {location.city}, {location.region}, {location.country} <br />
          Coordinates: {location.loc}
        </p>
      )}
    </div>
  );
};

export default IPGeolocation;
