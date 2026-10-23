import "./App.css";
import profilePhoto from "./assets/profile.jpg";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Java",
  "Python",
  "C#",
  "SQL",
  "MongoDB",
  "GraphQL",
  "REST APIs",
  "Postman",
  "Git & GitHub",
];

const projects = [
  {
    title: "COMP308 - Lab 3",
    description:
      "A collaborative software development lab completed for COMP308.",
    technologies: ["Academic Project", "Teamwork"],
    github: "https://github.com/Brunozace/Group1_Bruno_Alex_COMP308Lab3",
  },
  {
    title: "Canada Rental",
    description:
      "A rental property application featuring property listings, search functionality, and different user roles.",
    technologies: ["Web Development", "Database", "APIs"],
    github: "https://github.com/CanadaRental/Canada-Rental",
  },
  {
    title: "Toronto Real Estate Price Estimator",
    description:
      "A collaborative project focused on estimating Toronto real estate prices.",
    technologies: ["Real Estate", "Academic Project"],
    github: "https://github.com/romashos/toronto-real-estate-price-estimator",
  },
  {
    title: "Northstar Museum",
    description:
      "A museum-themed software project developed through team collaboration.",
    technologies: ["Web Development", "Team Project"],
    github: "https://github.com/NorthstarMuseum/northstar-museum",
  },
  {
    title: "Lab 5",
    description:
      "A programming lab completed as part of my software engineering coursework.",
    technologies: ["Programming", "Academic Lab"],
    github: "https://github.com/yeyulpro/lab5",
  },
  {
    title: "Shared Place Backend",
    description:
      "A backend application project focused on server-side development.",
    technologies: ["Backend", "Server Development"],
    github: "https://github.com/alxndramrie/shared-place-backend-main",
  },
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          AP<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Alexandra Pineda</h1>
            <h2>Aspiring Web Developer</h2>

            <p className="hero-description">
              I'm a Software Engineering Technology student at Centennial
              College who enjoys creating websites, working with databases, and
              connecting frontend applications to backend services.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects
              </a>
              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={profilePhoto} alt="Alexandra Pineda" />
          </div>
        </section>

        <section className="content-section" id="about">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About Me</h2>
          <p className="section-description">
            I'm currently completing my Software Engineering Technology advanced
            diploma at Centennial College, with an expected graduation in
            December 2026. Through my school projects, I've gained experience
            developing web applications, connecting databases, and working with
            APIs.
          </p>
          <p className="section-description">
            I consider myself a dependable, organized, and quick learner who
            enjoys problem-solving and working with others. I'm excited to
            continue developing my skills and pursuing opportunities in web
            development.
          </p>
        </section>

        <section className="content-section" id="skills">
          <p className="section-label">WHAT I WORK WITH</p>
          <h2>Technical Skills</h2>

          <div className="skills">
            {skills.map((skill) => (
              <span className="skill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <p className="section-label">MY WORK</p>
          <h2>Featured Projects</h2>

          <p className="section-description">
            Here are some of the projects I've worked on during my Software
            Engineering Technology program. These include individual assignments
            and collaborative projects involving web development, databases, and
            software engineering.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-symbol">&lt;/&gt;</div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="contact">
          <p className="section-label">LET'S CONNECT</p>
          <h2>Get In Touch</h2>
          <p className="section-description">
            I'm interested in opportunities where I can apply my technical
            skills, learn from experienced developers, and contribute to
            meaningful projects.
          </p>

          <div className="contact-links">
            <a
              className="primary-button"
              href="mailto:alexandrapineda47@gmail.com"
            >
              Email Me
            </a>

            <a
              className="secondary-button"
              href="https://www.linkedin.com/in/alexandra-pineda-952749218/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Alexandra Pineda</p>
        <p>Built with React</p>
      </footer>
    </div>
  );
}

export default App;
