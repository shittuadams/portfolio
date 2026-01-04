import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectGalleryProps {
  title: string;
  projects: Project[];
  onBack: () => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ title, projects, onBack }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'data'>('all');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-slate-50 overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <div className="p-2 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-medium">Back to Portfolio</span>
          </button>
          <h2 className="text-xl font-bold text-slate-900 hidden sm:block">{title}</h2>
          <div className="w-10"></div> {/* Spacer for center alignment */}
        </div>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {title}
            </span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-8">
            A comprehensive collection of works demonstrating technical expertise, creativity, and problem-solving skills.
          </p>

          {/* Toggle Filter */}
          <div className="inline-flex bg-white p-1 rounded-full shadow-md border border-slate-100">
             <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === 'all' 
                ? 'bg-slate-900 text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
             >
               All
             </button>
             <button
              onClick={() => setFilter('web')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === 'web' 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
             >
               Web Development
             </button>
             <button
              onClick={() => setFilter('data')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === 'data' 
                ? 'bg-secondary text-white shadow-sm' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
             >
               Data Analysis
             </button>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
          {filteredProjects.map((project, index) => (
             <motion.div
               layout
               key={project.id}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               transition={{ duration: 0.3 }}
               className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white border border-slate-100 flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
             >
                <div className="aspect-video overflow-hidden relative">
                   <img
                     src={project.image}
                     alt={project.title}
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute top-2 right-2">
                     <span className={`text-xs px-2 py-1 rounded font-bold uppercase tracking-wider text-white shadow-sm ${project.category === 'web' ? 'bg-primary' : project.category === 'data' ? 'bg-secondary' : 'bg-slate-500'}`}>
                       {project.category}
                     </span>
                   </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">{tag}</span>
                        ))}
                    </div>
                    
                    <div className="flex gap-4 mt-auto">
                        <a
                          href={project.details || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors shadow-md text-center"
                        >
                          Details
                        </a>

                        <a
                          href={project.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 border border-slate-200 rounded-lg text-slate-500 hover:text-primary hover:border-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                    </div>
                </div>
             </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectGallery;