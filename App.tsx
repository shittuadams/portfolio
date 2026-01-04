import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectGallery from './components/ProjectGallery';
import VideoGallery from './components/VideoGallery';
import { personalProjects, studentProjects, videoLibrary } from './data';

type ViewState = 'home' | 'personal' | 'student' | 'videos';

function App() {
  const [view, setView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About onOpenVideoGallery={() => setView('videos')} />
        <Services />
        <Skills />
        <Projects onOpenGallery={(type) => setView(type)} />
        <CVSection />
        <Contact />
      </main>
      
      <Footer />

      <AnimatePresence>
        {view === 'personal' && (
          <ProjectGallery 
            key="personal-gallery"
            title="Personal Projects Gallery" 
            projects={personalProjects} 
            onBack={() => setView('home')} 
          />
        )}
        {view === 'student' && (
          <ProjectGallery 
            key="student-gallery"
            title="Student Guided Projects Gallery" 
            projects={studentProjects} 
            onBack={() => setView('home')} 
          />
        )}
        {view === 'videos' && (
          <VideoGallery 
            key="video-gallery"
            videos={videoLibrary}
            onBack={() => setView('home')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;