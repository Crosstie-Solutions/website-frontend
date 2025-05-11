import React from 'react'
import { Link } from 'react-router-dom'

function PrivacyPage() {
  return (
    <div className='large:mt-20 large:w-83vw bg-white small:px-1 large:px-2 py-3 flex flex-col items-start gap-2 h-auto text-crossTextGray small:mt-12'>

      <h2 className='large:text-30px font-semibold text-black small:text-25px'>Privacy Policy</h2>

      <div className='w-100 h-auto flex flex-col large:gap-3 small:gap-2'>

        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>FREE Protection. FULL Transparency. At Your Control</h3>
            
            <p>Understand how we collect, use, and safeguard your data, clearly outlined for your peace of mind. Your privacy matters, and you are in charge.</p>

            <p className='italic'>Last updated: May 6, 2025</p>

            <p>Crosstie Solutions ("we", "our", or "us") is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store, and share your information when you visit our website at <Link to="/" className='text-crossBlue underline'>www.crosstiesolutions.com</Link> or use our services.</p>
        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>1. Who We Are</h3>
            
            <p>Crosstie Solutions provides training and management consulting services. This Privacy Policy applies when you use our services. We process personal data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the Nigeria Data Protection Regulation (NDPR).</p>
        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>2. What Data We Collect</h3>
            
            <p>We may collect the following personal data from users:</p>

            <ul className='list-disc large:pl-2 small:pl-1'>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment information (e.g., card details via secure processors)</li>
              <li>Portfolio or professional information</li>
              <li>IP address and browsing data (via Google Analytics)</li>
            </ul>
        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>3. How We Use Your Data</h3>
            
            <p>We collect and process your data for the following purposes:</p>

            <ul className='list-disc large:pl-2 small:pl-1'>
              <li>To provide and manage our consulting and training services</li>
              <li>To respond to enquiries or customer support requests</li>
              <li>To process payments and issue invoices</li>
              <li>To send marketing communications via Mailchimp (if you opt-in)</li>
              <li>To analyse website performance and usage (via Google Analytics)</li>
            </ul>
        </div>

        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>4. Legal Basis for Processing</h3>
            
            <p>We process your personal data on one or more of the following legal bases:</p>

            <ul className='list-disc large:pl-2 small:pl-1'>
              <li><span className="font-semibold text-black">Consent:</span> When you opt in to receive marketing communications</li>
              <li><span className="font-semibold text-black">Contract:</span> When we need to fulfil a service you've requested</li>
              <li><span className="font-semibold text-black">Legitimate Interest:</span> For analytics, improving services, and security</li>
              <li><span className="font-semibold text-black">Legal Obligation:</span> For financial, tax, and compliance purposes</li>
            </ul>
        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>5. Consent and Your Rights</h3>
            
            <p>We collect your data only when you provide clear consent, such as filling out an opt-in form.</p>

            <p>We collect your data only when you provide clear consent, such as filling out an opt-in form.</p>

            <ul className='list-disc large:pl-2 small:pl-1'>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request the deletion of your data</li>
              <li>Lodge a complaint with a Data Protection Authority</li>
            </ul>

            <p><span className="font-semibold text-black">Note:</span> Currently, users cannot directly access or modify their submitted data through the website. However, you can request changes or deletion by contacting us at <span className="font-semibold text-black">(enquiries@crosstiesolutions.com)</span></p>
        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>6. Third-Party Sharing</h3>
            
            <p>We share your data only when necessary, and with trusted partners:</p>

            <p>We collect your data only when you provide clear consent, such as filling out an opt-in form.</p>

            <ul className='list-disc large:pl-2 small:pl-1'>
              <li><span className="font-semibold text-black">Mailchimp</span> (email marketing provider)</li>
              <li><span className="font-semibold text-black">Payment processors</span> (e.g., Stripe, PayPal if applicable)</li>
              <li><span className="font-semibold text-black">Google Analytics</span> (for anonymised site usage tracking)</li>
              
            </ul>

            <p>All third parties are contractually obligated to process your data securely and in compliance with GDPR and NDPR.</p>
        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>7. Data Security</h3>
            
            <p>We take appropriate technical and organisational measures to protect your personal data:</p>

            <ul className='list-disc large:pl-2 small:pl-1'>
              <li>SSL (Secure Socket Layer) encryption for secure connections</li>
              <li>Access control measures to restrict data access internally</li>
              <li>Use of reputable third-party tools with strong security protocols</li>
            </ul>

            <p>All third parties are contractually obligated to process your data securely and in compliance with GDPR and NDPR.</p>
        </div>

        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>8. International Data Transfers</h3>
            
            <p>Some of our service providers (e.g., Mailchimp, Google) may transfer your data outside your Economic Area. In such cases, we ensure that appropriate safeguards are in place, such as Standard Contractual Clauses or equivalent mechanisms.</p>

        </div>


        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>9. Communications</h3>
            
            <p>We will contact you through email, mobile phone, notices posted on our websites or apps, and other ways through our services, including text messages. We will send you messages about the availability of our services, security, or other service-related issues. We also send messages about how to use our services, updates, reminders, and promotional messages from us and our partners.</p>
        </div>

        <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>10. Data Retention</h3>
            
            <p>We only retain personal data for as long as necessary for the purposes outlined in this policy, unless a longer retention period is required by law (e.g., tax regulations).</p>
        </div>


         <div className='flex flex-col w-100 h-auto gap-1'>
            <h3 className='font-semibold text-black'>11. Updates to This Policy</h3>
            
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to check back regularly to stay informed.</p>
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


      </div>
    </div>
  )
}

export default PrivacyPage
