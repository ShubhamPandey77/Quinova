import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { team } from '../../const';
import { Linkedin } from 'lucide-react';

const TeamSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-32 px-12 bg-white overflow-hidden relative"
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                        <span className="text-sm font-semibold text-slate-600 tracking-wider uppercase">Expert Team</span>
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Master Craftsmen of
                        <span className="block text-slate-700">Digital Innovation</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 h-auto lg:h-[600px] w-full px-4 sm:px-0">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="relative min-h-[350px] sm:min-h-[400px] lg:min-h-0 lg:flex-1 overflow-hidden rounded-[2rem] cursor-pointer group bg-slate-100"
                            initial={false}
                            animate={{
                                flex: hoveredIndex === index ? 3 : 1,
                                height: (hoveredIndex === index && window.innerWidth < 1024) ? '500px' : (window.innerWidth < 1024 ? '350px' : 'auto')
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.25, 1, 0.5, 1]
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                        >
                            {/* Member Image Container */}
                            <div className="absolute inset-0 w-full h-full bg-slate-200">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={`w-full h-full object-cover transition-all duration-700 ${
                                            hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50 blur-sm grayscale' : 'opacity-100 grayscale-0'
                                        }`}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="text-4xl sm:text-5xl font-bold text-slate-400">{member.name.charAt(0)}</span>
                                    </div>
                                )}
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                            </div>

                            {/* Collapsed State Info (Vertical Name) - Hidden on mobile, shown on LG */}
                            <AnimatePresence>
                                {hoveredIndex !== index && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                    >
                                        <p className="text-white/70 font-bold text-xl sm:text-2xl uppercase tracking-[0.2em] lg:[writing-mode:vertical-lr] lg:rotate-180">
                                            {member.name}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Expanded State Content */}
                            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end overflow-hidden">
                                <motion.div
                                    initial={false}
                                    animate={{
                                        y: hoveredIndex === index ? 0 : 100,
                                        opacity: hoveredIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.5, delay: hoveredIndex === index ? 0.2 : 0 }}
                                >
                                    <div className="flex items-end justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                                {member.name}
                                            </h3>
                                            <p className="text-slate-300 font-medium text-sm sm:text-base">
                                                {member.role}
                                            </p>
                                        </div>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                        )}
                                    </div>

                                    {member.bio && (
                                        <p className="text-slate-300 text-xs sm:text-sm mb-4 sm:mb-6 max-w-md leading-relaxed line-clamp-3 sm:line-clamp-none">
                                            {member.bio}
                                        </p>
                                    )}

                                    {member.expertise && (
                                        <div className="flex flex-wrap gap-2">
                                            {member.expertise.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-[10px] sm:text-xs bg-white/10 backdrop-blur-md border border-white/10 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default TeamSection;
