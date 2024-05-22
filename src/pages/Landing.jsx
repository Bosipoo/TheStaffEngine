import React from 'react'
import Topbar from '../components/Topbar'
import MainLayout from '../components/MainLayout'
import Carousel from '../components/Carousel'
import Forms from '../components/TabbedForm'

const Landing = () => {
  return (
    <div className="overflow-hidden">
      {/* <Topbar />
      <div className='bg-purple-600' style={{ width: '100vw' }}>
        <h1>Trial</h1>
      </div>
      <div className="mx-auto max-w-screen-xl px-4">
        <Carousel />
        <Forms />
      </div> */}
      
      <Forms />
    </div>
  )
}

export default Landing