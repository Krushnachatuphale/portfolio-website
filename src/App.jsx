import profile from "./assets/profile.png";
import churnDashboard from "./assets/customer-churn-dashboard.png";
import { useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import "./App.css";

export default function App() {
  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

useEffect(() => {
  const moveCursor = (e) => {
    mouseX.set(e.clientX - 200);
    mouseY.set(e.clientY - 200);
  };

  window.addEventListener("mousemove", moveCursor);

  return () => window.removeEventListener("mousemove", moveCursor);
}, []);
  const projects = [
  {
    title: "Customer Churn Analysis Dashboard",
    description:
      "Developed an interactive Power BI dashboard to analyze customer churn patterns, contract types, internet services, payment methods, and customer retention metrics.",
    number: "01",
    image: churnDashboard,
    technologies: ["Power BI", "DAX", "Data Analytics"],
    github: "#",
    demo: "#",
  },

  {
    title: "Autonomous Line Follower Robot",
    description:
      "Designed and developed an autonomous robot capable of detecting and following a predefined path using IR sensors and Arduino.",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    technologies: ["Arduino", "IR Sensors", "Embedded Systems"],
    github: "#",
    demo: "#",
  },

  {
    title: "IoT Smart Monitoring System",
    description:
      "Built an ESP32-based IoT monitoring system capable of collecting sensor data and transmitting it wirelessly.",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
    technologies: ["ESP32", "IoT", "Monitoring"],
    github: "#",
    demo: "#",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "Modern portfolio website built with React, Framer Motion and interactive UI animations.",
    number: "04",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    technologies: ["React", "JavaScript", "Frontend"],
    github: "#",
    demo: "#",
  },
];

const skillGroups = [
  {
    category: "Data Analytics",
    skills: ["Power BI", "Excel", "Data Visualization", "DAX"],
  },
  {
    category: "Programming",
    skills: ["C", "C++", "Python", "JavaScript"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React"],
  },
  {
    category: "Embedded Systems",
    skills: ["Arduino", "ESP32", "IoT", "Sensors"],
  },
];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      <ParticlesBackground />
      <motion.div
  className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none z-0"
  style={{
    x: smoothX,
    y: smoothY,
  }}
/>
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

<div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-xl shadow-lg shadow-black/20 sticky top-0 z-50 bg-[#050816]/50 border-b border-white/5">
        <h1 className="text-2xl font-bold tracking-wide">KC.</h1>

        <div className="hidden md:flex gap-10 text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-8 md:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[6px] text-blue-400 mb-5 text-sm">
              Portfolio 2026
            </p>

            <motion.h1
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2, duration: 1 }}
className="text-5xl md:text-7xl font-black leading-none mb-8"
>
              Krushna
              <br />
              Chatuphale
            </motion.h1>

            <p className="text-slate-300 text-lg md:text-xl leading-8 max-w-2xl">
                Electronics & Telecommunication Engineering Student at
                 Walchand College of Engineering, Sangli.

  <br />
  <br />

  Building Data Analytics Dashboards, Embedded Systems,
  IoT Solutions, and Modern Web Applications.
</p>

           <div className="flex gap-5 mt-10 flex-wrap">
  <a
    href="#projects"
    className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl font-medium flex items-center gap-2 shadow-2xl shadow-blue-500/20"
  >
    View Projects
    <ArrowRight size={18} />
  </a>

  <a
    href="/resume.pdf"
    download
    className="border border-white/20 hover:border-white/50 transition px-8 py-4 rounded-2xl backdrop-blur-md"
  >
    Download Resume
  </a>
</div>
          </motion.div>

         <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  className="relative flex justify-center"
>
  <img
    src={profile}
    alt="Krushna Chatuphale"
    className="w-[380px] h-[380px] object-cover rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/30"
  />
</motion.div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
      <h3 className="text-4xl font-bold text-blue-400">4+</h3>
      <p className="text-slate-400 mt-2">Projects</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
      <h3 className="text-4xl font-bold text-blue-400">10+</h3>
      <p className="text-slate-400 mt-2">Technologies</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
      <h3 className="text-4xl font-bold text-blue-400">2+</h3>
      <p className="text-slate-400 mt-2">Years Learning</p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
      <h3 className="text-4xl font-bold text-blue-400">100%</h3>
      <p className="text-slate-400 mt-2">Passion</p>
    </div>

  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="px-8 md:px-20 py-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <p className="text-blue-400 uppercase tracking-[5px] mb-5 text-sm">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Building technology that combines software, hardware, and creativity.
          </h2>

          <p className="text-slate-400 text-lg leading-9 max-w-4xl">
            I am passionate about building modern technology solutions using
            analytics, embedded systems, and IoT. I enjoy creating projects
            that combine design, logic, and real-world functionality while
            continuously improving my development and engineering skills.
          </p>
        </motion.div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
  <p className="text-blue-400 uppercase tracking-[5px] mb-5 text-sm">
    Education
  </p>

  <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl">
    <h3 className="text-3xl font-bold mb-4">
      Walchand College of Engineering, Sangli
    </h3>

    <p className="text-slate-300 text-lg">
      B.Tech in Electronics & Telecommunication Engineering
    </p>

    <p className="text-slate-400 mt-3">
      2024 – Present
    </p>

    <p className="text-slate-400 mt-4 leading-8">
      Currently pursuing undergraduate studies with interests in
      Data Analytics, Embedded Systems, IoT, and Software Development.
    </p>
  </div>
</section>
{/* CERTIFICATIONS */}
<section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
  <p className="text-blue-400 uppercase tracking-[5px] mb-5 text-sm">
    Certifications
  </p>

  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
    Learning & Certifications
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <h3 className="text-xl font-bold mb-3">
        Power BI Data Analytics
      </h3>

      <p className="text-slate-400">
        Dashboard creation, KPI tracking, data visualization and reporting.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <h3 className="text-xl font-bold mb-3">
        Embedded Systems & Arduino
      </h3>

      <p className="text-slate-400">
        Sensor interfacing, automation projects and hardware programming.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <h3 className="text-xl font-bold mb-3">
        Web Development
      </h3>

      <p className="text-slate-400">
        React, JavaScript and responsive frontend development.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <h3 className="text-xl font-bold mb-3">
        IoT & ESP32
      </h3>

      <p className="text-slate-400">
        Smart monitoring systems and wireless communication projects.
      </p>
    </div>
  </div>
</section>
{/* ACHIEVEMENTS */}
<section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
  <p className="text-blue-400 uppercase tracking-[5px] mb-5 text-sm">
    Achievements
  </p>

  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
    Experience & Highlights
  </h2>

  <div className="space-y-6">

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-bold mb-2">
        Electronics & Telecommunication Engineering Student
      </h3>

      <p className="text-blue-400 mb-3">
        Walchand College of Engineering, Sangli
      </p>

      <p className="text-slate-400">
        Pursuing B.Tech while developing practical skills in Data Analytics,
        Embedded Systems, IoT, and Software Development.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-bold mb-2">
        Power BI Dashboard Projects
      </h3>

      <p className="text-slate-400">
        Designed interactive dashboards with KPI tracking, customer analytics,
        business reporting, and data visualization.
      </p>
    </div>

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-bold mb-2">
        Embedded & IoT Projects
      </h3>

      <p className="text-slate-400">
        Built hardware-focused projects including autonomous robotics,
        sensor interfacing, and IoT-based monitoring systems.
      </p>
    </div>

  </div>
</section>

      {/* SKILLS */}
      <motion.section
id="skills"
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="px-8 md:px-20 py-28">
        <div className="flex items-center justify-between mb-14 flex-wrap gap-5">
          <div>
            <p className="text-blue-400 uppercase tracking-[5px] mb-3 text-sm">
              Skills
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Tech Stack</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
  {skillGroups.map((group, index) => (
    <div
      key={index}
      className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-400">
        {group.category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {group.skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-[5px] mb-3 text-sm">
            Projects
          </p>

          <h2 className="text-5xl font-bold">Featured Work</h2>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
  scale: 1.03,
  rotateX: 4,
  rotateY: 4,
  y: -10,
}}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl flex flex-col lg:flex-row justify-between gap-10 hover:bg-white/[0.07] transition shadow-2xl hover:shadow-blue-500/10"
            >
              <div>
                <img
  src={project.image}
  alt={project.title}
  className="w-full h-64 object-cover rounded-3xl mb-8 transition duration-500 hover:scale-[1.03]"
/>
                <p className="text-slate-500 text-sm mb-5">{project.number}</p>

                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-lg leading-8 max-w-2xl">
  {project.description}
</p>

<div className="flex gap-3 flex-wrap mt-6">
  {project.technologies.map((tech, i) => (
    <span
      key={i}
      className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20"
    >
      {tech}
    </span>
  ))}
</div>

<div className="flex gap-4 mt-6">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="px-5 py-2 rounded-xl border border-white/10 hover:border-blue-500 transition"
  >
    GitHub
  </a>

  <a
    href={project.demo}
    target="_blank"
    rel="noreferrer"
    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
  >
    Live Demo
  </a>
</div>
              </div>

              <div className="flex items-center">
                <button className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition">
                  <ArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-8 md:px-20 py-28 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 max-w-5xl mx-auto backdrop-blur-xl"
        >
          <p className="text-blue-400 uppercase tracking-[5px] mb-4 text-sm">
            Contact
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Let's Build Something Great
          </h2>

          <p className="text-slate-400 text-lg mb-10">
            Available for internships, freelance projects, and collaborations.
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="https://github.com/Krushna-Chatuphale"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition"
            >
              <Github />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/krushnachatuphale/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition"
            >
              <Linkedin />
              LinkedIn
            </a>

            <a
              href="mailto:krushnachatuphale@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
            >
              <Mail />
              Email Me
            </a>
          </div>
        </motion.div>
</section>

<footer className="border-t border-white/10 mt-20">
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">

    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

      <div>
        <h3 className="font-bold text-xl">
          Krushna Chatuphale
        </h3>

        <p className="text-slate-400 text-sm mt-1">
          Electronics & Telecommunication Engineering Student
        </p>
      </div>

      <div className="flex gap-6 text-slate-400">

        <a
          href="https://github.com/Krushna-Chatuphale"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/krushnachatuphale/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:krushnachatuphale@gmail.com"
          className="hover:text-white transition"
        >
          Email
        </a>

      </div>

    </div>

    <div className="text-center text-slate-500 text-sm mt-8">
      © 2026 Krushna Chatuphale. All Rights Reserved.
    </div>

  </div>
</footer>
</div>
);
}
