import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Youtube, Instagram, ArrowRight } from 'lucide-react';

const words = [" & Web Developer", " & Data Analyst", " & Mentor"];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="flex items-start justify-center pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden relative bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-2">
            <span className="text-primary font-semibold tracking-wide text-sm">👋 Hello, It's me</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight whitespace-nowrap mb-6">
            Adams <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Shittu</span>
          </h1>
          <h3 className="text-2xl md:text-3xl text-slate-600 font-light flex flex-wrap justify-center md:justify-start items-center gap-1 mb-6">
            <span>I'm a <span className="font-semibold text-slate-900">Coding Teacher</span></span>
            <span className="font-semibold text-slate-900 min-h-[1.5em] flex items-center">
              {text}
              <span className="animate-pulse text-primary font-bold ml-0.5">|</span>
            </span>
          </h3>
          <p className="text-slate-500 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg mb-8">
            Passionate about empowering the next generation of tech leaders through interactive coding lessons and building modern, responsive web solutions.
          </p>

          {/* Social Icons */}
<div className="flex justify-center md:justify-start space-x-4 mb-8 pt-2">
  {[
    { Icon: Facebook, url: "https://www.facebook.com/officialAdamsShittu" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/shittuadams/" },
    { Icon: Youtube, url: "https://www.youtube.com/@officialAdamsShittu" },
    { Icon: Instagram, url: "https://www.instagram.com/officialadamsshittu/" },
  ].map(({ Icon, url }, idx) => (
    <a
      key={idx}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
    >
      <Icon size={20} />
    </a>
  ))}
</div>


          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 transform hover:-translate-y-1"
            >
              Contact Me <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Spinning Rainbow Background Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-spin-slow opacity-20 blur-xl" style={{ animationDuration: '8s' }}></div>
            
            {/* Animated Dashed Outer Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-slate-300 animate-spin-slow" style={{ animationDuration: '15s' }}></div>

            {/* Animated Inner Accent Ring */}
            <div className="absolute -inset-1 rounded-full border-t-2 border-l-2 border-transparent border-t-primary border-l-secondary animate-spin-slow" style={{ animationDuration: '3s' }}></div>
            
            {/* Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden z-20 border-4 border-white shadow-2xl">
               <img 
                 src="https://raw.githubusercontent.com/shittuadams/portfolio-image/c8b691e9702316a552a247c306fe04ed1b6693f7/profile-image.jpg" 
                 alt="Adams Shittu" 
                 className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
               />
            </div>

             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               className="absolute bottom-10 -right-4 z-30 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl text-sm font-bold text-slate-800 border border-white shadow-xl flex items-center gap-2"
             >
                <span className="text-2xl">🚀</span> 8+ Years Exp.
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;