import React from 'react';
import {motion} from 'motion/react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {EnterpriseDashboard} from '../visuals/Systems';
import {ease} from '../motion';

export const HeroSystem: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} quietBrand>
    <motion.div className="hero-label" style={{transform: `translateY(${ease(frame, [0, 42], [24, 0])}px)`}}>
      <h1>Process Map Solutions</h1>
      <p>Gallagher &amp; Mohan</p>
    </motion.div>
    <EnterpriseDashboard frame={frame} scale={ease(frame, [0, duration], [0.95, 1.08])} mode="hero" />
  </FilmScene>
);
