import React from "react";
import { RiYoutubeLine } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";



function Footer() {

    const date = new Date;
    const year = date.getFullYear();
    
  return (
    <footer className="flex flex-col gap-5 px-10 py-5 mt-10 text-white bg-crossDarkPurple w-100vw text-15px">
      <div className="flex flex-row justify-between h-auto pb-1 border-b-2 w-100 border-crossLightPurple">
        
        <div className="flex flex-col w-40 h-auto gap-1">
          <div>Subscribe To our newsletter</div>
          <div className="flex items-center h-auto w-100">
            <input type="text" placeholder="Email Address" className="p-1 rounded-tl rounded-bl h-40px w-90"/>
            <button className="flex items-center justify-center w-auto px-1 rounded-tr rounded-br h-40px bg-crossLightPurple">Subscribe</button>
          </div>
        </div>

        <div className="flex items-end justify-center gap-2">
          <RiYoutubeLine className="p-0.5 rounded-full text-35px bg-crossLightPurple"/>
          <SiFacebook className="p-0.5 rounded-full text-35px bg-crossLightPurple"/>
          <AiOutlineLinkedin className="p-0.5 rounded-full text-35px bg-crossLightPurple"/>
          <BsTwitterX className="p-0.5 rounded-full text-35px bg-crossLightPurple"/>
        </div>
      </div>
      



      <div className="flex flex-row items-center justify-start gap-20 pb-1 font-light border-b-2 w-100 border-crossLightPurple">
        <ul>
            <h5 className="text-crossFooterText">Company</h5>
            <li><Link to="">About Us</Link></li>
            <li><Link to="">Leadership & Team</Link></li>
            <li><Link to="">Our Clientele</Link></li>
            <li><Link to="">Our Courses</Link></li>
            <li><Link to="">Our Story</Link></li>
            <li><Link to="">Crosstie Photos</Link></li>
        </ul>


        <ul>
            <h5 className="text-crossFooterText">Our Solutions</h5>
            <li><Link to="">Corporate Training</Link></li>
            <li><Link to="">Management Consulting</Link></li>
            <li><Link to="">Webinars</Link></li>
            <li><Link to="">Customised Solutions</Link></li>
            <li><Link to="">The Resource Vault</Link></li>
            <li><Link to="">Soft Skills Launchpad  Programme (SSLP)</Link></li>
        </ul>


        <ul>
            <h5 className="text-crossFooterText">Blog </h5>
            <li><Link to="">Case Studies </Link></li>
            <li><Link to="">Terms of Service </Link></li>
            <li><Link to="">Careers</Link></li>
            <li><Link to="">Privacy Policy </Link></li>
            <li><Link to="">Media Report</Link></li>
        </ul>
      </div>

      <small>All rights reserved. ©2013 – {year}. Crosstie Solutions Ltd.</small>

      <div>
        <ul className="list-disc">
            <li>Crosstie Solutions is rated 4.9 stars on Google Reviews: <a href="https://g.page/r/Cd9bjtmg4w7hEAE/review" className="text-crossFooterText">https://g.page/r/Cd9bjtmg4w7hEAE/review</a></li>
            <li> Crosstie Solutions is a registered Training Service Provider with the Chartered Institute of Bankers of Nigeria (CIBN), serving the  Banking and Finance Industry.</li>
            <li> Crosstie Solutions is a proud Full Member of the International Federation of Training and Development Organizations (IFTDO).</li>
            <li> Crosstie Solutions is an accredited member of the Chartered Institute of Management Consultants (CIMC).</li>
        </ul>

        <p>We embrace the philosophy, "To err is human, to admit is divine." While we strive for excellence, you might occasionally spot a blunder here.  But rest assured, we’re always striving to do better. Keep visiting our website, and you’ll see the improvements!</p>
      </div>
    </footer>
  );
}

export default Footer;
