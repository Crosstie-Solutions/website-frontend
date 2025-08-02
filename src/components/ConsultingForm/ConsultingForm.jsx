import React, { useContext, useState } from "react";
import { CrossContext } from "../../Context/CrossContext";
import { toast } from "react-toastify";
import axios from "axios";
import { VscClose } from "react-icons/vsc";
import { RiFolderDownloadLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function ConsultingForm(props) {
  const { consultingTitle, cta } = props;

  // const [screen, setScreen] = useState("form");

  const {
    toggleDownloadScreen,
    baseUrl,
    setLoading,
    setDownloadScreen,
    setDownloadProgramScreen,
    togglePresentationDownloadScreen,
    bookService,
  } = useContext(CrossContext);

  //state for download

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nameOfOrg, setNameOfOrg] = useState("");
  const [orgSize, setOrgSize] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

   const nameField = document.getElementById("nameField");
   const emailField = document.getElementById("emailField");
   const nameOfOrgField = document.getElementById("nameOfOrgField");
   const roleField = document.getElementById("roleField");
   const phoneField = document.getElementById("phoneField");
   const messageField = document.getElementById("messageField");

  //funtion for enrollment

  const [contactErrors, setContactErrors] = useState({});

  const bookSession = async () => {
    const validationErrors = {};

    //To ensure valid inputs
    if (!fullName.trim()) {
      validationErrors.fullName = "full name is required";
    }
    if (!email.trim()) {
      validationErrors.email = "email is required";
    }
    if (!phone.trim()) {
      validationErrors.phone = "phone number is required";
    }

    if (!nameOfOrg.trim()) {
      validationErrors.nameOfOrg = "company name is required";
    }

    if (!orgSize.trim()) {
      validationErrors.orgSize = "What is the size of your organization?";
    }

    if (!role.trim()) {
      validationErrors.role = "role is required";
    }

    setContactErrors(validationErrors);

    const noError = Object.keys(validationErrors).length === 0;

    if (noError) {
      try {
        setLoading(true);
        const response = await axios.post(`${baseUrl}/api/consulting`, {
          fullName: fullName,
          email: email,
          phone: phone,
          nameOfOrg: nameOfOrg,
          orgSize: orgSize,
          message: message,
          role: role,
          service: consultingTitle,
        });

        if (response.status === 201) {
          toast.success(
            "Message sent successfully, we will reach out as soon as possible."
          );
          // bookService("exit");
          
          nameField.value = ''
          emailField.value = ''
          nameOfOrgField.value = ''
          roleField.value = ''
          phoneField.value = ''
          messageField.value = ''
        }
      } catch (error) {
        console.log("Error enrolling:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  //split cta

  function splitCtaLeft(sentence) {

    let match = sentence.match(/([^,?]+)([?,])/);
    if (match) {
      return match[1] + match[2];
    } else {
      return sentence; // return original sentence if no comma or question mark found
    }
  }

  function splitCtaRight(sentence) {
    let match = sentence.match(/([^,?]+)([?,])(.*)/);

    if (match) {
      return [match[3].trim()];
    }
  }

  
  //default messages
  const whatsAppMessage = encodeURIComponent(`Hello Crosstie, I have questions about ${consultingTitle}.`);
  const emailMessage = encodeURIComponent(`Hello Crosstie, I have questions about ${consultingTitle}.`);
  const subject = encodeURIComponent(consultingTitle);

  

  return (
    <div className="flex flex-col items-center justify-center py-5 border-t border-black large:w-83vw small:w-90vw h-100">
      {/* form */}

     
        <div className="relative flex flex-col items-center justify-center gap-2 py-3 text-black bg-white shadow-lg rounded-5 large:px-5 large:h-100 large:w-60 small:rounded-5 small:w-90 large:text-15px small:px-1 small:text-13px small:mt-2 large:mt-0">
          {/* <p className="large:w-100 small:w-80 large:text-center small:text-center"> <span className="font-semibold">Not sure where your culture stands?</span> Try our free On-Spot Culture Checker. It is a quick way to see what is working and what might be holding you back.</p> */}

          <p className="large:w-100 small:w-80 large:text-center small:text-center">
            {" "}
            <span className="font-semibold">{splitCtaLeft(cta)}</span>{" "}
            {splitCtaRight(cta)}
          </p>

          <div className="flex items-center h-auto gap-2 pb-3 border-b border-black large:w-100 small:w-100 small:justify-center">
            <a
              target="_blank"
              href={`mailto:training@crosstiesolutions.com?subject=${subject}&body=${emailMessage}`}
              className="flex items-center justify-center w-auto gap-1 px-1 border border-black rounded h-40px"
            >
              <MdOutlineMail className="text-20px" /> Email
            </a>

            <a
              target="_blank"
              href={`https://wa.me/2349160901017?text=${whatsAppMessage}`}
              className="flex items-center justify-center w-auto gap-1 px-1 border border-black rounded h-40px"
            >
              <FaWhatsapp className="text-whatsAppGreen text-20px" /> Whatsapp
            </a>
          </div>

          <div className="flex items-center justify-between h-auto mt-2 w-100">
            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="nameField"
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px"
                onChange={(e) => setFullName(e.target.value)}
              />
              <p className="text-vogueRed">
                {contactErrors && contactErrors.fullName}
              </p>
            </div>

            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="email">Company Email</label>
              <input
                type="email"
                name="email"
                id="emailField"
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-vogueRed">
                {contactErrors && contactErrors.email}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between h-auto w-100">
            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="nameOfOrg">Organization</label>
              <input
                type="text"
                name="nameOfOrg"
                id="nameOfOrgField"
                placeholder="Enter company name"
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
                onChange={(e) => setNameOfOrg(e.target.value)}
              />
              <p className="text-vogueRed">
                {contactErrors && contactErrors.nameOfOrg}
              </p>
            </div>

            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                name="role"
                id="roleField"
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
                placeholder="What is your role in the organization?"
                onChange={(e) => setRole(e.target.value)}
              />
              <p className="text-vogueRed">
                {contactErrors && contactErrors.role}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between h-auto w-100">
            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phoneField"
                placeholder="Enter company name"
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px myField"
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className="text-vogueRed">
                {contactErrors && contactErrors.phone}
              </p>
            </div>

            <div className="flex flex-col items-start h-auto w-45">
              <label htmlFor="role">Company Size</label>

              <select
                name="companySize"
                id=""
                className="pl-1 border rounded border-crossLightPurple w-100 h-40px"
                onChange={(e) => setOrgSize(e.target.value)}
              >
                <option value="">-select-</option>
                <option value="5 - 10">5 - 10</option>
                <option value="10 - 20">10 - 20</option>
                <option value="20 - 30">20 - 30</option>
                <option value="30 - 50">30 - 50</option>
                <option value="30 - 50">50 - 100</option>
                <option value="above 100">Above 100</option>
              </select>
              <p className="text-vogueRed">
                {contactErrors && contactErrors.orgSize}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center h-auto w-100">
            <label htmlFor="message">
              Brief overview of how we can be of help
            </label>
            <textarea
              name="message"
              id="messageField"
              className="pl-1 border rounded h-100px w-100 border-crossLightPurple"
              placeholder="let us know how we can be of help"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            className="flex items-center justify-center text-white border-none rounded h-40px w-100 hover:bg-crossYellow hover:text-crossLightPurple bg-crossLightPurple"
            onClick={bookSession}
          >
            Book Now
          </button>
        </div>
    

      {/* download */}

      {/* {screen==="download" &&
            <div className="flex items-center justify-center bg-white rounded h-150px w-300px">
                <a 
                target="_blank"
                href={downloadUrl}
                className="flex items-center justify-center w-auto gap-2 px-2 text-white rounded bg-crossLightPurple h-40px"
                download="material.pdf"
                >Download Now <RiFolderDownloadLine className="large:text-25px small:text-20px" /></a>
            </div>
        } */}
    </div>
  );
}

export default ConsultingForm;
