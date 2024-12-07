import React from 'react'
import ShimmerButton from './ui/shimmer-button'

function Contact() {
  return (
    <div className='max-w-screen-md mx-auto px-5 flex flex-col items-center justify-center py-10'>
        <ShimmerButton className="sm:py-2 py-1 sm:px-8 px-5 font-bold dark:text-white">Contact</ShimmerButton>
        <h1 className='text-4xl sm:text-5xl font-bold mt-3'>Get In Touch</h1>
        <p className='text-center sm:mx-20 p-5 text-[#939393] font-semibold text-lg'> Want to chat? Just shoot me a dm <a className='text-[#3b82f6] hover:underline' href="https://x.com/ashirwadexe" target='_blank'>with a direct question on twitter</a> and I'll respond whenever I can.</p>
    </div>
  )
}

export default Contact