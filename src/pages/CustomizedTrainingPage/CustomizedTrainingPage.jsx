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
import AboutHero from "../../components/AboutHero/AboutHero";
import { CrossContext } from "../../Context/CrossContext";



function CustomizedTrainingPage() {

   const {downloadScreen} = useContext(CrossContext);
            
    const downloadUrl = "https://res.cloudinary.com/dnq0mhrjs/raw/upload/v1742100118/course_brochures/tl8unlrm6qlttpde4bnk.pdf";
    
    const title = "Our Corporate Presentation";
  

  return (
    <div className="relative flex flex-col items-center justify-start gap-5 py-5 bg-white large:mt-12 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-13 small:pt-0">
        
        <AboutHero 
        tag="Customized Training"
        line1="Training Programs to Bridge ALL YOUR Skill Gaps"
        line2="We provide bespoke training programs that address your specific organization’s needs, aligning employee development with your company’s goals for measurable, sustainable growth."
      />

      <div className="flex flex-col items-center h-auto w-100">
        <SolutionButtonSwiper />
        <MobileSolutionButtonSwiper />
      </div>

      

      <div className="flex flex-col items-center gap-2 large:mt-2 large:w-83vw large:text-13px small:w-90vw">
        
        <h4 className="font-bold large:text-25px">What Is Customized Training?</h4>

        <div className="flex justify-between p-2 rounded small:items-center large:flex-row w-100 bg-faintPink small:flex-col small:gap-3 large:gap-0 text-16px large:items-start">
            
          <div className="flex flex-col gap-2 large:w-40 large:h-100 small:w-100 small:h-auto text-16px large:pl-1">
            <p className="text-crossTextGray">
            Crosstie’s customised training is a tailored educational journey designed specifically to meet the unique needs, goals, and close the skill gaps of an organisation. 
            It is about blending proven training methods with creative practices that ensure the workforce is equipped with relevant skills and knowledge.

            </p>

            <p className="text-crossTextGray">
            Training programs are developed uniquely for your team with a curriculum where every module, every lesson is crafted with precision to present a rigorous, hands-on learning yielding excellence.
            </p>

            <p className="text-crossTextGray">
            Customised training moves beyond a generic, one-size-fits-all instruction; It involves a pre-training assessment of your organisation and on-training conversations between the experienced facilitators and participants.
            </p>


            <p className="text-crossTextGray">
            The beauty of customised training remains in its ability to transform.
            It is an investment that provides a clear roadmap for personal, professional and organisational growth
            For Crosstie Solutions, offering customised training means creating a strong bond with clients.
            </p>

            <ul className="list-disc text-crossLightPurple">
              <li>Bridge Your Skills gap</li>
              <li>Align with business objectives</li>
              <li>Boost employee engagement</li>
            </ul>
          </div>

          <hr className="large:w-2px large:h-1500px bg-crossTextGray small:h-2px small:w-250px"/>


          <div className="flex flex-col items-center gap-2 large:h-100 large:w-50 small:h-auto small:w-100">
            
            <div className="flex items-center h-auto gap-2 p-1 bg-white border rounded large:flex-row w-100 small:flex-col small:py-2 large:py-1">
                <GiTeamIdea className="rounded-full text-80px bg-faintPink p-0.5 text-crossLightPurple"/>
                <div className="flex flex-col large:items-start w-90 h-100 small:items-center small:gap-1">
                    <div className="font-semibold small:text-center large:text-start">Enhanced Efficiency</div>
                    <div className="text-crossTextGray small:text-center large:text-start">Customised training aligns directly with your team’s practical challenges, eliminating wasted time on irrelevant content. By focusing on the exact skills and tools your staff need, our programs speed up learning, streamline processes, and build immediate improvements on the job.</div>
                </div>
            </div>



            <div className="flex items-center h-auto gap-2 p-1 bg-white border rounded large:flex-row w-100 small:flex-col small:py-2 large:py-1">
                <AiOutlineDesktop className="rounded-full text-80px bg-faintPink p-0.5 text-crossLightPurple"/>
                <div className="flex flex-col large:items-start w-90 h-100 small:items-center small:gap-1">
                    <div className="font-semibold small:text-center large:text-start">Streamlined digital transformation</div>
                    <div className="text-crossTextGray small:text-center large:text-start">We cut through the complexity of change. Our customised approach ensures your systems, people, and processes evolve together at the right pace. From strategy to implementation, we help you adopt the right tools, reduce disruption, and present real value faster.</div>
                </div>
            </div>


            <div className="flex items-center h-auto gap-2 p-1 bg-white border rounded large:flex-row w-100 small:flex-col small:py-2 large:py-1">
                <TbChartHistogram className="rounded-full text-80px bg-faintPink p-0.5 text-crossLightPurple"/>
                <div className="flex flex-col large:items-start w-90 h-100 small:items-center small:gap-1">
                    <div className="font-semibold small:text-center large:text-start">Maximized ROI</div>
                    <div className="text-crossTextGray small:text-center large:text-start">Our customised solutions are designed to deliver measurable impact fast. By targeting the skills, systems, and strategies that matter most to you, we help you avoid costly missteps and make every investment count. The result is stronger performance, better outcomes, and a clear return on your time and resources.</div>
                </div>
            </div>


            <div className="flex items-center h-auto gap-2 p-1 bg-white border rounded large:flex-row w-100 small:flex-col small:py-2 large:py-1">
                <GrUserExpert className="rounded-full text-80px bg-faintPink p-0.5 text-crossLightPurple"/>
                <div className="flex flex-col large:items-start w-90 h-100 small:items-center small:gap-1">
                    <div className="font-semibold small:text-center large:text-start">Proven Expertise</div>
                      <div className="text-crossTextGray small:text-center large:text-start">With over a decade of industry experience, we bring practical knowledge.
                        Our team has transformed organisations in different industries nationwide, delivering exceptional results. You are not just getting advice and motivation, you are gaining a trusted partner who has been in the field and knows what works.
                    </div>
                </div>
            </div>
            
            
            <div className="flex items-center h-auto gap-2 p-1 bg-white border rounded large:flex-row w-100 small:flex-col small:py-2 large:py-1">
                <GrUserExpert className="rounded-full text-80px bg-faintPink p-0.5 text-crossLightPurple"/>
                <div className="flex flex-col large:items-start w-90 h-100 small:items-center small:gap-1">
                    <div className="font-semibold small:text-center large:text-start">Soft Skills Launch Pad (SSLP)</div>
                    <div className="text-crossTextGray small:text-center large:text-start">Every graduate has potential, but potential needs direction. The Soft Skills Launch Pad Programme (SSLP) is our 2025 initiative designed for fresh NYSC graduates stepping into the professional world for the first time. We bridge the gap between academic knowledge and workplace readiness, equipping participants with essential soft skills needed to thrive in the professional space.

                    More than just training, SSLP is a springboard. We guide each participant in discovering their strengths, defining their career path, and gaining the confidence to work in any organisation.

                    As a management consulting firm trusted by top companies for workforce development, we know exactly what employers look for, and we are using that insight to build the next generation of professionals from the ground up.
                    
                    SSLP is more than just a program. It is a launch into a real career opportunity.
                    </div>
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
          <h3 className="font-bold text-25px">Our Learning Options</h3>
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
            Virtual Training
            </h3>

            <p className="text-center text-13px text-crossTextGray">
            Flexible. Scalable. Impactful. <br />
            Live, interactive sessions that energise remote teams with expert-led training, breakout groups, and practical sessions delivering real results, wherever your team is, no matter the size.
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
            Classroom Training
            </h3>

            <p className="text-center text-13px text-crossTextGray">
            Some skills are best built face-to-face. Our Classroom Training programs offer an immersive, distraction-free environment where teams can engage deeply, collaborate and walk away with practical skills they can apply immediately.
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
            Staggered Training
            </h3>

            <p className="text-center text-13px text-crossTextGray">
            Flexible. Sustainable. Seamless. <br />
            Our staggered sessions fit around your operations, spaced over time to support learning without disruption, so teams grow steadily while staying focused on day-to-day tasks.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
            <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
              <FaUser className="text-crossLightPurple text-30px" />
            </div>

            <h3 className="font-bold text-center text-crossLightPurple">
            You-and-I Training
            </h3>

            <p className="text-center text-13px text-crossTextGray">
              Personal. Flexible. Executive-Focused.
              One-on-one coaching for executives, designed around your goals, pace, and schedule, to deliver deep, tailored growth without the noise of group sessions or the limits of traditional training formats.

            </p>
          </div>


          <div className="flex flex-col items-center justify-center gap-1 px-1 py-2 border h-300px border-crossIconBg large:w-30 text-15px rounded-20 small:w-100">
            <div className="flex items-center justify-center p-1 rounded-10 bg-crossIconBg h-50px w-50px">
              <FaUser className="text-crossLightPurple text-30px" />
            </div>

            <h3 className="font-bold text-center text-crossLightPurple">
            Crosstie Up
            </h3>

            <p className="text-center text-13px text-crossTextGray">
            On-Demand. Self-Paced. Certified.
            Pre-recorded training you can control and learn anytime, anywhere. Complete practicals, case studies, and assessments at your own pace, then earn a certificate to showcase your skills and growth.
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


      {/* {downloadScreen && 
        <DownloadScreen 
          downloadUrl={downloadUrl && downloadUrl}
          title={title && title}
        />} */}
    </div>
  );
}

export default CustomizedTrainingPage;
