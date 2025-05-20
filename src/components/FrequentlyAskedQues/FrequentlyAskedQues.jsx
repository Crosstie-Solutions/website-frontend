import React, { useState } from "react";
import { MdOutlineStorage } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { PiGavelLight } from "react-icons/pi";
import { CiGift } from "react-icons/ci";
import { BsTools } from "react-icons/bs";
import { BsFillQuestionDiamondFill } from "react-icons/bs";



const FrequentlyAskedQues = () => {
  const faqs = [
    {
      question: "Q1: Is the Crosstie EDGE Program really free?",
      answer:
        "A: Yes. It is 100% free for selected graduates. But spaces are competitive and extremely limited.",
    },
    {
      question: "Q2: Who is eligible to apply?",
      answer:
        "A: Nigerian graduates (First-Class, 2:1, or strong 2:2), NYSC members (serving or completed), and ambitious early-career professionals.",
    },
    
    {
      question: "Q3: Will I receive a certificate?",
      answer:
        " A: Absolutely. Graduates receive a prestigious Soft Skills Certification from Crosstie Solutions.",
    },
    
    {
      question: "Q4: How long does the program last?",
      answer: "A: 30 days of focused, immersive, high-impact training.",
    },
    {
      question: "Q5: When does enrollment open?",
      answer:
        "A: Very soon. Seats fill fast. Stay alert.",
    },

    {
      question: "Q6: How many people will be accepted?",
      answer:
        "A: Only a select few. We keep class sizes tight to ensure quality and employer access.",
    },

    {
      question: "Q7: What if my degree isn’t First-Class or 2:1?",
      answer:
        "A: Strong 2:2 graduates with demonstrated potential are welcome to apply.",
    },
  ];



  
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };


  
  
  return (
    <div className="flex flex-col items-center h-auto gap-2 bg-white small:p-1 large:p-3 large:w-100 text-15px rounded-5 small:w-90vw">
        
      <div className="flex items-center justify-start h-auto gap-3 w-100">
        <BsFillQuestionDiamondFill className="p-1 text-white rounded-full bg-crossLightPurple text-40px"/>
      
        <h1 className="font-bold text-center text-crossLightPurple"> Frequently Asked Questions</h1>
      </div>
      
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=""
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-center w-full gap-2 text-left text-black"
            >
                {/* <FaRegFileAlt className="text-20px"/> */}
                
              <p className="large:w-70 small:w-80 text-crossTextGray">{faq.question}</p>
              
              <span
                className={`transform transition-transform duration-300 cursor-pointer ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {activeIndex === index ? <FiMinus className="text-30px"/> : <GoPlus className="text-30px"/>}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="px-4 py-3 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export { FrequentlyAskedQues };
