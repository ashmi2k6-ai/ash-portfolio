import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CardInner = styled(motion.div)`
  width: 80%;
  max-width: 600px;
  height: 60vh;
  position: relative;
  transform-style: preserve-3d;

  @media (max-width: 1024px) {
    width: 85%;
    height: 65vh;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 70vh;
  }

  @media (max-width: 480px) {
    width: 95%;
    height: 75vh;
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  /* Neon Border Effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 3px; 
    background: var(--fusion-gradient); 
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
`;

const CardFront = styled(CardFace)`
  background-color: var(--dark-bg);
  color: var(--white);

  h2 {
    font-size: 4rem;
    font-weight: 800;
    text-transform: uppercase;
    background: var(--fusion-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
`;

const CardBack = styled(CardFace)`
  background-color: var(--white);
  color: var(--dark-bg);
  transform: rotateY(180deg);
  text-align: center;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: var(--fusion-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p, li {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  /* Render HTML content safely */
  div {
    width: 100%;
  }
`;

const Flashcard = ({ title, frontContent, backContent, isFlippable = true }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (!isFlippable) return;
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer
      onClick={handleFlip}
      as={motion.div}
      whileHover={!isFlippable ? { scale: 1.02 } : {}}
      animate={!isFlippable ? {
        boxShadow: ["0 0 20px rgba(189, 0, 255, 0.2)", "0 0 40px rgba(189, 0, 255, 0.4)", "0 0 20px rgba(189, 0, 255, 0.2)"]
      } : {}}
      transition={!isFlippable ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
      style={{ cursor: isFlippable ? 'pointer' : 'default' }}
    >
      <CardInner
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
      >
        <CardFront style={{ backfaceVisibility: isFlippable ? 'hidden' : 'visible', zIndex: isFlippable ? 'initial' : (isFlipped ? 0 : 2) }}>
          <h2>{frontContent}</h2>
          {!isFlippable && (
            <div
              style={{
                marginTop: '2rem',
                color: 'var(--white)',
                opacity: 0.9,
                width: '100%',
                textAlign: 'center'
              }}
              dangerouslySetInnerHTML={{ __html: backContent }}
            />
          )}
        </CardFront>
        {isFlippable && (
          <CardBack>
            <div dangerouslySetInnerHTML={{ __html: backContent }} />
          </CardBack>
        )}
      </CardInner>
    </CardContainer>
  );
};

export default Flashcard;
