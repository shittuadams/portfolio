import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, BarChart3 } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Foundational Coding",
    description: "Building logic and creativity for beginners and kids.",
    details: ["Scratch Programming", "MIT App Inventor", "Logic & Algorithms"],
    icon: <Code size={32} />
  },
  {
    id: 2,
    title: "Web Development",
    description: "Creating responsive and modern websites.",
    details: ["HTML5 & CSS3", "JavaScript (ES6+)", "Responsive Design"],
    icon: <Layout size={32} />
  },
  {
    id: 3,
    title: "Data Analysis",
    description: "Turning raw data into actionable insights.",
    details: ["Excel & SQL", "Power BI & Tableau", "Python for Data"],
    icon: <BarChart3 size={32} />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">My <span className="text-secondary">Services</span></h2>
          <p className="text-slate-500">What I offer to my students and clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative p-1 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-full w-full rounded-[1.4rem] p-8 flex flex-col items-center text-center relative z-10 overflow-hidden bg-white border border-slate-100">
                {/* Decorative Circle */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-[100%] transition-colors group-hover:bg-primary/20"></div>
                
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="text-left w-full space-y-3 bg-slate-50 p-4 rounded-xl">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-slate-600 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;