import React from 'react';
import { Code2, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center">
          {/* Brand */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-primary rounded-lg text-white">
                <Code2 size={20} />
              </div>
              <span className="font-bold text-lg text-white">ADAMS.DEV</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering students through code and data. Building the web, one pixel at a time.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Skills', 'Projects'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-sm hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4 justify-center">
              {[
                { Icon: Github, url: "https://github.com/shittuadams" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/shittuadams/" },
                { Icon: Twitter, url: "https://x.com/shttdms" },
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2 rounded-full hover:bg-primary text-slate-300 hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>


        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Adams Shittu. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-slate-800 rounded-full text-white hover:bg-primary transition-all shadow-lg border border-slate-700 hover:border-primary"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;