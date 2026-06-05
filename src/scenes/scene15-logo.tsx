import React from 'react';
import {Img, staticFile} from 'remotion';
import {motion} from 'motion/react';
import {SceneProps} from '../visuals/Frame';
import {ease, visibility} from '../motion';

export const FinalLogo: React.FC<SceneProps> = ({frame, duration}) => (
  <motion.div className="logo-finale" style={{opacity: visibility(frame, duration, 20, 1)}}>
    <motion.div style={{transform: `scale(${ease(frame, [0, 42], [0.92, 1])})`}}>
      <Img src={staticFile('logo.png')} />
    </motion.div>
  </motion.div>
);
