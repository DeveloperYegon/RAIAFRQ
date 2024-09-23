import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const year = new Date().getFullYear()
  return (
   <footer className=' bg-[#463F8F] text-white'>
    <hr />
    <div className='flex justify-between m-5'>
      <div className='m-3'> 
        <h1 className="text-xl font-bold">
      <Link to="/">Rai Alliance</Link></h1>
      </div>
      <div className='m-3'>
        <h2>QuickLinks</h2>
        <ul>
          <li>contact</li>
          <li>Patners</li>
          <li> campus ambassadors</li>
        </ul>
      </div>
      <div className='m-3'>
        Ask Anything
      </div>
    </div>
    <hr className='h-1 w-[50%] m-auto' />
        <p className='p-3 font-bold text-center'>&copy; {year} RAI Alliance. All rights are reserved.</p>
   </footer>
  )
}

export default Footer