import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    category: "Technical Skills",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    id: 2,
    category: "Data Analysis",
    skills: [
      { name: "Microsoft Excel", level: 98 },
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Data Visualization", level: 92 }
    ]
  },
  {
    id: 3,
    category: "Professional",
    skills: [
      { name: "Teaching", level: 100 },
      { name: "Curriculum Dev", level: 95 },
      { name: "Communication", level: 95 },
      { name: "Project Management", level: 85 }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">My <span className="text-primary">Skills</span></h2>
          <p className="text-slate-500">Expertise cultivated over years of practice</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center border-b border-slate-200 pb-3">
                {cat.category}
              </h3>
              <div className="space-y-6">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-600">{skill.name}</span>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;