import React from 'react';
import Hero from '../../components/Hero/Hero';
import OurSolutions from '../../components/OurSolutions/OurSolutions';
import OurReach from '../../components/OurReach/OurReach';
import OurClients from '../../components/OurClients/OurClients';
import OurFeedbacks from '../../components/OurFeedbacks/OurFeedbacks';
import OurInsights from '../../components/OurInsights/OurInsights';


function HomePage() {
  return (
    <div className='flex flex-col items-center h-auto mt-13 gap-7 w-100vw'>
      <Hero />
      <OurSolutions />
      <OurReach />
      <OurClients />
      <OurFeedbacks/>
      <OurInsights/>
    </div>
  )
}

export default HomePage
