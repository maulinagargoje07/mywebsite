import React from 'react';

export default function Contact() {
    return (
        <section className="relative min-h-screen bg-[#050505] py-20 px-4 flex items-center justify-center pt-32">
            <div className="max-w-4xl mx-auto w-full text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                    Let's <span className="text-red-500">Connect</span>
                </h2>

                <p className="text-xl text-gray-300 mb-12">
                    Have a project in mind or just want to chat? Feel free to reach out!
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <a
                        href="mailto:nagargojemauli10@gmail.com"
                        className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/50 hover:transform hover:scale-105 transition-all duration-300"
                    >
                        <div className="text-red-500 text-3xl mb-2">✉️</div>
                        <p className="text-gray-300 text-sm">nagargojemauli10@gmail.com</p>
                    </a>

                    <a
                        href="tel:+917499523693"
                        className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/50 hover:transform hover:scale-105 transition-all duration-300"
                    >
                        <div className="text-red-500 text-3xl mb-2">📱</div>
                        <p className="text-gray-300 text-sm">+91 7499523693</p>
                    </a>

                    <a
                        href="https://linkedin.com/in/mauli10/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/50 hover:transform hover:scale-105 transition-all duration-300"
                    >
                        <div className="text-red-500 text-3xl mb-2">🔗</div>
                        <p className="text-gray-300 text-sm">LinkedIn Profile</p>
                    </a>
                </div>

                <div className="flex gap-4 justify-center">
                    <a
                        href="https://github.com/maulinagargoje07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-red-500 hover:bg-red-400 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        View GitHub
                    </a>
                    <a
                        href="https://maulinagargoje.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                        Portfolio Site
                    </a>
                </div>
            </div>
        </section>
    );
}
