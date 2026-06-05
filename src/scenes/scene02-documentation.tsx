import React from 'react';
import {motion} from 'motion/react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {FloatingKnowledge} from '../visuals/Systems';
import {ease} from '../motion';

export const DocumentationGrowth: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title={<><span>Building documentation takes time.</span><br />Keeping it current is even harder.</>}>
    <FloatingKnowledge frame={frame} dense />
    <motion.div className="documentation-stack" style={{transform: `translateY(${ease(frame, [0, duration], [40, -20])}px)`}}>
      {['Version 03', 'Version 08', 'Version 14', 'Version 22'].map((item, index) => (
        <div className="version-sheet" key={item} style={{left: index * 78, top: index * 54}}>
          <strong>{item}</strong>
          <span />
          <span />
          <span />
        </div>
      ))}
    </motion.div>
  </FilmScene>
);
