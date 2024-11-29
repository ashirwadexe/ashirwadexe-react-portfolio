import React, { useState } from "react";
import { Button } from "./ui/button";

const skillsData = {
    frontend: [
        { name: "HTML5", logo: "/html.webp" },
        { name: "JavaScript", logo: "/js.webp" },
        { name: "Tailwind CSS", logo: "/tailwind.png" },
        { name: "React.js", logo: "/reactjs.png" },
        { name: "TypeScript", logo: "/typescript.png" },
        { name: "Next.js", logo: "/next.png" },
    ],
    backend: [
        { name: "Node.js", logo: "/node.png" },
        { name: "Express.js", logo: "/express.png" },
        { name: "MongoDB", logo: "/mongodb.png" },
        { name: "SQL", logo: "/sql.webp" },
    ],
    others: [
        { name: "Git", logo: "/git.webp" },
        { name: "GitHub", logo: "/github.webp" },
        { name: "VS Code", logo: "/vscode.webp" },
        { name: "Clerk", logo: "/cleark.png" },
    ],
};

function Skills() {
    const [category, setCategory] = useState("frontend");

    return (
        <div className="max-w-screen-md mx-auto p-5 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-5 text-gray-900 dark:text-gray-50">Skills</h1>

            {/* Skill Category Buttons */}
            <div className="border py-2 px-5 flex items-center justify-evenly rounded-full w-full sm:w-[60%]">
                {["frontend", "backend", "others"].map((cat) => (
                    <Button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        aria-label={`Show ${cat} skills`}
                        className={`rounded-full font-bold px-4 py-2 sm:px-5 sm:py-3 transition-colors duration-300 ${
                            category === cat
                                ? "bg-sky-500 text-white"
                                : "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                        } hover:bg-sky-500 hover:text-white`}
                    >
                        {cat === "frontend" ? "Frontend" : cat === "backend" ? "Backend" : "Tools"}
                    </Button>
                ))}
            </div>

            {/* Display Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 p-5 sm:p-10">
                {skillsData[category].map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center">
                        <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-20 w-20 flex justify-center items-center transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                            <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                className="w-14 h-14"
                                loading="lazy"
                            />
                        </div>
                        <span className="font-medium text-sm mt-2 text-gray-700 dark:text-gray-300">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
