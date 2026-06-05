import React from 'react';
import {motion} from 'motion/react';
import {AlertTriangle} from 'lucide-react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {LargeProcessSystem} from '../visuals/Systems';
import {ease} from '../motion';

export const Burden: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title="Managing employees to build and maintain process maps can become a major burden.">
    <motion.div style={{filter: `blur(${ease(frame, [30, duration], [0, 3])}px)`, opacity: ease(frame, [0, 20], [0, 1])}}>
      <LargeProcessSystem frame={frame} zoom={0.88} branchFocus />
    </motion.div>
    <motion.div className="burden-badge" style={{opacity: ease(frame, [42, 70], [0, 1]), transform: `rotate(-8deg) scale(${ease(frame, [42, 70], [0.88, 1])})`}}>
      <AlertTriangle size={34} />
      OUTDATED MAPS
    </motion.div>
  </FilmScene>
);
