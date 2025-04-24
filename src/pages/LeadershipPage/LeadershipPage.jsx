import React from "react";
import Leader from "../../components/Leader/Leader";
import { MobileAboutButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { AboutButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { HiArrowLongRight } from "react-icons/hi2";
import AboutHero from "../../components/AboutHero/AboutHero";
import { leaders } from "../../assets/data";
import Bio from "../../components/Bio/Bio";



function LeadershipPage() {

  const teamMembers = leaders && leaders.filter(leader => leader.type.includes('teamMember'));

  const facultyMembers = leaders && leaders.filter(leader => leader.type.includes('faculty'));
  

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white large:mt-17 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-8">
        
        <AboutHero />

      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonSwiper />
        <MobileAboutButtonSwiper />
      </div>

      <div className="flex flex-col items-start h-auto gap-4 large:w-83vw small:w-90vw">
        
        <div className="flex flex-col items-start h-auto gap-1 w-100">
          <h2 className="font-bold text-left large:text-30px small:text-20px">The Crosstie Professionals</h2>
          <p className="text-left large:w-70">Crosstie professionals are industry veterans, passionate innovators, and certified experts, building excellence in education and customer service.
          </p>
        </div>

        <div className="flex flex-col items-center h-auto gap-5 w-100">
          
          {/* directors */}
          {/* <div className="flex flex-col items-center h-auto gap-2 w-100">
            <h4 className="py-1 pl-1 font-semibold text-white border-l-4 bg-crossTextGray text-20px w-100 border-crossYellow">Directors</h4>
            <div className="flex flex-row flex-wrap justify-center h-auto gap-3 w-100">
              <Leader />
              <Leader />
              <Leader />
            </div>
          </div> */}

          {/* The Crosstie Team */}
          <div className="flex flex-col items-center h-auto gap-2 w-100">
            <h4 className="py-1 pl-1 font-semibold text-white border-l-4 bg-crossTextGray text-20px w-100 border-crossYellow">The Crosstie Team</h4>
            <div className="flex flex-row flex-wrap justify-center h-auto gap-3 w-100">

              {
                teamMembers && teamMembers.map((member, i)=>{
                  return(
                    <Leader 
                    key={i}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    type={member.type}
                    bio={member.bio}
                    link={member.link}
                    index = {i + 1}
                  />
                  )
                })

                
              }
              
              
            </div>
          </div>

          
          {/* Board of Advisory */}
          {/* <div className="flex flex-col items-center h-auto gap-2 w-100">
            <h4 className="py-1 pl-1 font-semibold text-white border-l-4 bg-crossTextGray text-20px w-100 border-crossYellow">Board of Advisory</h4>
            <div className="flex flex-row flex-wrap justify-center h-auto gap-3 w-100">
              <Leader />
              <Leader />
              <Leader />
            </div>
          </div> */}


          {/* faculty */}
          <div className="flex flex-col items-center h-auto gap-2 w-100">
            <h4 className="py-1 pl-1 font-semibold text-white border-l-4 bg-crossTextGray text-20px w-100 border-crossYellow">OUR FACULTY/CONSULTANTS</h4>
            <p>Our faculty and consultant team is made up of seasoned professionals and certified facilitators recognised as the best in their respective professional fields. See below some of them:</p>
            
            <div className="flex flex-row flex-wrap justify-start h-auto large:gap-3 w-100 small:gap-5">
              
              

              {
                facultyMembers && facultyMembers.map((member, i)=>
                  <div className="flex flex-col h-auto pb-1 border-b-2 large:w-25 small:w-auto"
                  key={i}
                  >
                    <h3 className="font-semibold text-crossLightPurple">{member.name}</h3>
                    <div className="text-gray-600">{member.role}</div>
                  </div>
                )
              }
            </div>
          </div>
          
          
        </div>
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

export default LeadershipPage;
