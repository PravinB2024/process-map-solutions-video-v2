import React from 'react';
import {motion} from 'motion/react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {LargeProcessSystem} from '../visuals/Systems';
import {ease} from '../motion';

export const ProcessFlythrough: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title="Understand how work flows throughout your organization.">
    <motion.div className="flythrough-layer" style={{transform: `scale(${ease(frame, [0, duration], [0.84, 1.34])})`}}>
      <LargeProcessSystem frame={frame} zoom={1.02} />
    </motion.div>
  </FilmScene>
);
