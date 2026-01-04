import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { personalProjects, studentProjects } from '../data';

interface ProjectsProps {
  onOpenGallery: (type: 'personal' | 'student') => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenGallery }) => {
  const [activeTab, setActiveTab] = useState<'personal' | 'student'>('personal');

  // Show only first 3 projects for the preview section
  const displayedProjects = activeTab === 'personal' 
    ? personalProjects.slice(0, 3) 
    : studentProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured <span className="text-primary">Projects</span></h2>
          <p className="text-slate-500">Showcasing my work and my students' achievements</p>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm ${
                activeTab === 'personal' 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 transform scale-105' 
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Personal Projects
            </button>
            <button
              onClick={() => setActiveTab('student')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm ${
                activeTab === 'student' 
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/30 transform scale-105' 
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Student Guided
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedProjects.map((project) => (
              <div key={project.id} className="group relative rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-100 h-72">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Content Overlay - Hidden by default, appears on hover */}
                <div className="absolute inset-0 bg-slate-900/90 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                     <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                   </div>
                   
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                     <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                   </div>
                   
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                     <div className="flex flex-wrap justify-center gap-2 mb-6">
                       {project.tags.slice(0, 3).map((tag, i) => (
                         <span key={i} className="text-xs bg-primary/20 text-primary border border-primary/30 px-2 py-1 rounded-full">{tag}</span>
                       ))}
                     </div>
                   </div>

                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300 flex flex-col sm:flex-row gap-3">

                      <a
                        href={project.details || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors"
                      >
                        View Details <ArrowRight size={14} />
                      </a>
                     <a 
                       href={project.link || '#'} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-sky-600 transition-colors"
                     >
                       Live Preview <Eye size={14} />
                     </a>
                   </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
           <button 
             onClick={() => onOpenGallery(activeTab)}
             className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-bold text-lg group transition-colors"
           >
             See More {activeTab === 'personal' ? 'Personal' : 'Student'} Projects 
             <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;