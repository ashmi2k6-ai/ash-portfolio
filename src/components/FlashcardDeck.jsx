import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { sections } from '../data/sections';
import Flashcard from './Flashcard';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const DeckContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-color: var(--dark-bg); Removed for transparency */
  overflow: visible !important;
  overflow-x: hidden !important;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: var(--white);
  font-size: 3rem;
  cursor: pointer;
  z-index: 10;
  opacity: 0.5;
  transition: opacity 0.3s;
  ${props => props.left ? 'left: 20px;' : 'right: 20px;'}

  &:hover {
    opacity: 1;
    color: var(--neon-purple);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    ${props => props.left ? 'left: 10px;' : 'right: 10px;'}
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    ${props => props.left ? 'left: 5px;' : 'right: 5px;'}
  }
`;

const FlashcardDeck = ({ initialSectionIndex = 0, onBackToHome }) => {
    const [index, setIndex] = useState(initialSectionIndex);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        setIndex(initialSectionIndex);
    }, [initialSectionIndex]);

    const paginate = (newDirection) => {
        setDirection(newDirection);
        let newIndex = index + newDirection;
        if (newIndex < 0) newIndex = sections.length - 1;
        if (newIndex >= sections.length) newIndex = 0;
        setIndex(newIndex);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') paginate(1);
            if (e.key === 'ArrowLeft') paginate(-1);
            if (e.key === 'Escape') onBackToHome();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [index, onBackToHome]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <DeckContainer>
            <NavigationButton left onClick={() => paginate(-1)}>
                <FaChevronLeft />
            </NavigationButton>

            <AnimatePresence initial={false} custom={direction} mode='wait'>
                <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                >
                    <Flashcard
                        title={sections[index].title}
                        frontContent={sections[index].frontContent}
                        backContent={sections[index].backContent}
                        isFlippable={sections[index].isFlippable !== false}
                    />
                </motion.div>
            </AnimatePresence>

            <NavigationButton right onClick={() => paginate(1)}>
                <FaChevronRight />
            </NavigationButton>

            <NavigationButton
                className="close-button"
                style={{
                    top: '40px',
                    right: '40px',
                    left: 'auto',
                    transform: 'none',
                    fontSize: '2rem',
                    background: 'rgba(0,0,0,0.5)',
                    padding: '10px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50px',
                    height: '50px',
                    border: '1px solid var(--neon-purple)'
                }}
                onClick={onBackToHome}
            >
                <FaTimes />
            </NavigationButton>

        </DeckContainer>
    );
};

export default FlashcardDeck;
