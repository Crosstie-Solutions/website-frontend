// import React, { useRef } from "react";
// import { Link } from "react-router-dom";


// //desktop
// const ButtonSwiper = () => {

//   const routes = [{
//     name: "Overview",
//     route: "about-us"
//   },
//   {
//     name: "Our story",
//     route: "our-story"
//   },
//   {
//     name: "Leadership",
//     route: "leadership"
//   },
//   {
//     name: "Our clients",
//     route: "our-clients"
//   },
//   {
//     name: "Participant’s Feedback",
//     route: "feedbacks"
//   },
//   {
//     name: "Satisfaction Guaranteed",
//     route: "satisfaction"
//   },
//   {
//     name: "Crosstie photos",
//     route: "crosstie-photos"
//   }

// ]
  

//   return (
//     <div className="flex flex-row justify-center overflow-hidden large:w-100 large:text-15px small:w-90 small:text-10px">
//       {/* <button className="nav-btn left" onClick={scrollLeft}>&#10094;</button> */}
      
//       <div className="flex flex-row justify-center large:w-auto gap-2 px-1 py-0.5 border border-crossFooterText  rounded-20 small:w-100" 
//       // ref={scrollContainerRef}
//       >
//         {routes.map((item, index) => (
//           <Link to={`/${item.route}`} key={index} className="flex items-center justify-center w-auto large:px-2 large:h-40px bg-crossLightPurple rounded-20 small:px-1 small:h-30px">{item.name}</Link>
//         ))}
//       </div>

//       {/* <button className="nav-btn right" onClick={scrollRight}>&#10095;</button> */}
//     </div>
//   );
// };


// export default ButtonSwiper;