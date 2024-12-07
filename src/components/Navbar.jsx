import { useTheme } from '@/context/ThemeProvider'
import { FileUser, MoonStar, Sun } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';

function Navbar() {

    const {theme, toggleTheme} = useTheme();
    return (
        <div className='max-w-screen-md mx-auto px-5 py-3 sm:p-5 flex items-center justify-between '>
            <div onClick={toggleTheme} className='hover:cursor-pointer'>
                {
                    theme === "dark" ? <Sun className=' text-white transform transition-transform duration-300 hover:scale-110 hover:shadow-lg'/> : <MoonStar className='transform transition-transform duration-300 hover:scale-110 hover:shadow-lg' />
                }
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1cLzIYbQONICu6-JWMAocl7UktRYmhLZD/view?usp=drive_link" target='blank'><Button className=" bg-sky-400 text-white hover:bg-sky-500 hover:text-white dark:bg-sky-400 dark:text-white rounded-full transform transition-transform duration-300 hover:scale-110 hover:shadow-lg px-3 py-4 text-sm sm:px-5 sm:py-4"><FileUser />Resume</Button></a>
            </div>
        </div>
    )
}

export default Navbar