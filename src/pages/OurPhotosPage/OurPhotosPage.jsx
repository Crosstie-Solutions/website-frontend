import React, { useContext } from "react";
import { MobileAboutButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { AboutButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { HiArrowLongRight } from "react-icons/hi2";
import AboutHero from "../../components/AboutHero/AboutHero";
import EventCarousel from "../../components/EventCarousel/EventCarousel";
import { CrossContext } from "../../Context/CrossContext";



function OurPhotosPage() {

  const {allEvents, loadEvents} = useContext(CrossContext);

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto large:mt-12 small:mt-8">
        
      <AboutHero />

      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonSwiper />
        <MobileAboutButtonSwiper />
      </div>

      <div className="flex flex-row flex-wrap h-auto gap-3 small:px-2 small:justify-center small:w-90vw large:w-83vw large:justify-between large:p-0">

        {
          allEvents && allEvents.map((event, i)=>
            <div className="flex flex-col h-auto gap-5 pb-2 border cursor-pointer hover:shadow-md large:w-320px rounded-10 small:w-100" key={i}>
              <EventCarousel photos={event.eventImages}/>
              
              <div className="flex flex-col p-1">
                <div>Event: <span className="font-semibold">{event.title}</span></div>
                <div>Client: <span className="font-semibold">{event.client}</span></div>
                <div>Date: <span className="font-semibold">{event.date}</span></div>
              </div>
            </div>
          )
        }
        
        {loadEvents &&<p className="self-center font-semibold">Loading photos...</p>}
        
        {!loadEvents && allEvents && allEvents.length < 1 && <p className="self-center font-semibold">No Photos Found</p>}
      </div>

      <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
        <h4 className="font-bold large:text-20px small:text-17px">Ready To Get Started?</h4>
        <Link
          to="/our-courses"
          className="flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple"
        >
          Explore Our Courses <HiArrowLongRight className="text-20px" />
        </Link>
      </div>
    </div>
  );
}

export default OurPhotosPage;