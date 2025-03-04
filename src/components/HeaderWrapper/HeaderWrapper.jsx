import React from 'react'
import TopBar from '../TopBar/TopBar'
import Header from '../Header/Header'

function HeaderWrapper() {
  return (
    <header className='flex flex-col items-center h-auto border w-100vw text-15px'>
      <TopBar />
      <Header />
    </header>
  )
}

export default HeaderWrapper
