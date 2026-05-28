import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import "./App.css";

export default function App() {
  const projects = [
    {
  title: "Power BI Analytics Dashboard",
  description:
    "Interactive analytics dashboard with KPI tracking, business insights, and dynamic reporting.",
  number: "01",
  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
},
   {
  title: "Line Follower Robot",
  description:
    "Embedded systems project using sensors and Arduino for autonomous navigation.",
  number: "02",
  image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
},
    {
  title: "IoT Smart Monitoring",
  description:
    "ESP32-powered real-time monitoring and automation platform for smart systems.",
  number: "03",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
},
  ];

  const skills = [
    "Power BI",
    "Python",
    "React",
    "Arduino",
    "IoT",
    "Embedded Systems",
    "C++",
    "JavaScript",
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-[140px] rounded-full"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

<div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 md:px-20 py-8 backdrop-blur-sm sticky top-0 z-50 bg-[#050816]/50 border-b border-white/5">
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
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-[6px] text-blue-400 mb-5 text-sm">
              Portfolio 2026
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
              Krushna
              <br />
              Chatuphale
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-8 max-w-xl">
              Electronics & Telecommunication Engineering Student building
              modern experiences with IoT, Embedded Systems, Power BI,
              and Software Development.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl font-medium flex items-center gap-2 shadow-2xl shadow-blue-500/20">
                View Projects
                <ArrowRight size={18} />
              </button>

              <button className="border border-white/20 hover:border-white/50 transition px-8 py-4 rounded-2xl backdrop-blur-md">
                Download Resume
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="w-full h-[500px] rounded-[40px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 backdrop-blur-xl p-8 flex items-end overflow-hidden shadow-2xl">
              <div>
                <p className="text-slate-400 mb-3">Focused On</p>

                <h2 className="text-4xl font-bold leading-tight">
                  Data Analytics
                  <br />
                  Embedded Systems
                  <br />
                  IoT Development
                </h2>
              </div>
            </div>
          </motion.div>
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

      {/* SKILLS */}
      <section id="skills" className="px-8 md:px-20 py-28">
        <div className="flex items-center justify-between mb-14 flex-wrap gap-5">
          <div>
            <p className="text-blue-400 uppercase tracking-[5px] mb-3 text-sm">
              Skills
            </p>
            <h2 className="text-5xl font-bold">Tech Stack</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 md:px-20 py-28">
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
                            scale: 1.02,
                            y: -8,
}}
              className="bg-white/5 border border-white/10 rounded-[32px] p-10 md:p-14 backdrop-blur-xl flex flex-col lg:flex-row justify-between gap-10 hover:bg-white/[0.07] transition"
            >
              <div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover rounded-3xl mb-8"
/>  
                <p className="text-slate-500 text-sm mb-5">{project.number}</p>

                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-lg leading-8 max-w-2xl">
                  {project.description}
                </p>
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
          className="bg-white/5 border border-white/10 rounded-[40px] p-14 backdrop-blur-xl"
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
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition"
            >
              <Github />
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition"
            >
              <Linkedin />
              LinkedIn
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
            >
              <Mail />
              Email Me
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
