import Skill from "./Skill/Skill";

import styles from "./Skills.module.css";

type props = {}

const Skills: React.FC<props> = () => {

  return (
    <section id="skills" className={ styles.skills }>
      <div className={ styles.skillsWrapper }>
        
        <h2>My Skills</h2>

        <div className={ styles.skillsContainer }>
          <Skill src={ "/svgs/code.svg" } title="Fullstack Developer" primaryColor={ "#a2ff99" } >
            <p>
              I am mostly skilled in <strong>Java</strong>, <strong>Python</strong>, <strong>JavaScript</strong>, <strong>NodeJS</strong>, <strong>SQL</strong> and <strong>Git</strong>.
              I have experience with <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>MongoDB</strong>, <strong>PHP</strong>, <strong>C#</strong> and <strong>Linux</strong>.
            </p>
          </Skill>

          <Skill src={ "/svgs/brush.svg" } title="Graphic Designer" primaryColor={ "#fffa99" } >
            <p>
              I primarily work with Adobe <strong>Photoshop</strong> to design logos &amp; icons and edit photos.
              I am familiar with Adobe <strong>Lightroom</strong> and <strong>Illustrator</strong>.
            </p>
          </Skill>

          <Skill src={ "/svgs/camera.svg" } title="Video Editor" primaryColor={ "#99ceff" } >
            <p>
              Adobe <strong>Premiere</strong>, <strong>After Effects</strong> and <strong>Media Encoder</strong> are the main tools I use for video editing.
              I am also experienced with <strong>Vegas Pro</strong>.
            </p>
          </Skill>
        </div>
      </div>
    </section>
  );
}

export default Skills
