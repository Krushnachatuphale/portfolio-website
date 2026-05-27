import "./App.css";

export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Power BI Dashboard",
      description:
        "Interactive dashboard for business and sales analysis.",
      tech: "Power BI • Excel • Visualization",
    },
    {
      title: "Line Follower Robot",
      description:
        "Arduino robot capable of autonomous path tracking.",
      tech: "Arduino • Sensors • Embedded Systems",
    },
    {
      title: "IoT Smart Monitoring",
      description:
        "ESP32-based real-time monitoring and automation project.",
      tech: "ESP32 • IoT • C++",
    },
  ];

  const skills = [
    "Power BI",
    "Python",
    "C Programming",
    "C++",
    "Arduino",
    "Embedded Systems",
    "IoT",
    "HTML",
    "CSS",
    "JavaScript",
  ];

  return (
    <div className="container">
      <section className="hero">
        <h1>Krushna Chatuphale</h1>

        <p>
          Electronics & Telecommunication Engineering Student |
          Power BI Enthusiast | IoT Developer
        </p>
      </section>

      <section className="section">
        <h2>About Me</h2>

        <p>
          Passionate engineering student focused on Data Analytics,
          Embedded Systems, IoT, and creating practical technology solutions.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>

        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>

        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <strong>{project.tech}</strong>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Contact</h2>

        <div className="contact-box">
          <p>Email: yourmail@gmail.com</p>

          <p>
            LinkedIn:
            <a href="https://linkedin.com" target="_blank">
              {" "}
              Visit Profile
            </a>
          </p>

          <p>
            GitHub:
            <a href="https://github.com" target="_blank">
              {" "}
              Visit GitHub
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}