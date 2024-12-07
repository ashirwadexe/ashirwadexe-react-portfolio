import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

function Education() {
    return (
        <div className="max-w-screen-md mx-auto p-4 sm:p-6">
            <h1 className="sm:mb-5 text-3xl sm:text-3xl text-center font-bold text-[#222222] dark:text-white">
                Education
            </h1>

            <Accordion type="single" collapsible>
                {/* Intermediate Education */}
                <AccordionItem value="intermediate">
                    <AccordionTrigger>
                        <div className="w-full mt-5 flex flex-wrap justify-between items-center">
                            <div className="flex items-center">
                                <div className="mr-2 sm:mr-3 border rounded-full overflow-hidden logo">
                                    <img
                                        src="/school-logo.jpeg"
                                        alt="St. Paul Public School logo"
                                        className="w-8 h-8 sm:w-14 sm:h-14"
                                    />
                                </div>
                                <div className="flex flex-col items-start">
                                    <h1 className="font-bold text-sm sm:text-lg">St. Paul Public School</h1>
                                    <p className="text-[#64748B] text-xs sm:text-sm">Intermediate</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#64748B] text-xs sm:text-md dark:text-gray-400">
                                    2019-2021
                                </p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        Completed my 12th board examinations with Physics, Chemistry, and Mathematics (PCM) as core
                        subjects, securing 84% from St. Paul Public School.
                    </AccordionContent>
                </AccordionItem>

                {/* BCA Education */}
                <AccordionItem value="bca">
                    <AccordionTrigger>
                        <div className="w-full mt-5 flex flex-wrap justify-between items-center">
                            <div className="flex items-center">
                                <div className="mr-2 sm:mr-3 border rounded-full overflow-hidden logo">
                                    <img
                                        src="/kit-logo.jpeg"
                                        alt="Kashi Institute of Technology logo"
                                        className="w-8 h-8 sm:w-14 sm:h-14"
                                    />
                                </div>
                                <div className="flex flex-col items-start">
                                    <h1 className="font-bold text-sm sm:text-lg">KIT, Varanasi</h1>
                                    <p className="text-[#64748B] text-xs sm:text-sm">BCA</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#64748B] text-xs sm:text-md dark:text-gray-400">
                                    2022-2025
                                </p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        Pursuing my final year of BCA at Kashi Institute of Technology, focusing on full-stack web
                        development and building real-world applications.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Education;
