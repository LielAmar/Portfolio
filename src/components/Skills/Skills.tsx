import Skill from "./Skill/Skill";

import styles from "./Skills.module.css";

/**
 * The Skills component
 * 
 * This component contains the skills displayed on the index (main) page of the website.
 * 
 * This component renders multiple #Skill components with an SVG icon, title, color and text describing each skill.
 */

interface props {}

const Skills: React.FC<props> = () => {
  return (
    <section id="skills" className={ styles.skills }>
      <div className={ styles.skillsWrapper }>
        
        <h2>My Skills</h2>

        <div className={ styles.skillsContainer }>
          <Skill src={ "/svgs/student.svg" } title="Student" primaryColor={ "#FF6E72" } >
            <p>
              I am a <strong>Computer Science</strong> student at The <strong>Hebrew University of Jerusalem</strong>.
              <br></br>
              <br></br>
              I have maintained a <strong>GPA</strong> of <strong>90+</strong> and excelled in all <strong>Computer Science</strong> courses.
            </p>
          </Skill>

          <Skill src={ "/svgs/code.svg" } title="Fullstack Developer" primaryColor={ "#7aff6e" } >
            <p>
              I am highly skilled in <strong>Java</strong>, <strong>Python</strong>, <strong>C</strong> and <strong>TypeScript</strong>.
              <br></br>
              <br></br>
              I am experienced in <strong>C++</strong>, <strong>C#</strong> and various <strong>Frameworks</strong> such as <strong>React</strong> and <strong>Spring Boot</strong>.
            </p>
          </Skill>

          <Skill src={ "/svgs/brush.svg" } title="Graphic Designer" primaryColor={ "#ffc56e" } >
            <p>
              I primarily work with <strong>Adobe Photoshop</strong> and <strong>Adobe Illustrator</strong>.
              <br></br>
              <br></br>
              I am familiar with <strong>Adobe Lightroom</strong> and <strong>Cinema 4D</strong>.
            </p>
          </Skill>

          <Skill src={ "/svgs/camera.svg" } title="Video Editor" primaryColor={ "#6eafff" } >
            <p>
              I mainly use <strong>Adobe Premiere</strong> and <strong>After Effects</strong> for video editing.
              <br></br>
              <br></br>
              I am also experienced with <strong>Adobe Media Encoder</strong> and <strong>Vegas Pro</strong>.
            </p>
          </Skill>
        </div>
      </div>
    </section>
  );
}

export default Skills
