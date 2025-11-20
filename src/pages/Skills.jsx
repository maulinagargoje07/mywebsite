import React from 'react';

export default function Skills() {
    const skills = [
        { category: "Languages", items: ["C++", "Java", "Python", "JavaScript"], icon: "💻" },
        { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Three.js"], icon: "🎨" },
        { category: "Backend & DB", items: ["Node.js", "MySQL", "MongoDB"], icon: "⚙️" },
        { category: "Tools", items: ["Git/GitHub", "VS Code", "Figma"], icon: "🛠️" },
    ];

    return (
        <section className="relative min-h-screen bg-[#0a0a0a] py-20 px-4 flex items-center justify-center pt-32">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
                    Technical <span className="text-red-500">Skills</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/50 hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="text-4xl mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-semibold text-red-500 mb-4">{skill.category}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="text-gray-300 text-sm">• {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
