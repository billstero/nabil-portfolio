import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Mail, Sun, Moon } from 'lucide-react';
import './index.css';

// Animation configs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const projects = [
  {
    id: 1, title: "GearShare", category: "Software Engineering", year: "2026", type: "Group",
    desc: "A peer-to-peer sports equipment rental web application with robust user stories and complex database architecture.",
    tech: ["React", "Node.js", "UI/UX", "Software Development"],
    image: "/Gearshare.jpg",
    link: "https://gearshare-drojankite-s-projects.vercel.app?_vercel_share=PnJ1FYEc8sUBTCD4LWso1AdKPM4w7fhW" 
  },
  {
    id: 2, title: "FloodGuard", category: "Artificial Intelligence and Machine Learning", year: "2026", type: "Group",
    desc: "AI-powered flood detection and mitigation system web application with LSTM Machine Learning models.",
    tech: ["Machine Learning", "Data/API", "Artificial Intelligence", "UI/UX Design"],
    image: "/Floodguard.jpg",
    link: "https://flood-guard-mybs.vercel.app/"
  },
  {
    id: 3, title: "MaxHealth", category: "Human and Computer Interaction", year: "2025", type: "Group",
    desc: "AI-powered webpage prototype for a health assistant specifically designed for gamers to maintain physical well-being and ergonomics.",
    tech: ["Figma", "User Research", "UI/UX Design"],
    image: "/Maxhealth.jpg"
    // Tidak ada properti link, jadi ikon arrow tidak akan muncul dan card tidak clickable
  },
  {
    id: 4, title: "NutriCheck", category: "Machine Learning", year: "2026", type: "Group",
    desc: "A Machine Learning-powered web application that classifies food based on nutritional values and provides personalized nutrition recommendations.",
    tech: ["Machine Learning", "Artificial Intelligence", "UI/UX Design"],
    image: "/Nutricheck.jpg",
    link: "https://machine-learning-project-binus.vercel.app/" 
  },
  {
    id: 5, title: "CryPITO", category: "Human and Computer Interaction", year: "2025", type: "Individual",
    desc: "A web prototype for a cryptocurrency portfolio management application with a focus on user experience and interface design.",
    tech: ["Figma"],
    image: "/CryPITO.jpg"
  },
  {
    id: 6, title: "BNCC's Projects", category: "UI/UX Design", year: "2024", type: "Individual",
    desc: "A collection of my work during my time at Bina Nusantara Computer Club (BNCC) as a Design and Documentation Staff at BTT 2024 (BNCC Techno Talk), where I contributed to various digital designs and visual materials.",
    tech: ["Figma", "User Research"],
    image: "/BTTP.jpg"
  }
];

const certifications = [
  { 
    id: 1, 
    title: "Azure AI Fundamentals", 
    issuer: "GreatNusa", 
    year: "2026",
    image: "/AzureAI.jpg" 
  },
  { 
    id: 2, 
    title: "BNCC Techno Talk 2024 as Design n Documentation Staff", 
    issuer: "BNCC", 
    year: "2024",
    image: "/BTT2024.jpg" 
  }
];

const skills = [
  "UI/UX Design", "React.js", "Figma", "Python", "Machine Learning", 
  "SQL", "User Research", "Node.js", "Computer Vision", "C/C++", "Artificial Intelligence", "Software Development"
];

export default function App() {
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <div className="ambient-glow" />
      
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-text">Nabil's Portfolio</div>
        <div className="nav-right-group">
          <div className="nav-links">
            <a href="#expertise">Expertise</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <main className="container">
        {/* HERO SECTION */}
        <motion.section 
          className="hero-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* KOLOM KIRI */}
          <div className="hero-text-column">
            <motion.h1 variants={itemVariants} className="hero-title">
              Designing Ideas. <br />
              <span className="text-gradient" style={{ whiteSpace: "nowrap" }}>Building Experiences.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="hero-subtitle" style={{ maxWidth: "540px", fontSize: "1.05rem", lineHeight: "1.7" }}>
              Hi! I'm Nabil Muhammad Ghifari, a Computer Science student pursuing an advanced specialization in Artificial Intelligence. I’m passionate about exploring the intersection of UI/UX Design, Software Development, and Artificial Intelligence to create digital products that feel intuitive, purposeful, and engaging. From designing interfaces to developing intelligent solutions, I enjoy transforming ideas into meaningful products through a balance of creativity, technology, and user-centered thinking.
            </motion.p>
            
            <motion.div variants={itemVariants} className="btn-group">
              <a href="#projects" className="btn btn-primary">
                Explore Work <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* KOLOM KANAN */}
          <motion.div variants={itemVariants} className="hero-image-column">
            <div className="hero-image-wrapper">
              <img 
                src="/nabil-profile.jpg" 
                alt="Nabil Muhammad Ghifari" 
                className="hero-profile-img" 
              />
            </div>
          </motion.div>
        </motion.section>

        {/* SKILLS / EXPERTISE SECTION */}
        <section id="expertise" className="section">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <h2 className="section-title">Expertise</h2>
            <p className="section-subtitle">Skills & Domain Knowledge.</p>
            
            <div className="skills-container">
              {skills.map((skill, i) => (
                <motion.div 
                  key={skill}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Selected Works</h2>
            <p className="section-subtitle">A curated collection of my recent software and design projects.</p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((proj, i) => (
              <motion.div 
                key={proj.id}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                // Menambahkan fungsi onClick agar card bisa di-klik jika memiliki properti link
                onClick={() => proj.link && window.open(proj.link, '_blank')}
                // Mengubah kursor menjadi pointer jika card tersebut memiliki link
                style={{ cursor: proj.link ? 'pointer' : 'default' }}
              >
                {/* Pratinjau Gambar Proyek */}
                <div className="project-image-container">
                  <img src={proj.image} alt={proj.title} className="project-img" />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="project-year">{proj.category} — {proj.year}</span>
                  {/* Ikon ArrowUpRight HANYA muncul jika proyek memiliki link */}
                  {proj.link && <ArrowUpRight size={20} color="var(--text-muted)" />}
                </div>
                
                <div className="project-title-wrapper">
                  <h3 className="project-name">{proj.title}</h3>
                  <span className="project-type-badge">{proj.type}</span>
                </div>

                <p className="project-desc">{proj.desc}</p>
                
                <div className="tech-stack">
                  {proj.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="section">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">Continuous learning and professional credentials.</p>
          </motion.div>

          <div className="certs-grid">
            {certifications.map((cert, i) => (
              <motion.div 
                key={cert.id}
                className="cert-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="cert-image-container">
                  <img src={cert.image} alt={cert.title} className="cert-img" />
                </div>

                <div className="cert-info">
                  <div>
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </div>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Let's connect!</h2>
          <p className="section-subtitle" style={{ marginBottom: "30px" }}>
            Currently open for new opportunities and collaborations.
          </p>
          
          <div className="social-links">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nabilmghifari26@gmail.com&su=Hello%20Nabil,%20Let's%20Collaborate!" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a href="https://github.com/billstero" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://linkedin.com/in/nabilghifari" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            Made by Nabil Muhammad Ghifari.
          </p>
        </motion.div>
      </footer>
    </>
  );
}