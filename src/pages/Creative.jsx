import React from 'react';

export default function Creative() {
    return (
        <section className="relative min-h-screen bg-[#050505] py-20 px-4 flex items-center justify-center pt-32">
            <div className="max-w-6xl mx-auto w-full animate-fadeIn">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
                    Creative <span className="text-red-500">Portfolio</span>
                </h2>

                <div className="text-center mb-16">
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Capturing moments and telling stories through the lens. As a member of <span className="text-red-500 font-semibold">Shutterbugs</span>, the Official Media Club of MITWPU, I explore the art of visual storytelling.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-red-500 mb-4">Photography</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Specializing in event coverage, portraits, and street photography. I believe in freezing time to preserve the emotions and atmosphere of a moment.
                        </p>
                        <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center mb-4 overflow-hidden group">
                            <span className="text-6xl group-hover:scale-110 transition-transform duration-300">📸</span>
                        </div>
                    </div>

                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-red-500 mb-4">Videography</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Creating cinematic experiences through cinematography and editing. From event after-movies to creative short films.
                        </p>
                        <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center mb-4 overflow-hidden group">
                            <span className="text-6xl group-hover:scale-110 transition-transform duration-300">🎥</span>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a
                        href="https://kaushiv.github.io/shutterbugs/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-red-500 hover:bg-red-400 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        View Shutterbugs Gallery
                    </a>
                    <p className="mt-4 text-gray-400 text-sm">
                        Check out our official club website for more work.
                    </p>
                </div>
            </div>
        </section>
    );
}
