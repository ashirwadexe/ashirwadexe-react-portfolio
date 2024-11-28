import { useTheme } from '@/context/ThemeProvider'
import { Github, InstagramIcon, Linkedin, LinkedinIcon, Mail, Twitter } from 'lucide-react';
import React from 'react'
import { CoolModeDemo } from './CoolModeDemo';

function Hero() {
    const {theme} = useTheme();
  return (
    <>
        <div className='max-w-screen-md mx-auto p-5 pt-0 '>
            <div>
                <img src="/Portfolio-banner.jpg" alt="baner" className='rounded-2xl' />
            </div>
            <div className='mt-8'>
                <div className='flex '>
                    <p className='text-xl font-semibold text-[#222] dark:text-white'>Hi! I'm <span className='text-sky-500 dark:text-sky-400'>Ashirwad Chaurasia</span></p>
                    <img
                        alt="waving-hand"
                        src="/waving-hand.gif" 
                        className="w-[30px] h-[30px] object-contain"
                        decoding="async"
                        loading="lazy"
                    />
                </div>
                
                <h1 className="mt-3 text-5xl font-bold text-gray-900 dark:text-gray-50">I make <span className="text-green-600 dark:text-green-400">full-stack</span> products that people <span className="text-pink-500 dark:text-pink-400">love</span>.</h1>
            </div>
            <div>
                <p className="mt-10 text-md font-semibold text-gray-500 dark:text-gray-300">
                    Hi, I'm a final-year BCA student diving deep into full-stack web development. 
                    I love building beautiful, functional applications. From designing engaging 
                    front-ends to creating solid back-end systems, I enjoy every part of the development process.
                </p>
            </div>
            <div className='flex justify-between items-center'>
                <div className="my-10 flex gap-7">
                    <a
                        className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        href="https://github.com/ashirwadexe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={30} />
                    </a>
                    <a
                        className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        href="https://x.com/ashirwadexe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter size={30} />
                    </a>
                    <a
                        className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        href="https://www.linkedin.com/in/ashirwad-chaurasia-6b3935258/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={30} />
                    </a>
                    <a
                        className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        href="mailto:ashirwadbappy@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Mail size={30} />
                    </a>
                    <a
                        className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
                        href="https://www.instagram.com/ashirwad_bappy/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon size={30} />
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