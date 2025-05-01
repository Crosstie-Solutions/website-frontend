import React from "react";
import { Link } from "react-router-dom";
import { PHOTOS } from "../../assets/images";
import { MobileAboutButtonSwiper } from "../../components/MobileButtonSwiper/MobileButtonSwiper";
import { AboutButtonSwiper } from "../../components/ButtonSwiper/ButtonSwiper";
import { HiArrowLongRight } from "react-icons/hi2";
import AboutHero from "../../components/AboutHero/AboutHero";



function OurStoryPage() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-5 pb-5 bg-white large:mt-12 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-8">
      
     <AboutHero />

      <div className="flex flex-col items-center h-auto w-100">
        <AboutButtonSwiper />
        <MobileAboutButtonSwiper />
      </div>


      <div className="flex items-center justify-center large:h-380px large:mt-4 large:gap-0 small:flex-col-reverse large:flex-row small:w-90vw large:w-83vw small:gap-3 small:h-auto">
      
        <img src={PHOTOS.story} alt="logo"  className="large:w-25 large:h-auto small:h-auto small:w-80"/>
        
        <div className="flex flex-col justify-center h-auto gap-2 shadow-xl large:p-3 large:w-75 small:w-90vw bg-purple-50 rounded-10 small:p-1 ">
          
        <h3 className="font-bold text-20px">Our Beginnings</h3>
        
          <p className="text-crossTextGray">On July <span className="font-semibold">13th, 2013, Crosstie Solutions</span> was born… not in a sleek office with a large vision board, but in a room with a single person. Adebayo Adegun, our CEO, was the visionary, the dreamer, and, for many years, the only person in the company.</p>


          <p className="text-crossTextGray">Armed with a strong background in <span className="font-semibold">organizational growth and development</span>, he wore every hat: CEO, salesperson, and learning & development expert.
          From day one, our mission was simple: to support organisations to become and stay productive. Not just by offering services, but by becoming the invisible part that holds their structure together.
          </p>

          <p className="text-crossTextGray">As our CEO searched for the right business name, he thought, “What else means support?”
          </p>

          <p className="text-crossTextGray">A Google search led him to a powerful word: <span className="font-semibold">Crosstie</span>. In engineering, a crosstie is what holds structures in place: beams, columns, the framework that keeps everything standing. Once plastered, it disappears. You don’t see it, but without it, nothing holds.
          </p>

          <p className="text-crossTextGray">That was it! <span className="font-semibold">We are the crosstie</span>, the quiet framework behind lasting organisations.
          </p>
        </div>

      </div>

      <div className="flex flex-col h-auto gap-2 p-2 mt-3 border rounded large:w-83vw border-crossFooterText small:w-90vw text-crossTextGray">
        <h3 className="font-bold text-20px">
        Our Identity
        </h3>

          <p>With no budget for a graphic designer, Adebayo took things into his own hands and designed our first logo himself. It was a time when he had just completed a training program with Google on Doing Business the Google Way. This gave him just enough knowledge to create our first logo using colours pulled from Google.
              The colours in our logo stand for something deeper than just colours.
          </p>


        <ul className="flex flex-col h-auto gap-1 pl-2 list-disc large:w-80 small:w-100">
          
          
          <li>
              <span className="font-semibold">The black dot before the “C”</span> represents confusion, stagnation, and the frustration many organisations face; the starting point.
          </li>

          <li>
              <span className="font-semibold">Green</span> stands for the knowledge that we bring to help shift organisations out of the dark when they come in contact with us.
          </li>

          <li>
              <span className="font-semibold">Orange</span> symbolises clarity, the result of applying new knowledge that we have brought.
          </li>

          <li>
              <span className="font-semibold">Blue</span>  reflects growth, balance, and sustainable progress for organisations that have encountered us.
          </li>

          <li>
              <span className="font-semibold">Purple</span> is for distinction, stability, and excellence, which is the pinnacle of transformation by us… and the growth continues.
          </li>
         
        </ul>

        <p>This colour journey represents the path we walk with our clients. From being stuck to clarity and significance.
          </p>
      </div>


      <div className="flex flex-col h-auto gap-2 p-2 border rounded w-83vw border-crossFooterText">
        
        <h3 className="font-bold text-20px">Our Journey</h3>
        
        <p className="text-crossTextGray">The early years weren’t easy. In fact, the first three years nearly broke us. <span className="font-semibold">Crosstie Solutions</span> fought a constant battle to survive as financial pressure threatened to shut us down more than once. Resources were scarce, but the dream stayed alive. For the first few years, we worked mostly with schools. No major deals.
        </p>

        <p className="text-crossTextGray">From inception, we had five different arms, but we needed focus. A brand audit revealed what people knew us for: <span className="font-semibold">training</span>. This insight helped us refine our identity and opened new doors. One of our first breakthroughs came in 2016 with a training engagement for the Nigerian Mortgage Refinance Company (NMRC), followed by Cambridge University Press. That same year, triumph started to feel real - we collaborated with training firms to deliver training sessions to GTBank, Stanbic IBTC, Seplat Petroleum and a few more.</p>

        <p className="text-crossTextGray">By <span className="font-semibold">2018</span>, our reach expanded. In partnership with ICF Nigeria, we brought <span className="font-semibold">Tamiko Cuellar</span> to the country and hosted our very first leadership conference featuring <span className="font-semibold">Brigette Hyacinth</span>, with over <span className="font-semibold">150 top HR professionals and business leaders</span> in attendance. A milestone that proved we were no longer small players.</p>
        
        
        <p className="text-crossTextGray">In 2019, we developed our first professional certificate program <span className="font-semibold">2018</span> and endorsed it with the International Federation of Training and Development Organisations <span className="font-semibold">(IFTDO)</span>.</p>
        
        <p className="text-crossTextGray">In 2020, during the COVID year, we got a major engagement with <span className="font-semibold">TVC Communications</span>, the first engagement for the <span className="font-semibold">CES</span>, to train the entire workforce on this program, from the leaders to mid-level and junior-level.</p>

        <p className="text-crossTextGray">Then, in <span className="font-semibold">2024</span> , A decade of growth had come full circle. Emotional, no doubt. We rebranded from the inside out…new logo, new identity, new energy. But the heart? Still the same. It was a celebration of everything we had overcome and everything that still lay ahead.</p>
      </div>

      <div className="flex flex-col h-auto gap-2 p-2 border rounded w-83vw border-crossFooterText">
        
        <h3 className="font-bold text-20px">Our Present</h3>
        
        <p className="text-crossTextGray">Today, <span className="font-semibold">Crosstie Solutions</span> stands tall. From our modest beginnings in that visionary room, we have expanded our reach and impact across <span className="font-semibold">10 states in Nigeria</span>, into <span className="font-semibold">10 states in Nigeria</span> 3 African countries, and even extended our presence into the U.S. and the U.K. with a team of highly skilled consultants, dedicated L&D experts, and a growing workforce.</p>
        

        <p className="text-crossTextGray">We have crossed the shores of Lagos to bring our consulting services and training programs to over <span className="font-semibold">12 industries nationwide.</span> Every step, every inch of growth has been earned through perseverance and an unwavering commitment to <span className="font-semibold">transforming professional spaces.</span></p>

        <p className="text-crossTextGray">But we’re not finished yet. We know we are not where we want to be. <span className="font-semibold">Growth is constant</span>, and we are still learning, evolving, and expanding. We have more goals to accomplish, more lives to impact, and more stories to tell. Slowly, but surely, we are unveiling them, one step at a time.</p>

        <p className="text-crossTextGray">We haven’t told our story as often as we should… <span className="font-semibold">on social media, in press releases, or grand announcements</span>. But that’s changing now. <span className="font-semibold">Every day</span> we’re building on the foundation we’ve laid, taking pride in how far we’ve come, and excited about where we’re headed.</p>

        <p className="text-crossTextGray">This is <span className="font-semibold">our story</span>… of grit, passion, and transformation. From the room where it all started to the many lives we are impacting today, <span className="font-semibold">Crosstie Solutions</span> is a proof of persistence, the importance of people, and the belief that real change begins from within.
        And we are just getting started.
        </p>
        
      </div>



      <div className="flex items-center justify-center h-auto large:mt-2 large:gap-2 small:flex-col large:flex-col w-83vw small:gap-1">

      <h2 className="font-bold small:text-20px large:text-35px">Our Journey In Visual</h2>
      
        <img
          src={PHOTOS.journey}
          alt="logo"
          className="border large:w-100 large:h-auto small:h-auto small:w-100 rounded-5 border-crossFooterText small:mt-3 large:mt-0"
        />

        <div className="flex flex-col items-center h-auto gap-1 mt-3 w-100">
          <h4 className="font-bold text-20px">Ready To Get Started?</h4>
          <Link to="/our-courses" className="flex items-center w-auto gap-1 p-1 text-white rounded h-40px bg-crossLightPurple">
            Explore Our Courses <HiArrowLongRight className="text-20px" />
          </Link>
        </div>
      </div>

      
    </div>
  );
}

export default OurStoryPage;
