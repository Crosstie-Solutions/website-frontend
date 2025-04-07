import { useEffect, useState } from "react";
import CreateBlog from "../CreateBlog/CreateBlog";
// import {ButtonSwiper} from "../AboutButtonsSwiper/AboutButtonsSwiper";


const IPGeolocation = () => {

    //for location
    
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

  //for duration
  const [sessionTime, setSessionTime] = useState(0);
  const [startTime, setStartTime] = useState(performance.now());

  useEffect(() => {
    const handleUnload = () => {
      const endTime = performance.now();
      const totalTimeSpent = ((endTime - startTime) / 1000).toFixed(2); // Convert to seconds
      setSessionTime(totalTimeSpent);
      console.log(`User spent ${totalTimeSpent} seconds on this site.`);
    };

    // Track when the user leaves the site (tab close, reload, navigate away)
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [startTime]);

  console.log("Session duration:", sessionTime)

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
      <p>You have spent {sessionTime} seconds on this page</p>

      {/* <ButtonSwiper /> */}

      <CreateBlog />
      
      {/* <BlogList /> */}
    </div>
  );
};

export default IPGeolocation;
