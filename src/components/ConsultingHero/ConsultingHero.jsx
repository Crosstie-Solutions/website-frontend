import React, { useContext } from "react";
import { CrossContext } from "../../Context/CrossContext";
import { PHOTOS } from "../../assets/images";




function ConsultingHero(props) {

  const {tag, line1, title} = props;



  // to split paragraph
  function splitParagraphByFullStops(text, limit = 3) {
    const sentences = text.split('.').map(s => s.trim()).filter(Boolean);
    const paragraphs = [];
  
    for (let i = 0; i < sentences.length; i += limit) {
      const chunk = sentences.slice(i, i + limit).join('. ') + '.';
      paragraphs.push(chunk);
    }
  
    return paragraphs;
  }
  

  const summary = splitParagraphByFullStops(line1);

    

    
  return (
    <div className="relative flex items-center text-white small:flex-col-reverse large:justify-center large:gap-2 large:w-100vw large:h-500px small:px-0 large:p-0 small:gap-1 small:h-auto small:w-100vw crossLightPurple bg-crossLightPurple large:flex-row small:py-2 large:py-0">
    
            
            <div className="flex flex-col justify-center gap-2 large:pl-0 large:h-500px large:w-50 small:w-100vw small:h-auto small:pl-2 bg-crossLightPurple small:py-2 large:py-0 large:relative large:-left-2">         
              
              <h1 className="font-semibold large:text-30px large:w-80 large:leading-normal small:leading-5 small:w-80 small:text-17px">
                {tag}
              </h1>
    
             
              <p className="font-extralight large:w-90 small:w-90 small:text-13px large:text-17px">
              {/* {line1[0].toUpperCase()}
              {line1.slice(1, 150)}... */}
              {summary && summary[0][0].toUpperCase()}
              {summary && summary[0].slice(1)}
              </p>
              
            </div>
    
              <img src={PHOTOS[title]} alt="course banner" className="border-4 border-white rounded-full large:h-75 large:w-auto small:w-70vw small:h-auto large:relative large:-right-2 small:mt-3"/>
    
          </div>
  );
}





export default ConsultingHero;
