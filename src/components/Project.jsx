import React from 'react'
import ShimmerButton from './ui/shimmer-button'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { GithubIcon, Globe } from 'lucide-react'

const projectData = [
    {
        id: 1,
        title: 'Resumify',
        description: 'Resumify is an AI-powered resume builder that allows users to create, edit, manage, and download ATS-friendly resumes with modern templates. It features secure JWT authentication, real-time preview, and multi-template support for professional resume creation. 🚀',
        image: '/Project/resumify.png',
        techStack: [
            'ReactJS',
            'NodeJS',
            'Express',
            'MongoDB',
            'JWT',
            'Tailwind CSS',
            'PrebuiltUI',
            'Redux Toolkit',
            'Render',
            'Netlify'
        ],
        liveLink: 'https://resumify-ashirwad.netlify.app/',
        githubLink: 'https://github.com/ashirwadexe/Resumify.git'
    },
    {
        id: 2,
        title: 'JobHunt',
        description: 'JobHunt is a job search platform with role-based access for users and recruiters. 👤 Users can search & apply for jobs, track applications, and update profiles. 🏢 Recruiters can post jobs, manage applications, and create company profiles — all with secure authentication and a user-friendly interface.✨',
        image: '/Project/jobhunt.png',
        techStack: [
            'NodeJS',
            'Express',
            'MongoDB',
            'ReactJS',
            'Cloudinary',
            'ShadCN',
            'Framer Motion',
            'Redux'
        ],
        liveLink: 'https://jobhunt-live-link.com',
        githubLink: 'https://github.com/ashirwadexe/JobHunt.git'
    },
    {
        id: 3,
        title: 'ashirwadexe',
        description: 'A sleek, personal portfolio website to showcase projects, skills, and contact information. Built with React, Tailwind CSS, and hosted on Vercel.✨',
        image: '/Project/ashirwad-portfolio.png',
        techStack: [
            'ReactJS',
            'Tailwind CSS',
            'ShadCN',
            'Context API',
            'Vercel'
        ],
        liveLink: '#',
        githubLink: 'https://github.com/ashirwadexe/ashirwadexe-react-portfolio.git'
    },
    {
        id: 4,
        title: 'Placement Bro',
        description: 'A full-stack MERN application designed to help colleges track student placements efficiently. The app features a robust admin panel that allows authorized users to manage and monitor student placement records seamlessly 🥳🚀',
        image: '/Project/placementbro.png',
        techStack: [
            'Node.js',
            'Express',
            'MongoDB',
            'React.js',
            'Cloudinary',
            'ShadCN',
            'Framer Motion',
            'Context API'
        ],
        liveLink: '#',
        githubLink: 'https://github.com/ashirwadexe/Placement-Tracker.git'
    },
];


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