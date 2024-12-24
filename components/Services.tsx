import React from 'react'
import ServiceDesktop from './ServiceDesktop'

const Services = () => {
  return (
    <div id='services' className='flex flex-col justify-center items-center h-max'>
      <h1 className='text-5xl mb-2 xl:mb-0 xl:text-7xl font-bold text-[#d9d9d9]'>Area of<span className='text-purple'>Experties</span></h1>
      <ServiceDesktop />
    </div>
  )
}

export default Services
