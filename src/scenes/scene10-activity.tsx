import React from 'react';
import {motion} from 'motion/react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {bloom, ease} from '../motion';

export const ActivityDrilldown: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title="Move from high-level workflows to detailed operational activities.">
    <motion.div className="activity-lens" style={{transform: `scale(${ease(frame, [0, duration], [0.96, 1.1])})`}}>
      {[
        ['Workflow', 'Asset acquisition process'],
        ['Activity', 'Review diligence packet'],
        ['Task', 'Confirm required approvals'],
        ['Control', 'Document exception status'],
      ].map(([type, detail], index) => (
        <motion.div className="activity-card" key={type} style={{left: index * 58, top: index * 112, opacity: bloom(frame, 30, index * 8)}}>
          <small>{type}</small>
          <strong>{detail}</strong>
        </motion.div>
      ))}
    </motion.div>
  </FilmScene>
);
