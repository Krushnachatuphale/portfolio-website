export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Power BI Dashboard",
      description:
        "Interactive dashboard built using Power BI for sales and business analysis.",
      tech: "Power BI, Excel, Data Visualization",
    },
    {
      title: "Line Follower Robot",
      description:
        "Arduino-based robot capable of detecting and following a path automatically.",
      tech: "Arduino, Embedded Systems, Sensors",
    },
    {
      title: "IoT Smart Monitoring",
      description:
        "IoT project using ESP32 for real-time monitoring and automation.",
      tech: "ESP32, IoT, C++",
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
    <div style={{ fontFamily: "Arial", padding: "30px" }}>
      <h1 style={{ fontSize: "45px" }}>Krushna Chatuphale</h1>

      <p style={{ fontSize: "20px" }}>
        Electronics & Telecommunication Engineering Student passionate about
        Data Analytics, IoT, Embedded Systems, and building practical tech
        solutions.
      </p>

      <hr />

      <h2>About Me</h2>

      <p>
        I am an engineering student focused on developing real-world technical
        skills in electronics, programming, IoT, and data analytics.
      </p>

      <hr />

      <h2>Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <hr />

      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <strong>{project.tech}</strong>
        </div>
      ))}

      <hr />

      <h2>Contact</h2>

      <p>Email: krushnachatuphale@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/krushnachatuphale</p>
      <p>GitHub: github.com/krushnachatuphale</p>
    </div>
  );
}