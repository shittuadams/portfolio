import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, MonitorPlay, Users, GraduationCap, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "INDEX + MATCH in Excel",
    url: "https://www.youtube.com/embed/6HqB-0rA0rQ?si=rwigxfGnx73p5w9I" // Placeholder ID, using generic educational content
  },
  {
    id: 2,
    title: "Master Excel Shortcuts",
    url: "https://www.youtube.com/embed/6A-SW7vwG1s?si=UvQ1yIiwMLdISagS"
  },
  {
    id: 3,
    title: "Excel Macros Made Easy",
    url: "https://www.youtube.com/embed/kqhM0I_XPeA?si=enk0jaFLr-f8grYX"
  }
];

interface AboutProps {
  onOpenVideoGallery: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenVideoGallery }) => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">About <span className="text-primary">Me</span></h2>
          <h3 className="text-xl text-slate-500">Coding Teacher and Web Developer</h3>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Bio Text - Centered across container */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 leading-relaxed text-lg text-center max-w-4xl mx-auto mb-16"
        >
          With a strong background in Mathematics and over <span className="text-slate-900 font-bold">8 years of teaching experience</span>, I bridge the gap between complex logic and creative coding. I specialize in simplifying technical concepts for students of all ages.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Carousel Column */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="relative flex flex-col gap-6"
          >
             <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video relative group z-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentVideo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <iframe 
                          className="w-full h-full"
                          src={videos[currentVideo].url} 
                          title={videos[currentVideo].title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Controls */}
                    <button 
                      onClick={prevVideo}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextVideo}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                      {videos.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-2 h-2 rounded-full transition-colors ${idx === currentVideo ? 'bg-white' : 'bg-white/40'}`}
                        />
                      ))}
                    </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
             </div>

             {/* See More Videos Button */}
             <div className="text-center md:text-left">
                <button 
                  onClick={onOpenVideoGallery}
                  className="inline-flex items-center gap-3 bg-white text-slate-800 border border-slate-200 px-6 py-3 rounded-xl font-bold shadow-sm hover:shadow-md hover:border-primary hover:text-primary transition-all duration-300 group w-full justify-center md:w-auto"
                >
                  <PlayCircle size={22} className="text-primary group-hover:scale-110 transition-transform" />
                  <span>Browse Video Library</span>
                  <ChevronRight size={18} className="text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </button>
             </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="space-y-4"
          >
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors text-left border border-transparent hover:border-slate-100">
              <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1 shrink-0">
                 <MonitorPlay size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold">Online Education</h4>
                <p className="text-slate-500 text-sm">Delivering engaging classes via Google Meet, Zoom, and Teams.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors text-left border border-transparent hover:border-slate-100">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary mt-1 shrink-0">
                 <Users size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold">Mentorship</h4>
                <p className="text-slate-500 text-sm">Guiding students through hands-on projects in Excel, Power BI, and Web Development.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors text-left border border-transparent hover:border-slate-100">
               <div className="p-2 bg-pink-500/10 rounded-lg text-pink-500 mt-1 shrink-0">
                 <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold">Curriculum Design</h4>
                <p className="text-slate-500 text-sm">Creating comprehensive digital courses for Kids Coding and Data Analysis.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download CV Button - Centered */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.5 }}
           className="text-center"
        >
          
          <a
            href="https://drive.google.com/uc?export=download&id=1_N4zbfDzIIkDGhkq60OXyQYJmo4MM7db"
            download="Adams-Shittu-CV.pdf"
            className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1"
          >
            <Download size={18} /> Download My CV
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default About;