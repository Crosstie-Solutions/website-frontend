import React, { useContext, useState } from "react";
import { RiYoutubeLine } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CrossContext } from "../../Context/CrossContext";
import { toast } from 'react-toastify';
import axios from "axios";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa6";




function Footer() {

    const date = new Date;
    const year = date.getFullYear();


    const {setLoading, baseUrl} = useContext(CrossContext);


    // states for newsletters
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //Login request
const [newsletterErrors, setNewsletterErrors] = useState({});

const [other, setOther] = useState(false);


const myEmail = document.getElementById('myEmail');
const myFirstName = document.getElementById('myFirstName');
const myLastName = document.getElementById('myLastName');
    

  //funtion for form submit
  const subscribeToNewsletter = async (event) => {

    if(email){
      setOther(true);
    }
    
    
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

    if (!firstName.trim()) {
      validationErrors.firstName = "Enter first name.";
    }

    if (!lastName.trim()) {
      validationErrors.lastName = "Enter last name.";
    }

    setNewsletterErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        window.scrollTo({ top: 0, behavior: "auto" });
        // setLastErrors("");
        setLoading(true);
        const response = await axios.post(
          `${baseUrl}/api/newsletter`,
           {
            email: email,
            firstName: firstName,
            lastName: lastName,
           }
        );

        if (response.status === 201) {
         
          toast.success(`You have successfully subscribed to crosstie newsletter.`);
          
          myEmail.value='';
          myFirstName.value='';
          myLastName.value='';
        }
      } catch (error) {
        
        console.log("loginError:", error);
        if(error){
          toast.error(error.response.data.message)
          myEmail.value='';
          myFirstName.value='';
          myLastName.value='';
        }
        
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
            
           <div className="flex items-start justify-center h-auto w-100">
             <div className="flex flex-col h-auto gap-1 w-90">
                <div className="flex flex-col items-center justify-center h-auto w-100">
                  <input type="text" name="email" id="myEmail" placeholder="Email Address"  className="p-1 text-black rounded-tl rounded-bl h-40px w-100"
                    onChange={(e)=>setEmail(e.target.value)}
                  />

                  <p className='text-crossYellow text-15px'>{newsletterErrors && newsletterErrors.email}</p>
                </div>

                {other &&
                <div className="flex flex-row items-center justify-between h-auto w-100">
                  <div className="flex flex-col h-auto w-45">
                      <input type="text" name="firstName" id="myFirstName" placeholder="Enter first name"  className="p-1 text-black rounded-tl rounded-bl h-40px w-100"
                      onChange={(e)=>setFirstName(e.target.value)}
                      />
                      
                       <p className='text-crossYellow text-15px'>{newsletterErrors && newsletterErrors.firstName}</p>
                  </div>

                  <div className="flex flex-col h-auto w-45">
                     <input type="text" name="lastName" id="myLastName" placeholder="Enter last name"  className="p-1 text-black rounded-tr rounded-br h-40px w-100"
                      onChange={(e)=>setLastName(e.target.value)}
                      />

                      <p className='text-crossYellow text-15px'>{newsletterErrors && newsletterErrors.lastName}</p>
                  </div>
                </div>}
                
             </div>
           
              <button className="flex items-center justify-center w-auto px-1 rounded-tr rounded-br h-40px bg-crossLightPurple"
              onClick={subscribeToNewsletter}
              >Subscribe</button>
           </div>

            
          </div>
        </div>

        <div className="flex items-end justify-center gap-2">
          <a href="https://www.youtube.com/@crosstiesolutions"><RiYoutubeLine className="p-0.5 rounded-full large:text-35px bg-crossLightPurple small:text-25px"/></a>
          
          <a href="https://web.facebook.com/crosstiesolutions"><SiFacebook className="p-0.5 rounded-full large:text-35px bg-crossLightPurple small:text-25px"/></a>
          
          <a href="https://www.linkedin.com/company/crosstiesolutions/"><AiOutlineLinkedin className="p-0.5 rounded-full large:text-35px bg-crossLightPurple small:text-25px"/></a>
          
          <a href="https://x.com/CrossTieSolutn"><BsTwitterX className="p-0.5 rounded-full large:text-35px bg-crossLightPurple small:text-25px"/></a>

          
          <a href="https://www.instagram.com/crosstiesolutions/"><LuInstagram className="p-0.5 rounded-full large:text-35px bg-crossLightPurple small:text-25px"/></a>

          <a href="https://www.tiktok.com/@crosstiesolutions"><FaTiktok className="p-0.5 rounded-full large:text-35px bg-crossLightPurple small:text-25px"/></a>
          
        </div>
      </div>
      


      <div className="flex justify-start pb-1 border-b-2 large:items-start large:gap-20 large:flex-row w-100 border-crossLightPurple small:flex-col small:items-start small:gap-3 text-15px">
        <ul className="flex flex-col gap-2">
            <h5 className="text-crossFooterText">Company</h5>
            <li><Link to="/about-us/">About Us</Link></li>
            <li><Link to="/about-us/leadership">Leadership & Team</Link></li>
            <li><Link to="/about-us/our-clients">Our Clientele</Link></li>
            <li><Link to="/our-courses/">Our Courses</Link></li>
            <li><Link to="/about-us/our-story">Our Story</Link></li>
            <li><Link to="/about-us/crosstie-photos">Crosstie Photos</Link></li>
        </ul>


        <ul className="flex flex-col gap-2">
           
            <h5 className="text-crossFooterText">Our Solutions</h5>
            <li><Link to="/our-solutions/">Corporate Training</Link></li>
            <li><Link to="/our-solutions/management-consulting">Management Consulting</Link></li>
            <li><Link to="/our-solutions/webinars">Webinars</Link></li>
            <li><Link to="/our-solutions/customized-training">Customised Solutions</Link></li>
            <li><Link 
            // to="/our-solutions/resource-vault"
            to="/"
            >The Resource Vault</Link></li>
            <li><Link 
            // to="/our-solutions/soft-skills-launchpad"
            to="/"
            >Soft Skills Launchpad  Programme (SSLP)</Link></li>
        </ul>

       
        <ul className="flex flex-col gap-2">
            <h5 className="text-crossFooterText">Resources & Others</h5>
            
            <li><Link to="/blog">Blog </Link></li>
            <li><Link to="/case-studies">Case Studies </Link></li>
            <li><Link to="">Terms of Service </Link></li>
            <li><Link to="/careers">Careers</Link></li>
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
