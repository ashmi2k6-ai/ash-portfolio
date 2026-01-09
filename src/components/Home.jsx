import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { sections } from '../data/sections';

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: var(--dark-bg); Removed to show background effects */
  position: relative;
  z-index: 10;
`;

const Greeting = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 1rem;
  span {
    font-weight: 800;
    background: var(--fusion-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(var(--dark-bg), var(--dark-bg)) padding-box,
              var(--fusion-gradient) border-box;
  border: 4px solid transparent;
  margin-bottom: 2rem;
  background-image: url('https://via.placeholder.com/150'); /* Replace with actual image logic or passed prop */
  background-size: cover;
  background-position: center;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavItem = styled(motion.a)`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  /* Hover underline effect */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--fusion-gradient);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: var(--neon-pink); /* Fallback or specific color */
    background: var(--fusion-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Home = ({ onNavigate }) => {
  return (
    <HomeContainer>
      <ProfileImage />
      <Greeting>
        Hello, I'm <span>Ashmi</span>
      </Greeting>
      <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>AI&DS student at ACEW</p>

      <NavBar>
        {sections.filter(s => !s.hideFromNav).map((section, index) => (
          <NavItem
            key={section.id}
            onClick={() => onNavigate(sections.indexOf(section))}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.title}
          </NavItem>
        ))}
      </NavBar>
    </HomeContainer>
  );
};

export default Home;
