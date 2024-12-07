import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-md mx-auto px-5 p-5 flex items-center justify-center'>
        <p className='text-[#727272] font-semibold text-md'>Made with</p>
        <img
            alt="waving-hand"
            src="/moto-honda-honda.gif" 
            className="w-[30px] h-[30px] object-contain"
            decoding="async"
            loading="lazy"
        />
        <p className='text-[#727272] font-semibold text-md'>
        by Ashirwad
        </p>
    </div>
  )
}

export default Footer