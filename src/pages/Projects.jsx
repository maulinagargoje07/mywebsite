import React from 'react';

export default function Projects() {
    const projects = [
        {
            title: "Budget Transparency Platform",
            description: "Published research paper on budget accountability. Built a comprehensive platform for transparent budget tracking and analysis.",
            image: "🏛️",
            link: "https://maulinagargoje07-open-datafor-project.vercel.app/",
            tech: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "Amazon Clone",
            description: "Full-featured e-commerce platform with responsive design and modern UI/UX patterns.",
            image: "🛒",
            link: "https://maulinagargoje07.github.io/html-amazon/",
            tech: ["HTML5", "CSS3", "JavaScript"]
        },
        {
            title: "3D Portfolio Website",
            description: "Interactive portfolio with Three.js animations and immersive 3D elements.",
            image: "🌐",
            link: "https://project-css-nine.vercel.app/",
            tech: ["Three.js", "React", "WebGL"]
        },
        {
            title: "Creative Showcase",
            description: "Responsive design showcase featuring modern CSS techniques and animations.",
            image: "✨",
            link: "https://maulinagargoje07.github.io/project-css2/",
            tech: ["CSS3", "HTML5", "JavaScript"]
        }
    ];

    return (
        <section className="relative min-h-screen py-20 px-4 flex items-center justify-center pt-32">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
                    Featured <span className="text-red-500">Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="glass-card rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-300 group"
                        >
                            <div className="p-8">
                                <div className="text-6xl mb-4">{project.image}</div>
                                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-red-500/20 text-red-500 text-xs rounded-full border border-red-500/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-2 bg-red-500 hover:bg-red-400 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
