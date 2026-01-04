import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const CVSection: React.FC = () => {
  return (
    <section id="cv-section" className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-3xl border border-slate-200 shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Interested in my professional journey?</h2>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto">Click below to view and download my comprehensive Curriculum Vitae detailing my experience and achievements.</p>
          
          <a
            href="https://drive.google.com/file/d/1_N4zbfDzIIkDGhkq60OXyQYJmo4MM7db/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-6 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 hover:shadow-xl shadow-slate-900/20 transform hover:-translate-y-1 transition-all duration-300"
          >
            <FileText size={24} />
            View My CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;