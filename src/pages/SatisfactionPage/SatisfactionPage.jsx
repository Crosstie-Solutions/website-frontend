import React from "react";
import { MobileAboutButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { AboutButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { HiArrowLongRight } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { TbMedal2 } from "react-icons/tb";
import { IoMdPersonAdd } from "react-icons/io";
import AboutHero from "../../components/AboutHero/AboutHero";

function SatisfactionPage() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto large:mt-17 small:mt-12">
      
      <AboutHero />

      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonSwiper />
        <MobileAboutButtonSwiper />
      </div>

      <div className="flex h-auto large:flex-row large:pr-2 large:gap-5 large:justify-start large:items-center large:w-83vw bg-faintPink rounded-10 small:flex-col small:items-center small:w-90vw small:p-1 small:gap-2">
        
        <img
          src={PHOTOS.how}
          alt="photo"
          className="w-250px h-300px rounded-10"
        />

        <hr className="bg-gray-500 large:h-250px large:w-2px small:w-80 small:h-2px" />

        <div className="flex flex-col gap-2 large:h-100 large:w-60 small:h-auto small:w-100">
          
          <div className="flex gap-2 p-1 bg-white rounded large:items-center large:w-100 text-11px large:flex-row small:flex-col">
            
            <div className="flex items-center justify-center rounded-full h-50px w-50px bg-faintPink">
              <FiUsers className="px-1 border rounded-full text-50px text-crossLightPurple" />
            </div>
            <p className="text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-white rounded large:items-center large:w-100 text-11px large:flex-row small:flex-col">
            
            <div className="flex items-center justify-center rounded-full h-50px w-50px bg-faintPink">
              <TbMedal2 className="px-1 border rounded-full text-50px text-crossLightPurple" />
            </div>
            <p className="text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-white rounded large:items-center large:w-100 text-11px large:flex-row small:flex-col">
            <div className="flex items-center justify-center rounded-full h-50px w-50px bg-faintPink">
              <IoMdPersonAdd className="px-1 border rounded-full text-50px text-crossLightPurple" />
            </div>
            <p className="text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>
        </div>
      </div>




            {/* how it works */}

      <div className="flex flex-col items-center h-auto gap-2 large:mt-5 large:w-83vw small:w-90vw">
        <h3 className="font-bold large:text-25px small:text-17px">How does it work?</h3>

        <p className="text-center text-black w-80">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,</p>

        <div className="flex justify-between p-2 border large:flex-row border-crossFooterText rounded-10 w-100 small:flex-col small:gap-3 large:gap-0">
        
            
          <div className="flex flex-col items-center h-auto gap-2 large:w-30 small:w-100">
            
            <div className="flex flex-col items-center h-auto gap-1 text-crossLightPurple w-100">
              <IoMdPersonAdd />
              <div>Resolution</div>
            </div>

            <p className="text-center text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>

          <div className="flex flex-col items-center h-auto gap-2 large:w-30 small:w-100">
            
            <div className="flex flex-col items-center h-auto gap-1 text-crossLightPurple w-100">
              <IoMdPersonAdd />
              <div>Resolution</div>
            </div>

            <p className="text-center text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>

          <div className="flex flex-col items-center h-auto gap-2 large:w-30 small:w-100">
            
            <div className="flex flex-col items-center h-auto gap-1 text-crossLightPurple w-100">
              <IoMdPersonAdd />
              <div>Resolution</div>
            </div>

            <p className="text-center text-crossTextGray">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              eaque ad maiores tenetur doloribus. Voluptatem, quas similique
              vero eum deleniti,
            </p>
          </div>
        </div>
      </div>



            {/* message from CEO */}
      <div className="flex flex-col items-center h-auto gap-2 large:mt-2 large:w-83vw small:w-90vw">
        <h3 className="font-bold large:text-30px small:text-17px">A Message From Our CEO</h3>

        <div className="flex large:justify-start large:py-2 large:items-center large:flex-row rounded-10 w-100 small:flex-col small:gap-2 large:gap-0 small:p-1 small:items-center large:p-0">
            
            <img src={PHOTOS.adebayo} alt="CEO" className="h-350px w-300px rounded-tl-3xl rounded-br-3xl large:z-10"/>
            
            <div className="flex flex-col gap-2 border large:w-95 bg-crossIconBg large:pr-2 large:py-2 large:pl-5 small:p-2 small:rounded large:relative large:right-2">
                <h5 className="font-bold">Dear Kustomer</h5>
                <p className="text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum. consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum eaque ad maiores tenetur doloribus. Voluptatem, quas similique vero eum deleniti,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit </p>
            </div>
        </div>
      </div>





      <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
        <h4 className="font-bold large:text-20px small:text-17px">
          Ready To Get Started?
        </h4>
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

export default SatisfactionPage;
