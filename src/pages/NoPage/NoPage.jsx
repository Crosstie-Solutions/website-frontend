import React from "react";
import { GoArrowLeft } from "react-icons/go";
import {PHOTOS} from "../../assets/images";
import { Link } from "react-router-dom";



function NoPage(){
    return(
        <div className="flex flex-col items-center h-auto gap-2 pb-5 large:mt-18 large:w-70vw text-15px small:w-90vw small:mt-15">
            <h1 className="font-bold">Hmmm!</h1>
            <h3 className="font-bold">I can't find what you are looking for.</h3>
            <p className="text-center large:w-60 small:w-90vw">We're sorry, but the page you are looking for could not be found. 
                It may have been moved, renamed, or is temporarily unavailable.</p>
            <img src={PHOTOS.noPage} alt="image" className="large:w-400px large:h-auto small:h-auto small:w-80vw"/>
            
            
            <Link to="/" className="flex items-center justify-center w-auto gap-2 px-2 mt-5 text-white rounded bg-crossDarkPurple h-40px"><GoArrowLeft /> Go back</Link>
        </div>
    )
}


export default NoPage;