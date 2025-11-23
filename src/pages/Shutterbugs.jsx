import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Shutterbugs() {
    const videoRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video autoplay failed:", error);
            });
        }
    }, []);

    const activities = [
        {
            title: "Event Coverage",
            description: "Capturing the essence of university events like Aarohan, TedX, and Texephyr.",
            icon: "📸"
        },
        {
            title: "Workshops",
            description: "Hands-on sessions on photography techniques, post-processing, and equipment mastery.",
            icon: "🎓"
        },
        {
            title: "Photo Walks",
            description: "Exploring the city and campus to find unique perspectives and hidden gems.",
            icon: "🚶"
        },
        {
            title: "Exhibitions",
            description: "Showcasing the best work of our members to the university community.",
            icon: "🖼️"
        }
    ];

    // GALLERY CONFIGURATION
    // You can manually add or remove images here.
    // Make sure the 'src' matches the path in your public folder.
    const galleryImages = [
        {
            id: 1,
            src: "/images/shutterbugs/gallery-1.jpg",
            caption: "Induction",
            alt: "Shutterbugs Event 1"
        },
        {
            id: 2,
            src: "/images/shutterbugs/gallery-2.jpg",
            caption: "Ganpati Photowalk",
            alt: "Shutterbugs Event 2"
        },
        {
            id: 3,
            src: "/images/shutterbugs/gallery-3.jpg",
            caption: "Hoop It Up",
            alt: "Shutterbugs Event 3"
        }

        
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
            {/* Background Video Section */}
            <div className="relative h-screen w-full overflow-hidden">
                <motion.div
                    style={{ opacity, scale }}
                    className="absolute inset-0 w-full h-full"
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/logo.jpg" // Fallback
                    >
                        <source src="/Ganpati%20Photowalk.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                </motion.div>

                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter mb-4"
                    >
                        MIT-WPU <span className="text-red-600">SHUTTERBUGS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light"
                    >
                        Capturing Moments, Creating Memories
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-10 animate-bounce"
                    >
                        <span className="text-white/50 text-sm">Scroll to Explore</span>
                    </motion.div>
                </div>
            </div>

            {/* About Section */}
            <section className="py-24 px-6 relative z-10 bg-[#050505]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Official <span className="text-red-500">Media Club</span></h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                MIT-WPU Shutterbugs is a community of passionate photographers, videographers, and visual storytellers.
                                We are dedicated to documenting the vibrant life at MIT World Peace University, from high-energy cultural fests
                                to intimate academic workshops.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Whether you're a seasoned pro or just starting with a smartphone camera, Shutterbugs provides the platform
                                to learn, grow, and showcase your creativity.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {activities.map((activity, index) => (
                                <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-red-500/50 transition-colors">
                                    <div className="text-4xl mb-4">{activity.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                                    <p className="text-sm text-gray-400">{activity.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Gallery Section */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our <span className="text-red-500">Gallery</span></h2>

                        {/* Masonry-style Grid */}
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                            {galleryImages.map((img) => (
                                <motion.div
                                    key={img.id}
                                    whileHover={{ scale: 1.02 }}
                                    className="break-inside-avoid rounded-xl overflow-hidden relative group bg-gray-900 border border-white/10 mb-4"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://placehold.co/600x400/1a1a1a/red?text=Add+Image"; // Fallback
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                                        <p className="text-white text-xl font-bold tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {img.caption}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
