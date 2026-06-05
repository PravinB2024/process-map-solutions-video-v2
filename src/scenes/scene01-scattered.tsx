import React from 'react';
import {motion} from 'motion/react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {FloatingKnowledge} from '../visuals/Systems';
import {ease} from '../motion';

export const ScatteredKnowledge: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title="Process knowledge is scattered across your organization.">
    <motion.div className="scene-camera" style={{transform: `scale(${ease(frame, [0, duration], [1, 1.06])})`}}>
      <FloatingKnowledge frame={frame} />
    </motion.div>
  </FilmScene>
);
