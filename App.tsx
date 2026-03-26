/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Globe, Zap, Ticket, MapPin, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GradientText';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ProjectCard';
import AIChat from './components/AIChat';
import { Project, Experience } from './types';

// Portfolio Data
const PROJECTS: Project[] = [
  { 
    id: '1', 
    name: 'RecruitIQ', 
    tech: ['Python', 'FastAPI', 'LLM Orchestration', 'Mistral AI', 'Groq', 'Docker', 'PostgreSQL', 'React'], 
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/RajatThakral01/recruitiq',
    live: 'https://recruitiq-production.up.railway.app',
    description: 'End-to-end AI screening platform that scores and ranks candidates across 5 dimensions using parallel LLM orchestration — 3 simultaneous API calls per resume with Mistral AI and automatic Groq fallback. Fully Dockerised and deployed on Railway.'
  },
  { 
    id: '2', 
    name: 'AI Analytics Platform', 
    tech: ['Python', 'LLM Orchestration', 'Prompt Engineering', 'RAG', 'API Integration'], 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/RajatThakral01/ai-data-platform',
    description: '6-module agentic automation platform (Smart EDA, NL Query Engine, LLM Insights, ML Recommender) with triple LLM routing (Groq → Gemini → Ollama), cutting prompt cost by 60%. 167/167 tests passing.'
  },
  { 
    id: '3', 
    name: 'Diabetes Prediction', 
    tech: ['Python', 'XGBoost', 'scikit-learn', 'SMOTE', 'Streamlit'], 
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop',
    github: 'https://github.com/RajatThakral01/diabetes-readmission-prediction',
    description: 'ML pipeline on 101,766 patient records predicting 30-day hospital readmission risk. XGBoost achieved 59.2% recall and 0.684 ROC-AUC. Interactive Streamlit app with Digital Twin simulation for clinicians.'
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Data Analyst (Product & Growth)',
    company: 'Lata Software',
    location: 'Kota',
    period: 'May–Jul 2025',
    points: [
      'Built Python/SQL automation pipelines surfacing revenue, retention, and funnel KPIs, improving decision-making speed by ~15%.',
      'Automated EDA workflows to identify friction points and inefficiencies.'
    ]
  },
  {
    id: '2',
    role: 'Consultant – Youth Leader',
    company: 'YP Foundation',
    location: 'Jaipur',
    period: 'Sep 2024–Apr 2025',
    points: [
      'Monitored conversion funnels across 20+ workshops, driving 30% improvement in engagement and reducing process delays by 25%.'
    ]
  },
  {
    id: '3',
    role: 'Growth Intern',
    company: 'Zomato',
    location: 'Kota',
    period: 'May–Jul 2024',
    points: [
      'Built GMV-impact tracking workflows improving campaign efficiency by 15%.'
    ]
  }
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Handle keyboard navigation for project modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowLeft') navigateProject('prev');
      if (e.key === 'ArrowRight') navigateProject('next');
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigateProject = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(a => a.id === selectedProject.id);
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % PROJECTS.length;
    } else {
      nextIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    }
    setSelectedProject(PROJECTS[nextIndex]);
  };
  
  return (
    <div className="relative min-h-screen text-white selection:bg-[#4fb7b3] selection:text-black cursor-auto md:cursor-none overflow-x-hidden">
      <CustomCursor />
      <FluidBackground />
      <AIChat />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-8 py-6">
        <div className="font-heading text-xl md:text-2xl font-bold tracking-tighter text-white cursor-default z-50">RAJAT.T</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm font-bold tracking-widest uppercase">
          {['Projects', 'Experience', 'Skills'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-base text-white font-semibold hover:text-[#a8fbd3] transition-colors cursor-pointer bg-transparent border-none tracking-widest uppercase"
              data-hover="true"
            >
              {item}
            </button>
          ))}
        </div>
        <button 
          onClick={() => window.open('https://drive.google.com/file/d/1AovenKtOlbooJTvA1Nyl6v-mtorOroUu/view?usp=sharing', '_blank')}
          className="hidden md:inline-block border border-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer bg-transparent"
          data-hover="true"
        >
          Resume
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#31326f]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Projects', 'Experience', 'Skills'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-4xl font-heading font-bold text-white hover:text-[#a8fbd3] transition-colors uppercase bg-transparent border-none"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1AovenKtOlbooJTvA1Nyl6v-mtorOroUu/view?usp=sharing', '_blank')}
              className="mt-8 border border-white px-10 py-4 text-sm font-bold tracking-widest uppercase bg-white text-black"
            >
              Resume
            </button>
            
            <div className="absolute bottom-10 flex gap-6">
               <a href="https://github.com/RajatThakral01" className="text-white/50 hover:text-white transition-colors">GitHub</a>
               <a href="https://linkedin.com/in/rajat-thakral-067548204" className="text-white/50 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header className="relative h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-4">
        <motion.div 
          style={{ y, opacity }}
          className="z-10 text-center flex flex-col items-center w-full max-w-6xl pb-24 md:pb-20"
        >
           {/* Role / Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-3 md:gap-6 text-xs md:text-base font-mono text-[#a8fbd3] tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <span>AI Automation</span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#4fb7b3] rounded-full animate-pulse"/>
            <span>Jaipur, India</span>
          </motion.div>

          {/* Main Title */}
          <div className="relative w-full flex justify-center items-center">
            <GradientText 
              text="RAJAT" 
              as="h1" 
              className="text-[15vw] md:text-[14vw] leading-[0.9] font-black tracking-tighter text-center" 
            />
            {/* Optimized Orb */}
            <motion.div 
               className="absolute -z-20 w-[50vw] h-[50vw] bg-white/5 blur-[40px] rounded-full pointer-events-none will-change-transform"
               animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
               transition={{ duration: 6, repeat: Infinity }}
               style={{ transform: 'translateZ(0)' }}
            />
          </div>
          
          <motion.div
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
             className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mt-4 md:mt-8 mb-6 md:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base md:text-2xl font-light max-w-xl mx-auto text-white/90 leading-relaxed drop-shadow-lg px-4"
          >
            Building AI automation systems, LLM pipelines, and agentic workflows.
          </motion.p>
        </motion.div>

        {/* MARQUEE */}
        <div className="absolute bottom-12 md:bottom-16 left-0 w-full py-4 md:py-6 bg-white text-black z-20 overflow-hidden border-y-4 border-black shadow-[0_0_40_rgba(255,255,255,0.4)]">
          <motion.div 
            className="flex w-fit will-change-transform"
            animate={{ x: "-50%" }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((key) => (
              <div key={key} className="flex whitespace-nowrap shrink-0">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-3xl md:text-7xl font-heading font-black px-8 flex items-center gap-4">
                    AI AUTOMATION <span className="text-black text-2xl md:text-4xl">●</span> 
                    DATA ENGINEERING <span className="text-black text-2xl md:text-4xl">●</span> 
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative z-10 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 px-4">
             <h2 className="text-5xl md:text-8xl font-heading font-bold uppercase leading-[0.9] drop-shadow-lg break-words w-full md:w-auto">
              Selected <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8fbd3] to-[#4fb7b3]">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10 bg-black/20 backdrop-blur-sm">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="relative z-10 py-20 md:py-32 bg-black/20 backdrop-blur-sm border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/2 right-[-20%] w-[50vw] h-[50vw] bg-[#4fb7b3]/20 rounded-full blur-[40px] pointer-events-none will-change-transform" style={{ transform: 'translateZ(0)' }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <h2 className="text-4xl md:text-7xl font-heading font-bold mb-12 md:mb-16 leading-tight">
            Professional <br/> <GradientText text="JOURNEY" className="text-5xl md:text-8xl" />
          </h2>
          
          <div className="space-y-8 md:space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 p-8 md:p-12 transition-all duration-500 overflow-hidden rounded-3xl"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#4fb7b3] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-mono text-[#a8fbd3] tracking-widest uppercase px-3 py-1 bg-[#a8fbd3]/10 rounded-full">
                        {exp.period}
                      </span>
                      <span className="text-white/30 font-mono text-xs uppercase">{exp.location}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2 group-hover:text-[#a8fbd3] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-white/60 font-medium mb-6">{exp.company}</p>
                    
                    <ul className="space-y-3">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/50 text-sm md:text-base leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-[#4fb7b3] rounded-full shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#a8fbd3] group-hover:rotate-12 transition-all duration-500">
                      <Globe className="text-white/20 group-hover:text-[#a8fbd3]" size={32} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative z-10 py-20 md:py-32 px-4 md:px-6 bg-black/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
             <h2 className="text-5xl md:text-9xl font-heading font-bold opacity-20 text-white">
               SKILLS
             </h2>
             <p className="text-[#a8fbd3] font-mono uppercase tracking-widest -mt-3 md:-mt-8 relative z-10 text-sm md:text-base">
               Technical Expertise
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'AI & LLM', skills: ['LLM Orchestration', 'Agentic Workflows', 'RAG', 'Prompt Engineering', 'LangChain', 'OpenAI API', 'Mistral AI'], icon: Zap },
              { category: 'Data & Analytics', skills: ['Data Pipelines', 'ETL', 'SQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost'], icon: Globe },
              { category: 'Engineering', skills: ['Python', 'FastAPI', 'Docker', 'REST APIs', 'Git', 'CI/CD', 'Cloud Deployment'], icon: Ticket },
              { category: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Responsive Design'], icon: MapPin },
            ].map((skillGroup, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="relative p-8 md:p-10 border border-white/10 backdrop-blur-md flex flex-col bg-white/5 rounded-3xl transition-colors duration-300 hover:bg-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-white/10">
                    <skillGroup.icon className="w-6 h-6 text-[#a8fbd3]" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-12 md:py-16 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
             <div className="font-heading text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">RAJAT.T</div>
             <div className="flex flex-col gap-2 text-xs font-mono text-gray-400">
               <span>2004rajatthakral@gmail.com</span>
               <span>+91 8696694397</span>
               <span>Jaipur, Rajasthan</span>
             </div>
          </div>
          
          <div className="flex gap-6 md:gap-8 flex-wrap">
            <a href="https://github.com/RajatThakral01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-bold uppercase text-xs tracking-widest transition-colors cursor-pointer" data-hover="true">
              GitHub
            </a>
            <a href="https://linkedin.com/in/rajat-thakral-067548204" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-bold uppercase text-xs tracking-widest transition-colors cursor-pointer" data-hover="true">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#1a1b3a] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <X size={24} />
              </button>

              {/* Left: Image Section */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative overflow-hidden group">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b3a] via-transparent to-transparent" />
                
                {/* Navigation Arrows */}
                <div className="absolute bottom-8 left-8 flex gap-4">
                  <button 
                    onClick={(e) => { e.stopPropagation(); navigateProject('prev'); }}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); navigateProject('next'); }}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Right: Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-mono text-[#a8fbd3] tracking-widest uppercase px-3 py-1 bg-[#a8fbd3]/10 rounded-full">
                    Featured Project
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tighter leading-none">
                  {selectedProject.name}
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-md text-white/60">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-12">
                  <p>{selectedProject.description}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-white text-black text-center font-bold uppercase tracking-widest text-sm hover:bg-[#a8fbd3] transition-colors rounded-xl"
                  >
                    View GitHub
                  </a>
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 border border-white/20 text-white text-center font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all rounded-xl"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
