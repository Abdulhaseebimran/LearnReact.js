import React from 'react'
import BrandLogo from '../assets/logo-img.png'
import '../index.css'

function Logo({width = "100px"}) {
  return (
    <div>
     <h2 className='text-sm font-semibold logo animated py-2'>Blogger</h2>
    </div>
  )
}

export default Logo
