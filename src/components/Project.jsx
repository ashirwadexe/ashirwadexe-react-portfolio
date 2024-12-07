import React from 'react'
import ShimmerButton from './ui/shimmer-button'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { GithubIcon, Globe } from 'lucide-react'

const projectData = [
    {
        id: 1,
        title: 'JobHunt',
        description: 'JobHunt is a job search platform with role-based access for users and recruiters. 👤 Users can search & apply for jobs, track applications, and update profiles. 🏢 Recruiters can post jobs, manage applications, and create company profiles — all with secure authentication and a user-friendly interface.✨',
        image: '/Project/Screenshot 2024-12-07 125030.png',
        techStack: ['NodeJS', 'Express', 'MongoDB', 'ReactJS', 'Cloudinary', 'ShadCN', 'Framer Motion', 'Redux'],
        liveLink: 'https://jobhunt-live-link.com',
        githubLink: 'https://github.com/yourusername/jobhunt'
    },
    {
        id: 2,
        title: 'ashirwadexe',
        description: 'A sleek, personal portfolio website to showcase projects, skills, and contact information. Built with React, Tailwind CSS, and hosted on Vercel.✨',
        image: '/Project/Screenshot 2024-12-07 125030.png',
        techStack: ['ReactJS', 'Tailwind CSS', 'ShadCN', 'Context API', 'Vercel'],
        liveLink: 'https://your-portfolio-link.com',
        githubLink: 'https://github.com/yourusername/portfolio'
    }
]



function Project() {
  return (
    <div className='max-w-screen-md mx-auto px-5 py-3 sm:p-5 flex items-center justify-center flex-col'>
        <ShimmerButton className="sm:py-2 py-1 sm:px-8 px-5 font-bold dark:text-white">Project</ShimmerButton>
        <h1 className='sm:text-5xl text-3xl font-bold sm:p-3 p-2 mt-3 text-[#222} text-center'>Check out my latest work</h1>
        <p className='text-center text-[#727272] sm:text-lg text-md sm:mx-10'>I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
        
        {/* Project-card */}
        <div className='grid sm:grid-cols-2 sm:p-10 p-5 gap-5 mt-5'>
            {
                projectData.map((project) => (
                    <div key={project.id} className='border border-[#727272] rounded-xl shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                        <img className='rounded-tl-xl rounded-tr-xl' src={project.image} alt="" />
                        <div className='flex flex-col gap-4 p-2'>
                            <h2 className='font-bold text-lg'>{project.title}</h2>
                            <p className='text-muted-foreground text-xs font-semibold'>{project.description}</p>

                            <div className='flex flex-wrap gap-1'>
                                {
                                    project.techStack.map((tech, index) => (
                                        <Badge key={index} className="dark:bg-[#262626] dark:text-white font-bold " variant="secondary">{tech}</Badge>
                                    ))
                                }
                            </div>

                            <div className='flex gap-3'>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-[#222] dark:bg-white text-white dark:text-[#222]" variant="outline">
                                        <Globe /> Live
                                    </Button>
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-[#222] dark:bg-white text-white dark:text-[#222]" variant="outline">
                                        <GithubIcon /> GitHub
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default Project