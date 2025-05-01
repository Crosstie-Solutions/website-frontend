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
import { RiMoonClearLine } from "react-icons/ri";
import { PiCubeTransparentThin } from "react-icons/pi";
import { MdOutlineSignalWifiStatusbarNull } from "react-icons/md";



function SatisfactionPage() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto large:mt-12 small:mt-8">

      <AboutHero />

      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonSwiper />
        <MobileAboutButtonSwiper />
      </div>

      <div className="flex h-auto large:flex-row large:pr-1 large:py-2 large:gap-5 large:justify-center large:items-start large:w-83vw bg-faintPink rounded-10 small:flex-col small:items-center small:w-90vw small:p-1 small:gap-2">
        <img
          src={PHOTOS.satisfaction2}
          alt="photo"
          className="h-auto large:w-300px rounded-10 small:w-100"
        />

        <hr className="bg-gray-500 large:h-380px large:w-2px small:w-80 small:h-2px" />

        <div className="flex flex-col gap-2 large:h-100 large:w-60 small:h-auto small:w-100 text-crossTextGray">
          <div className="flex gap-2 p-1 bg-white rounded large:items-center large:w-100 text-15px large:flex-row small:flex-col">
            <div className="flex items-center justify-center rounded-full h-50px w-50px bg-faintPink">
              <FiUsers className="px-1 border rounded-full text-50px text-crossLightPurple" />
            </div>
            <p className="">
              At <span className="font-semibold">Crosstie Solutions</span>, your
              growth and satisfaction come first. That is why we stand behind
              every solution we deliver with a firm commitment to quality,
              impact, and care. When you partner with us, you are not just
              choosing a service, you are also choosing a{" "}
              <span className="font-semibold">
                guaranteed commitment to your success.
              </span>
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-white rounded large:items-center large:w-100 text-15px large:flex-row small:flex-col">
            <div className="flex items-center justify-center rounded-full h-50px w-50px bg-faintPink">
              <TbMedal2 className="px-1 border rounded-full text-50px text-crossLightPurple" />
            </div>
            <p className="">
              We know that satisfaction feels different for everyone, but at
              Crosstie, we believe it begins with one thing:{" "}
              <span className="font-semibold">
                meeting your expectations with excellence.
              </span>{" "}
              Our guarantee is simple…{" "}
              <span className="font-semibold">
                You deserve transformational service,
              </span>{" "}
              and we are committed to delivering nothing less.
            </p>
          </div>

          <div className="flex gap-2 p-1 bg-white rounded large:items-center large:w-100 text-15px large:flex-row small:flex-col">
            <div className="flex items-center justify-center rounded-full h-50px w-50px bg-faintPink">
              <IoMdPersonAdd className="px-1 border rounded-full text-50px text-crossLightPurple" />
            </div>
            <p className="">
              Because satisfaction does not depend on how we feel but how you
              feel, should we not meet up to your expectations, we will do what
              it takes to make it right. Your success and satisfaction is our
              priority, and we stand by that, every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* how it works */}

      <div className="flex flex-col items-center h-auto gap-2 large:mt-5 large:w-83vw small:w-90vw">
        <h3 className="font-bold large:text-25px small:text-17px">
          How Does It Work?
        </h3>

        <p className="text-center text-black w-80">
          Your satisfaction is our promise. To deliver this promise, we work not
          just as providers but partners. Hand-in-Hand. If{" "}
          <span className="font-semibold">at any point</span>, you feel
          unsatisfied with our methods, kindly inform our representative
        </p>

        <div className="flex justify-between p-2 border large:flex-row border-crossFooterText rounded-10 w-100 small:flex-col small:gap-3 large:gap-0">
          <div className="flex flex-col items-center h-auto gap-2 large:w-30 small:w-100">
            <div className="flex flex-col items-center h-auto gap-1 text-crossLightPurple w-100">
              <RiMoonClearLine className="text-30px" />
              <div className="text-center">Clear Expectations from Day One</div>
            </div>

            <p className="text-center text-crossTextGray">
              We begin every engagement with a deep conversation, incorporating
              active listening. Together, we define success; your goals, desired
              outcomes, and key metrics, so we know exactly what excellence
              looks like for <span className="font-semibold">you</span>.
            </p>
          </div>

          <div className="flex flex-col items-center h-auto gap-2 large:w-30 small:w-100">
            <div className="flex flex-col items-center h-auto gap-1 text-crossLightPurple w-100">
              <PiCubeTransparentThin className="text-30px" />
              <div className="text-center">
                Consistent Check-ins and Transparent Delivery
              </div>
            </div>

            <p className="text-center text-crossTextGray">
              Throughout the project, we stay in sync. You will receive regular
              updates, open communication, and clear progress tracking, so you
              are always confident in what we are building together.
            </p>
          </div>

          <div className="flex flex-col items-center h-auto gap-2 large:w-30 small:w-100">
            <div className="flex flex-col items-center h-auto gap-1 text-crossLightPurple w-100">
              <MdOutlineSignalWifiStatusbarNull className="text-30px" />
              <div className="text-center">Excuse Nullification</div>
            </div>

            <p className="text-center text-crossTextGray">
              If something doesn’t meet your expectations, we act fast. Whether
              it’s a refinement, adjustment, or full review, we work with you
              until the solution delivers the value you deserve.
            </p>
          </div>
        </div>
      </div>

      {/* message from CEO */}
      <div className="flex flex-col items-center h-auto gap-2 large:mt-2 large:w-83vw small:w-90vw">
        <h3 className="font-bold large:text-30px small:text-17px">
          A Message From Our CEO
        </h3>

        <div className="flex large:justify-start large:py-2 large:items-center large:flex-row rounded-10 w-100 small:flex-col small:gap-2 large:gap-0 small:p-1 small:items-center large:p-0">
          <img
            src={PHOTOS.adebayo}
            alt="CEO"
            className="large:h-350px large:w-auto rounded-tl-3xl rounded-br-3xl large:z-10 small:w-90 small:h-auto"
          />

          <div className="flex flex-col gap-2 border large:w-95 bg-crossIconBg large:pr-2 large:py-2 large:pl-5 small:p-2 small:rounded large:relative large:right-2">
            <h5 className="font-bold">Dear Crosstie Partner,</h5>
            <p className="text-crossTextGray">
              At Crosstie Solutions, we are driven by one goal: delivering
              transformational services that not only meet your expectations but
              help you grow. Every solution that we offer is carefully crafted
              with your success in mind. Your satisfaction isn’t just a goal. It
              is our commitment.
            </p>

            <p className="text-crossTextGray"> We may meet in person at different levels of
              our engagement with you, and at such times, sharing your feedback
              on your experience with us is expected. If, however, we do not
              have the opportunity to meet physically, and you have hit a
              roadblock with finding the help you need through our usual
              support, know that as CEO, I take full responsibility for your
              experience. I am here to ensure you are heard and supported.
              Please reach out to me directly at <a 
              target='_blank'
              href="mailto:adebayo.adegun@crosstiesolutions.com"
              className="text-crossBlue"
              >adebayo.adegun@crosstiesolutions.com</a>.</p>

            
            <p className="text-crossTextGray">Thank you for choosing
              Crosstie. I hope you enjoy your learning journey with us, and I am
              confident that you will leave every engagement with real
              transformation, continued excellence and exceptional experience.</p>

              

              <div className="text-crossTextGray">
                <div>Warm regards,</div>
                <div>Adebayo Adegun</div>
                <div>CEO, Crosstie Solutions</div>
              </div>
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
