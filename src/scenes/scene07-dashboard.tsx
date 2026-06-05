import React from 'react';
import {FilmScene, SceneProps} from '../visuals/Frame';
import {EnterpriseDashboard} from '../visuals/Systems';
import {ease} from '../motion';

export const DashboardReveal: React.FC<SceneProps> = ({frame, duration}) => (
  <FilmScene frame={frame} duration={duration} title="A centralized repository for operational knowledge.">
    <EnterpriseDashboard frame={frame} scale={ease(frame, [0, duration], [0.88, 1.04])} />
  </FilmScene>
);
