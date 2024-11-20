import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        <div data-aos="zoom-in-up">
          <h2 className="skills-heading">Technologies I work with</h2>
          <p className="skills-description">
            Proficient in Next.js for creating fast, scalable web apps with server-side rendering and static generation. Experienced in React, JavaScript (ES6+), and TypeScript for developing interactive UIs. Skilled in CSS, Tailwind CSS, and responsive design, with back-end experience in Node.js and Express for efficient server-side development.
          </p>
        </div>
        <div>
          <div className="tech-list">
            <div className="tech-column">
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">Next.Js</h2>
              <h2 data-aos="zoom-in-up">JavaScript</h2>
            </div>
            <div className="tech-column">
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
            </div>
          </div>
          <div className="soft-skills">
            <h2 className="soft-skills-heading">Soft Skills</h2>
            <div className="soft-skills-grid">
              <div className="skill-card" data-aos="zoom-in-up">
                <h3 className="skill-title">Teamwork</h3>
                <p className="skill-description">
                  I thrive in collaborative environments, valuing diverse perspectives and working together to achieve common goals.
                </p>
              </div>
              <div className="skill-card" data-aos="zoom-in-up">
                <h3 className="skill-title">Problem-solving</h3>
                <p className="skill-description">
                  I approach challenges with a positive attitude, utilizing critical thinking and creativity to find effective solutions.
                </p>
              </div>
              <div className="skill-card" data-aos="zoom-in-up">
                <h3 className="skill-title">Communication</h3>
                <p className="skill-description">
                  I believe in clear and open communication, ensuring ideas and feedback are shared constructively for better collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
