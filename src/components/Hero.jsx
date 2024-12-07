import { useTheme } from '@/context/ThemeProvider'
import { Github, InstagramIcon, Linkedin, LinkedinIcon, Mail, Twitter } from 'lucide-react';
import React from 'react'
import { CoolModeDemo } from './CoolModeDemo';

function Hero() {
    const {theme} = useTheme();
  return (
    <>
        <div className='max-w-screen-md mx-auto p-5 sm:pt-0 pt-0'>
            <div>
                <img src="/Portfolio-banner.jpg" alt="baner" className='rounded-2xl' />
            </div>
            <div className='sm:mt-8 mt-5'>
                <div className='flex flex-wrap items-center'>
                    <p className='text-xl sm:text-xl font-semibold text-[#222] dark:text-white'>Hi! I'm <span className='text-sky-500 dark:text-sky-400'>Ashirwad Chaurasia</span></p>
                    <img
                        alt="waving-hand"
                        src="/waving-hand.gif" 
                        className="w-[30px] h-[30px] object-contain"
                        decoding="async"
                        loading="lazy"
                    />
                </div>
                
                <h1 className="sm:mt-3 mt-4 sm:text-5xl text-4xl font-bold text-gray-900 dark:text-gray-50">I make <span className="text-green-600 dark:text-green-400">full-stack</span> products that people <span className="text-pink-500 dark:text-pink-400">love</span>.</h1>
            </div>
            <div>
                <p className="sm:mt-10 mt-5 sm:text-md text-md font-semibold text-muted-foreground dark:text-[#727272]">
                    Hi, I'm a final-year BCA student diving deep into full-stack web development. 
                    I love building beautiful, functional applications. From designing engaging 
                    front-ends to creating solid back-end systems, I enjoy every part of the development process.
                </p>
            </div>

            <div className='flex flex-wrap justify-around sm:justify-between items-center gap-10'>
                <div className="sm:my-10 my-4 flex sm:gap-7 gap-4">
                    <a
                        className="text-gray-500 dark:text-[#727272] hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        href="https://github.com/ashirwadexe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="w-7 h-7 sm:w-8 sm:h-8" />
                    </a>
                    <a
                        className="text-gray-500 dark:text-[#727272] hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        href="https://x.com/ashirwadexe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter className="w-7 h-7 sm:w-8 sm:h-8" />
                    </a>
                    <a
                        className="text-gray-500 dark:text-[#727272] hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        href="https://www.linkedin.com/in/ashirwad-chaurasia-6b3935258/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin className="w-7 h-7 sm:w-8 sm:h-8" />
                    </a>
                    <a
                        className="text-gray-500 dark:text-[#727272] hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        href="mailto:ashirwadbappy@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Mail className="w-7 h-7 sm:w-8 sm:h-8" />
                    </a>
                    <a
                        className="text-gray-500 dark:text-[#727272] hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        href="https://www.instagram.com/ashirwad_bappy/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </a>
                </div>
                <div>
                    <CoolModeDemo/>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Hero