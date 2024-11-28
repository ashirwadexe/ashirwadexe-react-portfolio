import React, { useState } from 'react'
import { Button } from './ui/button';

const skillsData = {
    frontend: [
        {name: "HTML5", logo: "/html.webp"},
        {name: "JavaScript", logo: "/js.webp"},
        {name: "Tailwind CSS", logo: "/tailwind.png"},
        {name: "React.js", logo: "/reactjs.png"},
        {name: "TypeScript", logo: "/typescript.png"},
        {name: "Next.js", logo: "/next.png"},
    ],
    backend: [
        {name: "Node.js", logo: "/node.png"},
        {name: "Express.js", logo: "/express.png"},
        {name: "MongoDB", logo: "/mongodb.png"},
        {name: "SQL", logo: "sql.webp"},
    ],
    others: [
        {name: "Git", logo: "git.webp"},
        {name: "GitHub", logo: "github.webp"},
        {name: "VS Code", logo: "vscode.webp"},
        {name: "Clerk", logo: "cleark.png"},
    ]
}

function Skills() {
  const [category, setCategory] = useState("frontend");
  return (
    <>
      <div className='max-w-screen-md mx-auto p-5 flex flex-col items-center'>
        <h1 className='text-3xl font-bold mb-5'>Skills</h1>
        <div className='border py-2 px-5 flex items-center justify-evenly rounded-full w-[60%]'>
            <Button
              onClick={() => setCategory("frontend")}
              className={`rounded-full font-bold hover:bg-sky-500 hover:text-white ${
                category === "frontend" ? "bg-sky-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Frontend
            </Button>
            <Button
              onClick={() => setCategory("backend")}
              className={`rounded-full font-bold hover:bg-sky-500 hover:text-white ${
                category === "backend" ? "bg-sky-400 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Backend
            </Button>
            <Button
              onClick={() => setCategory("others")}
              className={`rounded-full font-bold hover:bg-sky-500 hover:text-white ${
                category === "others" ? "bg-sky-400 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Tools
            </Button>
        </div>


        {/* //display skills */}
        <div className='grid grid-cols-3 gap-12 p-10'>
          {
            skillsData[category].map((skill) => (
              <div key={skill.name} className='flex flex-col items-center'>
                  <div className='bg-gray-200 dark:bg-gray-800 rounded-full h-20 w-20 flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-lg'>
                    <img src={skill.logo} alt={skill.name} className="w-14 h-14" />
                  </div>
                  <span className='font-medium text-sm mt-2'>{skill.name}</span>
              </div>
            ))
          }
        </div>


      </div>
    </>
  )
}

export default Skills