import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FluidBackground } from '../components/Backgrounds';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function Home() {
    return (
        <div className="relative w-full">
            {/* Hero Section */}
            <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <FluidBackground />
                    </Canvas>
                </div>

                <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="space-y-6"
                    >
                        <motion.p variants={fadeInUp} className="text-sm md:text-base font-light tracking-[0.3em] text-red-500 uppercase">
                            Software Engineer · Creative Developer
                        </motion.p>

                        <motion.h1 variants={fadeInUp} className="text-7xl md:text-9xl font-bold text-white tracking-tighter">
                            MAULI<br />NAGARGOJE
                        </motion.h1>

                        <motion.div variants={fadeInUp} className="pt-8">
                            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                                Crafting digital experiences that blend <span className="text-red-500">engineering logic</span> with <span className="text-orange-500">visual artistry</span>.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm tracking-widest uppercase animate-bounce"
                >
                    Scroll to Explore
                </motion.div>
            </section>

            {/* About Teaser */}
            <section className="min-h-[80vh] bg-[#050505] flex items-center py-20 px-4 relative z-10">
                <div className="max-w-6xl mx-auto w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-white mb-8">
                                The <span className="text-red-500">Story</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-xl text-gray-400 leading-relaxed mb-8">
                                I am a Computer Science undergraduate at MIT World Peace University, bridging the gap between code and creativity. My journey involves building scalable web applications and immersive 3D experiences.
                            </motion.p>
                            <motion.div variants={fadeInUp}>
                                <Link to="/about" className="inline-block border-b-2 border-red-500 text-white pb-1 hover:text-red-500 transition-colors text-lg tracking-wide">
                                    Read Full Bio
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div variants={fadeInUp} className="relative h-[400px] bg-gray-900 rounded-2xl overflow-hidden">
                            {/* Placeholder for an image - using a gradient for now */}
                            <img
                                src="/DSC08659.JPG"
                                alt="Mauli Nagargoje"
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Work Teaser */}
            <section className="min-h-screen bg-[#0a0a0a] flex items-center py-20 px-4 relative z-10">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 flex justify-between items-end"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-white">
                            Selected <span className="text-orange-500">Work</span>
                        </h2>
                        <Link to="/projects" className="hidden md:block text-gray-400 hover:text-white transition-colors">
                            View All Projects →
                        </Link>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Project Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-bold text-white mb-2">E-Paper Portal</h3>
                                <p className="text-gray-300">Full-stack Development</p>
                            </div>
                        </motion.div>

                        {/* Project Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group relative aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-bold text-white mb-2">3D Portfolio</h3>
                                <p className="text-gray-300">Creative Development</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                            View All Projects →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Capabilities Teaser */}
            <section className="py-32 px-4 bg-[#050505] relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-20"
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Capabilities
                        </motion.h2>
                        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {['React.js', 'Three.js', 'Node.js', 'UI/UX Design', 'Photography'].map((skill) => (
                                <span key={skill} className="px-6 py-3 border border-white/10 rounded-full text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
