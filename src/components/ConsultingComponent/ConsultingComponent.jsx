import { GrWorkshop } from "react-icons/gr";
import { MdOutlineDescription, MdOutlineViewModule } from "react-icons/md";
import { PiStrategy } from "react-icons/pi";



function ConsultingComponent({ methodology, output, introduction, approach, special }) {

  
    //split intro

  function splitIntro(paragraph) {
  let index = paragraph.indexOf('.');
  if (index !== -1) {
    return [paragraph.slice(0, index + 1), paragraph.slice(index + 1).trim()];
  } else {
    return [paragraph]; // return original paragraph if no full stop found
  }
}
  
  
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 text-15px large:w-100vw large:h-auto small:w-90vw small:h-auto">
      <div className="flex flex-wrap items-start justify-between gap-5 large:w-83vw small:w-100 small:px-1 large:px-0 small:py-3 large:py-0">
        
        <div className="flex flex-col gap-1 bg-white large:w-45 small:w-100">
          <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple">
            <MdOutlineDescription className="text-20px" /> Introduction
          </h4>

          {/* for  Corporate Performance Management page */}
          {special &&
          <p className="leading-loose small:p-1"> <span className="font-semibold">{splitIntro(introduction)[0]}</span> <br /> {splitIntro(introduction)[1]}
          </p>}

            {/* for other pages */}
         
         {!special && <p className="leading-loose small:p-1">{introduction}</p>}
          
        </div>

        {approach &&
        <div className="flex flex-col items-center justify-center h-auto bg-white large:w-45 small:w-100">
          <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple w-100">
            <PiStrategy className="text-20px" /> Our Approach
          </h4>
          <ul className="flex flex-col gap-0.5 list-disc w-100 items-start pl-3 py-1">
            {
            approach && approach.map((app, i) => (
                <li key={i} className="">
                  {app}
                </li>
              ))}

          </ul>
        </div>}


        <div className="flex flex-col items-center justify-center h-auto bg-white large:w-45 small:w-100">
          <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple w-100">
            <GrWorkshop className="text-20px" /> Our Methodology
          </h4>
          <ul className="flex flex-col gap-0.5 list-disc w-100 items-start pl-3 py-1">
            {
            methodology.map((method, i) => (
                <li key={i} className="">
                  {method}
                </li>
              ))}

          </ul>
        </div>

        <div className="flex flex-col items-center justify-center h-auto bg-white large:w-45 small:w-100">
          <h4 className="flex gap-1 p-1 text-white bg-crossLightPurple w-100">
            <MdOutlineViewModule className="text-20px" /> Expected Outputs and
            Outcomes
          </h4>
          <ul className="flex flex-col gap-0.5 list-disc w-100 items-start pl-3 py-1">
            {
            output.map((item, i) => (
                <li key={i} className="">
                  {item}
                </li>
              ))}
              
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConsultingComponent;
