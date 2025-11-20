import React from 'react';

export default function Experience() {
    const experiences = [
        {
            role: "Software Developer",
            company: "VidyarthiMitra, Pune",
            period: "May 2024 – Nov 2025",
            description: "Led the tech team, managing software development tasks and timelines. Developed and deployed an E-paper software portal, significantly improving portal performance and usability.",
            icon: "🚀"
        },
        {
            role: "Frontend Web Developer",
            company: "RebootCS, Pune",
            period: "Jan 2024 – Jun 2025",
            description: "Built 3D interactive websites using Three.js. Delivered client projects collaborating with cross-functional teams. Implemented responsive and user-friendly UI components.",
            icon: "💼"
        }
    ];

    return (
        <section className="relative min-h-screen bg-[#050505] py-20 px-4 flex items-center justify-center pt-32">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
                    Professional <span className="text-red-500">Experience</span>
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl">{exp.icon}</div>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                        <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                                        <span className="text-red-500 text-sm mt-1 md:mt-0">{exp.period}</span>
                                    </div>
                                    <p className="text-gray-400 mb-4">{exp.company}</p>
                                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
