import React from 'react'
import { PHOTOS } from '../../assets/images'

function CaseSudyDetailsPage() {
  return (
    <div className='flex flex-col items-center h-auto w-100vw'>
      <div className='flex flex-col items-start h-auto w-100'>
        <img src={PHOTOS.case} alt="image" className='h-auto w-100'/>

        <div>
            <div>Case Studies</div>
            <div>Why people get pregnant</div>
            <div>By Canny Okpoto | May 28, 2025</div>
        </div>
      </div>


    </div>
  )
}



export default CaseSudyDetailsPage;
