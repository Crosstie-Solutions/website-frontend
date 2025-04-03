import React, { useContext, useState } from "react";
import { RiYoutubeLine } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CrossContext } from "../../Context/CrossContext";
import { toast } from 'react-toastify';
import axios from "axios";



function Footer() {

    const date = new Date;
    const year = date.getFullYear();


    const {setLoading, baseUrl} = useContext(CrossContext);


    // states for newsletters
  const [email, setEmail] = useState("");

  //Login request
const [newsletterErrors, setNewsletterErrors] = useState({});


const myEmail = document.getElementById('myEmail');
    

  //funtion for form submit
  const subscribeToNewsletter = async (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validationErrors = {};

    //To ensure valid inputs

    if (!email.trim()) {
      validationErrors.email = "email is required.";
    }

    else if (!emailRegex.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    setNewsletterErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        // setLastErrors("");
        setLoading(true);
        const response = await axios.post(
          `${baseUrl}/api/newsletter`,
           {
            email: email
           }
        );

        if (response.status === 201) {
         
          toast.success(`You have successfully subscribed to crosstie newsletter.`);
          
          myEmail.value='';
        }
      } catch (error) {
        
        console.log("loginError:", error);
        
        // validationErrors.email = error;
      } finally {
        setLoading(false);
      }
    }
  };

  
    
  return (
    <footer className="flex flex-col gap-3 py-3 mt-8 text-white small:px-2 large:px-10 bg-crossDarkPurple w-100vw large:text-15px small:text-13px">
      
      <div className="flex justify-between h-auto pb-1 border-b-2 large:flex-row w-100 border-crossLightPurple small:flex-col small:gap-2 large:gap-0">
        
        <div className="flex flex-col h-auto gap-1 large:w-40 small:w-100">
          <div className="large:text-15px small:text-13px">Subscribe To Our Newsletter</div>
          
          <div className="flex flex-col items-center justify-center h-auto gap-1 w-100">
            
           <div className="flex items-center justify-center h-auto w-100">
              <input type="text" name="email" id="myEmail" placeholder="Email Address" className="p-1 text-black rounded-tl rounded-bl h-40px w-90"
              onChange={(e)=>setEmail(e.target.value)}
              />
           
              <button className="flex items-center justify-center w-auto px-1 rounded-tr rounded-br h-40px bg-crossLightPurple"
              onClick={subscribeToNewsletter}
              >Subscribe</button>
           </div>

            <p className='text-crossYellow text-15px'>{newsletterErrors && newsletterErrors.email}</p>
          </div>
        </div>

        <div className="flex items-end justify-center gap-2">
          <RiYoutubeLine className="p-0.5 rounded-full large:text-35px bg-crossLightPurple small:text-25px"/>
          <SiFacebook className="p-0.5 rounded-full large:text-35px bg-crossLightPurple small:text-25px"/>
          <AiOutlineLinkedin className="p-0.5 rounded-full large:text-35px bg-crossLightPurple small:text-25px"/>
          <BsTwitterX className="p-0.5 rounded-full large:text-35px bg-crossLightPurple small:text-25px"/>
        </div>
      </div>
      


      <div className="flex justify-start pb-1 border-b-2 large:items-center large:gap-20 large:flex-row w-100 border-crossLightPurple small:flex-col small:items-start small:gap-3 text-15px">
        <ul className="flex flex-col gap-2">
            <h5 className="text-crossFooterText">Company</h5>
            <li><Link to="">About Us</Link></li>
            <li><Link to="">Leadership & Team</Link></li>
            <li><Link to="">Our Clientele</Link></li>
            <li><Link to="">Our Courses</Link></li>
            <li><Link to="">Our Story</Link></li>
            <li><Link to="">Crosstie Photos</Link></li>
        </ul>


        <ul className="flex flex-col gap-2">
            <h5 className="text-crossFooterText">Our Solutions</h5>
            <li><Link to="">Corporate Training</Link></li>
            <li><Link to="">Management Consulting</Link></li>
            <li><Link to="">Webinars</Link></li>
            <li><Link to="">Customised Solutions</Link></li>
            <li><Link to="">The Resource Vault</Link></li>
            <li><Link to="">Soft Skills Launchpad  Programme (SSLP)</Link></li>
        </ul>


        <ul className="flex flex-col gap-2">
            <h5 className="text-crossFooterText">Blog </h5>
            <li><Link to="">Case Studies </Link></li>
            <li><Link to="">Terms of Service </Link></li>
            <li><Link to="">Careers</Link></li>
            <li><Link to="">Privacy Policy </Link></li>
            <li><Link to="">Media Report</Link></li>
        </ul>
      </div>

      <small className="text-15px">All rights reserved. ©2013 – {year}. Crosstie Solutions Ltd.</small>

      <div className="text-11px">
        <ul className="flex list-disc flex-col gap-0.5">
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
