import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0; 
  overflow: hidden;
  background: var(--dark-bg); /* Set base background here */
`;

const SVGContainer = styled(motion.svg)`
  position: absolute;
  overflow: visible;
  filter: drop-shadow(0 0 8px var(--neon-purple));
`;

const BranchPath = styled(motion.path)`
  fill: none;
  stroke: url(#neonGradient);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-opacity: 0.8;
`;

const Petal = styled(motion.div)`
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--fusion-gradient);
  border-radius: 50% 0 50% 0;
  top: -20px;
  filter: blur(0.5px);
  opacity: 0.8;
  box-shadow: 0 0 5px var(--neon-pink);
`;

const BackgroundEffects = () => {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const newPetals = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 10,
            duration: 8 + Math.random() * 10,
            scale: 0.5 + Math.random() * 0.8,
        }));
        setPetals(newPetals);
    }, []);

    return (
        <Container>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--neon-pink)" />
                        <stop offset="50%" stopColor="var(--neon-purple)" />
                        <stop offset="100%" stopColor="var(--neon-blue)" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Top Left Branch - Larger */}
            <SVGContainer
                width="500" height="500" viewBox="0 0 500 500"
                style={{ top: -50, left: -50 }}
                animate={{ rotate: [0, 1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <BranchPath d="M0,0 Q150,50 250,200 T400,300" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
                <BranchPath d="M150,50 Q250,150 400,100" />
                <BranchPath d="M250,200 Q300,300 250,400" />
                <BranchPath d="M100,0 Q200,100 300,50" />
            </SVGContainer>

            {/* Right Side Branch - Top to End */}
            <SVGContainer
                width="600" height="1000" viewBox="0 0 600 1000"
                style={{ top: 0, right: -50, transform: 'scaleX(-1)' }}
                animate={{ rotate: [0, -1, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
                <BranchPath d="M0,0 Q100,200 200,400 T300,800" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5 }} />
                <BranchPath d="M100,200 Q200,300 100,400" />
                <BranchPath d="M200,400 Q300,500 250,600" />
                <BranchPath d="M300,800 Q400,900 350,1000" />
                <BranchPath d="M50,100 Q150,200 50,300" />
            </SVGContainer>

            {petals.map((petal) => (
                <Petal
                    key={petal.id}
                    style={{ left: `${petal.left}%`, transform: `scale(${petal.scale})` }}
                    animate={{
                        y: ['-10vh', '110vh'],
                        rotate: [0, 360],
                        x: [0, Math.random() * 100 - 50, 0]
                    }}
                    transition={{
                        duration: petal.duration,
                        repeat: Infinity,
                        delay: petal.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </Container>
    );
};

export default BackgroundEffects;
