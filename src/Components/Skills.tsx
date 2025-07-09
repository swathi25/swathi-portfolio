import "../styles/Skills.css";

const skills = [
  "React.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Redux",
  "SCSS",
  "Material UI",
  "REST APIs",
  "Git",
  "Java",
  "Jira",
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
