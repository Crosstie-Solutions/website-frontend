import React, { useContext } from "react";
import { GoArrowRight } from "react-icons/go";
import { PHOTOS } from "../../assets/images";
import { Link } from "react-router-dom";
import { CrossContext } from "../../Context/CrossContext";






function Report(post) {

  const {title, reportImage, postId, createdAt, preview, date, type, link} = post;

  const {formatDate} = useContext(CrossContext);
  
  return (
    <div className="flex items-start h-auto py-1 border large:flex-row large:gap-2 large:px-1 large:w-100 border-crossIconBg rounded-10 small:w-90 small:gap-1 small:flex-col small:p-1">
      
      <img
        src={reportImage}
        alt="media report image"
        className="small:h-150px large:w-40 large:h-200px rounded-5 small:w-100"
      />

      <div className="flex flex-col items-start h-auto gap-2 large:w-60 small:w-100">
        <div className="flex-row justify-between h-auto large:flex w-100 text-crossTextGray small:hidden">
          <div>Article</div>
          <div>{date}</div>
        </div>

        <h3 className="font-semibold w-100 small:text-13px large:text-20px">
          {title}
        </h3>

        <p className="text-crossTextGray small:hidden large:flex">
          {preview}...
        </p>

        <a href=""></a>

        {type ==='external' &&
        <a href={link} 
        target="_blank"
        className="flex flex-row items-center justify-center w-auto gap-1 text-crossLightPurple large:text-15px small:text-13px"
        >
          Read More <GoArrowRight className="text-18px"/>
        </a>}

        {type ==='internal' &&
        <Link className="flex flex-row items-center justify-center w-auto gap-1 text-crossLightPurple large:text-15px small:text-13px"
        to={`/media-report/${postId}`}
        >
          Read More <GoArrowRight className="text-18px"/>
        </Link>}

      </div>
    </div>
  );
}


export { Report };
