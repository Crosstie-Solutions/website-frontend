import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { MobileSolutionButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { SolutionButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { FaBookOpen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { GiTeamIdea } from "react-icons/gi";
import { AiOutlineDesktop } from "react-icons/ai";
import { TbChartHistogram } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";



function CustomizedTrainingPage() {
  

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 large:mt-8 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-13">
        
      <div className="flex flex-col items-start justify-center text-white large:gap-1 large:w-100vw large:h-500px small:px-0 large:p-0 small:gap-2 small:h-200px small:w-100vw">
        <img src={PHOTOS.about6} alt="photos" className="w-100 h-100" />

        <div className="absolute flex flex-col justify-center gap-2 large:pl-10 large:h-500px large:w-100vw aboutOne small:h-200px small:pl-2">
          <h1 class="large:text-35px large:w-60 large:leading-10 small:leading-5 font-extrabold small:w-80 small:text-17px">
            ELEVATE YOUR LEADERSHIP SKILL, EXPAND YOUR IMPACT!
          </h1>

          <p className="font-extralight large:w-50 small:w-90 small:text-11px large:text-15px">
            Discover new skills and interests with our extensive course
            collection
          </p>

          {/* <Link className="flex items-center justify-center gap-1 px-1 font-semibold large:w-300px rounded-10 h-40px bg-buttonOverlay large:text-15px small:w-250px small:text-11px">
            Download OEP course brochure{" "}
            <RiFolderDownloadLine className="large:text-25px small:text-20px" />
          </Link> */}
        </div>
      </div>

      <div className="flex flex-col items-center h-auto w-100">
        <SolutionButtonSwiper />
        <MobileSolutionButtonSwiper />
      </div>

      

      <div className="flex flex-col items-center gap-2 large:mt-2 large:w-83vw large:text-13px small:w-90vw">
        
        <h4 className="font-bold large:text-25px">What Is Customized Training?</h4>

        <div className="flex items-center justify-between p-2 rounded large:flex-row w-100 bg-faintPink small:flex-col small:gap-3 large:gap-0 text-16px">
            
          <div className="flex flex-col gap-2 large:w-40 large:h-100 small:w-100 small:h-auto text-16px large:pl-1">
            <p className="text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti, quis quia natus nisi reiciendis voluptatibus
              debitis, unde doloribus excepturi?
            </p>

            <p className="text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti, quis quia natus nisi reiciendis voluptatibus
              debitis, unde doloribus excepturi?
            </p>

            <ul className="list-disc text-crossLightPurple">
              <li>Bridge Your Skills gap</li>
              <li>Align with business objectives</li>
              <li>Boost employee engagement</li>
            </ul>
          </div>

          <hr className="large:w-2px large:h-600px bg-crossTextGray small:h-2px small:w-250px"/>


          <div className="flex flex-col items-center gap-2 large:h-100 large:w-50 small:h-auto small:w-100">
            
            <div className="flex items-center h-auto gap-2 p-1 bg-white border rounded large:flex-row w-100 small:flex-col small:py-2 large:py-1">
                <GiTeamIdea className="rounded-full text-80px bg-faintPink p-0.5 text-crossLightPurple"/>
                <div className="flex flex-col large:items-start w-90 h-100 small:items-center small:gap-1">
                    <div className="font-semibold small:text-center large:text-start">Enhanced Efficiency</div>
                    <div className="text-crossTextGray small:text-center large:text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti</div>
                </div>
            </div>



            <div className="flex items-center h-auto gap-2 p-1 bg-white border rounded large:flex-row w-100 small:flex-col small:py-2 large:py-1">
                <AiOutlineDesktop className="rounded-full text-80px bg-faintPink p-0.5 text-crossLightPurple"/>
                <div className="flex flex-col large:items-start w-90 h-100 small:items-center small:gap-1">
                    <div className="font-semibold small:text-center large:text-start">Streamlined digital transformation</div>
                    <div className="text-crossTextGray small:text-center large:text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti</div>
                </div>
            </div>


            <div className="flex items-center h-auto gap-2 p-1 bg-white border rounded large:flex-row w-100 small:flex-col small:py-2 large:py-1">
                <TbChartHistogram className="rounded-full text-80px bg-faintPink p-0.5 text-crossLightPurple"/>
                <div className="flex flex-col large:items-start w-90 h-100 small:items-center small:gap-1">
                    <div className="font-semibold small:text-center large:text-start">Maximized ROI</div>
                    <div className="text-crossTextGray small:text-center large:text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti</div>
                </div>
            </div>


            <div className="flex items-center h-auto gap-2 p-1 bg-white border rounded large:flex-row w-100 small:flex-col small:py-2 large:py-1">
                <GrUserExpert className="rounded-full text-80px bg-faintPink p-0.5 text-crossLightPurple"/>
                <div className="flex flex-col large:items-start w-90 h-100 small:items-center small:gap-1">
                    <div className="font-semibold small:text-center large:text-start">Proven Expertise</div>
                    <div className="text-crossTextGray small:text-center large:text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti</div>
                </div>
            </div>
            

          </div>
        </div>
      </div>

      <div className="flex flex-col h-auto gap-3 large:mt-3 small:w-90vw large:w-83vw">
        <div className="flex flex-col h-auto gap-0.5 w-100">
          <div className="flex items-center w-auto h-auto gap-1">
            <hr className="h-2px w-40px bg-crossLightPurple" />
            <h5 className="text-crossLightPurple text-17px">
              WE SUIT YOUR NEEDS
            </h5>
          </div>
          <h3 className="font-bold text-25px">Our Learning Solutions</h3>
          <p className="text-15px text-crossTextGray">
            Delve Into our Weekly Insights, Crafted By The Best Of Bests
          </p>
        </div>

        <div className="flex items-center h-auto large:justify-around large:flex-row large:w-90 small:flex-col small:gap-3 large:gap-5 large:flex-wrap">
          
          <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
            <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
              <FaBookOpen className="text-crossLightPurple text-30px" />
            </div>

            <h3 className="font-bold text-center text-crossLightPurple">
              Culture Assessment and Transformation
            </h3>

            <p className="text-center text-13px text-crossTextGray">
              The business landscape is evolving, and staying ahead requires
              more than just experience—it demands strategic thinking,
              innovation, and executive-level expertise.
            </p>

            {/* <Link
            to="/open-executive"
            className="flex items-center justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple"
          >
            Learn More <MdOutlineChevronRight className="text-20px" />
          </Link> */}
          </div>

          <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
            <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
              <FaUserTie className="text-crossLightPurple text-30px" />
            </div>

            <h3 className="font-bold text-center text-crossLightPurple">
              Strategy Development and Execution
            </h3>

            <p className="text-center text-13px text-crossTextGray">
              The business landscape is evolving, and staying ahead requires
              more than just experience—it demands strategic thinking,
              innovation, and executive-level expertise.
            </p>

            {/* <Link
            to="/open-executive"
            className="flex items-center justify-center h-auto gap-1 mt-1 w-150px text-crossLightPurple"
          >
            Learn More <MdOutlineChevronRight className="text-20px" />
          </Link> */}
          </div>

          <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
            <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
              <FaUser className="text-crossLightPurple text-30px" />
            </div>

            <h3 className="font-bold text-center text-crossLightPurple">
              Business Process Documentation and Improvement
            </h3>

            <p className="text-center text-13px text-crossTextGray">
              The business landscape is evolving, and staying ahead requires
              more than just experience—it demands strategic thinking,
              innovation, and executive-level expertise.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
            <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
              <FaUser className="text-crossLightPurple text-30px" />
            </div>

            <h3 className="font-bold text-center text-crossLightPurple">
              Corporate Performance Management
            </h3>

            <p className="text-center text-13px text-crossTextGray">
              The business landscape is evolving, and staying ahead requires
              more than just experience—it demands strategic thinking,
              innovation, and executive-level expertise.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
        <h4 className="font-bold large:text-20px small:text-17px">
          Ready To Get Started?
        </h4>
        <Link
          to="/our-courses/"
          className="flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple"
        >
          Explore Our Courses <HiArrowLongRight className="text-20px" />
        </Link>
      </div>
    </div>
  );
}

export default CustomizedTrainingPage;
