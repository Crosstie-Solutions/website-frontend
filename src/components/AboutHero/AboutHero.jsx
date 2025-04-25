import React, { useContext } from "react";
import { TbFileTypePdf } from "react-icons/tb";
import { CrossContext } from "../../Context/CrossContext";
import { PHOTOS } from "../../assets/images";


function AboutHero(props) {

  const {tag, buttonText} = props;

    const {togglePresentationDownloadScreen, courseBrochureDownloadScreen, toggleCourseBrochureDownloadScreen} = useContext(CrossContext);

   
    const videoId = 'BdWLMvrkidU'
    

    
  return (
    <div className="flex justify-center text-black large:items-center large:flex-row bg-purple-50 large:gap-5 large:w-100vw large:h-400px small:px-0 large:py-2 small:gap-3 small:h-auto small:w-90vw small:flex-col-reverse small:mt-5 small:items-start large:mt-0 large:px-3">
        
      <div className="flex flex-col items-start justify-center large:gap-2 small:pt-2 large:pl-0 large:h-100 large:w-50 small:h-auto small:w-90vw large:pt-0 small:gap-1">
        
      {!window.location.pathname.includes('satisfaction') &&
        <h1 class="large:text-35px large:w-70 large:leading-tight small:leading-5 font-semibold small:w-80 small:text-20px">
          {tag ? tag : "About Us"}
        </h1>}

        {!window.location.pathname.includes('satisfaction') &&
        <p className="font-normal large:w-90 small:w-100 small:text-13px large:text-17px">
          We Train. We Advise. We Transform
        </p>}

        {!window.location.pathname.includes('satisfaction') &&
        <h1 class="large:text-25px large:w-90 large:leading-8 small:leading-5 font-semibold small:w-100 small:text-20px">
           We transform talents and organizations to improve performance.
        </h1>}

        

        {window.location.pathname.includes('satisfaction') &&
        <h1 class="large:text-35px large:w-100 large:leading-tight small:leading-5 font-semibold small:w-80 small:text-20px">
        Satisfaction Guaranteed
        </h1>}

        {window.location.pathname.includes('satisfaction') &&
        <p className="font-normal large:w-90 small:w-100 small:text-13px large:text-17px">
        Zero Risk. Total Confidence. Guaranteed Peace of Mind.
        </p>}

        {window.location.pathname.includes('satisfaction') &&
        <h1 class="large:text-25px large:w-70 large:leading-8 small:leading-5 font-semibold small:w-100 small:text-20px">
        We stand behind everything we offer. No hassles, just our commitment to your satisfaction.
        </h1>}



        {!window.location.pathname.includes('satisfaction') &&
        <div
          className="flex items-center justify-center gap-1 px-1 mt-2 text-center text-white cursor-pointer large:w-auto large:rounded-5 bg-buttonOverlay large:text-15px h-40px bg-crossLightPurple small:text-13px small:w-100 small:rounded-10"
          onClick={window.location.pathname.includes('courses') ? toggleCourseBrochureDownloadScreen : togglePresentationDownloadScreen}
        >
          <TbFileTypePdf className="text-20px" />
          {buttonText ? buttonText : "Download Our Corporate Presentation"}
        </div>}
        
      </div>



      {!window.location.pathname.includes('satisfaction') &&
        <iframe
        className="bg-gray-400 large:h-95 large:w-35 large:rounded-10 small:h-300px small:w-100 small:rounded-5"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`} title="YouTube video player" frameborder="0" 
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen 
        allow="autoplay; encrypted-media"
        ></iframe>}

        {window.location.pathname.includes('satisfaction') &&
        <img src={PHOTOS.satisfaction1} alt="image" className="bg-gray-400 large:h-auto large:w-30 large:rounded-10 small:h-auto small:w-80 small:rounded-5 small:self-center"/>}

    </div>
  );
}




export default AboutHero;
