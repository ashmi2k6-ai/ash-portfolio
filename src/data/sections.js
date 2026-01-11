export const sections = [
  {
    id: 'bio',
    title: 'Bio',
    frontContent: 'Bio',
    backContent: `
      <div>
        <h3>Hello, I'm Ashmi</h3>
        <p>I am a second-year B.Tech student specializing in <strong>Artificial Intelligence and Data Science</strong> at <em>Arunachala College of Engineering for Women</em>.</p>
        <p>While my academic focus is on AI, I have discovered a profound passion for <strong>Frontend Development</strong>. I am eager to bridge the gap between intelligent systems and beautiful, intuitive user interfaces.</p>
      </div>
    `,
  },
  {
    id: 'about',
    title: 'About Me',
    frontContent: 'About Me',
    backContent: `
      <div>
        <h3>My Journey</h3>
        <p>From a clueless student to a curious beginner.</p>
        <p>My path wasn't always clear, but with guidance from professionals and a relentless drive to learn, I've transformed my curiosity into creation. I love the process of turning ideas into interactive reality on the web.</p>
      </div>
    `,
  },
  {
    id: 'skills',
    title: 'Skills',
    frontContent: 'Skills',
    backContent: `
      <div class="skills-container">
        <h3 class="skills-title">Technical Proficiency</h3>
        <div class="skills-grid">
          <div class="skill-pill neon-blue">React+Vite</div>
          <div class="skill-pill neon-pink">HTML</div>
          <div class="skill-pill neon-purple">CSS</div>
          <div class="skill-pill neon-orange">Python</div>
        </div>
        <p class="vibecoder-note">I’m a beginner exploring vibecoding, using intuition and experimentation to create small projects.<br/>Still learning, but excited to grow through hands‑on practice and curiosity.</p>
      </div>
    `,
  },
  {
    id: 'strengths',
    title: 'Strengths',
    frontContent: 'My Strengths',
    backContent: `
      <div class="strengths-container">
        <h3 class="strengths-title">Strengths</h3>
        <div class="strengths-grid">
          <div class="strength-row-group">
            <div class="strength-card learner">
              <strong>Quick Learner</strong>
              <p>Rapidly grasping new concepts and complex technologies with ease.</p>
            </div>
            <div class="strength-card adapter">
              <strong>Quick Adapter</strong>
              <p>Seamlessly adjusting to evolving project requirements and tools.</p>
            </div>
          </div>
          <div class="strength-row-group">
            <div class="strength-card versatile">
              <strong>Versatile</strong>
              <p>Multi-talented approach to technical challenges and creative design.</p>
            </div>
            <div class="strength-card player">
              <strong>Team Player</strong>
              <p>Collaborating effectively to achieve shared goals and group success.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 'education',
    title: 'Education',
    frontContent: 'Education',
    backContent: `
      <div>
        <h3>Academic Background</h3>
        <ul style="margin-bottom: 1rem;">
          <li>
            <strong>B.Tech in AI & Data Science</strong> (Pursuing)<br/>
            <em>Arunachala College of Engineering for Women</em>
          </li>
          <li>
            <strong>HSE - 82.5%</strong> (2021 - 2024)<br/>
            <em>Ponjesly Public Matriculation Higher Secondary School</em>
          </li>
          <li>
            <strong>SSLC - 89.4%</strong> (2015 - 2020)<br/>
            <em>Ponjesly Public Matriculation Higher Secondary School</em>
          </li>
        </ul>
      </div>
    `,
  },
  {
    id: 'projects',
    title: 'Projects',
    frontContent: 'Projects',
    backContent: `
      <div>
        <h3>My Deliverables</h3>
        <ul>
          <li>
            <strong>Flashcard Portfolio:</strong><br/>
            A premium, interactive portfolio featuring 3D flip animations, neon fusion gradients, and immersive background effects built with React & Framer Motion.
          </li>
          <li>
            <strong>E-Commerce Website:</strong><br/>
            A functional online store prototype demonstrating product worldly management and modern UI/UX principles.
          </li>
        </ul>
      </div>
    `,
  },
  {
    id: 'contact',
    title: 'Contact',
    frontContent: 'Contact',
    backContent: `
      <div>
        <h3>Get In Touch</h3>
        <p>I'd love to connect and discuss opportunities.</p>
        <p><strong>Email:</strong> <a href="mailto:ashmi2k6@gmail.com" style="color: inherit; text-decoration: underline;">ashmi2k6@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/ashmi-868023342" target="_blank" style="color: inherit; text-decoration: underline;">linkedin.com/in/ashmi-868023342</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/ashmi2k6-ai" target="_blank" style="color: inherit; text-decoration: underline;">github.com/ashmi2k6-ai</a></p>
      </div>
    `,
  },
  {
    id: 'thankyou',
    title: 'Thank You',
    frontContent: 'THANK YOU',
    backContent: `
      <div style="text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1.5rem; width: 100%;">
        <p style="font-size: 1.6rem; line-height: 1.8; color: #fff; font-weight: 500; margin: 0;">Thank you for taking the time to explore my professional portfolio.</p>
        <p style="font-size: 1.2rem; color: #ccc; font-style: italic; margin: 0; max-width: 80%;">I am dedicated to continuous learning and am eager to contribute to innovative projects. I look forward to connecting with you.</p>
      </div>
    `,
    isFlippable: false,
    hideFromNav: true
  }
];
