import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

function Education() {
  return (
    <>
        <div className='max-w-screen-md mx-auto p-5'>
            <h1 className='mb-5 text-3xl text-center font-bold text-[#222222] dark:text-white'>Education</h1>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <div className='w-full mt-5 flex justify-between items-center'>
                            <div className='flex items-center'>
                                <div className='mr-2 border rounded-full'>
                                    <img src="/school-logo.jpeg" alt="collage-logo" className='w-14 h-14 rounded-full'/>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h1 className='font-bold text-lg'>St. Paul Public School</h1>
                                    <p className='text-[#64748B] text-xs '>Intermediate</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#64748B] text-md dark:text-gray-400'>2019-2021</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                    Completed my 12th board examinations with Physics, Chemistry, and Mathematics (PCM) as core subjects, securing 84% from St. Paul.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <div className='w-full mt-5 flex justify-between items-center'>
                            <div className='flex items-center'>
                                <div className='mr-2 border rounded-full'>
                                    <img src="/kit-logo.jpeg" alt="collage-logo" className='w-14 h-14 rounded-full'/>
                                </div>
                                <div className='flex flex-col items-start'>
                                    <h1 className='font-bold text-lg'>Kashi Institute of Technology</h1>
                                    <p className='text-[#64748B] text-xs'>Bachelor of Computer Application</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#64748B] text-md dark:text-gray-400'>2022-2025</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                    Pursuing my final year of BCA at Kashi Institute of Technology, focusing on full-stack web development and building real-world applications.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>

    </>
    
  )
}

export default Education