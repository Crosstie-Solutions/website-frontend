import React from 'react'
import TopBar from '../TopBar/TopBar'
import Header from '../Header/Header'

function HeaderWrapper() {
  return (
    <header className='fixed top-0 left-0 z-20 flex flex-col items-center justify-between h-auto border w-100vw text-15px border-t-crossDarkPurple'>
      <TopBar />
      <Header />
    </header>
  )
}

export default HeaderWrapper
