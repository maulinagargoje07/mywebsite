import React from 'react';

export default function About() {
    return (
        <section className="relative min-h-screen bg-[#050505] py-20 px-4 flex items-center justify-center pt-32">
            <div className="max-w-6xl mx-auto w-full animate-fadeIn">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 text-center">
                    About <span className="text-red-500">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-red-500 mb-4">The Engineer</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I am a Computer Science undergraduate at MIT World Peace University with a focus on software development, data structures, and algorithms. I bridge the gap between engineering and art; while I build scalable web applications using React and Node.js, I also specialize in 3D web experiences using Three.js.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            My goal is to make a meaningful impact through technology while leveraging my background in photography to create visually stunning digital interfaces.
                        </p>
                    </div>

                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-red-500 mb-4">Achievements</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">🏆</span>
                                <div>
                                    <strong className="text-white">Research Publication:</strong> Published a paper on "Budget Transparency and Accountability Platform" (April 2024).
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">🚀</span>
                                <div>
                                    <strong className="text-white">Hackathons:</strong> HackMITWPU '25 (Organizer), Internal SIH '24, Innovision '23.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">📜</span>
                                <div>
                                    <strong className="text-white">Certifications:</strong> 100 Days of Code (Python), Cyber Security Workshop, AI/ML Automation (BSDU).
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
