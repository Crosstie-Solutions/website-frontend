import React from 'react'
import { Link } from 'react-router-dom'

function ConditionsPage() {
  return (
    <div className='large:mt-20 large:w-83vw bg-white small:px-1 large:px-2 py-3 flex flex-col items-start gap-2 h-auto text-crossTextGray small:mt-12'>
      <h2 className='large:text-30px font-semibold text-black small:text-20px'>Terms and Conditions (User Agreement)</h2>

      <div className='w-100 h-auto flex flex-col large:gap-3 small:gap-2'>

        <div className='flex flex-col w-100 h-auto gap-1'>
            
            <p className='italic'>Last updated: May 6, 2025</p>

            <p><span className="font-semi-bold">Welcome to Crosstie Solutions</span> ("we", "us", "our"). By accessing or using our website <Link to="/" className='text-crossBlue underline'>www.crosstiesolutions.com</Link> (the “Site”) and our services, you ("you", "user", "client") agree to comply with and be bound by the following Terms and Conditions.</p>

            <p>Please read this agreement carefully before using our services.</p>
        </div>
        


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>1. Use of Our Services</h3>
            
            <p>You agree to use our services only for lawful purposes and in accordance with these terms. You may not use the Site:</p>

            <ul className='list-disc large:pl-2 small:pl-1'>
              <li>For any unlawful purpose or in violation of any applicable laws or regulations</li>
              <li>To infringe on the rights of others</li>
              <li>To upload malicious software or otherwise interfere with the functionality of the Site</li>
            </ul>
        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>2. Eligibility</h3>
            
            <p>You must be at least 18 years old or have legal capacity to enter into a binding agreement in your jurisdiction. By using our services, you represent that you meet these requirements.</p>

        </div>

        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>3. Services Provided</h3>
            
            <p>Crosstie Solutions offers professional <span className="font-semibold">training and management consulting services.</span> The specific terms of individual services may be outlined in separate contracts or proposals.</p>

            <p>We reserve the right to modify or discontinue our services at any time without notice.</p>

        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>4. Payment Terms</h3>
            
            <p>If you purchase any of our paid services:</p>

            <ul className='list-disc large:pl-2 small:pl-1'>
              <li>You agree to provide accurate payment information</li>
              <li>Payment must be made in full before services are rendered (unless otherwise agreed)</li>
              <li>All transactions are processed through secure third-party payment processors</li>
            </ul>

            <p>We are not responsible for errors by third-party processors.</p>
        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>5. Intellectual Property</h3>
            
            <p>All content on this Site, including text, graphics, logos, and service descriptions, is the intellectual property of Crosstie Solutions or its licensors and is protected by applicable copyright and trademark laws.</p>

            <p>You may not reproduce, distribute, or exploit any part of the Site without prior written permission.</p>
        </div>

        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>6. Limitation of Liability</h3>
            
            <p>To the maximum extent permitted by law, Crosstie Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from:</p>

            <ul className='list-disc large:pl-2 small:pl-1'>
              <li>The use or inability to use our services</li>
              <li>Errors or inaccuracies in service content</li>
              <li>Unauthorised access to your data</li>
            </ul>

            <p>Our total liability for any claim shall not exceed the amount paid by you for the services in question.</p>
        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>7. User Accounts and Data</h3>
            
            <p>When you submit information through forms on the Site (e.g., contact or enquiry forms), you agree that:</p>

            <ul className='list-disc large:pl-2 small:pl-1'>
              <li>All information provided is accurate and up to date</li>
              <li>You are responsible for the data you submit</li>
              <li>You consent to our processing of your data in line with our Privacy Policy</li>
            </ul>

        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>8. Termination</h3>
            
            <p>We reserve the right to suspend or terminate your access to the Site and our services at our discretion, without notice, if we believe you have violated these Terms.</p>

        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>9. Third-Party Links</h3>
            
            <p>Our Site may contain links to third-party websites. We are not responsible for the content, terms, or privacy practices of these external sites.</p>

        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>10. Governing Law</h3>
            
            <p>These Terms shall be governed by and construed in accordance with the laws of the Federal Competition and Consumer Protection Act (FCCPA). Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts in that jurisdiction.</p>

        </div>




        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>11. Changes to These Terms</h3>
            
            <p>We may update these Terms from time to time. Changes will be posted on this page with an updated revision date. Your continued use of the Site indicates acceptance of the updated Terms.</p>

        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>12. Contact Us</h3>
            
            <p>If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact:</p>

            <div>
              <h3 className='font-semibold text-black'>Crosstie Solutions</h3>
              <p>Email: (enquiries@crosstiesolutions.com)</p>
              <p>Website: <Link to="/" className='text-crossBlue underline'>www.crosstiesolutions.com</Link></p>
            </div>
        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>13. Acceptance of Terms</h3>
            
            <p>By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>

        </div>



      </div>
    </div>
  )
}

export default ConditionsPage
