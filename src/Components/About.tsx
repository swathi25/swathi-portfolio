import "../styles/About.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      <div className="social-sidebar">
        <a href="mailto:swathinilambur@gmail.com" target="_blank" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/swathi25" target="_blank" title="GitHub">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/swathi-k-developer"
          target="_blank"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="about-content">
        <h2>About Me</h2>

        <p>
          Hello! I'm <strong>Swathi K</strong>, a frontend developer passionate
          about building beautiful, fast, and functional web applications.
        </p>

        <p>
          I specialize in <strong>React.js</strong>, <strong>TypeScript</strong>
          , and <strong>JavaScript</strong> — the core tools that help me turn
          creative ideas into responsive and accessible UIs.
        </p>

        <p>
          My code is structured, scalable, and always written with the end-user
          in mind. Whether I’m crafting a single-page app or managing complex UI
          states, I love solving challenges that make digital experiences feel
          effortless.
        </p>

        <div className="edu-card">
          <h3>🎓 Education</h3>
          <p>B.Tech in Computer Science</p>
          <p>TKM College of Engineering , Kerala</p>
        </div>
      </div>
    </section>
  );
};

export default About;
