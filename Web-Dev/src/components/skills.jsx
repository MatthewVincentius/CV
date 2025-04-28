export default function Skills() {
    const skills = ["• Laravel", "• HTML/CSS", "• Java", "• PHP", "• Python", "• Mobile Developer", "• Web Developer"];
  
    return (
      <section className="mb-9 ml-8 section">
        <h2 class="text-2xl">Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    );
  }