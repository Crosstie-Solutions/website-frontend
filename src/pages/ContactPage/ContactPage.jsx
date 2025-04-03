import React from 'react'
import ContactHero from '../../components/ContactHero/ContactHero'
import ContactForm from '../../components/ContactForm/ContactForm'

function ContactPage() {
  return (
    <div className="relative flex flex-col items-center justify-start large:mt-13 text-15px large:w-100vw large:h-auto small:w-100vw small:h-auto small:mt-13">
      <ContactHero />
      <ContactForm />
    </div>
  )
}

export default ContactPage
