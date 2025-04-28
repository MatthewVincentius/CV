export default function Skills() {
    const skills = ["Laravel", "HTML/CSS", "Java", "PHP", "Python", "Mobile Developer", "Web Developer"];
  
    return (
      <section className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    );
  }