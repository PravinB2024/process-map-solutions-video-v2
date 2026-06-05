import React from 'react';
import {motion} from 'motion/react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {RepositoryMap} from '../visuals/Systems';

export const ConnectedEcosystem: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title="Create a standardized operational framework.">
    <div className="ecosystem">
      {[0, 1, 2, 3].map((item) => (
        <motion.div className="ecosystem-board" key={item} style={{transform: `translateY(${Math.sin(frame / 28 + item) * 10}px)`}}>
          <RepositoryMap frame={frame + item * 17} expanded />
        </motion.div>
      ))}
    </div>
  </FilmScene>
);
