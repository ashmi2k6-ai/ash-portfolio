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
        <p>From a clueless student to a curious builder.</p>
        <p>My path wasn't always clear, but with guidance from professionals and a relentless drive to learn, I've transformed my curiosity into creation. I love the process of turning ideas into interactive reality on the web.</p>
      </div>
    `,
  },
  {
    id: 'skills',
    title: 'Skills',
    frontContent: 'Skills',
    backContent: `
      <div style="text-align: center;">
        <h3 style="margin-bottom: 20px;">Technical Proficiency</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-top: 1rem;">
          <span style="padding: 0.8rem 1.5rem; border: 2px solid var(--neon-blue); border-radius: 12px; color: var(--neon-blue); font-weight: 600; background: rgba(0, 234, 255, 0.05);">React+Vite</span>
          <span style="padding: 0.8rem 1.5rem; border: 2px solid var(--neon-pink); border-radius: 12px; color: var(--neon-pink); font-weight: 600; background: rgba(255, 0, 255, 0.05);">HTML</span>
          <span style="padding: 0.8rem 1.5rem; border: 2px solid var(--neon-purple); border-radius: 12px; color: var(--neon-purple); font-weight: 600; background: rgba(189, 0, 255, 0.05);">CSS</span>
          <span style="padding: 0.8rem 1.5rem; border: 2px solid var(--neon-orange); border-radius: 12px; color: var(--neon-orange); font-weight: 600; background: rgba(255, 140, 0, 0.05);">Python</span>
        </div>
      </div>
    `,
  },
  {
    id: 'strengths',
    title: 'My Strengths',
    frontContent: 'My Strengths',
    backContent: `
      <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 25px; box-sizing: border-box;">
        <h3 style="text-align: center; margin-bottom: 20px; color: var(--dark-bg); font-weight: 800; font-size: 2.2rem; letter-spacing: 2px;">MY STRENGTHS</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 20px; flex-grow: 1;">
          <div style="background: rgba(255, 0, 255, 0.08); border: 4px solid #ff00ff; padding: 20px; border-radius: 15px; text-align: center; display: flex; flex-direction: column; justify-content: center; box-shadow: 0 4px 15px rgba(255, 0, 255, 0.1);">
            <strong style="color: #330033; display: block; font-size: 1.2rem; margin-bottom: 8px;">Quick Learner</strong>
            <p style="font-size: 0.9rem; color: #440044; margin: 0; line-height: 1.4; font-weight: 500;">Rapidly grasping new concepts and modern technologies with ease.</p>
          </div>
          <div style="background: rgba(0, 234, 255, 0.08); border: 4px solid #00eaff; padding: 20px; border-radius: 15px; text-align: center; display: flex; flex-direction: column; justify-content: center; box-shadow: 0 4px 15px rgba(0, 234, 255, 0.1);">
            <strong style="color: #003333; display: block; font-size: 1.2rem; margin-bottom: 8px;">Quick Adapter</strong>
            <p style="font-size: 0.9rem; color: #004444; margin: 0; line-height: 1.4; font-weight: 500;">Efficiently adjusting to evolving project needs and workflows.</p>
          </div>
          <div style="background: rgba(189, 0, 255, 0.08); border: 4px solid #bd00ff; padding: 20px; border-radius: 15px; text-align: center; display: flex; flex-direction: column; justify-content: center; box-shadow: 0 4px 15px rgba(189, 0, 255, 0.1);">
            <strong style="color: #1a0033; display: block; font-size: 1.2rem; margin-bottom: 8px;">Versatile</strong>
            <p style="font-size: 0.9rem; color: #220044; margin: 0; line-height: 1.4; font-weight: 500;">Highly capable across multiple tools and development environments.</p>
          </div>
          <div style="background: rgba(255, 140, 0, 0.08); border: 4px solid #ff8c00; padding: 20px; border-radius: 15px; text-align: center; display: flex; flex-direction: column; justify-content: center; box-shadow: 0 4px 15px rgba(255, 140, 0, 0.1);">
            <strong style="color: #331a00; display: block; font-size: 1.2rem; margin-bottom: 8px;">Team Player</strong>
            <p style="font-size: 0.9rem; color: #442200; margin: 0; line-height: 1.4; font-weight: 500;">Collaborating seamlessly to deliver high-quality collective results.</p>
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
        <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:ashmi2k6@gmail.com" style="color: inherit; text-decoration: underline;">ashmi2k6@gmail.com</a></p>
        <p style="margin: 10px 0;"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/ashmi-868023342" target="_blank" style="color: inherit; text-decoration: underline;">linkedin.com/in/ashmi-868023342</a></p>
        <p style="margin: 10px 0;"><strong>GitHub:</strong> <a href="https://github.com/ashmi2k6-ai" target="_blank" style="color: inherit; text-decoration: underline;">github.com/ashmi2k6-ai</a></p>
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
    isStatic: true,
    hideFromNav: true
  }
];
